import React from 'react'
import PropTypes from 'prop-types'

const MinusIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="16"
            height="4"
            fill="none"
            viewBox="0 0 16 4">
            <path fill="#0B0C0C" d="M0 0H16V4H0z"></path>
        </svg>
    )
}

MinusIcon.propTypes = {
    className: PropTypes.string
}

export default MinusIcon
