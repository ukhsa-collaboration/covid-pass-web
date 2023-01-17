import React from 'react'
import PropTypes from 'prop-types'

const ReverseButton = ({ onClickAction, text, extraClasses, disabledBtn = false }) => {
    return (
        <button
            className={'nhsuk-button nhsuk-button--reverse ' + extraClasses}
            type="submit"
            onClick={onClickAction}
            disabled={disabledBtn}>
            {text}
        </button>
    )
}

ReverseButton.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    disabledBtn: PropTypes.bool
}

export default ReverseButton
