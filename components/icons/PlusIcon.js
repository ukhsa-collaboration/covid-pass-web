import React from 'react'
import PropTypes from 'prop-types'

const PlusIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16">
            <path fill="#0B0C0C" d="M0 6h15.292v4H0V6z"></path>
            <path fill="#0B0C0C" d="M5.734 0h3.823v16H5.734V0z"></path>
        </svg>
    )
}

PlusIcon.propTypes = {
    className: PropTypes.string
}

export default PlusIcon
