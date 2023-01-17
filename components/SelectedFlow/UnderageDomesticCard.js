import { selectedFlowStrings } from 'localization/translations'
import { DOMESTIC_ACCESS_MINIMUM_AGE } from 'constants/index'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'

const UnderageDomesticCard = () => {
    const user = useSelector((state) => state.userReducer.user)
    selectedFlowStrings.setLanguage(getLanguage(user))

    return (
        <div className="nhsuk-inset-text selected-flow-p5-travel">
            <p id="paragraphNo-domestic-access">
                <span className="nhsuk-u-font-weight-bold">
                    {selectedFlowStrings.domestic.underAge.title}
                </span>
                <br />
                {selectedFlowStrings.domestic.underAge.text1 +
                    DOMESTIC_ACCESS_MINIMUM_AGE +
                    selectedFlowStrings.domestic.underAge.text2}
            </p>
        </div>
    )
}
export default UnderageDomesticCard
