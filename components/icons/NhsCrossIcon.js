import React from 'react'
import PropTypes from 'prop-types'

const NhsCrossIcon = ({ ariaLabel = '' }) => {
    const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : null

    return (
        <svg
            className="nhsuk-icon nhsuk-icon__cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...ariaProps}
            height="34"
            width="34">
            <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
            <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
        </svg>
    )
}

NhsCrossIcon.propTypes = {
    ariaLabel: PropTypes.string
}

export default NhsCrossIcon
