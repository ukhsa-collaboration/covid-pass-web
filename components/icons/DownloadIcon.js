import React from 'react'
import PropTypes from 'prop-types'

const DownloadIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            height="24px"
            viewBox="0 0 24 24"
            width="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
    )
}

DownloadIcon.propTypes = {
    className: PropTypes.string
}

export default DownloadIcon
