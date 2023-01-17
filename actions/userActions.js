import API from 'api/api'
import { getSSOUrl } from 'helpers/auth'
import nhsStatusCodes from '../api/nhsStatusCodes'

/*
 * Authenticate Endpoints
 */
export const validateNHSCode = (code, redirectUri) => async () => {
    const res = await API().post('/auth/Token?code=' + code + '&redirectUri=' + redirectUri)
    return res
}

export const ssoLogin = (assertedLoginIdentity, redirectUri) => async () => {
    const url = getSSOUrl(assertedLoginIdentity, redirectUri)
    const res = await API().get(url)
    return res
}

export const reauthenticate = (refreshToken) => async () => {
    const res = await API().post('/auth/Token/Refresh', null, {
        headers: {
            refreshToken: refreshToken
        }
    })
    return res
}

export const FetchAssertedLoginIdentity = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/auth/FetchAssertedLoginIdentity')

    return res
}

/*
 * User Preferences Endpoints
 */

export const getUserConfiguration = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/auth/UserConfiguration')

    if (res?.data?.userInfo?.given_name)
        res.data.userInfo.given_name = res.data.userInfo.given_name.trim()

    if (res?.data?.userInfo?.family_name)
        res.data.userInfo.family_name = res.data.userInfo.family_name.trim()

    return res
}

export const updateTCAcceptance = (token, tokenId) => async () => {
    const res = await API(token, tokenId).post('/auth/UpdateTCAcceptance')

    return res
}

export const updateLanguageCode = (token, tokenId, languageCode) => async () => {
    const res = await API(token, tokenId).post('/auth/UpdateLanguageCode', null, {
        headers: {
            LanguageCode: languageCode
        }
    })

    return res
}

/*
 * Domestic Scenarios Endpoints
 */
export const getCertificate = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/GetCertificate')

    return res
}

export const sendCertificate = (token, tokenId, email, language) => async () => {
    const res = await API(token, tokenId).post(
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

    return res
}

export const pdfDirectDownload = (token, tokenId, language) => async () => {
    const res = await API(token, tokenId).get('/PdfDirectDownload', {
        responseType: 'arraybuffer',
        headers: {
            Accept: 'application/pdf',
            'Content-Language': language
        }
    })

    return res
}

/*
 * International Scenarios Endpoints
 */
export const getInternationalQR = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/international/GetInternationalQR')

    return res
}

export const GetInternationalPDF = (token, tokenId, language) => async () => {
    const res = await API(token, tokenId).get('/international/GetInternationalPDF', {
        responseType: 'arraybuffer',
        headers: {
            Accept: 'application/pdf',
            'Content-Language': language
        }
    })

    return res
}

export const sendInternationalEmail = (token, tokenId, email, language) => async () => {
    const res = await API(token, tokenId).post(
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

    return res
}

/*
 * Records Endpoints
 */
export const getTestResults = (token, tokenId) => async () => {
    const res = await API(token, tokenId)
        .get('/GetTestResults', { headers: { Authorization: 'Bearer ' + token }, timeout: 60000 })
        .catch((error) => {
            if (error.code === 'ECONNABORTED') {
                throw { response: { status: nhsStatusCodes.RequestTimeout } }
            } else {
                throw error
            }
        })
    return res
}

export const getMedicalExemptions = (token, tokenId) => async () => {
    const res = await API(token, tokenId)
        .get('/GetMedicalExemptions', {
            headers: { Authorization: 'Bearer ' + token },
            timeout: 60000
        })
        .catch((error) => {
            if (error.code === 'ECONNABORTED') {
                throw { response: { status: nhsStatusCodes.RequestTimeout } }
            } else {
                throw error
            }
        })

    return res
}

export const getVaccinationResults = (token, tokenId) => async () => {
    const res = await API(token, tokenId)
        .get('/GetVaccinationResults', { timeout: 60000 })
        .catch((error) => {
            if (error.code === 'ECONNABORTED') {
                throw { response: { status: nhsStatusCodes.RequestTimeout } }
            } else {
                throw error
            }
        })
    return res
}

/*
 * Feature toggle endpoints
 */
export const GetWalletTypes = (token, tokenId, device) => async () => {
    const res = await API(token, tokenId).get('/GetWalletTypes', { headers: { Device: device } })

    return res
}

export const getPdfDownloadToggles = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/GetPdfDownloadToggles')

    return res
}

export const getDomesticEndpointStatusToggle = (token, tokenId) => async () => {
    const res = await API(token, tokenId).get('/GetDomesticEndpointStatus')

    return res
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
    const res = await API(token, tokenId).get('/walletPassIos', {
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

    return res
}

export const walletPassGoogle = (token, tokenId, QRType, DoseNumber, language) => async () => {
    const res = await API(token, tokenId).get('/walletPassGoogle', {
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

    return res
}
