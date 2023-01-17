import React from 'react'
import PropTypes from 'prop-types'

const CloseIconButton = ({ onClickFunction, ariaExpanded = null }) => {
    const ariaProps = ariaExpanded !== null ? { 'aria-expanded': ariaExpanded } : null

    return (
        <button
            alt="Close Button"
            type="button"
            aria-controls="header-navigation"
            aria-label="Close menu"
            {...ariaProps}
            className="nhs-close-button nhsuk-focus-color"
            onClick={onClickFunction}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <path
                    id="Icon_material-clear"
                    data-name="Icon material-clear"
                    d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
                    transform="translate(-7.5 -7.5)"
                    fill="#005eb8"
                />
            </svg>
        </button>
    )
}

CloseIconButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    ariaExpanded: PropTypes.bool
}

export default CloseIconButton
