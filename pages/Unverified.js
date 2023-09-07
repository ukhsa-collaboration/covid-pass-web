import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { trackPageView } from 'helpers/appInsights'
import { UNVERIFIED, INDEX_PAGE, SELECTED_FLOW } from 'constants/routes'
import { unverifiedStrings } from 'localization/translations'
import { getUserToken } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import Uplift from 'components/Uplift/Uplift'
import ManageNHSLogin from 'components/Uplift/ManageNHSLogin'
import LoadingPage from 'components/LoadingSpinner/LoadingPage'
import { getIdentityProofingLevel, considerGracePeriod, getLanguage } from 'helpers/userHelper'
import Head from 'next/head'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'

const Unverified = () => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    unverifiedStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('Unverified', UNVERIFIED)
    }, [])

    useEffect(() => {
        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        } else {
            const userPLevel = getIdentityProofingLevel(user)
            const domesticToggledOn = getDomesticFeatureToggle(featureToggle)
            const userShouldSeeSelectedFlowPage =
                !domesticToggledOn ||
                (userPLevel === 'P5Plus' && !considerGracePeriod(user)) ||
                userPLevel === 'P9'

            if (userShouldSeeSelectedFlowPage) {
                router.push(SELECTED_FLOW)
            }
        }
    }, [cookies, user, featureToggle, router])

    return !getUserToken(cookies) ||
        !getDomesticFeatureToggle(featureToggle) ||
        (getIdentityProofingLevel(user) !== 'P5' &&
            getIdentityProofingLevel(user) === 'P5Plus' &&
            !considerGracePeriod(user)) ? (
        <LoadingPage headTitle={unverifiedStrings.head} />
    ) : (
        <div>
            <Head>
                <title>{unverifiedStrings.head}</title>
            </Head>
            {user.userConfiguration?.policies?.gracePeriod?.timeLeft === '0:00:00' ||
            !user.userConfiguration?.policies?.gracePeriod?.isActive ? (
                <div className="grace-period-container__expired">
                    <h1 className="nhsuk-heading-xl" id="grace-period-expired-header">
                        {unverifiedStrings.gracePeriod.expiredAccess.heading}
                    </h1>
                    <p className="nhsuk-body" id="grace-period-expired-body">
                        {unverifiedStrings.gracePeriod.expiredAccess.body.text1}
                    </p>
                </div>
            ) : (
                <h1 className="nhsuk-heading-xl" id="unverified-header">
                    {unverifiedStrings.heading}
                </h1>
            )}

            <div>
                <ul className="nhsuk-grid-row nhsuk-card-group">
                    <li className="nhsuk-grid-column-one-half nhsuk-card-group__item">
                        <div
                            className="nhsuk-card nhsuk-card--clickable"
                            role="button"
                            tabIndex={0}>
                            <ManageNHSLogin
                                elements={
                                    <div className="nhsuk-card__content">
                                        <h3 className="nhsuk-card__heading nhsuk-heading-m">
                                            <a className="nhsuk-card__link">
                                                {unverifiedStrings.whatToDoNext.option1.heading}
                                            </a>
                                        </h3>
                                        <p className="nhsuk-card__description">
                                            {unverifiedStrings.whatToDoNext.option1.body1.text1}
                                            <span className="nhsuk-u-font-weight-bold">
                                                {
                                                    unverifiedStrings.whatToDoNext.option1.body1
                                                        .inlineBold1
                                                }
                                            </span>
                                        </p>
                                    </div>
                                }
                                page="Unverified"
                                ariaLabel={unverifiedStrings.whatToDoNext.option1.heading}
                            />
                        </div>
                    </li>

                    <li className="nhsuk-grid-column-one-half nhsuk-card-group__item">
                        <div className="nhsuk-card nhsuk-card--clickable">
                            <Uplift
                                elements={
                                    <div className="nhsuk-card__content">
                                        <h2 className="nhsuk-card__heading nhsuk-heading-m">
                                            <a className="nhsuk-card__link">
                                                {unverifiedStrings.whatToDoNext.option2.heading}
                                            </a>
                                        </h2>
                                        <p className="nhsuk-card__description">
                                            {unverifiedStrings.whatToDoNext.option2.body1.text1}
                                            <span className="nhsuk-u-font-weight-bold">
                                                {
                                                    unverifiedStrings.whatToDoNext.option2.body1
                                                        .textBold1
                                                }
                                            </span>
                                            {unverifiedStrings.whatToDoNext.option2.body1.text2}
                                            <span className="nhsuk-u-font-weight-bold">
                                                {
                                                    unverifiedStrings.whatToDoNext.option2.body1
                                                        .textBold2
                                                }
                                            </span>
                                            {unverifiedStrings.whatToDoNext.option2.body1.text3}
                                        </p>
                                    </div>
                                }
                                page="Unverified"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Unverified
