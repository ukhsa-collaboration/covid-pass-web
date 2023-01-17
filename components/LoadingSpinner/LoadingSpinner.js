import React from 'react'
import PropTypes from 'prop-types'
import { loadingSpinnerStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const LoadingSpinner = ({ size = 'large', certificateLoader = false }) => {
    const user = useSelector((state) => state.userReducer.user)
    loadingSpinnerStrings.setLanguage(getLanguage(user))

    return (
        <span className={size}>
            <div
                style={certificateLoader ? { margin: '0 2em' } : {}}
                className={'spinner loading loading-box ' + size}
                id="divSpinner">
                <p>{loadingSpinnerStrings.loading}</p>
            </div>
        </span>
    )
}

LoadingSpinner.propTypes = {
    size: PropTypes.string.isRequired,
    certificateLoader: PropTypes.bool
}

export default LoadingSpinner
