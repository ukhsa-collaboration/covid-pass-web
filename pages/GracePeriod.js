import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { trackPageView } from 'helpers/appInsights'
import { GRACE_PERIOD, INDEX_PAGE, SELECTED_FLOW, UNVERIFIED } from 'constants/routes'
import SecondaryButton from 'components/buttons/SecondaryButton'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { gracePeriodStrings } from 'localization/translations'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import {
    getIdentityProofingLevel,
    isActiveGracePeriod,
    considerGracePeriod,
    getLanguage
} from 'helpers/userHelper'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Head from 'next/head'
import { getDomesticFeatureToggle } from 'helpers/featureToggleHelper'

const GracePeriod = () => {
    const router = useRouter()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const featureToggle = useSelector((state) => state.featureToggleReducer.featureToggle)

    gracePeriodStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        trackPageView('GracePeriod', GRACE_PERIOD)
    }, [])

    useEffect(() => {
        const userPLevel = getIdentityProofingLevel(user)
        const userGracePeriodIsActive = isActiveGracePeriod(user)
        const domesticToggledOn = getDomesticFeatureToggle(featureToggle)

        if (!getUserToken(cookies)) {
            router.push(INDEX_PAGE).then(() => window.location.reload())
        } else {
            if (!domesticToggledOn) {
                router.push(SELECTED_FLOW)
                return
            }

            if (userPLevel === 'P5') {
                router.push(UNVERIFIED)
            } else if (
                (userPLevel === 'P5Plus' && !considerGracePeriod(user)) ||
                userPLevel === 'P9'
            ) {
                router.push(SELECTED_FLOW)
            } else if (userPLevel === 'P5Plus' && !userGracePeriodIsActive) {
                router.push(UNVERIFIED)
            }
        }
    }, [cookies, user, featureToggle, router])

    const getTimeLeft = () => {
        const time = user.userConfiguration.policies.gracePeriod.timeLeft
        var [hours, minutes, seconds] = time.split(':')

        return {
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        }
    }

    const getRemainingTime = () => {
        const time = getTimeLeft()
        switch (true) {
            case time.hours > 1:
                return time.hours + ' ' + gracePeriodStrings.date.hours
            case time.hours === 1:
                return time.hours + ' ' + gracePeriodStrings.date.hour
            case time.minutes > 1:
                return time.minutes + ' ' + gracePeriodStrings.date.minutes
            case time.minutes === 1:
            default:
                return '1 ' + gracePeriodStrings.date.minute
        }
    }

    const getFirstLoginTime = () => {
        const time = user.userConfiguration.policies.gracePeriod.countdownTimeInHours
        switch (true) {
            case time > 1:
                return time + ' ' + gracePeriodStrings.date.hours
            case time === 1:
                return time + ' ' + gracePeriodStrings.date.hour
        }
    }

    const temporaryAccessEndsIn = () => {
        const time = getTimeLeft()
        var hours, minutes

        switch (true) {
            case time.hours > 1:
                hours = time.hours + ' ' + gracePeriodStrings.date.hours
                break
            case time.hours === 1:
                hours = time.hours + ' ' + gracePeriodStrings.date.hour
                break
            default:
                hours = ''
        }

        switch (true) {
            case time.minutes == 0:
                minutes = ''
                break
            case time.minutes > 1:
                minutes = time.minutes + ' ' + gracePeriodStrings.date.minutes
                break
            case time.minutes === 1:
            default:
                minutes = '1 ' + gracePeriodStrings.date.minute
        }

        return (
            <p className="nhsuk-body" id="grace-period-temporary-access-ends-in">
                {gracePeriodStrings.date.text1}&nbsp;
                {hours + ' ' + minutes}
            </p>
        )
    }

    const newGracePeriod = () => {
        return (
            <>
                <h1 className="nhsuk-heading-xl" id="grace-period-new-user-header">
                    {gracePeriodStrings.firstAccess.heading.text1}
                </h1>
                <p className="nhsuk-body" id="grace-period-new-user-body">
                    {gracePeriodStrings.firstAccess.body.text1}&nbsp;
                    {getFirstLoginTime()}&nbsp;
                    {gracePeriodStrings.firstAccess.body.text2}
                </p>
            </>
        )
    }

    const InGracePeriod = () => {
        return (
            <>
                <h1 className="nhsuk-heading-xl" id="grace-period-active-user-header">
                    {gracePeriodStrings.countDownAccess.heading.text1}
                </h1>
                <p className="nhsuk-body" id="grace-period-active-user-body">
                    {gracePeriodStrings.countDownAccess.body.text1}&nbsp;
                    {getRemainingTime()}&nbsp;
                    {gracePeriodStrings.countDownAccess.body.text2}
                </p>
            </>
        )
    }

    const ValidGracePeriod = () => {
        return (
            <div className="grace-period-container__remaining">
                <Head>
                    <title>{gracePeriodStrings.firstAccess.head}</title>
                </Head>
                {user.userConfiguration.policies.gracePeriod.isNew
                    ? newGracePeriod()
                    : InGracePeriod()}
                {temporaryAccessEndsIn()}
                <div className="grace-period-container__remaining__button-group">
                    <PrimaryButton
                        text={gracePeriodStrings.unlockButton}
                        onClickAction={() => router.push(UNVERIFIED)}
                    />
                    <SecondaryButton
                        text={gracePeriodStrings.skipButton}
                        onClickAction={() => router.push(SELECTED_FLOW)}
                    />
                </div>
            </div>
        )
    }

    return user.userConfiguration?.policies?.gracePeriod &&
        isActiveGracePeriod(user) &&
        getDomesticFeatureToggle(featureToggle) ? (
        <div className="grace-period-container">{ValidGracePeriod()}</div>
    ) : (
        <LoadingSpinner size="large" />
    )
}

export default GracePeriod
