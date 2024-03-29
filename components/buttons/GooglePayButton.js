import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'

const GooglePayButton = ({ onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    button.setLanguage(getLanguage(user))

    return (
        <button
            className="google-pay-button"
            data-testid="google-pay-button"
            onClick={onClick}
            onKeyDown={(e) => {
                e.key === 'Enter' && onClick()
            }}
            tabIndex={0}
            aria-label={button.openGoogleWalletText}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="288"
                height="44"
                viewBox="0 0 288 44">
                <defs>
                    <path
                        id="path-1"
                        d="M4 0h272a4 4 0 014 4v28a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"></path>
                    <filter
                        id="filter-2"
                        width="104.6%"
                        height="136.1%"
                        x="-2.3%"
                        y="-15.3%"
                        filterUnits="objectBoundingBox">
                        <feMorphology
                            in="SourceAlpha"
                            operator="dilate"
                            radius="0.5"
                            result="shadowSpreadOuter1"></feMorphology>
                        <feOffset
                            dy="1"
                            in="shadowSpreadOuter1"
                            result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur
                            in="shadowOffsetOuter1"
                            result="shadowBlurOuter1"
                            stdDeviation="1.5"></feGaussianBlur>
                        <feColorMatrix
                            in="shadowBlurOuter1"
                            result="shadowMatrixOuter1"
                            values="0 0 0 0 0.235294118 0 0 0 0 0.250980392 0 0 0 0 0.262745098 0 0 0 0.15 0"></feColorMatrix>
                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                        <feGaussianBlur
                            in="shadowOffsetOuter2"
                            result="shadowBlurOuter2"
                            stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                            in="shadowBlurOuter2"
                            result="shadowMatrixOuter2"
                            values="0 0 0 0 0.235294118 0 0 0 0 0.250980392 0 0 0 0 0.262745098 0 0 0 0.3 0"></feColorMatrix>
                        <feMerge>
                            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                            <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-192 -64)">
                        <g transform="translate(196 67)">
                            <g fill="#000">
                                <use filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use xlinkHref="#path-1"></use>
                            </g>
                            <g transform="translate(62.5 10)">
                                <path fill="#3C4043" d="M50 0H51V16H50z"></path>
                                <g>
                                    <g transform="translate(0 .261)">
                                        <g fill="#FFF" transform="translate(17.615 .826)">
                                            <path d="M1.65 1.548V5.63h2.517c.6 0 1.096-.202 1.489-.605.402-.402.604-.882.604-1.437 0-.544-.202-1.019-.604-1.422-.393-.413-.889-.62-1.489-.62H1.65zm0 5.52v4.736H.144V.11h3.99c1.013 0 1.874.338 2.583 1.013.72.675 1.079 1.497 1.079 2.466 0 .99-.36 1.819-1.08 2.482-.697.665-1.558.996-2.582.996H1.649z"></path>
                                            <path d="M9.317 9.354c0 .392.166.719.5.98.332.262.721.392 1.168.392.632 0 1.196-.234 1.692-.702.496-.468.743-1.018.743-1.649-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.408.293-.613.657-.613 1.092m1.946-5.814c1.112 0 1.99.297 2.633.89.643.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.621.914-1.45 1.372-2.485 1.372-.883 0-1.622-.262-2.215-.784-.595-.523-.892-1.176-.892-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.893 0 1.63.163 2.206.49v-.344c0-.523-.207-.966-.62-1.33a2.132 2.132 0 00-1.456-.548c-.84 0-1.504.354-1.994 1.062l-1.325-.833c.73-1.045 1.81-1.568 3.238-1.568"></path>
                                            <path d="M23.1164897 3.8014539L18.0966672 15.3320005 16.5437912 15.3320005 18.4077842 11.2974758 15.1049916 3.8014539 16.7399912 3.8014539 19.1270906 9.55039497 19.1597906 9.55039497 21.4814901 3.8014539z"></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#4285F4"
                                                d="M13.187 6.873c0-.474-.04-.93-.116-1.367H6.727v2.588h3.633a3.11 3.11 0 01-1.343 2.042v1.681h2.168c1.27-1.17 2.002-2.9 2.002-4.944"></path>
                                            <path
                                                fill="#34A853"
                                                d="M6.727 13.44c1.815 0 3.344-.596 4.458-1.623l-2.168-1.68c-.604.405-1.381.642-2.29.642-1.755 0-3.244-1.181-3.777-2.773H.717v1.73a6.728 6.728 0 006.01 3.703"></path>
                                            <path
                                                fill="#FABB05"
                                                d="M2.95 8.006a4.034 4.034 0 010-2.573v-1.73H.717A6.678 6.678 0 000 6.72c0 1.085.259 2.11.717 3.017L2.95 8.006z"></path>
                                            <path
                                                fill="#E94235"
                                                d="M6.727 2.66c.991 0 1.88.34 2.58 1.008l1.92-1.917C10.061.666 8.541 0 6.727 0a6.728 6.728 0 00-6.01 3.702L2.95 5.433C3.483 3.841 4.972 2.66 6.727 2.66"></path>
                                        </g>
                                    </g>
                                </g>
                                <path
                                    fill="#FFF"
                                    fillRule="nonzero"
                                    d="M63.546 13.224c-.83 0-1.577-.243-2.24-.728-.663-.485-1.12-1.167-1.372-2.044l1.484-.602c.15.55.413 1.001.791 1.351.378.35.833.525 1.365.525.495 0 .915-.128 1.26-.385s.518-.609.518-1.057c0-.41-.152-.749-.455-1.015-.303-.266-.833-.534-1.589-.805l-.63-.224c-.672-.233-1.237-.57-1.694-1.008-.457-.439-.686-1.017-.686-1.736 0-.495.135-.952.406-1.372a2.87 2.87 0 011.127-1.001c.48-.247 1.024-.371 1.631-.371.877 0 1.577.212 2.1.637.523.425.873.903 1.05 1.435l-1.414.602a1.825 1.825 0 00-.588-.84c-.29-.243-.663-.364-1.12-.364-.457 0-.842.117-1.155.35-.313.233-.469.532-.469.896 0 .345.14.63.42.854.28.224.719.439 1.316.644l.63.21c.859.299 1.524.688 1.995 1.169.471.48.707 1.122.707 1.925 0 .653-.168 1.202-.504 1.645a3.038 3.038 0 01-1.281.987 4.149 4.149 0 01-1.603.322zm7.318 0c-.513 0-.97-.1-1.372-.301a2.247 2.247 0 01-.938-.854 2.365 2.365 0 01-.336-1.253c0-.737.278-1.32.833-1.75.555-.43 1.258-.644 2.107-.644.42 0 .798.04 1.134.119.336.08.602.166.798.259v-.364c0-.439-.163-.796-.49-1.071-.327-.275-.747-.413-1.26-.413-.364 0-.707.08-1.029.238a2.018 2.018 0 00-.777.658l-1.078-.826c.317-.439.728-.78 1.232-1.022a3.822 3.822 0 011.68-.364c1.036 0 1.834.254 2.394.763s.84 1.225.84 2.149V13H73.09v-.854h-.07a2.416 2.416 0 01-.868.77 2.629 2.629 0 01-1.288.308zm.266-1.274c.373 0 .71-.089 1.008-.266a1.938 1.938 0 00.952-1.68 3.134 3.134 0 00-.749-.294 3.49 3.49 0 00-.889-.112c-.579 0-1.003.114-1.274.343a1.11 1.11 0 00-.406.889c0 .327.126.595.378.805.252.21.579.315.98.315zm4.364-6.09h1.722l1.974 5.152h.056l2.016-5.152h1.68L79.974 13h-1.54l-2.94-7.14zm11.644 7.364c-.7 0-1.328-.163-1.883-.49a3.453 3.453 0 01-1.302-1.351c-.313-.574-.469-1.22-.469-1.939 0-.681.152-1.314.455-1.897a3.578 3.578 0 011.267-1.393c.541-.345 1.157-.518 1.848-.518.719 0 1.342.159 1.869.476.527.317.929.751 1.204 1.302.275.55.413 1.171.413 1.862 0 .13-.014.294-.042.49h-5.474c.056.663.292 1.174.707 1.533.415.36.898.539 1.449.539.439 0 .819-.1 1.141-.301.322-.2.581-.474.777-.819l1.302.616a3.836 3.836 0 01-1.316 1.386c-.541.336-1.19.504-1.946.504zm1.834-4.634a1.78 1.78 0 00-.238-.749 1.703 1.703 0 00-.637-.623c-.285-.168-.632-.252-1.043-.252-.495 0-.912.147-1.253.441-.34.294-.576.688-.707 1.183h3.878zm9.47 4.522c-.317 0-.616-.051-.896-.154a1.967 1.967 0 01-.686-.406c-.401-.401-.602-.947-.602-1.638V7.218h-1.246V5.86h1.246V3.844h1.54V5.86h1.736v1.358h-1.736v3.36c0 .383.075.653.224.812.14.187.383.28.728.28.159 0 .299-.021.42-.063.121-.042.252-.11.392-.203v1.498c-.308.14-.681.21-1.12.21zm5.778.112c-.719 0-1.363-.166-1.932-.497a3.495 3.495 0 01-1.33-1.365 3.95 3.95 0 01-.476-1.932c0-.71.159-1.353.476-1.932a3.495 3.495 0 011.33-1.365c.57-.331 1.213-.497 1.932-.497.719 0 1.363.168 1.932.504.57.336 1.013.793 1.33 1.372.317.579.476 1.218.476 1.918a3.95 3.95 0 01-.476 1.932 3.495 3.495 0 01-1.33 1.365c-.57.331-1.213.497-1.932.497zm0-1.414a2.17 2.17 0 001.092-.287 2.11 2.11 0 00.805-.826c.2-.36.301-.782.301-1.267 0-.485-.1-.905-.301-1.26a2.122 2.122 0 00-.805-.819 2.17 2.17 0 00-1.092-.287 2.17 2.17 0 00-1.092.287 2.122 2.122 0 00-.805.819c-.2.355-.301.775-.301 1.26s.1.908.301 1.267c.2.36.469.635.805.826.336.191.7.287 1.092.287zm8.672-5.95h1.47v.938h.07c.205-.327.509-.602.91-.826a2.738 2.738 0 011.358-.336c.644 0 1.227.163 1.75.49.523.327.936.777 1.239 1.351.303.574.455 1.225.455 1.953s-.152 1.379-.455 1.953a3.467 3.467 0 01-1.239 1.351 3.235 3.235 0 01-1.75.49c-.504 0-.957-.112-1.358-.336-.401-.224-.705-.495-.91-.812h-.07l.07.994v2.954h-1.54V5.86zm3.584 5.95c.373 0 .723-.098 1.05-.294.327-.196.588-.476.784-.84.196-.364.294-.78.294-1.246 0-.467-.098-.88-.294-1.239a2.144 2.144 0 00-.784-.833 2.006 2.006 0 00-2.093 0 2.162 2.162 0 00-.777.833c-.196.36-.294.772-.294 1.239 0 .467.098.882.294 1.246.196.364.455.644.777.84.322.196.67.294 1.043.294zm5.078-8.834h1.54v2.73l-.07 1.092h.07c.205-.336.511-.614.917-.833.406-.22.842-.329 1.309-.329.868 0 1.53.254 1.988.763.457.509.686 1.202.686 2.079V13h-1.54V8.688c0-.541-.142-.947-.427-1.218-.285-.27-.656-.406-1.113-.406-.345 0-.656.098-.931.294a2.042 2.042 0 00-.651.777 2.297 2.297 0 00-.238 1.029V13h-1.54V2.976zm11.686 10.248c-.719 0-1.363-.166-1.932-.497a3.495 3.495 0 01-1.33-1.365 3.95 3.95 0 01-.476-1.932c0-.71.159-1.353.476-1.932a3.495 3.495 0 011.33-1.365c.57-.331 1.213-.497 1.932-.497.719 0 1.363.168 1.932.504.57.336 1.013.793 1.33 1.372.317.579.476 1.218.476 1.918a3.95 3.95 0 01-.476 1.932 3.495 3.495 0 01-1.33 1.365c-.57.331-1.213.497-1.932.497zm0-1.414a2.17 2.17 0 001.092-.287 2.11 2.11 0 00.805-.826c.2-.36.301-.782.301-1.267 0-.485-.1-.905-.301-1.26a2.122 2.122 0 00-.805-.819 2.17 2.17 0 00-1.092-.287 2.17 2.17 0 00-1.092.287 2.122 2.122 0 00-.805.819c-.2.355-.301.775-.301 1.26s.1.908.301 1.267c.2.36.469.635.805.826.336.191.7.287 1.092.287zm5.162-5.95h1.47v.938h.07c.205-.336.511-.614.917-.833.406-.22.838-.329 1.295-.329.868 0 1.528.254 1.981.763.453.509.679 1.202.679 2.079V13h-1.54V8.688c0-.56-.138-.97-.413-1.232-.275-.261-.656-.392-1.141-.392-.345 0-.653.096-.924.287a1.91 1.91 0 00-.63.763 2.37 2.37 0 00-.224 1.022V13h-1.54V5.86zm11.56 7.364c-.7 0-1.328-.163-1.883-.49a3.453 3.453 0 01-1.302-1.351c-.313-.574-.469-1.22-.469-1.939 0-.681.152-1.314.455-1.897a3.578 3.578 0 011.267-1.393c.541-.345 1.157-.518 1.848-.518.719 0 1.342.159 1.869.476.527.317.929.751 1.204 1.302.275.55.413 1.171.413 1.862 0 .13-.014.294-.042.49h-5.474c.056.663.292 1.174.707 1.533.415.36.898.539 1.449.539.439 0 .819-.1 1.141-.301.322-.2.581-.474.777-.819l1.302.616a3.836 3.836 0 01-1.316 1.386c-.541.336-1.19.504-1.946.504zm1.834-4.634a1.78 1.78 0 00-.238-.749 1.703 1.703 0 00-.637-.623c-.285-.168-.632-.252-1.043-.252-.495 0-.912.147-1.253.441-.34.294-.576.688-.707 1.183h3.878z"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </button>
    )
}

GooglePayButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default GooglePayButton
