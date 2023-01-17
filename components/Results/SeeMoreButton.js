import PropTypes from 'prop-types'
import { resultsStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const SeeMoreButton = ({ onClickFunction }) => {
    const user = useSelector((state) => state.userReducer.user)
    resultsStrings.setLanguage(getLanguage(user))

    const onClick = (e) => {
        e.preventDefault()
        onClickFunction()
    }

    return (
        <div className="see-more-link-container">
            <a
                className="nhsuk-link nhsuk-link--no-visited-state see-more-link-button"
                role="button"
                tabIndex={0}
                onClick={(e) => onClick(e)}
                onKeyPress={(e) => e.key === 'Enter' && onClick(e)}>
                {resultsStrings.seeMore}
            </a>
        </div>
    )
}

SeeMoreButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired
}

export default SeeMoreButton
