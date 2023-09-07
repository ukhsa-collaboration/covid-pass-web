import API from 'api/api'
import { getSSOUrl } from 'helpers/auth'
import nhsStatusCodes from '../api/nhsStatusCodes'

/*
 * Authenticate Endpoints
 */
export const validateNHSCode = (code, redirectUri) => async () => {
    return API()
        .post('/auth/Token?code=' + code + '&redirectUri=' + redirectUri)
        .catch((error) => {
            handleError(error)
        })
}

export const ssoLogin = (assertedLoginIdentity, redirectUri) => async () => {
    const url = getSSOUrl(assertedLoginIdentity, redirectUri)
    return API()
        .get(url)
        .catch((error) => {
            handleError(error)
        })
}

export const reauthenticate = (refreshToken) => async () => {
    return API()
        .post('/auth/Token/Refresh', null, {
            headers: {
                refreshToken: refreshToken
            }
        })
        .catch((error) => {
            handleError(error)
        })
}

export const FetchAssertedLoginIdentity = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/auth/FetchAssertedLoginIdentity')
        .catch((error) => {
            handleError(error)
        })
}

/*
 * User Preferences Endpoints
 */

export const getUserConfiguration = (token, tokenId) => async () => {
    const res = await API(token, tokenId)
        .get('/auth/UserConfiguration')
        .catch((error) => {
            handleError(error)
        })

    if (res?.data?.userInfo?.given_name)
        res.data.userInfo.given_name = res.data.userInfo.given_name.trim()

    if (res?.data?.userInfo?.family_name)
        res.data.userInfo.family_name = res.data.userInfo.family_name.trim()

    return res
}

export const updateTCAcceptance = (token, tokenId) => async () => {
    return API(token, tokenId)
        .post('/auth/UpdateTCAcceptance')
        .catch((error) => {
            handleError(error)
        })
}

export const updateLanguageCode = (token, tokenId, languageCode) => async () => {
    return API(token, tokenId)
        .post('/auth/UpdateLanguageCode', null, {
            headers: {
                LanguageCode: languageCode
            }
        })
        .catch((error) => {
            handleError(error)
        })
}

/*
 * Domestic Scenarios Endpoints
 */
export const getCertificate = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetCertificate')
        .catch((error) => {
            handleError(error)
        })
}

export const sendCertificate = (token, tokenId, email, language) => async () => {
    return API(token, tokenId)
        .post(
            '/SendCertificate',
            {
                Email: email
            },
            {
                headers: {
                    'Content-Language': language
                }
            }
        )
        .catch((error) => {
            handleError(error)
        })
}

export const pdfDirectDownload = (token, tokenId, language) => async () => {
    return API(token, tokenId)
        .get('/PdfDirectDownload', {
            responseType: 'arraybuffer',
            headers: {
                Accept: 'application/pdf',
                'Content-Language': language
            }
        })
        .catch((error) => {
            handleError(error)
        })
}

/*
 * International Scenarios Endpoints
 */
export const getInternationalQR = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/international/GetInternationalQR')
        .catch((error) => {
            handleError(error)
        })
}

export const GetInternationalPDF = (token, tokenId, language) => async () => {
    return API(token, tokenId)
        .get('/international/GetInternationalPDF', {
            responseType: 'arraybuffer',
            headers: {
                Accept: 'application/pdf',
                'Content-Language': language
            }
        })
        .catch((error) => {
            handleError(error)
        })
}

export const sendInternationalEmail = (token, tokenId, email, language) => async () => {
    return API(token, tokenId)
        .post(
            '/international/SendInternationalEmail',
            {
                Email: email
            },
            {
                headers: {
                    'Content-Language': language
                }
            }
        )
        .catch((error) => {
            handleError(error)
        })
}

/*
 * Records Endpoints
 */
export const getTestResults = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetTestResults', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .catch((error) => {
            handleError(error)
        })
}

export const getMedicalExemptions = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetMedicalExemptions', {
            headers: { Authorization: 'Bearer ' + token }
        })
        .catch((error) => {
            handleError(error)
        })
}

export const getVaccinationResults = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetVaccinationResults')
        .catch((error) => {
            handleError(error)
        })
}

/*
 * Feature toggle endpoints
 */
export const GetWalletTypes = (token, tokenId, device) => async () => {
    return API(token, tokenId)
        .get('/GetWalletTypes', { headers: { Device: device } })
        .catch((error) => {
            handleError(error)
        })
}

export const getPdfDownloadToggles = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetPdfDownloadToggles')
        .catch((error) => {
            handleError(error)
        })
}

export const getDomesticEndpointStatusToggle = (token, tokenId) => async () => {
    return API(token, tokenId)
        .get('/GetDomesticEndpointStatus')
        .catch((error) => {
            handleError(error)
        })
}

/*
    * Wallet Pass endpoints

        QRType enum meanings
        0- Domestic 
        1- Vaccination Based International
            If vaccination based a 'DoseNumber' header is required, which dictates which vaccine dose is displayed
            **NOTE** - this is based on the index value of the mapping loop. For example, dose number 1 will pass through an index of 0
        2- Recovery Based International  
*/
export const walletPassIos = (token, tokenId, QRType, DoseNumber, language) => async () => {
    return API(token, tokenId)
        .get('/walletPassIos', {
            responseType: 'arraybuffer',

            headers:
                QRType === 1 && DoseNumber !== null
                    ? {
                          // matches for international travel
                          'Content-Type': 'application/vnd.apple.pkpass',
                          QRType: QRType,
                          DoseNumber: DoseNumber,
                          Language: language
                      }
                    : {
                          // domestic and recovery
                          'Content-Type': 'application/vnd.apple.pkpass',
                          QRType: QRType,
                          Language: language
                      }
        })
        .catch((error) => {
            handleError(error)
        })
}

export const walletPassGoogle = (token, tokenId, QRType, DoseNumber, language) => async () => {
    return API(token, tokenId)
        .get('/walletPassGoogle', {
            headers:
                QRType === 1 && DoseNumber !== null
                    ? {
                          // matches for international travel
                          QRType: QRType,
                          DoseNumber: DoseNumber,
                          Language: language
                      }
                    : {
                          // domestic and recovery
                          QRType: QRType,
                          Language: language
                      }
        })
        .catch((error) => {
            handleError(error)
        })
}

const handleError = (error) => {
    if (error.code === 'ECONNABORTED') {
        const customError = new Error('Request timed out')
        customError.response = { status: nhsStatusCodes.RequestTimeout }
        throw customError
    } else {
        throw error
    }
}
