import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const BackButton = ({ backOverRide = null }) => {
    const router = useRouter()
    const user = useSelector((state) => state.userReducer.user)

    button.setLanguage(getLanguage(user))

    const handleClick = () => {
        if (backOverRide) {
            router.push(backOverRide)
        } else {
            router.back()
        }
    }

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            handleClick()
        }
    }
    return (
        <div className="nhsuk-back-link">
            <a
                label="Go back"
                className="nhsuk-back-link__link"
                role="link"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={(e) => handleKeyPress(e)}>
                <svg
                    className="nhsuk-icon nhsuk-icon__chevron-left"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
                </svg>
                {button.goBack}
            </a>
        </div>
    )
}

BackButton.propTypes = {
    backOverRide: PropTypes.string
}

export default BackButton
