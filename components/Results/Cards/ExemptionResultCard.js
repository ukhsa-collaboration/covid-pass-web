import PropTypes from 'prop-types'
import { resultsStrings } from 'localization/translations'
import { getFormattedDateTimeEuropeLondonNoHours } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { exemptionReason } from 'mappings/exemptions'

const ExemptionResult = ({ value }) => {
    const user = useSelector((state) => state.userReducer.user)
    resultsStrings.setLanguage(getLanguage(user))

    const toggleOffFixedReasons = {
        vaccination: 'exempt from vaccination',
        vaccinationTest: 'exempt from vaccination and test'
    }

    const exceptionToggleOff = () => {
        return (
            value['exemptionReasonCode'] === null &&
            value['dateExemptionExpires'] === null &&
            (value['exemptionReason'].toLowerCase() === toggleOffFixedReasons.vaccination ||
                value['exemptionReason'].toLowerCase() === toggleOffFixedReasons.vaccinationTest)
        )
    }

    // calculates the results description with icon and text based on the results value
    // If the MedEx API is toggle off the only value that will be returned is exemptionReason meaning that string value must be used for the check
    let resultsDesc = ''
    switch (
        exceptionToggleOff() ? value['exemptionReason'].toLowerCase() : value['exemptionReasonCode']
    ) {
        case exemptionReason.FromVaccination:
        case toggleOffFixedReasons.vaccination:
            resultsDesc = (
                <p className="record-card__description">
                    {resultsStrings.ExemptionResultCard.vaccineOnly}
                </p>
            )
            break
        case exemptionReason.FromTestAndVaccination:
        case toggleOffFixedReasons.vaccinationTest:
            resultsDesc = (
                <p className="record-card__description">
                    {resultsStrings.ExemptionResultCard.vaccineTesting}
                </p>
            )
            break
        case exemptionReason.DeclinedVaccination:
            resultsDesc = (
                <p className="record-card__description">
                    {resultsStrings.ExemptionResultCard.declinedVaccineOnly}
                </p>
            )
            break
        case exemptionReason.DeclinedTestAndVaccination:
            resultsDesc = (
                <p className="record-card__description">
                    {resultsStrings.ExemptionResultCard.declinedVaccineTesting}
                </p>
            )
            break
    }

    const isExpired = (date) => {
        return new Date(date) < new Date()
    }

    const GrantedDate = () => {
        if (
            value['exemptionReasonCode'] === exemptionReason.DeclinedTestAndVaccination ||
            value['exemptionReasonCode'] === exemptionReason.DeclinedVaccination
        ) {
            return null
        }

        if (value['dateExemptionGiven'] === null) {
            return (
                <p className="record-card__type medical-exemption-card__given-date">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.ExemptionResultCard.dateExemptionGiven}
                    </span>
                    &nbsp;-
                </p>
            )
        }

        return (
            <p className="record-card__type medical-exemption-card__given-date">
                <span className="nhsuk-u-font-weight-bold">
                    {resultsStrings.ExemptionResultCard.dateExemptionGiven}
                </span>
                &nbsp;
                {getFormattedDateTimeEuropeLondonNoHours(
                    value['dateExemptionGiven'],
                    getLanguage(user)
                )}
            </p>
        )
    }

    const ValidDate = () => {
        if (
            value['exemptionReasonCode'] === exemptionReason.DeclinedTestAndVaccination ||
            value['exemptionReasonCode'] === exemptionReason.DeclinedVaccination
        ) {
            return null
        }

        if (value['dateExemptionExpires'] === null) {
            return (
                <p className="record-card__type medical-exemption-card__expires-date">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.ExemptionResultCard.dateExemptionExpires}
                    </span>
                    &nbsp;
                    {resultsStrings.ExemptionResultCard.validPermanent}
                </p>
            )
        }

        if (isExpired(value['dateExemptionExpires'])) {
            return (
                <p className="record-card__type medical-exemption-card__expires-date">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.ExemptionResultCard.dateExemptionExpires}
                    </span>
                    &nbsp;
                    {resultsStrings.ExemptionResultCard.expired}&nbsp;
                    {getFormattedDateTimeEuropeLondonNoHours(
                        value['dateExemptionExpires'],
                        getLanguage(user)
                    )}
                </p>
            )
        }

        if (value['dateExemptionExpires']) {
            return (
                <p className="record-card__type medical-exemption-card__expires-date">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.ExemptionResultCard.dateExemptionExpires}
                    </span>
                    &nbsp;
                    {getFormattedDateTimeEuropeLondonNoHours(
                        value['dateExemptionExpires'],
                        getLanguage(user)
                    )}
                </p>
            )
        }

        return null
    }

    return (
        <div className="record-card">
            <div className="record-card__content">
                <strong className="nhsuk-tag nhsuk-tag--blue">
                    {resultsStrings.ExemptionResultCard.tagText}
                </strong>
                <h3 className="record-card__heading">{resultsStrings.ExemptionResultCard.head1}</h3>
                {resultsDesc}
                {value['exemptionReasonCode'] !== null ? (
                    <>
                        <GrantedDate />
                        <ValidDate />
                    </>
                ) : null}
            </div>
        </div>
    )
}

ExemptionResult.propTypes = {
    value: PropTypes.object.isRequired
}

export default ExemptionResult
