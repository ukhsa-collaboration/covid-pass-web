import React, { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PrimaryButton from 'components/buttons/PrimaryButton'
import LogoutButton from 'components/buttons/LogoutButton'
import StandardAlert from 'components/Alerts/StandardAlert'
import PropTypes from 'prop-types'
import { expiredTimeoutAlertStrings } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'

const TimeoutAlert = ({ headerText, bodyText }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [endedSessionModal, setEndedSession] = useState(false)
    const user = useSelector((state) => state.userReducer.user)
    var timeOutFunction

    expiredTimeoutAlertStrings.setLanguage(getLanguage(user))

    const handleOnIdle = () => {
        modalIsOpen ? null : setModalIsOpen(true)
    }
    const idleLogout = () => {
        setModalIsOpen(false)
        setEndedSession(true)
    }

    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(timeOutFunction)
    }

    // Leave the two functions below where they are or this will all break.
    // Yes we are aware that the functions 'are assigned a value but never used' but deleting them also breaks it. Please leave alone

    const { getRemainingTime } = useIdleTimer({
        timeout: 1000 * 60 * 10, //This calculates to 10 minutes. To number of change minutes alter the last number.
        onIdle: handleOnIdle,
        debounce: 500
    })

    useEffect(() => {
        if (modalIsOpen) {
            timeOutFunction = setTimeout(() => {
                idleLogout()
            }, 1000 * 60 * 5) // this equals 5 minutes in milliseconds (300000)
        }
    }, [modalIsOpen])

    return (
        <div>
            <Modal isOpen={modalIsOpen}>
                <ModalHeader>{headerText}</ModalHeader>
                <ModalBody>
                    {bodyText} <br />
                </ModalBody>
                <ModalFooter>
                    <LogoutButton />
                    <div>
                        <PrimaryButton
                            text={expiredTimeoutAlertStrings.buttonText}
                            onClickAction={stayActive}
                        />
                    </div>
                </ModalFooter>
            </Modal>
            <StandardAlert
                headerText={expiredTimeoutAlertStrings.head}
                bodyText={expiredTimeoutAlertStrings.body}
                buttonText={expiredTimeoutAlertStrings.okButtonText}
                openState={endedSessionModal}
                setState={setEndedSession}
            />
        </div>
    )
}

TimeoutAlert.propTypes = {
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired
}

export default TimeoutAlert
