import { emailPhoneInputPageStrings } from 'localization/translations'
import moment from 'moment'
moment().utc().format()

export const ageIsValid = (dateOfBirth) => {
    return moment().diff(dateOfBirth, 'years') >= 12
}

export const emailValid = (email) => {
    const emailName = email.split('@')
    if (email.length > 0 && email.length < 255 && emailName[0].length <= 64) {
        const regex =
            /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
        if (regex.test(String(email).toLowerCase())) {
            return { status: true }
        } else {
            return {
                status: false,
                msg: emailPhoneInputPageStrings.errorMessage1
            }
        }
    } else {
        return {
            status: false,
            msg: emailPhoneInputPageStrings.errorMessage2
        }
    }
}

export const expectedDataForGetCertificate = (data) => {
    if (!data) {
        return false
    }

    if (!data.certificate) {
        return false
    }

    if (
        data.certificate.validityEndDate &&
        data.certificate.qrCodeTokens &&
        /*  This is needed due to certificate Type '0' being a valid type but that within javascript it's a falsy value 
            (https://developer.mozilla.org/en-US/docs/Glossary/Falsy) meaning the function returns false when the user 
            has a valid certificate
        */
        typeof data.certificate.certificateType === 'number'
    ) {
        return true
    }

    return false
}
