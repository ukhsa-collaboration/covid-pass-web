import PropTypes from 'prop-types'

const VaccinationResultCardInfoRow = ({ title, bilingualTitle, data }) => {
    return (
        <div className="vaccination-card-info-row">
            <div className="title nhsuk-u-font-weight-bold break-word-wrap">
                {title}
                {bilingualTitle ? (
                    <span className="bilingual-text">
                        <span className="bilingual-text__block">{bilingualTitle}</span>
                    </span>
                ) : null}
            </div>
            <div className="unit break-word-wrap">{data ? data : '-'}</div>
        </div>
    )
}

VaccinationResultCardInfoRow.propTypes = {
    title: PropTypes.string.isRequired,
    bilingualTitle: PropTypes.string,
    data: (props, propName) => {
        let prop = props[propName]

        if (prop === null || typeof prop === 'string' || typeof prop === 'number') return // prop must be either string, number or null
        if (prop === undefined) return new Error(`Undefined ${propName} is not allowed`)
        return new Error(`Invalid prop ${propName}`)
    }
}

export default VaccinationResultCardInfoRow
