import PropTypes from 'prop-types'
import { QRCodeSVG } from 'qrcode.react'
import { getLanguage } from 'helpers/userHelper'
import { qrCode } from 'localization/translations'
import { isIE } from 'react-device-detect'
import { useSelector } from 'react-redux'

const QrCode = ({ qrString, className }) => {
    const user = useSelector((state) => state.userReducer.user)
    qrCode.setLanguage(getLanguage(user))

    return qrString ? (
        <QRCodeSVG
            value={qrString}
            role="img"
            aria-label={qrCode.ariaLabel}
            includeMargin={true}
            className={className ? className : 'qr-svg' + (isIE ? ' qr-svg-ie' : '')}
            size={270}
            level="M"
        />
    ) : null
}

QrCode.propTypes = {
    qrString: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default QrCode
