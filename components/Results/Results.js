import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { getTestResults, getVaccinationResults, getMedicalExemptions } from 'actions/userActions'
import nhsStatusCodes from 'api/nhsStatusCodes'
import { trackEvent, trackError } from 'helpers/appInsights'
import VaccinationResultCard from 'components/Results/Cards/VaccinationResultCard'
import ExemptionResultCard from 'components/Results/Cards/ExemptionResultCard'
import TestResultCard from 'components/Results/Cards/TestResultCard'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import SeeMore from 'components/Results/SeeMoreButton'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { getLanguage } from 'helpers/userHelper'
import {
    CACHE_TEST_RESULTS,
    REMOVE_ALL_REDUX,
    CACHE_VACCINATION_RESULTS,
    CACHE_EXEMPTION_RESULTS
} from 'actions/types'
import { recordsPageStrings } from 'localization/translations'
import { TIMEOUT_ERROR, DETAILS, ERROR_500, SESSION_EXPIRED, SESSION_ENDED } from 'constants/routes'
import { useRouter } from 'next/router'
import { removeSlashFromRoute } from 'helpers/index'
import { checkCacheUnixTime } from 'helpers/auth'
import {
    getUserToken,
    getUserTokenId,
    getUserTokenIdUnixExpiry,
    removeUserCookie
} from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import FilterExpander from 'components/Results/FilterExpander'
import MonthDivider from 'components/Results/MonthDivider'
import { mostRecentResultInMonth } from 'helpers/resultHelper'
import { uuidCookieReduxNotMatching } from 'helpers/auth'

