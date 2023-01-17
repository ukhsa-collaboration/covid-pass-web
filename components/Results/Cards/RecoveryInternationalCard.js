import React from 'react'
import PropTypes from 'prop-types'
import VaccinationResultCardInfoRow from 'components/Results/Cards/CardComponents/VaccinationResultCardInfoRow'
import { resultsStrings } from 'localization/translations'
import { getFormattedDateTimeEuropeLondonNoHours } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { LANGUAGE_CODES } from 'constants/index'

const RecoveryInternationalCard = ({ data, expiryDate }) => {
    const user = useSelector((state) => state.userReducer.user)
    resultsStrings.setLanguage(getLanguage(user))

    // calculates the results description with icon and text based on the results value
    let resultsDesc = ''
    switch (data['result'].toLowerCase()) {
        case 'negative':
            resultsDesc = (
                <p className="record-card__description">{resultsStrings.TestResultCard.body1}</p>
            )
            break
        case 'positive':
            resultsDesc = (
                <p className="record-card__description">{resultsStrings.TestResultCard.body2}</p>
            )
            break
        case 'void':
            resultsDesc = (
                <p className="record-card__description">{resultsStrings.TestResultCard.body3}</p>
            )
            break
    }

    return (
        <div className="vaccination-card-table vaccination-card-table-international">
            <h2 className="nhsuk-heading-m record-card__heading vaccination-card-table-international__heading">
                {resultsDesc}
            </h2>
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.recoveryDate}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.recoveryDate__bilingual
                        : null
                }
                data={getFormattedDateTimeEuropeLondonNoHours(
                    data['dateTimeOfTest'],
                    getLanguage(user)
                )}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.testType}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.testType__bilingual
                        : null
                }
                data={data['validityType']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.diseaseTargeted}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.diseaseTargeted__bilingual
                        : null
                }
                data={data['diseaseTargeted']['item2']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.country}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.country__bilingual
                        : null
                }
                data={data['countryOfAuthority']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.issuer}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.issuer__bilingual
                        : null
                }
                data={data['authority']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.validFrom}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.validFrom__bilingual
                        : null
                }
                data={getFormattedDateTimeEuropeLondonNoHours(new Date(), getLanguage(user))}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.RecoveryCard.validUntil}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.RecoveryCard.validUntil__bilingual
                        : null
                }
                data={getFormattedDateTimeEuropeLondonNoHours(expiryDate, getLanguage(user))}
            />
        </div>
    )
}

RecoveryInternationalCard.propTypes = {
    data: PropTypes.object.isRequired,
    expiryDate: PropTypes.string.isRequired
}

export default RecoveryInternationalCard
