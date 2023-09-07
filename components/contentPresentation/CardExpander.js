import React from 'react'
import PropTypes from 'prop-types'

const CardExpander = ({ title, details }) => {
    return (
        <details className="nhsuk-details nhsuk-expander">
            <summary className="nhsuk-details__summary">
                <span
                    className="nhsuk-details__summary-text"
                    data-testid="nhsuk-details__summary-text">
                    {title}
                </span>
            </summary>
            <div className="nhsuk-details__text" data-testid="nhsuk-details__text">
                {details}
            </div>
        </details>
    )
}

CardExpander.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.element.isRequired
}

export default CardExpander
