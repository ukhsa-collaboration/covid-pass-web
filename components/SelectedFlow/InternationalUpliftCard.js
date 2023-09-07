import React from 'react'
import { useSelector } from 'react-redux'
import { selectedFlowStrings } from 'localization/translations'
import Uplift from 'components/Uplift/Uplift'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import { getIdentityProofingLevel } from 'helpers/userHelper'

const InternationalUpliftCard = () => {
    const user = useSelector((state) => state.userReducer.user)

    return getIdentityProofingLevel(user) === 'P5Plus' ||
        getIdentityProofingLevel(user) === 'P5' ? (
        <div
            className="nhsuk-inset-text selected-flow-p5-travel"
            data-testid="selected-flow-p5-travel">
            <p>
                <span className="nhsuk-u-font-weight-bold">
                    {selectedFlowStrings.international.uplift.title}
                </span>
                <br />
                {selectedFlowStrings.international.uplift.textGroup1.text1}&nbsp;
                <Uplift
                    elements={
                        <a
                            className="nhsuk-link nhsuk-link--no-visited-state-link"
                            title="NHS login uplift">
                            {selectedFlowStrings.international.uplift.textGroup1.link1.text}
                        </a>
                    }
                    page="Selected Flow"
                />
            </p>
            <p>
                {selectedFlowStrings.international.uplift.textGroup2.text1}&nbsp;
                <ExternalLink
                    text={selectedFlowStrings.international.uplift.textGroup2.link1.text}
                    href={selectedFlowStrings.international.uplift.textGroup2.link1.href}
                />
                {selectedFlowStrings.international.uplift.textGroup2.text2}
            </p>
        </div>
    ) : null
}

export default InternationalUpliftCard
