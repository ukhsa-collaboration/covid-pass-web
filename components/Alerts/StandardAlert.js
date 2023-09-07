import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PrimaryButton from 'components/buttons/PrimaryButton'
import { trackEvent } from 'helpers/appInsights'
import { isNhsAppNative, gotoHomepage } from 'helpers/isNhsApp'
import PropTypes from 'prop-types'
import useEndUserSession from 'hooks/useEndUserSession'

const StandardAlert = ({ headerText, bodyText, buttonText, openState, setState }) => {
    const { endSession } = useEndUserSession()

    const onClickOk = () => {
        if (isNhsAppNative()) {
            gotoHomepage()
        } else {
            setState(false)
            endSession()
        }
        trackEvent('Timeout Alert - Confirm logout')
    }

    return (
        <div>
            <Modal isOpen={openState}>
                <ModalHeader data-testid="timeout-standard-alert-title">{headerText}</ModalHeader>
                <ModalBody data-testid="timeout-standard-alert-body">{bodyText}</ModalBody>
                <ModalFooter>
                    <PrimaryButton
                        text={buttonText}
                        onClickAction={() => onClickOk()}
                        dataTestId="timeout-standard-alert-btn"
                    />
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
