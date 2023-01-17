import { selectedFlowStrings } from 'localization/translations'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'

const DomesticToggleOffCard = () => {
    const user = useSelector((state) => state.userReducer.user)
    selectedFlowStrings.setLanguage(getLanguage(user))

    return (
        <div className="nhsuk-inset-text selected-flow-p5-travel">
            <p id="paragraph-domestic-toggle-off">{selectedFlowStrings.domestic.toggleOff.text1}</p>
        </div>
    )
}

export default DomesticToggleOffCard
