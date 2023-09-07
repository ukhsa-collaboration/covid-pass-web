import React from 'react'
import { useSelector } from 'react-redux'
import { hasDomesticAccess, getLanguage } from 'helpers/userHelper'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'
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
                data-testid="selectedFlow-option-domestic"
                id="selectedFlow-option-domestic"
                tabIndex={0}
                onClick={(e) => onClick(e, 'domestic')}
                onKeyDown={(e) => {
                    e.key === 'Enter' && onClick(e, 'domestic')
                }}>
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
