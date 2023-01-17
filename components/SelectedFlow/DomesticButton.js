import React from 'react'
import { useSelector } from 'react-redux'
import { hasDomesticAccess } from 'helpers/userHelper'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'
import { getLanguage } from 'helpers/userHelper'
import { selectedFlowStrings } from 'localization/translations'
import PropTypes from 'prop-types'
import UnderageDomesticCard from 'components/SelectedFlow/UnderageDomesticCard'

const DomesticButton = ({ onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)
    selectedFlowStrings.setLanguage(getLanguage(user))

    if (!getDomesticFeatureToggle(featureToggle)) return null

    if (hasDomesticAccess(user))
        return (
            <div
                role="link"
                className="selected-flow-option"
                id="selectedFlow-option-domestic"
                onKeyPress={(e) => {
                    e.code === 'Enter' && onClick(e, 'domestic')
                }}
                tabIndex={0}
                onClick={(e) => onClick(e, 'domestic')}>
                <h2 className="nhsuk-heading-m">{selectedFlowStrings.domestic.cardTitle}</h2>

                <p className="nhsuk-body">{selectedFlowStrings.domestic.cardText}</p>
            </div>
        )

    return <UnderageDomesticCard />
}

DomesticButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default DomesticButton
