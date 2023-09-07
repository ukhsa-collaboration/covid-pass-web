import React from 'react'
import PropTypes from 'prop-types'
import ArrowIcon from 'components/icons/ArrowIcon'
import VaccinationResultCardInfoRow from 'components/Results/Cards/CardComponents/VaccinationResultCardInfoRow'
import { resultsStrings } from 'localization/translations'
import { getFormattedDateTimeEuropeLondonNoHours } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const VaccinationResultCard = ({ value }) => {
    const [moreDetails, setMoreDetails] = React.useState(false)
    const user = useSelector((state) => state.userReducer.user)

    resultsStrings.setLanguage(getLanguage(user))

    const moreDetailsClick = () => {
        setMoreDetails(!moreDetails)
    }

    return (
        <div className="record-card" data-testid="record-card">
            <div className="record-card__content">
                <strong className="nhsuk-tag nhsuk-tag--blue">
                    {resultsStrings.VaccinationResultCard.tagText}
                </strong>
                <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={moreDetails}
                    className="vaccination-card-heading-container"
                    data-testid="vaccination-card-heading-container"
                    onClick={moreDetailsClick}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && moreDetailsClick()
                    }}>
                    <h3 className="record-card__heading" data-testid="vaccination-card-heading">
                        {value['displayName']}
                        {value['isBooster'] ? (
                            <>&nbsp;{resultsStrings.VaccinationResultCard.booster}</>
                        ) : null}
                    </h3>
                    <ArrowIcon
                        className={
                            'vaccination-card-expander-icon ' +
                            (moreDetails ? 'icon-arrow-up' : 'icon-arrow-down')
                        }
                    />
                </div>

                {moreDetails ? (
                    <div className="vaccination-card-table" data-testid="vaccination-card-table">
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.dose}
                            data={`${value['doseNumber']} ${resultsStrings.VaccinationResultCard.doseOf} ${value['totalSeriesOfDoses']}`}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.vaccineManufacturer}
                            data={value['vaccineManufacturer'].item2}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.diseaseTargeted}
                            data={
                                value['diseaseTargeted'].item2 !== undefined
                                    ? value['diseaseTargeted'].item2
                                    : 'COVID-19'
                            }
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.vaccineType}
                            data={value['vaccineType'].item2}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.vaccineProduct}
                            data={value['product'].item2}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.vaccineBatchNumber}
                            data={value['vaccineBatchNumber']}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.countryOfVaccination}
                            data={value['countryOfVaccination']}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.issuer}
                            data={value['authority']}
                        />
                        <VaccinationResultCardInfoRow
                            title={resultsStrings.VaccinationResultCard.site}
                            data={value['site']}
                        />
                    </div>
                ) : (
                    <p
                        className="record-card__description"
                        data-testid="vaccination-card-description">
                        {`${resultsStrings.VaccinationResultCard.dose} ${value['doseNumber']} ${resultsStrings.VaccinationResultCard.doseOf} ${value['totalSeriesOfDoses']}`}
                    </p>
                )}

                <p
                    className={
                        'record-card__type ' +
                        (moreDetails ? 'record-card__vaccination-expanded' : '')
                    }
                    data-testid="vaccination-card-date">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.VaccinationResultCard.vaccinationDate_domestic}
                    </span>
                    &nbsp;
                    {getFormattedDateTimeEuropeLondonNoHours(
                        value['vaccinationDate'],
                        getLanguage(user)
                    )}
                </p>
            </div>
        </div>
    )
}

VaccinationResultCard.propTypes = {
    value: PropTypes.object.isRequired
}

export default VaccinationResultCard