const Results = ({ showTestResults, showVaccinationResults, showExemptionResults }) => {
    const user = useSelector((state) => state.userReducer.user)
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const userApiCache = useSelector((state) => state.userApiCacheReducer.userApiCache)
    const router = useRouter()
    const [resultsData, setResultsData] = React.useState([])
    const [resultsTestData, setTestResultsData] = React.useState({
        api: false,
        data: []
    })
    const [resultsVaccinationData, setVaccinationResultsData] = React.useState({
        api: false,
        data: []
    })
    const [resultsExemptionsData, setExemptionsData] = React.useState({
        api: false,
        data: []
    })
    const [results, setResults] = React.useState([])
    const [fetchingTestResults, setFetchingTestResults] = React.useState(false)
    const MOBILE_RESULTS_LIMIT = 3,
        TABLET_RESULTS_LIMIT = 4,
        OTHER_RESULTS_LIMIT = 5
    const resultLimit = isMobileOnly
        ? MOBILE_RESULTS_LIMIT
        : isTablet
        ? TABLET_RESULTS_LIMIT
        : OTHER_RESULTS_LIMIT
    const [resultCount, setResultCount] = React.useState(resultLimit)
    const [filterStatus, setFilterStatus] = React.useState({
        vaccinations: true,
        tests: true,
        exemptions: true
    })

    const dispatch = useDispatch()

    recordsPageStrings.setLanguage(getLanguage(user))

    useEffect(() => {
        if (getUserToken(cookies)) {
            if (uuidCookieReduxNotMatching(cookies, user)) {
                router.push(SESSION_ENDED).then(() => {
                    dispatch({ type: REMOVE_ALL_REDUX })
                })
                return
            }

            /*
             * Fetch Test results from either api
             */
            if (showTestResults) {
                if (
                    userApiCache.results.testResults.data &&
                    checkCacheUnixTime(userApiCache.results.testResults.cacheExpiry)
                ) {
                    setTestResultsData({
                        api: true,
                        data: userApiCache.results.testResults.data
                    })
                } else {
                    if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                        fetchTestResults()
                    } else {
                        router.push(SESSION_EXPIRED).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        trackEvent('Results Vaccination - Id token session expired')
                    }
                }
            } else {
                setTestResultsData({
                    api: true,
                    data: []
                })
            }

            /*
             * Set vaccination data if flow is international state, else set API status of results to true
             * Fetch Vaccination results from either api or api cache
             */
            if (showVaccinationResults) {
                if (
                    userApiCache.results.vaccinationResults.data &&
                    checkCacheUnixTime(userApiCache.results.vaccinationResults.cacheExpiry)
                ) {
                    setVaccinationResultsData({
                        api: true,
                        data: userApiCache.results.vaccinationResults.data
                    })
                } else {
                    if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                        fetchVaccinationResults()
                    } else {
                        router.push(SESSION_EXPIRED).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        trackEvent('Results Vaccination - Id token session expired')
                    }
                }
            } else {
                setVaccinationResultsData({
                    api: true,
                    data: []
                })
            }

            /*
             * Fetch Exemptions results from either api
             */
            if (showExemptionResults) {
                if (
                    userApiCache.results.exemptionResults.data &&
                    checkCacheUnixTime(userApiCache.results.exemptionResults.cacheExpiry)
                ) {
                    setExemptionsData({
                        api: true,
                        data: userApiCache.results.exemptionResults.data
                    })
                } else {
                    if (checkCacheUnixTime(getUserTokenIdUnixExpiry(cookies))) {
                        fetchExemptions()
                    } else {
                        router.push(SESSION_EXPIRED).then(() => {
                            removeUserCookie(setCookie)
                            dispatch({ type: REMOVE_ALL_REDUX })
                        })
                        trackEvent('Results Exemptions - Id token session expired')
                    }
                }
            } else {
                setExemptionsData({
                    api: true,
                    data: []
                })
            }
        }
    }, [
        cookies,
        router,
        user,
        showTestResults,
        showVaccinationResults,
        showExemptionResults,
        userApiCache.results.exemptionResults,
        userApiCache.results.testResults,
        userApiCache.results.vaccinationResults,
        dispatch,
        setCookie
    ])

    const SeeMoreClick = () => {
        setResultCount(resultCount + resultLimit)
    }

    useEffect(() => {
        if (resultsTestData || resultsVaccinationData || resultsExemptionsData) {
            var arr = []
            arr = filterStatus.vaccinations ? arr.concat(resultsVaccinationData['data']) : arr
            arr = filterStatus.tests ? arr.concat(resultsTestData['data']) : arr
            arr = filterStatus.exemptions ? arr.concat(resultsExemptionsData['data']) : arr

            arr.forEach(
                (value) => (value['sortDate'] = value.dateTimeOfTest || value.dateExemptionGiven)
            )

            const sortedArray = arr.sort((a, b) => {
                return (
                    (b.sortDate ? new Date(b.sortDate) : new Date(b.date)) -
                    (a.sortDate ? new Date(a.sortDate) : new Date(a.date))
                )
            })
            setResultsData(sortedArray)
        }
    }, [resultsVaccinationData, resultsTestData, resultsExemptionsData, filterStatus])

    useEffect(() => {
        if (
            resultsVaccinationData['api'] &&
            resultsTestData['api'] &&
            resultsExemptionsData['api']
        ) {
            if (resultsData.length > 0) {
                let arr = resultsData.slice(0, resultCount)
                setResults(buildResultsList(arr))
                trackEvent('Records - records found')
            } else if (resultsData.length === 0) {
                setFetchingTestResults(false)
                setResults('EMPTY')
                trackEvent('Records - no records found')
            }
        }
    }, [resultsData, resultCount, resultsVaccinationData, resultsTestData, resultsExemptionsData])

    const fetchTestResults = async () => {
        setFetchingTestResults(true)
        try {
            const testRes = await dispatch(
                getTestResults(getUserToken(cookies), getUserTokenId(cookies))
            )
            testRes.data.forEach((value) => (value['api'] = 'test'))
            testRes.data.forEach((value) => (value['sortDate'] = value.dateTimeOfTest))
            if (testRes.status === nhsStatusCodes.Success) {
                setTestResultsData({
                    api: true,
                    data: testRes.data
                })
                dispatch({
                    type: CACHE_TEST_RESULTS,
                    payload: {
                        data: testRes.data,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                    }
                })
            }
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.AuthTokenIncorrect:
                    router.push(SESSION_EXPIRED).then(() => {
                        removeUserCookie(setCookie)
                        dispatch({ type: REMOVE_ALL_REDUX })
                    })
                    break
                case nhsStatusCodes.RequestTimeout:
                    router.push(TIMEOUT_ERROR)
                    break
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.ServerError:
                case nhsStatusCodes.wafErrorError:
                default:
                    pushToFiveHundredPage()
                    break
            }
            trackError('API - Covid Test Records', err)
            setTestResultsData({
                api: true,
                data: []
            })
        }
    }

    const fetchExemptions = async () => {
        setFetchingTestResults(true)
        try {
            const exemptionsRes = await dispatch(
                getMedicalExemptions(getUserToken(cookies), getUserTokenId(cookies))
            )
            exemptionsRes.data.forEach((value) => (value['api'] = 'exemptions'))
            exemptionsRes.data.map((value) => {
                value.dateExemptionGiven =
                    value.dateExemptionGiven === null ? new Date() : value['dateExemptionGiven']

                return value
            })
            exemptionsRes.data.forEach((value) => (value['sortDate'] = value.dateExemptionGiven))

            if (exemptionsRes.status === nhsStatusCodes.Success) {
                setExemptionsData({
                    api: true,
                    data: exemptionsRes.data
                })
                dispatch({
                    type: CACHE_EXEMPTION_RESULTS,
                    payload: {
                        data: exemptionsRes.data,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                    }
                })
            }
        } catch (err) {
            switch (err.response.status) {
                case nhsStatusCodes.AuthTokenIncorrect:
                    router.push(SESSION_EXPIRED).then(() => {
                        removeUserCookie(setCookie)
                        dispatch({ type: REMOVE_ALL_REDUX })
                    })
                    break
                case nhsStatusCodes.RequestTimeout:
                    router.push(TIMEOUT_ERROR)
                    break
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.ServerError:
                case nhsStatusCodes.wafErrorError:
                default:
                    pushToFiveHundredPage()
                    break
            }
            trackError('API - Get Exemptions', err)
            setExemptionsData({
                api: true,
                data: []
            })
        }
    }

    const fetchVaccinationResults = async () => {
        setFetchingTestResults(true)
        try {
            const vaccineRes = await dispatch(
                getVaccinationResults(getUserToken(cookies), getUserTokenId(cookies))
            )
            vaccineRes.data.forEach((value) => (value['api'] = 'vaccination'))
            vaccineRes.data.forEach((value) => (value['sortDate'] = value.dateTimeOfTest))
            if (vaccineRes.status === nhsStatusCodes.Success) {
                setVaccinationResultsData({
                    api: true,
                    data: vaccineRes.data
                })
                dispatch({
                    type: CACHE_VACCINATION_RESULTS,
                    payload: {
                        data: vaccineRes.data,
                        cacheExpiry: Math.round(new Date().getTime() / 1000) + 60 * 15
                    }
                })
            }
        } catch (err) {
            switch (err?.response?.status) {
                case nhsStatusCodes.AuthTokenIncorrect:
                    router.push(SESSION_EXPIRED).then(() => {
                        removeUserCookie(setCookie)
                        dispatch({ type: REMOVE_ALL_REDUX })
                    })
                    break
                case nhsStatusCodes.RequestTimeout:
                    router.push(TIMEOUT_ERROR)
                    break
                case nhsStatusCodes.WrongRequest:
                case nhsStatusCodes.ServerError:
                case nhsStatusCodes.wafErrorError:
                default:
                    pushToFiveHundredPage()
                    break
            }
            trackError('API - Covid Vaccination Records', err)
            setVaccinationResultsData({
                api: true,
                data: []
            })
        }
    }

    const buildResultsList = (data) => {
        var monthsPrinted = []
        var resultsList = data.map(function (value, index) {
            const sortDate = new Date(value['sortDate'])
            var printMonth = mostRecentResultInMonth(data, sortDate)
            var dateString = sortDate.getMonth().toString() + sortDate.getFullYear().toString()
            if (monthsPrinted.includes(dateString)) {
                printMonth = false
            }
            if (printMonth == true) {
                monthsPrinted.push(dateString)
            }
            switch (value['api']) {
                case 'test':
                    return (
                        <React.Fragment key={index}>
                            {printMonth ? <MonthDivider sortDate={sortDate} /> : null}
                            <TestResultCard value={value} />
                        </React.Fragment>
                    )
                case 'vaccination':
                    return (
                        <React.Fragment key={index}>
                            {printMonth ? <MonthDivider sortDate={sortDate} /> : null}
                            <VaccinationResultCard value={value} />
                        </React.Fragment>
                    )
                case 'recovery':
                    return (
                        <React.Fragment key={index}>
                            {printMonth ? <MonthDivider sortDate={sortDate} /> : null}
                            <TestResultCard value={value} />
                        </React.Fragment>
                    )
                case 'exemptions':
                    return (
                        <React.Fragment key={index}>
                            {printMonth ? <MonthDivider sortDate={sortDate} /> : null}
                            <ExemptionResultCard value={value} key={index} />
                        </React.Fragment>
                    )
            }
        })
        setFetchingTestResults(false)
        return <div id="results-card-group">{resultsList}</div>
    }

    const pushToFiveHundredPage = () => {
        router.push(ERROR_500 + '?page=' + removeSlashFromRoute(DETAILS)).then(() => {
            removeUserCookie(setCookie)
            dispatch({ type: REMOVE_ALL_REDUX })
        })
    }

    const filters = () => {
        const filterCategoryCheckbox = (filterCategory) => {
            const handleInputChange = (e) => {
                const value = e.target.checked
                const name = e.target.name

                setFilterStatus({
                    ...filterStatus,
                    [name]: value
                })
            }

            let numberOfRecordsWithinCategory

            switch (filterCategory) {
                case 'exemptions':
                    numberOfRecordsWithinCategory = resultsExemptionsData.data.length
                    break
                case 'vaccinations':
                    numberOfRecordsWithinCategory = resultsVaccinationData.data.length
                    break
                case 'tests':
                    numberOfRecordsWithinCategory = resultsTestData.data.length
                    break
            }

            return numberOfRecordsWithinCategory > 0 ? (
                <div className="nhsuk-checkboxes__item">
                    <input
                        className="nhsuk-checkboxes__input"
                        id={filterCategory + '-checkbox-id'}
                        name={filterCategory}
                        type="checkbox"
                        checked={filterStatus[filterCategory]}
                        onChange={handleInputChange}
                    />
                    <label
                        className="nhsuk-label nhsuk-checkboxes__label records-filter-checkbox-label"
                        htmlFor={filterCategory + '-checkbox-id'}>
                        {recordsPageStrings.filter[filterCategory]} ({numberOfRecordsWithinCategory}
                        )
                    </label>
                </div>
            ) : null
        }

        return (
            <form>
                <div className="nhsuk-form-group form-group-filters">
                    <div className="nhsuk-checkboxes">
                        {filterCategoryCheckbox('exemptions')}
                        {filterCategoryCheckbox('vaccinations')}
                        {filterCategoryCheckbox('tests')}
                    </div>
                </div>
            </form>
        )
    }

    const setAllFiltersActive = () => {
        setFilterStatus({
            vaccinations: true,
            tests: true,
            exemptions: true
        })
    }

    const filterComponent = () => {
        const recordCounter = () => {
            const totalNumberOfRecords =
                resultsVaccinationData.data.length +
                resultsTestData.data.length +
                resultsExemptionsData.data.length
            return (
                <div>
                    <p className="records-counter-text">
                        {`${recordsPageStrings.filter.showing} ${resultsData.length} ${recordsPageStrings.filter.of} ${totalNumberOfRecords} ${recordsPageStrings.filter.records}`}
                        {totalNumberOfRecords - resultsData.length > 0 ? (
                            <span>
                                <span> - </span>
                                <a
                                    className="show-all-link-button"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setAllFiltersActive()}
                                    onKeyPress={(e) => e.key === 'Enter' && setAllFiltersActive()}>
                                    {recordsPageStrings.filter.showAll}
                                </a>
                            </span>
                        ) : null}
                    </p>
                </div>
            )
        }

        return (
            <>
                <FilterExpander filters={filters()} />
                {recordCounter()}
            </>
        )
    }

    return (
        <div>
            {fetchingTestResults ? (
                <div className="results-loading-spinner-container">
                    <LoadingSpinner size="large" />
                </div>
            ) : (
                <div className="nhsuk-u-reading-width">
                    {filterComponent()}
                    {results === 'EMPTY' ? (
                        <p className="no-records">{recordsPageStrings.noRecords}</p>
                    ) : (
                        results
                    )}
                    {resultsData.length > resultCount && <SeeMore onClickFunction={SeeMoreClick} />}
                </div>
            )}
        </div>
    )
}

Results.propTypes = {
    showTestResults: PropTypes.bool.isRequired,
    showVaccinationResults: PropTypes.bool.isRequired,
    showExemptionResults: PropTypes.bool.isRequired
}

export default Results
