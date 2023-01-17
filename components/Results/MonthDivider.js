import React from 'react'
import PropTypes from 'prop-types'
import { recordsPageStrings } from 'localization/translations'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'

const MonthDivider = ({ sortDate }) => {
    const user = useSelector((state) => state.userReducer.user)
    recordsPageStrings.setLanguage(getLanguage(user))

    return (
        <div className="month-divider">
            {recordsPageStrings.monthNames[sortDate.getMonth()]} {sortDate.getFullYear()}
        </div>
    )
}

MonthDivider.propTypes = {
    sortDate: PropTypes.object.isRequired
}

export default MonthDivider
