import React from 'react'
import { trackEvent } from 'helpers/appInsights'
import { useSelector } from 'react-redux'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import PropTypes from 'prop-types'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import useEndUserSession from 'hooks/useEndUserSession'

const LogoutButton = ({ disabled }) => {
    const { endSession } = useEndUserSession()

    const user = useSelector((state) => state.userReducer.user)

    button.setLanguage(getLanguage(user))

    const handleClick = () => {
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            endSession()

            trackEvent('End Session - Button Click')
        }
    }

    return (
        <div>
            <button
                className="nhsuk-button nhsuk-button--secondary logout-button"
                type="submit"
                onClick={handleClick}
                disabled={disabled}>
                {button.endSession}
            </button>
        </div>
    )
}

LogoutButton.propTypes = {
    disabled: PropTypes.bool
}

export default LogoutButton
