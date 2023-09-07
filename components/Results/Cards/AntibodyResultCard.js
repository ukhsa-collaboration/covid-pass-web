import PropTypes from 'prop-types'
import { antibodyResultCardPageStrings } from 'localization/translations'
import { getFormattedDateTime } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const AntibodyResultCard = ({ value }) => {
    const user = useSelector((state) => state.userReducer.user)

    antibodyResultCardPageStrings.setLanguage(getLanguage(user))

    // calculates the results description with icon and text based on the results value
    let resultsDesc = ''
    switch (value['testResult'].toLowerCase()) {
        case 'negative':
            resultsDesc = (
                <p className="record-card__description" data-testid="antibody-card-description">
                    {antibodyResultCardPageStrings.body1}
                </p>
            )
            break
        case 'positive':
            resultsDesc = (
                <p className="record-card__description" data-testid="antibody-card-description">
                    {antibodyResultCardPageStrings.body2}
                </p>
            )
            break
        case 'void':
            resultsDesc = (
                <p className="record-card__description" data-testid="antibody-card-description">
                    {antibodyResultCardPageStrings.body3}
                </p>
            )
            break
    }

    return (
        <div className="record-card">
            <div className="record-card__content">
                <h3 className="record-card__heading" data-testid="antibody-card-heading-date">
                    {getFormattedDateTime(value['dateTimeOfTest'], getLanguage(user))}
                </h3>
                {resultsDesc}
                <hr className="record-card__breaker"></hr>
                <p className="record-card__type" data-testid="antibody-card-type">
                    {value['testType']}
                </p>
            </div>
        </div>
    )
}

AntibodyResultCard.propTypes = {
    value: PropTypes.object.isRequired
}

export default AntibodyResultCard
