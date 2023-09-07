import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = ({
    onClickAction,
    text,
    extraClasses,
    disabledBtn = false,
    dataTestId = null
}) => {
    const testId = dataTestId !== null ? { 'data-testid': dataTestId } : null

    return (
        <button
            className={'nhsuk-button ' + extraClasses}
            type="submit"
            onClick={onClickAction}
            disabled={disabledBtn}
            {...testId}>
            {text}
        </button>
    )
}

PrimaryButton.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    disabledBtn: PropTypes.bool,
    dataTestId: PropTypes.string
}

export default PrimaryButton
