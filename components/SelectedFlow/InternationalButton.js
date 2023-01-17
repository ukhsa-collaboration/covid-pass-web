import React from 'react'
import { useSelector } from 'react-redux'
import { selectedFlowStrings } from 'localization/translations'
import PropTypes from 'prop-types'
import { getIdentityProofingLevel } from 'helpers/userHelper'

const InternationalButton = ({ onClick }) => {
    const user = useSelector((state) => state.userReducer.user)

    return getIdentityProofingLevel(user) === 'P9' ? (
        <div
            role="link"
            className="selected-flow-option"
            id="selectedFlow-option-international"
            onKeyPress={(e) => {
                e.code === 'Enter' && onClick(e, 'international')
            }}
            tabIndex={0}
            onClick={(e) => onClick(e, 'international')}>
            <h2 className="nhsuk-heading-m">{selectedFlowStrings.international.cardTitle}</h2>

            <p className="nhsuk-body">{selectedFlowStrings.international.cardText}</p>
        </div>
    ) : null
}

InternationalButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default InternationalButton
