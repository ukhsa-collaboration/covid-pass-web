import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { button } from 'localization/translations'
import { getLanguage } from 'helpers/userHelper'

const AppleWalletButton = ({ onClick }) => {
    const user = useSelector((state) => state.userReducer.user)
    button.setLanguage(getLanguage(user))

    return (
        <button
            className="apple-wallet-button"
            onClick={onClick}
            onKeyPress={(e) => {
                e.code === 'Enter' && onClick()
            }}
            tabIndex={0}
            aria-label={button.openAppleWalletText}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 110.095 34.016"
                xmlSpace="preserve">
                <path
                    fill="#A6A6A6"
                    d="M99.846 0H10.255a83.604 83.604 0 00-2.168.016c-.714.02-1.439.061-2.155.19a7.185 7.185 0 00-2.043.675A6.842 6.842 0 002.15 2.148 6.746 6.746 0 00.882 3.89 7.122 7.122 0 00.21 5.937C.08 6.649.036 7.369.019 8.09c-.011.329-.013.66-.019.988V24.939c.006.334.008.659.019.991.017.72.061 1.441.191 2.153.126.72.338 1.395.672 2.048.326.64.754 1.231 1.268 1.738a6.713 6.713 0 001.739 1.267 7.208 7.208 0 002.043.676c.716.13 1.441.17 2.155.192.334.007.661.009.989.009.393.002.781.002 1.178.002h89.591c.384 0 .779 0 1.166-.002.328 0 .662-.002.991-.009.72-.022 1.443-.062 2.146-.192a7.267 7.267 0 002.054-.676 6.736 6.736 0 001.739-1.267 6.929 6.929 0 001.271-1.738 7.175 7.175 0 00.67-2.048c.128-.712.172-1.432.195-2.153.004-.332.004-.657.004-.991.013-.391.013-.779.013-1.176v-13.51c0-.393 0-.784-.013-1.174 0-.328 0-.659-.004-.989-.023-.721-.067-1.441-.195-2.153a7.19 7.19 0 00-.67-2.047 6.925 6.925 0 00-1.271-1.742 6.807 6.807 0 00-1.739-1.267 7.213 7.213 0 00-2.054-.675c-.704-.128-1.426-.17-2.146-.19-.33-.007-.664-.011-.991-.014C100.625 0 100.23 0 99.846 0z"></path>
                <path d="M99.846.664c.382 0 .775 0 1.157.002l.057.001.922.013c.577.017 1.327.051 2.054.18a6.57 6.57 0 011.863.614 6.3 6.3 0 012.72 2.717c.296.579.491 1.189.607 1.869.13.703.17 1.433.187 2.045.006.325.006.651.006.991.008.386.008.771.008 1.159v13.511c0 .393 0 .775-.008 1.176 0 .33 0 .653-.006.97-.017.622-.057 1.35-.187 2.06a6.558 6.558 0 01-.601 1.856 6.435 6.435 0 01-1.155 1.575 6.087 6.087 0 01-1.571 1.142 6.659 6.659 0 01-1.863.616c-.71.125-1.436.161-2.045.181-.328.007-.655.009-.985.009-.384.002-.777.002-1.159.002H10.255c-.393 0-.783 0-1.178-.002-.325 0-.647-.002-.968-.009-.617-.02-1.344-.056-2.058-.181a6.686 6.686 0 01-1.859-.616 6.1 6.1 0 01-1.575-1.149 6.074 6.074 0 01-1.142-1.567 6.581 6.581 0 01-.611-1.865C.73 27.229.698 26.485.683 25.91a38.756 38.756 0 01-.013-.685l-.004-.286V9.089l.004-.298c.002-.227.006-.454.013-.685.015-.568.046-1.312.183-2.053.12-.686.319-1.294.611-1.862a6.016 6.016 0 011.145-1.572c.464-.466.991-.85 1.573-1.146A6.54 6.54 0 016.05.859C6.779.73 7.53.697 8.1.679l.976-.014c.395-.002.785-.002 1.178-.002h89.592"></path>
                <g>
                    <defs>
                        <path
                            id="SVGID_1_"
                            d="M33.601 21.437l-.001.597c-.001.168-.003.335-.008.503-.01.365-.032.733-.097 1.094a3.689 3.689 0 01-.347 1.041 3.499 3.499 0 01-1.55 1.53 3.796 3.796 0 01-1.054.343 7.368 7.368 0 01-1.109.096c-.17.004-.34.007-.509.007l-.605.001H12.839l-.605-.001c-.17-.001-.34-.003-.509-.007a7.5 7.5 0 01-1.109-.096 3.763 3.763 0 01-1.054-.343 3.537 3.537 0 01-1.55-1.53 3.627 3.627 0 01-.347-1.041 7.303 7.303 0 01-.097-1.094 21.093 21.093 0 01-.008-.503l-.001-.597V10.693l.001-.381c.001-.107.002-.214.005-.321.006-.233.02-.468.062-.698a2.242 2.242 0 011.211-1.641c.214-.108.435-.177.672-.219.234-.042.472-.055.708-.062.108-.003.217-.004.325-.005l.386-.001H30.129l-1.374.001 1.478-.001.386.001c.108.001.217.002.325.005.236.006.474.02.708.062.237.042.457.111.672.219a2.242 2.242 0 01.989.977c.11.212.179.43.222.664.042.23.056.465.062.698a48.388 48.388 0 01.006.702v10.744z"></path>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use overflow="visible" xlinkHref="#SVGID_1_"></use>
                    </clipPath>
                    <path
                        fill="#D9D6CC"
                        d="M33.601 9.87v16.78H7.559V9.852c0-1.423 1.101-2.457 2.459-2.457h21.123c1.358 0 2.459 1.025 2.459 2.457l.001.018z"
                        clipPath="url(#SVGID_2_)"></path>
                    <linearGradient
                        id="SVGID_3_"
                        x1="20.581"
                        x2="20.581"
                        y1="16.408"
                        y2="18.349"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#D9D6CC"></stop>
                        <stop offset="0.305" stopColor="#C7C4BB"></stop>
                        <stop offset="0.918" stopColor="#979790"></stop>
                        <stop offset="1" stopColor="#90908A"></stop>
                    </linearGradient>
                    <path
                        fill="url(#SVGID_3_)"
                        d="M7.56 16.408H33.601V18.349H7.56z"
                        clipPath="url(#SVGID_2_)"></path>
                    <g clipPath="url(#SVGID_2_)">
                        <defs>
                            <path
                                id="blue_157_"
                                d="M8.644 20.764v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.769-1.052c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.311h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"></path>
                        </defs>
                        <clipPath id="blue_1_">
                            <use overflow="visible" xlinkHref="#blue_157_"></use>
                        </clipPath>
                        <path
                            fill="#3B99C9"
                            d="M8.644 20.764v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.769-1.052c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.311h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
                            clipPath="url(#blue_1_)"></path>
                        <g clipPath="url(#blue_1_)">
                            <image
                                width="171"
                                height="99"
                                opacity="0.17"
                                overflow="visible"
                                transform="matrix(.16 0 0 .16 6.92 8.443)"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAABqCAYAAAD6OxBTAAAACXBIWXMAAEU0AABFNAGuxrUdAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABpVJREFUeNrsmwtzozYURiUZO940 adPt//+RnSSOn6jCvgrXiiC8vN0x58zcAfyC2T1cPgliDAAAAMAvxc58/3Bb/L1JZTvsA6nnK7W/ lfj2hiI3SY3ISK63/dSC2xuKXJVrERy55yezz8icq1GCFxPKrEV2ybprkB/B59mVqypV+cxycC4v RgidE7mqhVS67pLvIPO85C4ToU9S6Xoqe2+xi5FCa5ELtUxrkenaiD2v2KFljRIfG+qkToTeHbsY KbSWeBVqmVkuldgLOvYshfaJ0FHefaiDLPdq+yBO6O7dWexihNBR5ijwOtSDLGOtlNxabJvkbMS+ zyztk5ycCl3VNtROlrFcxofOYg/p1LpDr5TIj6r+CPVDiR7F/hJDLFLfpdj+WkZdsRPvpD5CbaTe k6t5bqA5WafOdemlCBslfgr1LMunjNhnqW0ycETq++zU9rLy2al9HT2i1Fsl9JvUUl3JczMmnQaO feNH2qXXIm8l81+q/hSxH0Xsc6cOP1DYy3fJ1DOQ216LefLX0WOruvOjNL4iEbpp2m/STu0SoR9F 3krkn6H+DvUi288i/NrWnbrw9ZmYCo3Y9zlIjMuTrTP13tdSv4pLS/ErRpZ0NqSU97/t1kUPoXWn 1tEjdulK6H9E7rPUVqRWZ6EeKFoGirMbLEapD1ak9vWEwkJ97pBUlNvWyWaa+JGLHrpTv4jQP+1l /Vne1wfdNKVnkPvuZM5JrXP1Tq7i5xwtXzyq9/RsSGyIncTu06m11EuVp58kQ5/ztAj9ojJ17NKF YY56zjEk7dYPygkjr+9U1n5TM2dbNblQKm/8EKltw8xH7NQ/kpmP52QGJA4SC5O/m4jU84kgJunW elBY5e2dvzjzpmbNVpmGaKbo1MZ8vR2+TMQ+T+tJhn5Usx6fA0TDE3tzjiHp8x8nJeZJZkOiM9Eb fX8j92Dc4ExtW+KHvvESz6y1+XrDZdkyOETqeWVrmyyjR+cKL6587VXT4xVmrNRaOtci9spen125 h5naMjRS3xe5eGDN9Q2Uhbl+dmiZNMEmoe1UUreJrUs/qedaZjqQeB5i5zp1OvmgH1EuwsairP1Z ZMZ1k3Zqk8SQz7LXXXnBoBC+kdy2lBvbEF1PodOzy9la6qZ5aIvM8M14zbY4Y1tOisFStx2Ea5GY P9mCQW65r+L2csf12Klp6Niuw1kG0NYcv/OtV2N0HXbeFkVyEiMyjJV9lEtu4M5ze+2ceQBuiRsi c4+8zEAR+rr1S6W+2eUC4HeRGmA2UtOtgU4NgNQASA1IDYDUAEgNgNQASA1IDYDUAEgNgNQASA2A 1IDUAEgNgNQASA2A1IDUAEgNgNQASA2A1IDUAEgNgNQASA2A1IDUAEgNgNQASA2A1ABIDUgNgNQA SA2A1ABIDUgNgNQASA2A1AD/i9Q+Wff8M8M3TvjfXervRAe4qRNugoPyDWcgIsOQq7of608x8oi8 zcvsWy41lv9L5G1rhn6k2MXYA/MXS+N2mSmbfB+pkTp1xadONXRsP1bqpkFeegDxwE7mev0kAvsk 5iD1vMX2GU8+y9fvt0WR1gmIYsCB6TOtOpBj2DgGU49h/aBKC20RGpSI0Z3Kk6Op3Tm7pCQvM3Fl sviRu2Sc1MHsQ+1CbUOtRORS3o9SIzSYtCGKM1vxZy91aBC7UwTpm6m9kvVK5vDGJlj7ENYX8pmV /L7LdGkEJ1Nrqd9DbcKLH4ncxwaxR0vtW4SuDqg6kDeROAq9U1Jb4gdkcnWMH5Urm1Cv4tG7qeU+ DBG7T/zQwf4gQm+U0E4Gjbtg7lp+G6mhTepK2L2vG+O/IncqtpZ6dKf2Ganj2fUhO9cZuure7/7y 2tJdOrclU0N61feXOqoI+y5CR7E30jhjDCm7dus+8SNKHWPHUkoLXR3IQ4wipUjtEBpqmeI8tG6S e9UkX1W33ibZepL40ZSnd2oQWKqDWovQUfaz1CXRA75e+b2Ks3t19d+I0G0RZPQ8dRTaqhy0k+1S bW+U0FF48jR0ibS6WW7VBMS2QejJB4oH9bqWPMaRhbnO0ggNfcTeq859UDMgMVObKaTOHUDcPiqp CxU5uIsInQeN5npmTd9hPDUMEkcPFCNlpnMvZMcuKYSGIWKnz4SkD8d1mtLrI138bJRWZ2b9Wu53 kRtyV/8muXPLzrfJ+8qmO7BtyM10aRiar1PBfcNnJpXa9BQYsaFrtzYtAvshco7B3vj3YV5SDxIZ AAAAAAAAAGA+/CfAAPyXvQniTAVtAAAAAElFTkSuQmCC"></image>
                            <path
                                fill="#FFF"
                                d="M8.644 22.932v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"></path>
                        </g>
                        <path
                            fill="#FFB003"
                            d="M8.644 22.932v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
                            clipPath="url(#blue_1_)"></path>
                        <g clipPath="url(#blue_1_)">
                            <image
                                width="171"
                                height="99"
                                opacity="0.16"
                                overflow="visible"
                                transform="matrix(.16 0 0 .16 6.943 10.689)"
                                xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="></image>
                            <path
                                fill="#FFF"
                                d="M8.644 25.1V14.95v-.244c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"></path>
                        </g>
                        <path
                            fill="#50BE3D"
                            d="M8.644 25.1V14.95v-.244c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
                            clipPath="url(#blue_1_)"></path>
                        <g clipPath="url(#blue_1_)">
                            <image
                                width="171"
                                height="85"
                                opacity="0.17"
                                overflow="visible"
                                transform="matrix(.16 0 0 .16 6.943 12.857)"
                                xlinkHref="data:image/png;base64,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"></image>
                            <path
                                fill="#FFF"
                                d="M8.644 25.1v-7.982-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.432 1.432 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003l.245-.001H30.31h-.869.937a20.009 20.009 0 01.451.004c.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"></path>
                        </g>
                        <path
                            fill="#F26D5F"
                            d="M8.644 25.1v-7.982-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.432 1.432 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003l.245-.001H30.31h-.869.937a20.009 20.009 0 01.451.004c.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
                            clipPath="url(#blue_1_)"></path>
                    </g>
                    <g clipPath="url(#SVGID_2_)">
                        <image
                            width="181"
                            height="79"
                            opacity="0.12"
                            overflow="visible"
                            transform="matrix(.16 0 0 .16 6.121 15.425)"
                            xlinkHref="data:image/png;base64,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"></image>
                        <path
                            fill="#FFF"
                            d="M33.601 26.906H7.559V17.15h6.324l.466.001c.131.001.262.002.392.006.285.008.572.024.854.075.286.051.552.135.812.267-.055-.028.715.288 1.391 1.339.488.758 1.436 1.562 2.763 1.562s2.275-.804 2.763-1.562c.642-.999 1.356-1.322 1.39-1.339.26-.132.526-.216.812-.267.282-.051.569-.067.854-.075.131-.004.262-.005.392-.006l.466-.001H33.6v9.756z"></path>
                    </g>
                    <path
                        fill="#D9D6CC"
                        d="M33.601 26.906H7.559V17.15h6.324l.466.001c.131.001.262.002.392.006.285.008.572.024.854.075.286.051.552.135.812.267-.055-.028.715.288 1.391 1.339.488.758 1.436 1.562 2.763 1.562s2.275-.804 2.763-1.562c.642-.999 1.356-1.322 1.39-1.339.26-.132.526-.216.812-.267.282-.051.569-.067.854-.075.131-.004.262-.005.392-.006l.466-.001H33.6v9.756z"
                        clipPath="url(#SVGID_2_)"></path>
                </g>
                <g fill="#FFF">
                    <path d="M43.696 23.416H40.49l-.81 2.307h-1.056l2.971-8.059h.994l2.971 8.059h-1.055l-.809-2.307zm-2.91-.855H43.4l-1.29-3.674h-.034l-1.29 3.674zM52.092 22.712c0 1.837-1.039 3.066-2.558 3.066-.854 0-1.542-.374-1.921-1.033h-.022v2.988h-.972v-8.031h.921v.978h.022c.352-.625 1.117-1.033 1.949-1.033 1.537-.001 2.581 1.228 2.581 3.065zm-.994 0c0-1.329-.704-2.2-1.765-2.2-1.039 0-1.748.894-1.748 2.2 0 1.312.709 2.201 1.748 2.201 1.061 0 1.765-.866 1.765-2.201zM58.845 22.712c0 1.837-1.039 3.066-2.558 3.066-.854 0-1.542-.374-1.921-1.033h-.022v2.988h-.972v-8.031h.921v.978h.022c.352-.625 1.117-1.033 1.949-1.033 1.537-.001 2.581 1.228 2.581 3.065zm-.994 0c0-1.329-.704-2.2-1.765-2.2-1.039 0-1.748.894-1.748 2.2 0 1.312.709 2.201 1.748 2.201 1.061 0 1.765-.866 1.765-2.201zM60.01 17.312h.972v8.411h-.972v-8.411zM67.512 24.002c-.167 1.033-1.212 1.776-2.496 1.776-1.692 0-2.759-1.178-2.759-3.043s1.072-3.088 2.714-3.088c1.608 0 2.614 1.134 2.614 2.954v.38h-4.323v.056c0 1.145.704 1.887 1.776 1.887.754 0 1.34-.357 1.514-.921h.96zm-4.25-1.798h3.312c-.022-1.022-.67-1.703-1.62-1.703-.943 0-1.625.687-1.692 1.703zM74.81 25.723h-.949l-2.195-8.059h1.05l1.614 6.579h.045l1.815-6.579h1.017l1.815 6.579h.044l1.614-6.579h1.05l-2.195 8.059h-.949l-1.86-6.395h-.056l-1.86 6.395zM82.102 24.008c0-1.033.793-1.642 2.256-1.731l1.687-.101v-.502c0-.749-.491-1.162-1.379-1.162-.698 0-1.217.357-1.335.927h-.933c.028-1.016 1.017-1.792 2.279-1.792 1.424 0 2.34.759 2.34 1.943v4.133h-.921v-1.044h-.022c-.34.67-1.094 1.1-1.938 1.1-1.224-.001-2.034-.704-2.034-1.771zm3.943-.575v-.486l-1.575.1c-.905.056-1.374.386-1.374.966 0 .559.486.921 1.246.921.983.001 1.703-.636 1.703-1.501zM88.472 17.312h.972v8.411h-.972v-8.411zM91.287 17.312h.972v8.411h-.972v-8.411zM98.789 24.002c-.167 1.033-1.212 1.776-2.496 1.776-1.692 0-2.759-1.178-2.759-3.043s1.072-3.088 2.714-3.088c1.608 0 2.614 1.134 2.614 2.954v.38h-4.323v.056c0 1.145.704 1.887 1.776 1.887.754 0 1.34-.357 1.514-.921h.96zm-4.25-1.798h3.312c-.022-1.022-.67-1.703-1.62-1.703-.943 0-1.625.687-1.692 1.703zM101.432 18.345v1.357h1.173v.804h-1.173v3.613c0 .553.234.804.748.804.118 0 .352-.017.419-.028v.821c-.117.028-.396.05-.625.05-1.089 0-1.513-.452-1.513-1.608v-3.652h-.838v-.804h.838v-1.357h.971z"></path>
                    <g>
                        <path d="M42.526 12.485h-2.409l-.608 1.733h-.793l2.232-6.055h.747l2.232 6.055h-.793l-.608-1.733zm-2.186-.642h1.964l-.949-2.702h-.067l-.948 2.702zM44.416 11.957c0-1.418.751-2.341 1.901-2.341.629 0 1.163.298 1.418.793h.063v-2.51h.722v6.319h-.688v-.722h-.067c-.285.503-.822.801-1.448.801-1.158.001-1.901-.918-1.901-2.34zm.747 0c0 1.058.495 1.691 1.322 1.691.822 0 1.33-.646 1.33-1.691 0-1.037-.512-1.691-1.33-1.691-.823 0-1.322.637-1.322 1.691zM49.693 11.957c0-1.418.751-2.341 1.901-2.341.629 0 1.163.298 1.418.793h.063v-2.51h.722v6.319h-.688v-.722h-.067c-.285.503-.822.801-1.448.801-1.159.001-1.901-.918-1.901-2.34zm.747 0c0 1.058.495 1.691 1.322 1.691.822 0 1.33-.646 1.33-1.691 0-1.037-.512-1.691-1.33-1.691-.823 0-1.322.637-1.322 1.691zM58.558 8.566v1.129h1.049v.604h-1.049v2.56c0 .533.202.759.671.759a2.8 2.8 0 00.327-.017v.608a2.336 2.336 0 01-.415.042c-.932 0-1.305-.344-1.305-1.208v-2.745h-.76v-.603h.76V8.566h.722zM60.366 11.957c0-1.456.797-2.341 2.085-2.341s2.085.885 2.085 2.341c0 1.452-.797 2.341-2.085 2.341s-2.085-.89-2.085-2.341zm3.424 0c0-1.074-.483-1.691-1.339-1.691s-1.338.617-1.338 1.691c0 1.07.482 1.691 1.338 1.691s1.339-.622 1.339-1.691z"></path>
                    </g>
                </g>
            </svg>
        </button>
    )
}

AppleWalletButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default AppleWalletButton
