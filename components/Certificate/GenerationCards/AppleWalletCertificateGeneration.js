import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trackEvent, trackError } from 'helpers/appInsights'
import nhsStatusCodes from 'api/nhsStatusCodes'
import AppleWalletButton from 'components/buttons/AppleWalletButton'
import { walletPassIos } from 'actions/userActions'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { useRouter } from 'next/router'
import { showAppleWallet } from 'helpers/walletHelper'
import { isNhsAppNative, nhsAppDownloadFromBytes } from 'helpers/isNhsApp'
import { checkCacheUnixTime, uuidCookieReduxNotMatching } from 'helpers/auth'
import { getUserToken, getUserTokenId, getUserTokenIdUnixExpiry } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import PropTypes from 'prop-types'
import { getLanguage } from 'helpers/userHelper'
import { certificateTypeToText } from 'helpers/certificateHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const AppleWalletCertificateGeneration = ({ QRType, DoseNumber = null }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { routeThenEndSession, mismatchedUuidEndSession } = useEndUserSession()

    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)

    const fetchIosWalletCertificate = async () => {
        trackEvent('Certificate - iOS Wallet Button Click')

        if (uuidCookieReduxNotMatching(cookies, user)) {
            mismatchedUuidEndSession()
            return
        }

        if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
            trackEvent(
                `Trying to call iOS Wallet API: QRType: ${QRType}, DoseNumber: ${
                    DoseNumber !== null ? DoseNumber : '-'
                }`
            )
            try {
                const res = await dispatch(
                    walletPassIos(
                        getUserToken(cookies),
                        getUserTokenId(cookies),
                        QRType,
                        DoseNumber,
                        getLanguage(user)
                    )
                )
                if (res.status === nhsStatusCodes.Success) {
                    downloadIosWallet(res.data)
                }
            } catch (err) {
                switch (err?.response?.status) {
                    case nhsStatusCodes.AuthTokenIncorrect:
                        routeThenEndSession(SESSION_EXPIRED)
                        break
                    case nhsStatusCodes.RequestTimeout:
                        router.push(TIMEOUT_ERROR)
                        break
                    case nhsStatusCodes.WrongRequest:
                    case nhsStatusCodes.ServerError:
                    default:
                        routeThenEndSession(ERROR_500)
                        break
                }

                trackError('API - iOS Wallet', err)
            }
        } else {
            routeThenEndSession(SESSION_EXPIRED)
            trackEvent('iOS Wallet - Id token session expired')
        }
    }

    const downloadIosWallet = (data) => {
        const filename = 'Covid-19_Certificate.pkpass'
        const blob = new Blob([data], {
            type: 'application/vnd.apple.pkpass'
        })

        if (isNhsAppNative()) {
            downloadNhsAppWallet(blob, filename)
        } else {
            let htmlLink = document.createElement('a')
            htmlLink.href = (window.URL || window.webkitURL).createObjectURL(blob)
            htmlLink.download = filename
            htmlLink.click()
        }

        if (QRType === 0) {
            trackEvent(
                `Certificate - Apple Wallet - Domestic ${certificateTypeToText(
                    userApiCache.certificate.domestic.certificateType
                )}`
            )
        }
    }

    const downloadNhsAppWallet = async (blob, fileName) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
            const base64data = reader.result
            nhsAppDownloadFromBytes(base64data, fileName, 'application/vnd.apple.pkpass')
        }
    }

    return showAppleWallet() ? (
        <div className="button-row">
            <AppleWalletButton onClick={fetchIosWalletCertificate} />
        </div>
    ) : null
}

AppleWalletCertificateGeneration.propTypes = {
    QRType: PropTypes.number.isRequired,
    DoseNumber: PropTypes.number
}

export default AppleWalletCertificateGeneration
