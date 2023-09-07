import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import LogoutButton from 'components/buttons/LogoutButton'
import ManageNHSLoginButton from 'components/buttons/ManageNHSLoginButton'
import CloseIconButton from 'components/buttons/CloseIconButton'
import { useSelector } from 'react-redux'
import { getName, getDateFormattedDOB, getDestination, getLanguage } from 'helpers/userHelper'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { headerStrings } from 'localization/translations'

const HeaderModel = ({ handleMenuClick, isMenuActive }) => {
    const user = useSelector((state) => state.userReducer.user)
    headerStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        const element = document.getElementById('custom-header-model')
        element.addEventListener('keydown', tabKeyPress)

        return () => element.removeEventListener('keydown', tabKeyPress)
    })

    // https://hidde.blog/using-javascript-to-trap-focus-in-an-element/
    const tabKeyPress = (e) => {
        const element = document.getElementById('custom-header-model')
        const focusableEls = element.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        )
        const firstFocusableEl = focusableEls[0]
        const lastFocusableEl = focusableEls[focusableEls.length - 1]
        const KEYCODE_TAB = 9
        const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB

        if (!isTabPressed) {
            return
        }

        if (e.shiftKey) {
            /* shift + tab */ if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus()
                e.preventDefault()
            }
        } /* tab */ else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus()
                e.preventDefault()
            }
        }
    }

    return (
        <div className="nhsuk-header-overlay active" id="custom-header-model">
            <div className="nhsuk-header-overlay__header">
                <div className="header-title">{headerStrings.menu.text}</div>
                <CloseIconButton onClickFunction={handleMenuClick} ariaExpanded={isMenuActive} />
            </div>
            <div className="nhsuk-header-overlay__content">
                <div className="user-info">
                    <div className="info-box">
                        <p className="info-point word-break" id="covid-records-menu-name">
                            <span className="nhsuk-u-font-weight-bold">{headerStrings.name}</span>
                            &nbsp;
                            {getName(user)}
                        </p>
                        <p className="info-point word-break" id="covid-records-menu-contact-info">
                            <span className="nhsuk-u-font-weight-bold">{headerStrings.email}</span>
                            &nbsp;
                            {getDestination(user)}
                        </p>
                        <p className="info-point" id="covid-records-menu-date-of-birth">
                            <span className="nhsuk-u-font-weight-bold">{headerStrings.date}</span>
                            &nbsp;
                            {getDateFormattedDOB(user, getLanguage(user))}
                        </p>
                    </div>
                </div>
                <div className="nhsuk-header-overlay__footer">
                    {isNhsAppNative() ? null : (
                        <div className="nhsuk-grid-row">
                            <div className="nhsuk-grid-column-one-half">
                                <ManageNHSLoginButton />
                            </div>
                            <div className="nhsuk-grid-column-one-half">
                                <LogoutButton disabled={false} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

HeaderModel.propTypes = {
    handleMenuClick: PropTypes.func.isRequired,
    isMenuActive: PropTypes.bool.isRequired
}

export default HeaderModel
