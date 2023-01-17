import React from 'react'
import PropTypes from 'prop-types'
import { button } from 'localization/translations'
import ManageNHSLogin from 'components/Uplift/ManageNHSLogin'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const ManageNHSLoginButton = ({ disabled }) => {
    const user = useSelector((state) => state.userReducer.user)

    button.setLanguage(getLanguage(user))

    return (
        <ManageNHSLogin
            elements={
                <div>
                    <button
                        className="nhsuk-button nhsuk-button--secondary manage-nhs-settings-button"
                        type="submit"
                        tabIndex="-1"
                        disabled={disabled}>
                        {button.manageNHSLogin}
                    </button>
                </div>
            }
            page="Header"
            ariaLabel={button.manageNHSLogin}
        />
    )
}

ManageNHSLoginButton.propTypes = {
    disabled: PropTypes.bool
}

export default ManageNHSLoginButton
