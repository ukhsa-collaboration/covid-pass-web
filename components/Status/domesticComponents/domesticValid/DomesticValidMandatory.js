import React from 'react'
import { useSelector } from 'react-redux'
import { domesticPageStrings } from 'localization/translations'
import TickIcon from 'components/icons/TickIcon'
import { getLanguage } from 'helpers/userHelper'
import { getTwoPassStatus } from 'helpers/certificateHelper'
import mandatoryCerts from 'mappings/mandatoryCerts'
import DomesticValidStatusTypeMandatoryVoluntary from 'components/Status/domesticComponents/domesticValid/domesticValidComponents/DomesticValidStatusTypeMandatoryVoluntary'

const DomesticValidMandatory = () => {
    const user = useSelector((state) => state.userReducer.user)
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <DomesticValidStatusTypeMandatoryVoluntary
            type={
                <div
                    className="status-verified status-verified-mandatory"
                    data-testid="status-verified-mandatory">
                    <div>
                        <TickIcon className="status-icon tick-icon " aria-hidden="true" />
                    </div>
                    <div>
                        <strong className="status-verified__valid-location nhsuk-u-margin-bottom-0">
                            {getTwoPassStatus(userApiCache) === mandatoryCerts.MandatoryOnly
                                ? domesticPageStrings.validCertificate.mandatoryVoluntary.statusType
                                      .domesticMandatoryOnly
                                : domesticPageStrings.validCertificate.mandatoryVoluntary.statusType
                                      .domesticMandatory}
                        </strong>
                    </div>
                </div>
            }
        />
    )
}

export default DomesticValidMandatory
