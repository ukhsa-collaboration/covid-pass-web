import React from 'react'
import PropTypes from 'prop-types'

const SecondaryButton = ({ onClickAction, text, extraClasses, dataTestId = null }) => {
    const testId = dataTestId !== null ? { 'data-testid': dataTestId } : null

    return (
        <button
            className={'nhsuk-button nhsuk-button--secondary ' + extraClasses}
            type="submit"
            onClick={onClickAction}
            {...testId}>
            {text}
        </button>
    )
}

SecondaryButton.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    dataTestId: PropTypes.string
}

export default SecondaryButton
