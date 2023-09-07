import React from 'react'
import PropTypes from 'prop-types'
import { externalLinkStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const ExternalLink = ({ href, text, extraClasses = '', ariaLabel = '' }) => {
    const user = useSelector((state) => state.userReducer.user)
    externalLinkStrings.setLanguage(getLanguage(user))

    const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : null

    return (
        <a
            target="_blank"
            {...ariaProps}
            href={href}
            className={'nhsuk-link nhsuk-link--no-visited-state external-link ' + extraClasses}
            data-testid="external-link">
            {text}
            <span className="screen-reader-only-hidden">
                &nbsp;{externalLinkStrings.opensNewTab}
            </span>
        </a>
    )
}

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    ariaLabel: PropTypes.string
}

export default ExternalLink
