import React from 'react'
import { trackEvent } from 'helpers/appInsights'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ALL_REDUX } from 'actions/types'
import { gotoHomepage, isNhsAppNative } from 'helpers/isNhsApp'
import { removeUserCookie } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import PropTypes from 'prop-types'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'

const LogoutButton = ({ disabled }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    button.setLanguage(getLanguage(user))

    const handleClick = () => {
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            dispatch({ type: REMOVE_ALL_REDUX })
            removeUserCookie(setCookie)

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
