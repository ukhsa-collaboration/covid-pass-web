import moment from 'moment'
import { welshConvertDate } from 'helpers/dateHelper'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { LANGUAGE_CODES } from 'constants/index'

export const getIdentityProofingLevel = (user) => {
    return user ? user.identityProofingLevel : null
}

export const considerGracePeriod = (user) => {
    return user.userConfiguration?.policies?.gracePeriod ? true : false
}

export const isActiveGracePeriod = (user) => {
    return (
        user.userConfiguration?.policies?.gracePeriod?.isAllowed &&
        (user.userConfiguration?.policies?.gracePeriod?.timeLeft !== '0:00:00' ||
            user.userConfiguration?.policies?.gracePeriod?.isActive !== false)
    )
}

export const hasDomesticAccess = (user) => {
    return user.userConfiguration?.policies?.domesticAccessLevel.toLowerCase() === 'access'
}

export const getName = (user) => {
    return (
        user && capitalizeName(user.lastName === '' ? user.name : user.name + ' ' + user.lastName)
    )
}

export const getDateFormattedDOB = (user, textLang = LANGUAGE_CODES.en) => {
    if (!user) return
    if (!user.dateOfBirth) return

    const formatted = moment.utc(user.dateOfBirth).format('D MMMM YYYY')
    return textLang === LANGUAGE_CODES.cy ? welshConvertDate(formatted) : formatted
}

export const getDestination = (user) => {
    return (
        user &&
        (user.email
            ? user.destination.value
            : user.destination.countryCode + ' ' + user.destination.value)
    )
}

export const getLanguage = (user) => {
    if (isNhsAppNative()) return LANGUAGE_CODES.en

    return user.userConfiguration &&
        user.userConfiguration.preferences &&
        user.userConfiguration.preferences.languagePreference
        ? user.userConfiguration.preferences.languagePreference
        : LANGUAGE_CODES.en
}

export const getUserUuid = (user) => {
    return user?.uuid
}

export const capitalizeName = (name) => {
    if (name.length === 0) {
        return null
    }

    const names = name.split(' ')

    const nameInitial = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].length !== 0) nameInitial.push(names[i][0].toUpperCase() + names[i].substr(1))
    }

    const fullName = nameInitial.join(' ')

    return fullName
}

export const checkValidUserDetails = (user) => {
    return !(
        user.name === '' ||
        user.lastName === '' ||
        user.destination.value === '' ||
        !user.dateOfBirth
    )
}
