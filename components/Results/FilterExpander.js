import React from 'react'
import { recordsPageStrings } from 'localization/translations'
import { useSelector } from 'react-redux'
import { getLanguage } from 'helpers/userHelper'
import PlusIcon from 'components/icons/PlusIcon'
import MinusIcon from 'components/icons/MinusIcon'
import PropTypes from 'prop-types'

const FilterExpander = ({ filters }) => {
    const user = useSelector((state) => state.userReducer.user)
    const [expanded, setExpanded] = React.useState(false)

    recordsPageStrings.setLanguage(getLanguage(user))

    return (
        <div className="filter-expander">
            <div className="filter-expander__content">
                <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={expanded}
                    className={
                        'filter-expander-heading-container ' + (expanded ? 'expanded' : 'collapsed')
                    }
                    onClick={() => setExpanded(!expanded)}
                    onKeyPress={(e) => {
                        e.code === 'Enter' && setExpanded(!expanded)
                    }}>
                    <h3 className="filter-expander__heading">{recordsPageStrings.filter.title}</h3>
                    {expanded ? (
                        <MinusIcon className="minus-icon" />
                    ) : (
                        <PlusIcon className="plus-icon" />
                    )}
                </div>

                {expanded ? filters : null}
            </div>
        </div>
    )
}

FilterExpander.propTypes = {
    filters: PropTypes.element.isRequired
}

export default FilterExpander
