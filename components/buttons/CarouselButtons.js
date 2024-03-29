import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { carouselStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'

export const DotButton = ({ index, selected, onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    carouselStrings.setLanguage(getLanguage(user))
    return (
        <button
            aria-label={`${carouselStrings.dotButtonAriaLabel} ${index}`}
            className={`index--${index} embla__dot ${selected ? 'is-selected' : ''}`}
            data-testid="embla__dot"
            type="button"
            onClick={onClick}
            tabIndex={0}
        />
    )
}

DotButton.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export const PrevButton = ({ enabled, onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    carouselStrings.setLanguage(getLanguage(user))

    return (
        <button
            aria-label={carouselStrings.prevButtonAriaLabel}
            className="embla__button embla__button--prev"
            data-testid="embla__button--prev"
            onClick={onClick}
            disabled={!enabled}>
            <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
                <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
            </svg>
        </button>
    )
}

PrevButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export const NextButton = ({ enabled, onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    carouselStrings.setLanguage(getLanguage(user))

    return (
        <button
            aria-label={carouselStrings.nextButtonAriaLabel}
            className="embla__button embla__button--next"
            data-testid="embla__button--next"
            onClick={onClick}
            disabled={!enabled}>
            <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
                <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
            </svg>
        </button>
    )
}

NextButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
