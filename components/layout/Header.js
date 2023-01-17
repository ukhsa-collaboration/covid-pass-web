import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getLanguage, checkValidUserDetails } from 'helpers/userHelper'
import { getUserToken } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { headerStrings } from 'localization/translations'
import LanguageSelection from 'components/layout/HeaderComponents/LanguageSelection'
import HeaderModel from 'components/layout/HeaderComponents/HeaderModel'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'
import { INDEX_PAGE } from 'constants/routes'
import NhsSvgLogo from 'components/icons/NhsSvgLogo'

const Header = () => {
    const [isMenuActive, setActive] = useState(false)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    headerStrings.setLanguage(getLanguage(user))

    const handleMenuClick = () => {
        setActive(!isMenuActive)

        if (isMenuActive) srSpeak('collapsed', 'assertive')
    }

    const srSpeak = (text, priority) => {
        var el = document.createElement('div')
        var id = 'speak-' + Date.now()
        el.setAttribute('id', id)
        el.setAttribute('aria-live', priority || 'polite')
        el.classList.add('nhsuk-u-visually-hidden')
        document.body.appendChild(el)

        window.setTimeout(function () {
            document.getElementById(id).innerHTML = text
        }, 100)

        window.setTimeout(function () {
            document.body.removeChild(document.getElementById(id))
        }, 1000)
    }

    return (
        <header className="nhsuk-header nhsuk-header--transactional" role="banner">
            <a className="nhsuk-skip-link" href="#main-content">
                {headerStrings.skipContent}
            </a>
            <div className="nhsuk-width-container nhsuk-header__container header-custom-container">
                <div className="header-custom-title-container">
                    <div className="nhsuk-header__logo nhsuk-header__logo--only">
                        {isLetterService ? (
                            <div className="nhsuk-header__logo--letter-service-custom">
                                <NhsSvgLogo />
                            </div>
                        ) : (
                            <a
                                className="nhsuk-header__link nhsuk-header__link--service "
                                href={INDEX_PAGE}
                                aria-label={headerStrings.logo.ariaLabel}
                                tabIndex={isMenuActive ? '-1' : null}>
                                <NhsSvgLogo linkToStart />
                            </a>
                        )}
                    </div>
                    <div className="nhsuk-header__transactional-service-name">
                        {isLetterService ? (
                            <span className="nhsuk-header__transactional-service-name--link nhsuk-header__transactional-service-name--letter-service-custom">
                                {headerStrings.title}
                            </span>
                        ) : (
                            <a
                                className="nhsuk-header__transactional-service-name--link"
                                href={INDEX_PAGE}>
                                {headerStrings.title}
                            </a>
                        )}
                    </div>
                </div>

                <div
                    className="nhsuk-header__content header-custom-button-container"
                    id="content-header">
                    <div className="nhsuk-header__menu">
                        {getUserToken(cookies) && getLanguage(user) ? (
                            <LanguageSelection isMenuActive={isMenuActive} />
                        ) : null}
                    </div>
                    <div className="nhsuk-header__menu">
                        {getUserToken(cookies) && checkValidUserDetails(user) ? (
                            <button
                                onClick={handleMenuClick}
                                className="nhsuk-header__menu-toggle"
                                id="toggle-menu"
                                aria-controls={headerStrings.menu.ariaControls}
                                aria-label={headerStrings.menu.ariaLabel}
                                aria-expanded={isMenuActive}
                                tabIndex={isMenuActive ? '-1' : null}>
                                {headerStrings.menu.text}
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
            {getUserToken(cookies) && isMenuActive ? (
                <HeaderModel handleMenuClick={handleMenuClick} isMenuActive />
            ) : null}
        </header>
    )
}

export default Header
