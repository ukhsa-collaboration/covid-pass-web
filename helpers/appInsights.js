import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { isNhsAppNative } from 'helpers/isNhsApp'

export const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.NEXT_PUBLIC_APP_INSIGHTS_INSTRUMENTATION_KEY,
        isStorageUseDisabled: true,
        isCookieUseDisabled: true
    }
}).loadAppInsights()

export const getPlatform = () => {
    return isNhsAppNative() ? 'NHS App' : 'Web'
}

export const trackPageView = (name, URL) => {
    appInsights.trackPageViewPerformance({
        name: name,
        url: URL,
        properties: {
            platform: getPlatform()
        }
    })
    appInsights.trackPageView({
        name: name,
        properties: {
            platform: getPlatform()
        }
    })
}

export const trackEvent = (eventName) => {
    appInsights.trackEvent({
        name: eventName,
        properties: {
            platform: getPlatform()
        }
    })
}

export const forceTrackEvent = (eventName) => {
    appInsights.trackEvent({
        name: eventName,
        properties: {
            platform: getPlatform()
        }
    })
    appInsights.flush()
}

export const trackError = (string, error) => {
    appInsights.trackException({
        exception: new Error(string, error.status, error.data),
        properties: {
            platform: getPlatform()
        }
    })
}
