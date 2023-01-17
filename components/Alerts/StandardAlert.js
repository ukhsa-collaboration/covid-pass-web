import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PrimaryButton from 'components/buttons/PrimaryButton'
import { useDispatch } from 'react-redux'
import { trackEvent } from 'helpers/appInsights'
import { isNhsAppNative } from 'helpers/isNhsApp'
import { gotoHomepage } from 'helpers/isNhsApp'
import { REMOVE_ALL_REDUX } from 'actions/types'
import PropTypes from 'prop-types'
import { removeUserCookie } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'

const StandardAlert = ({ headerText, bodyText, buttonText, openState, setState }) => {
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    const onClickOk = () => {
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            setState(false)
            removeUserCookie(setCookie)
            dispatch({ type: REMOVE_ALL_REDUX })
        }
        trackEvent('Timeout Alert - Confirm logout')
    }

    return (
        <div>
            <Modal isOpen={openState}>
                <ModalHeader>{headerText}</ModalHeader>
                <ModalBody>{bodyText}</ModalBody>
                <ModalFooter>
                    <PrimaryButton text={buttonText} onClickAction={() => onClickOk()} />
                </ModalFooter>
            </Modal>
        </div>
    )
}

StandardAlert.propTypes = {
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    openState: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired
}

export default StandardAlert
