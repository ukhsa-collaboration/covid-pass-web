import PropTypes from 'prop-types'
import { resultsStrings } from 'localization/translations'
import { getFormattedDateTime } from 'helpers/dateHelper'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import { LANGUAGE_CODES } from 'constants/index'

const TestResult = ({ value }) => {
    const user = useSelector((state) => state.userReducer.user)
    resultsStrings.setLanguage(getLanguage(user))

    // calculates the results description with icon and text based on the results value
    let resultsDesc = ''
    switch (value['result'].toLowerCase()) {
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
        <div className="record-card">
            <div className="record-card__content">
                <h3 className="record-card__heading">
                    {getLanguage(user) === LANGUAGE_CODES.cy
                        ? resultsStrings.TestResultCard.head1 + ' ' + value['validityType']
                        : value['validityType'] + ' ' + resultsStrings.TestResultCard.head1}
                </h3>
                {resultsDesc}
                <p className="record-card__type">
                    <span className="nhsuk-u-font-weight-bold">
                        {resultsStrings.TestResultCard.tested}
                    </span>
                    &nbsp;
                    {getFormattedDateTime(value['dateTimeOfTest'], getLanguage(user))}
                </p>
            </div>
        </div>
    )
}

TestResult.propTypes = {
    value: PropTypes.object.isRequired
}

export default TestResult
