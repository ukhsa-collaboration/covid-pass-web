import React from 'react'
import { gotoHomepage } from 'helpers/isNhsApp'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
const NHSBackButton = () => {
    const user = useSelector((state) => state.userReducer.user)
    button.setLanguage(getLanguage(user))

    const handleClick = () => {
        gotoHomepage()
    }

    return (
        <div className="nhsuk-back-link">
            <a
                label="Go back"
                className="nhsuk-back-link__link"
                data-testid="nhsapp-back-link"
                role="link"
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={(e) => {
                    e.key === 'Enter' && handleClick()
                }}>
                <svg
                    className="nhsuk-icon nhsuk-icon__chevron-left"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
                </svg>
                {button.goBack}
            </a>
        </div>
    )
}

export default NHSBackButton
