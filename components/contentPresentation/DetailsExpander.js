import React from 'react'
import PropTypes from 'prop-types'

const Details = ({ title, details }) => {
    return (
        <details className="nhsuk-details">
            <summary className="nhsuk-details__summary">
                <span className="nhsuk-details__summary-text">{title}</span>
            </summary>
            <div className="nhsuk-details__text">{details}</div>
        </details>
    )
}

Details.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.element.isRequired
}

export default Details
