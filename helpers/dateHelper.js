import moment from 'moment'
import { checkDatesForMiddayAndMidnightStrings } from 'localization/translations'
import { LANGUAGE_CODES, DATE_TIME_FORMATS } from 'constants/index'

export const getFormattedDateTime = (dateTime, textLang = LANGUAGE_CODES.en) => {
    checkDatesForMiddayAndMidnightStrings.setLanguage(
        textLang === LANGUAGE_CODES.cy ? LANGUAGE_CODES.cy : LANGUAGE_CODES.en
    )
    const formatted = moment(dateTime).format(DATE_TIME_FORMATS.longDate)

    return (
        (textLang === LANGUAGE_CODES.cy ? welshConvertDate(formatted) : formatted) +
        checkDatesForMiddayAndMidnightStrings.at +
        checkDatesForMiddayAndMidnight(moment(dateTime).format(DATE_TIME_FORMATS.time))
    )
}

export const getFormattedDateTimeEuropeLondon = (dateTime, textLang = LANGUAGE_CODES.en) => {
    var momentTz = require('moment-timezone')
    var format = 'YYYY/MM/DD HH:mm:ss'

    return getFormattedDateTime(momentTz.utc(dateTime).tz('Europe/London').format(format), textLang)
}

export const getFormattedDateTimeEuropeLondonNoHours = (dateTime, textLang = LANGUAGE_CODES.en) => {
    var momentTz = require('moment-timezone')
    const formatted = momentTz.tz(dateTime, 'Europe/London').format(DATE_TIME_FORMATS.longDate)

    return textLang === LANGUAGE_CODES.cy ? welshConvertDate(formatted) : formatted
}

export const timeCheck = (time) => {
    const timeSplit = time.slice(0, -2).split('.')
    const timeAMPM = time.slice(-2)
    if (timeSplit[1] == '00') {
        return timeSplit[0] + timeAMPM
    } else {
        return time
    }
}

export const checkDatesForMiddayAndMidnight = (date, textLang = LANGUAGE_CODES.en) => {
    checkDatesForMiddayAndMidnightStrings.setLanguage(
        textLang === LANGUAGE_CODES.cy ? LANGUAGE_CODES.cy : LANGUAGE_CODES.en
    )

    switch (date) {
        case '12.00pm':
            return checkDatesForMiddayAndMidnightStrings.midday
        case '12.00am':
            return checkDatesForMiddayAndMidnightStrings.midnight
        default:
            return timeCheck(date)
    }
}

export const welshConvertDate = (date) => {
    var cyDate

    var enArr = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    )

    var cyArr = new Array(
        'Ionawr',
        'Chwefror',
        'Mawrth',
        'Ebrill',
        'Mai',
        'Mehefin',
        'Gorffennaf',
        'Awst',
        'Medi',
        'Hydref',
        'Tachwedd',
        'Rhagfyr'
    )

    for (var i = 0; i < enArr.length; i++) {
        if (date.includes(enArr[i])) {
            cyDate = date.replace(enArr[i], cyArr[i])
        }
    }

    return cyDate
}
