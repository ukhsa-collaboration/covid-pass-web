import React from 'react'
import PropTypes from 'prop-types'
import VaccinationResultCardInfoRow from 'components/Results/Cards/CardComponents/VaccinationResultCardInfoRow'
import { resultsStrings } from 'localization/translations'
import { getFormattedDateTimeEuropeLondonNoHours } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { LANGUAGE_CODES } from 'constants/index'

const VaccinationInternationalCard = ({ data }) => {
    const user = useSelector((state) => state.userReducer.user)
    resultsStrings.setLanguage(getLanguage(user))

    return (
        <div className="vaccination-card-table vaccination-card-table-international">
            <h2 className="nhsuk-heading-m record-card__heading vaccination-card-table-international__heading break-word-wrap">
                {data['displayName']}
                {data['isBooster'] ? (
                    <>&nbsp;{resultsStrings.VaccinationResultCard.booster}</>
                ) : null}
            </h2>
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.dose}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.dose__bilingual
                        : null
                }
                data={`${data['doseNumber']} ${resultsStrings.VaccinationResultCard.doseOf} ${data['totalSeriesOfDoses']}`}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.vaccinationDate_international}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard
                              .vaccinationDate_international__bilingual
                        : null
                }
                data={getFormattedDateTimeEuropeLondonNoHours(
                    data['vaccinationDate'],
                    getLanguage(user)
                )}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.vaccineProduct}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.vaccineProduct__bilingual
                        : null
                }
                data={data['product'].item2}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.vaccineManufacturer}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.vaccineManufacturer__bilingual
                        : null
                }
                data={data.vaccineManufacturer.item2}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.vaccineType}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.vaccineType__bilingual
                        : null
                }
                data={data['vaccineType'].item2}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.vaccineBatchNumber}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.vaccineBatchNumber__bilingual
                        : null
                }
                data={data['vaccineBatchNumber']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.diseaseTargeted}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.diseaseTargeted__bilingual
                        : null
                }
                data={
                    data['diseaseTargeted'].item2 !== undefined
                        ? data['diseaseTargeted'].item2
                        : 'COVID-19'
                }
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.countryOfVaccination}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.countryOfVaccination__bilingual
                        : null
                }
                data={data['countryOfVaccination']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.issuer}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.issuer__bilingual
                        : null
                }
                data={data['authority']}
            />
            <VaccinationResultCardInfoRow
                title={resultsStrings.VaccinationResultCard.site}
                bilingualTitle={
                    getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.VaccinationResultCard.site__bilingual
                        : null
                }
                data={data['site']}
            />
        </div>
    )
}

VaccinationInternationalCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default VaccinationInternationalCard
