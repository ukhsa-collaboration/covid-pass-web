import PropTypes from 'prop-types'
import { LANGUAGE_TOGGLE } from 'actions/types'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { ERROR_500, SESSION_EXPIRED, TIMEOUT_ERROR } from 'constants/routes'
import { getLanguage } from 'helpers/userHelper'
import { headerStrings } from 'localization/translations'
import { updateLanguageCode } from 'actions/userActions'
import { getUserToken, getUserTokenId } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY, LANGUAGE_CODES } from 'constants/index'
import nhsStatusCodes from 'api/nhsStatusCodes'
import useEndUserSession from 'hooks/useEndUserSession'

const LanguageSelection = ({ isMenuActive }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { routeThenEndSession } = useEndUserSession()

    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    headerStrings.setLanguage(getLanguage(user))

    const handleLanguageClick = async () => {
        const setNewLanguage =
            getLanguage(user) === LANGUAGE_CODES.en ? LANGUAGE_CODES.cy : LANGUAGE_CODES.en
        try {
            const res = await dispatch(
                updateLanguageCode(getUserToken(cookies), getUserTokenId(cookies), setNewLanguage)
            )
            if (res.status === nhsStatusCodes.Success) {
                dispatch({
                    type: LANGUAGE_TOGGLE,
                    payload: setNewLanguage
                })
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
                case nhsStatusCodes.wafErrorError:
                default:
                    routeThenEndSession(ERROR_500)
                    break
            }
        }
    }

    return (
        <button
            onClick={handleLanguageClick}
            className="nhsuk-header__menu-toggle"
            id="toggle-language"
            aria-controls={headerStrings.translate.ariaControls}
            aria-label={headerStrings.translate.ariaLabel}
            tabIndex={isMenuActive ? '-1' : null}>
            {headerStrings.translate.text}
        </button>
    )
}

LanguageSelection.propTypes = {
    isMenuActive: PropTypes.bool.isRequired
}

export default LanguageSelection
