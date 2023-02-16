import React from 'react'
import PropTypes from 'prop-types'
import { timeoutAlertStrings } from 'localization/translations'
import { cookiePolicyPageStrings } from 'localization/cookiesTranslations'
import BackButton from 'components/buttons/BackButton'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { useSelector } from 'react-redux'
import DetailsExpander from 'components/contentPresentation/DetailsExpander'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { getLanguage } from 'helpers/userHelper'
import Head from 'next/head'
import ExternalLink from 'components/contentPresentation/ExternalLink'

const CookiePolicy = ({ showBackButton = true }) => {
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)

    timeoutAlertStrings.setLanguage(getLanguage(user))
    cookiePolicyPageStrings.setLanguage(getLanguage(user))

    return (
        <div>
            <Head>
                <title>{cookiePolicyPageStrings.head}</title>
            </Head>
            {showBackButton && <BackButton />}
            <h1 className="nhsuk-heading-xl">{cookiePolicyPageStrings.heading1}</h1>
            <div className="nhsuk-u-reading-width">
                <div>
                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup1.title}
                    </h2>
                    <p className="nhsuk-body">{cookiePolicyPageStrings.textGroup1.text}</p>

                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup2.title}
                    </h2>
                    <p className="nhsuk-body">{cookiePolicyPageStrings.textGroup2.text}</p>

                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup3.title}
                    </h2>
                    <p className="nhsuk-body">{cookiePolicyPageStrings.textGroup3.text}</p>

                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup4.title}
                    </h2>
                    <p className="nhsuk-body">{cookiePolicyPageStrings.textGroup4.text}</p>

                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup5.title}
                    </h2>
                    <p className="nhsuk-body">{cookiePolicyPageStrings.textGroup5.text}</p>
                    <h2 className="nhsuk-heading-m nhsuk-u-margin-bottom-1">
                        {cookiePolicyPageStrings.textGroup6.title}
                    </h2>
                    <table
                        role="table"
                        className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                        <thead className="nhsuk-table__head">
                            <tr role="row" className="nhsuk-table__row">
                                <th scope="col" role="columnheader">
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.headings
                                            .heading1
                                    }
                                </th>
                                <th scope="col" role="columnheader">
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.headings
                                            .heading2
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className="nhsuk-table__body">
                            <tr role="row" className="nhsuk-table__row">
                                <td className="nhsuk-table__cell">
                                    <span className="nhsuk-table-responsive__heading">
                                        {
                                            cookiePolicyPageStrings.textGroup6.expander1.table
                                                .headings.heading1
                                        }
                                    </span>
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.rows.row1
                                            .col1
                                    }
                                </td>
                                <td className="nhsuk-table__cell">
                                    <span className="nhsuk-table-responsive__heading">
                                        {
                                            cookiePolicyPageStrings.textGroup6.expander1.table
                                                .headings.heading2
                                        }
                                    </span>
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.rows.row1
                                            .col2
                                    }
                                </td>
                            </tr>
                            <tr role="row" className="nhsuk-table__row">
                                <td className="nhsuk-table__cell">
                                    <span className="nhsuk-table-responsive__heading">
                                        {
                                            cookiePolicyPageStrings.textGroup6.expander1.table
                                                .headings.heading1
                                        }
                                    </span>
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.rows.row2
                                            .col1
                                    }
                                </td>
                                <td className="nhsuk-table__cell">
                                    <span className="nhsuk-table-responsive__heading">
                                        {
                                            cookiePolicyPageStrings.textGroup6.expander1.table
                                                .headings.heading2
                                        }
                                    </span>
                                    {
                                        cookiePolicyPageStrings.textGroup6.expander1.table.rows.row2
                                            .col2
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="cookiePolicy-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

CookiePolicy.propTypes = {
    showBackButton: PropTypes.bool
}

export default CookiePolicy
