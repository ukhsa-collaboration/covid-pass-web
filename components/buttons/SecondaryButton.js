import React from 'react'
import PropTypes from 'prop-types'

const SecondaryButton = ({ onClickAction, text, extraClasses }) => {
    return (
        <button
            className={'nhsuk-button nhsuk-button--secondary ' + extraClasses}
            type="submit"
            onClick={onClickAction}>
            {text}
        </button>
    )
}

SecondaryButton.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string
}

export default SecondaryButton
