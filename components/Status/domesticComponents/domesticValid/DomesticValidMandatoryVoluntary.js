import React from 'react'
import { useSelector } from 'react-redux'
import { domesticPageStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import DomesticValidStatusTypeMandatoryVoluntary from 'components/Status/domesticComponents/domesticValid/domesticValidComponents/DomesticValidStatusTypeMandatoryVoluntary'

const DomesticValidMandatoryVoluntary = () => {
    const user = useSelector((state) => state.userReducer.user)
    domesticPageStrings.setLanguage(getLanguage(user))

    return (
        <DomesticValidStatusTypeMandatoryVoluntary
            type={
                <div className="status-verified status-verified-voluntary">
                    <div className="status-verified-voluntary__text-container">
                        <strong>
                            {
                                domesticPageStrings.validCertificate.mandatoryVoluntary.statusType
                                    .domesticVoluntary
                            }
                        </strong>
                    </div>
                </div>
            }
        />
    )
}

export default DomesticValidMandatoryVoluntary
