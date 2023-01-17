import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = ({ onClickAction, text, extraClasses, disabledBtn = false }) => {
    return (
        <button
            className={'nhsuk-button ' + extraClasses}
            type="submit"
            onClick={onClickAction}
            disabled={disabledBtn}>
            {text}
        </button>
    )
}

PrimaryButton.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    disabledBtn: PropTypes.bool
}

export default PrimaryButton
