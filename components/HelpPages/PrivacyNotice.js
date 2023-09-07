import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { HELP_PRIVACY_NOTICE_UNDER_SIXTEEN, HELP_COOKIE_POLICY } from 'constants/routes'
import { timeoutAlertStrings } from 'localization/translations'
import { helpPrivacyNotice } from 'localization/privacyTranslations'
import BackButton from 'components/buttons/BackButton'
import TimeoutAlert from 'components/Alerts/TimeoutAlert'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import NhsTickIcon from 'components/icons/NhsTickIcon'
import NhsCrossIcon from 'components/icons/NhsCrossIcon'
import { getLanguage } from 'helpers/userHelper'
import { useSelector } from 'react-redux'
import ExternalLink from 'components/contentPresentation/ExternalLink'
import Head from 'next/head'
import useIsLetterServiceUrlQuery from 'hooks/useIsLetterServiceUrlQuery'
import { addInternalRouteWithExternalResourceLetter, getInternalHref } from 'helpers/index'

const PrivacyNotice = ({ showBackButton = true }) => {
    const router = useRouter()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const isLetterService = useIsLetterServiceUrlQuery()

    timeoutAlertStrings.setLanguage(getLanguage(user))
    helpPrivacyNotice.setLanguage(getLanguage(user))

    const onClickPrivacyNoticeUnderSixteen = (event) => {
        event.preventDefault()
        router
            .push(
                HELP_PRIVACY_NOTICE_UNDER_SIXTEEN +
                    addInternalRouteWithExternalResourceLetter(isLetterService)
            )
            .then(() => window.scrollTo(0, 0))
    }

    const onClickCookiePolicy = (event) => {
        event.preventDefault()
        router
            .push(HELP_COOKIE_POLICY + addInternalRouteWithExternalResourceLetter(isLetterService))
            .then(() => window.scrollTo(0, 0))
    }

    const PrivacyTableTickRow = ({ row }) => {
        const colContent = (col) => {
            return (
                <>
                    {col.tick === 'yes' ? <NhsTickIcon /> : null}
                    {col.text === 'X' ? <NhsCrossIcon ariaLabel="incorrect" /> : col.text}
                    {col.link ? (
                        <ExternalLink
                            href={col.link}
                            text={col.link}
                            extraClasses="table-link-word-break"
                        />
                    ) : null}
                </>
            )
        }
        return (
            <>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">NHS App </span>
                    <span className="nhsuk-body">{colContent(row.col2)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">Website NHS.UK </span>
                    <span className="nhsuk-body">{colContent(row.col3)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        NHS login for NHS App and NHS.UK
                    </span>
                    <span className="nhsuk-body">{colContent(row.col4)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        Vaccination Letter service (119 and NHS.UK)
                    </span>
                    <span className="nhsuk-body">{colContent(row.col5)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        Hash encoded data in the 2D barcode
                    </span>
                    <span className="nhsuk-body">{colContent(row.col6)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">Medical Exemptions </span>
                    <span className="nhsuk-body">{colContent(row.col7)}</span>
                </td>
            </>
        )
    }
    const WhoCanHavePassTableTickRow = ({ row }) => {
        const colContent = (col) => {
            return (
                <>
                    {col.tick === 'yes' ? <NhsTickIcon /> : null}
                    {col.text === 'X' ? <NhsCrossIcon ariaLabel="incorrect" /> : col.text}
                </>
            )
        }
        return (
            <>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        Digital Travel Pass via NHS.uk website
                    </span>
                    <span className="nhsuk-body">{colContent(row.col2)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        Digital Travel Pass via NHS App
                    </span>
                    <span className="nhsuk-body">{colContent(row.col3)}</span>
                </td>
                <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                    <span className="nhsuk-table-responsive__heading">
                        Digital Domestic Pass via NHS.uk website
                    </span>
                    <span className="nhsuk-body">{colContent(row.col4)}</span>
                </td>
            </>
        )
    }

    PrivacyTableTickRow.propTypes = {
        row: PropTypes.object.isRequired
    }

    WhoCanHavePassTableTickRow.propTypes = {
        row: PropTypes.object.isRequired
    }

    return (
        <div id="privacy-notice" className="nhsuk-u-reading-width">
            <Head>
                <title>{helpPrivacyNotice.head}</title>
            </Head>
            {showBackButton && <BackButton />}
            <h1 className="nhsuk-heading-xl">{helpPrivacyNotice.title}</h1>
            <h2 className="nhsuk-heading-l">{helpPrivacyNotice.subHeading}</h2>

            {/* Intro Text*/}
            <div>
                <p className="nhsuk-body">{helpPrivacyNotice.intro.text1}</p>
                <br />
                <p className="nhsuk-body">{helpPrivacyNotice.intro.text2}</p>
            </div>

            {/* What is meant by */}
            <div>
                <h3 className="nhsuk-heading-m">{helpPrivacyNotice.whatIsMeantBy.title}</h3>
                <p className="nhsuk-body">{helpPrivacyNotice.whatIsMeantBy.text1}</p>
                <ul>
                    <li>
                        {helpPrivacyNotice.whatIsMeantBy.list.item1.text}
                        <ExternalLink
                            href={helpPrivacyNotice.whatIsMeantBy.list.item1.link1.href}
                            text={helpPrivacyNotice.whatIsMeantBy.list.item1.link1.text}
                        />
                    </li>
                    <li>{helpPrivacyNotice.whatIsMeantBy.list.item2}</li>
                    <li>{helpPrivacyNotice.whatIsMeantBy.list.item3}</li>
                    <li>{helpPrivacyNotice.whatIsMeantBy.list.item4}</li>
                    <li>
                        {helpPrivacyNotice.whatIsMeantBy.list.item5.text1}{' '}
                        <ExternalLink
                            href={helpPrivacyNotice.whatIsMeantBy.list.item5.link1.href}
                            text={helpPrivacyNotice.whatIsMeantBy.list.item5.link1.text}
                        />
                        {helpPrivacyNotice.whatIsMeantBy.list.item5.text2}
                        <ExternalLink
                            href={helpPrivacyNotice.whatIsMeantBy.list.item5.link2.href}
                            text={helpPrivacyNotice.whatIsMeantBy.list.item5.link2.text}
                        />
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="nhsuk-heading-m">{helpPrivacyNotice.changesToTestResults.title}</h4>
                <p className="nhsuk-body">{helpPrivacyNotice.changesToTestResults.text1}</p>
                <p className="nhsuk-body">{helpPrivacyNotice.changesToTestResults.text2}</p>
                <ul>
                    <li>{helpPrivacyNotice.changesToTestResults.list.item1}</li>
                    <li>{helpPrivacyNotice.changesToTestResults.list.item2}</li>
                    <li>{helpPrivacyNotice.changesToTestResults.list.item3}</li>
                </ul>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.changesToTestResults.text3}
                    <ExternalLink
                        href={helpPrivacyNotice.changesToTestResults.link2.href}
                        text={helpPrivacyNotice.changesToTestResults.link2.text}
                    />
                </p>
            </div>
            {/*accessing your nhs covid pass */}
            <div>
                <h4 className="nhsuk-heading-m">{helpPrivacyNotice.accessingCovidPass.title}</h4>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.text1}
                    <ExternalLink
                        href={helpPrivacyNotice.accessingCovidPass.link1.href}
                        text={helpPrivacyNotice.accessingCovidPass.link1.text}
                    />
                    {helpPrivacyNotice.accessingCovidPass.text2}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold font-underline">
                        {helpPrivacyNotice.accessingCovidPass.digitalService.subHeading}
                    </span>
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.digitalService.text1}{' '}
                    <ExternalLink
                        href={helpPrivacyNotice.accessingCovidPass.digitalService.link1.href}
                        text={helpPrivacyNotice.accessingCovidPass.digitalService.link1.text}
                    />
                    {helpPrivacyNotice.accessingCovidPass.digitalService.text2}
                    <ExternalLink
                        href={helpPrivacyNotice.accessingCovidPass.digitalService.link2.href}
                        text={helpPrivacyNotice.accessingCovidPass.digitalService.link2.text}
                    />
                    {helpPrivacyNotice.accessingCovidPass.digitalService.text3}
                </p>
                <p className="nhsuk-u-font-weight-bold">
                    {helpPrivacyNotice.accessingCovidPass.digitalService.boldText1}
                </p>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.accessingCovidPass.digitalService.text4}
                </p>
                <ul>
                    <li>{helpPrivacyNotice.accessingCovidPass.digitalService.list.item1}</li>
                    <li>{helpPrivacyNotice.accessingCovidPass.digitalService.list.item2}</li>
                    <li>{helpPrivacyNotice.accessingCovidPass.digitalService.list.item3}</li>
                </ul>

                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.digitalService.text5}
                </p>
            </div>
            <div>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold font-underline">
                        {helpPrivacyNotice.accessingCovidPass.letterRequest.subHeading}
                    </span>
                </p>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text1}
                </p>
                <ul>
                    <li>{helpPrivacyNotice.accessingCovidPass.letterRequest.list1.item1}</li>
                    <li>{helpPrivacyNotice.accessingCovidPass.letterRequest.list1.item2}</li>
                </ul>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text3}
                    <ExternalLink
                        href={helpPrivacyNotice.accessingCovidPass.letterRequest.link1.href}
                        text={helpPrivacyNotice.accessingCovidPass.letterRequest.link1.text}
                    />
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text4}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.accessingCovidPass.letterRequest.textBold}
                    </span>
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text5}
                    <ExternalLink
                        href={helpPrivacyNotice.accessingCovidPass.letterRequest.link3.href}
                        text={helpPrivacyNotice.accessingCovidPass.letterRequest.link3.text}
                    />
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text6}
                    <a
                        onClick={(e) => onClickPrivacyNoticeUnderSixteen(e)}
                        target="_blank"
                        href={getInternalHref(HELP_PRIVACY_NOTICE_UNDER_SIXTEEN)}
                        id="privacy-notice-under-16-link"
                        data-testid="privacy-notice-under-16-link"
                        className="nhsuk-link nhsuk-link--no-visited-state-link">
                        {helpPrivacyNotice.accessingCovidPass.letterRequest.link4.text}
                    </a>
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text7}
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.letterRequest.text8}
                </p>
            </div>
            <div>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.subHeadingBold}
                    </span>
                    {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.subHeading2}
                </p>
                <table
                    role="table"
                    className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                    <thead className="nhsuk-table__head">
                        <tr role="row">
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                        .headings.heading1
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                        .headings.heading2
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                        .headings.heading3
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody className="nhsuk-table__body">
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col1.row1
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row1.link.href
                                        }
                                        text={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row1.link.text
                                        }
                                    />
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col3.row1
                                    }
                                </span>
                            </td>
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col1.row2
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row2.link1.href
                                        }
                                        text={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row2.link1.text
                                        }
                                    />
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col2.row2.text
                                    }
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row2.link2.href
                                        }
                                        text={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row2.link2.text
                                        }
                                    />
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col3.row2
                                    }
                                </span>
                            </td>
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col1.row3
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row3.link.href
                                        }
                                        text={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row3.link.text
                                        }
                                    />
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col3.row3
                                    }
                                </span>
                            </td>
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col1.row4
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row4.link.href
                                        }
                                        text={
                                            helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM
                                                .table.col2.row4.link.text
                                        }
                                    />
                                </span>
                            </td>
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.table
                                            .col3.row4
                                    }
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.title}
                    </span>
                </p>
                <ul>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text1Bold}
                        </span>
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text1}
                    </li>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text2Bold}
                        </span>
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text2}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.link
                                    .href
                            }
                            text={
                                helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.link
                                    .text
                            }
                        />
                    </li>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text3Bold}
                        </span>
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text3}
                    </li>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text4Bold}
                        </span>
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.under16.text4}
                    </li>
                </ul>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.textBold}
                    </span>
                    {helpPrivacyNotice.accessingCovidPass.scotNIWalesIoM.text}
                </p>
            </div>

            {/* How can I get the digital NHS COVID Pass for a child aged 5-15 years old */}
            <div>
                <h4 className="nhsuk-heading-m">
                    {helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.title}
                </h4>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.text1}
                </p>
                <ul>
                    <li>{helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.list1.item1}</li>
                    <li>{helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.list1.item2}</li>
                    <li>{helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.list1.item3}</li>
                </ul>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.text2}
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.age5to15DigitalPass.text3}
                </p>
            </div>

            {/* For those aged 5-11 years wanting an NHS COVID Travel Pass */}
            <div>
                <h4 className="nhsuk-heading-m">
                    {helpPrivacyNotice.accessingCovidPass.age5To11TravelPass.title}
                </h4>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.accessingCovidPass.age5To11TravelPass.textGroup1.text1}
                    <ExternalLink
                        href={
                            helpPrivacyNotice.accessingCovidPass.age5To11TravelPass.textGroup1.link1
                                .href
                        }
                        text={
                            helpPrivacyNotice.accessingCovidPass.age5To11TravelPass.textGroup1.link1
                                .text
                        }
                    />
                    {helpPrivacyNotice.accessingCovidPass.age5To11TravelPass.textGroup1.text2}
                </p>
                <h4 className="nhsuk-heading-m">
                    {helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.title}
                </h4>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .boldText1
                        }
                    </span>
                    {helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1.text2}
                </p>
                <ul>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem1
                        }
                    </li>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem2.text1
                        }
                        <span className="nhsuk-u-font-weight-bold">
                            {
                                helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                    .list1.listItem2.boldText1
                            }
                        </span>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem2.text2
                        }
                    </li>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem3
                        }
                    </li>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem4
                        }
                    </li>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass.textGroup1
                                .list1.listItem5
                        }
                    </li>
                </ul>
                <h3 className="nhsuk-heading-s">
                    {
                        helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                            .howToGetTravelLetter.title
                    }
                </h3>
                <ul>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                .howToGetTravelLetter.textGroup1.list1.listItem1
                        }
                    </li>
                    <li>
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                .howToGetTravelLetter.textGroup1.list1.listItem2.text1
                        }
                        <ul>
                            <li>
                                {
                                    helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                        .howToGetTravelLetter.textGroup1.list1.listItem2.subList1
                                        .listItem1
                                }
                            </li>
                            <li>
                                {
                                    helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                        .howToGetTravelLetter.textGroup1.list1.listItem2.subList1
                                        .listItem2
                                }
                            </li>
                            <li>
                                {
                                    helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                        .howToGetTravelLetter.textGroup1.list1.listItem2.subList1
                                        .listItem3
                                }
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="nhsuk-body">
                    {
                        helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                            .howToGetTravelLetter.textGroup2.text1
                    }
                    <span className="nhsuk-u-font-weight-bold">
                        {
                            helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                                .howToGetTravelLetter.textGroup2.boldText1
                        }
                    </span>
                    {
                        helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                            .howToGetTravelLetter.textGroup2.text2
                    }
                </p>
                <p className="nhsuk-body nhsuk-u-font-weight-bold nhsuk-u-margin-bottom-1">
                    {
                        helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                            .howToGetTravelLetter.textGroup3.boldTextHeading
                    }
                </p>
                <p className="nhsuk-body font-italic">
                    {
                        helpPrivacyNotice.accessingCovidPass.age5To11RecoveryPass
                            .howToGetTravelLetter.textGroup3.italicText1
                    }
                </p>
            </div>

            {/* The Personal Data we collect and how it is used */}
            <div>
                <h4 className="nhsuk-heading-m">
                    {helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.title}
                </h4>

                <table
                    role="table"
                    className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                    <thead className="nhsuk-table__head">
                        <tr role="row">
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading1
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading2
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading3
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading4
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading5
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading6
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .headings.heading7
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody className="nhsuk-table__body">
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row1.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row1
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row2.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row2
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row3.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row3
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row4.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row4
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row5.col1.text1
                                    }
                                </span>
                                <ul>
                                    <li>
                                        {
                                            helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                                .table1.rows.row5.col1.list1
                                        }
                                    </li>
                                    <li>
                                        {
                                            helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                                .table1.rows.row5.col1.list2
                                        }
                                    </li>
                                </ul>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row5
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row6.col1.text1
                                    }
                                </span>
                                <ul>
                                    <li>
                                        {
                                            helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                                .table1.rows.row6.col1.list1
                                        }
                                    </li>
                                    <li>
                                        {
                                            helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                                .table1.rows.row6.col1.list2
                                        }
                                    </li>
                                </ul>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row6
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row7.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row7
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row8.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row8
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row9.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row9
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.row10.col1
                                    }
                                </span>
                            </td>
                            <PrivacyTableTickRow
                                row={
                                    helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed.table1
                                        .rows.row10
                                }
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td
                                colSpan="5"
                                className="nhsuk-table__cell nhsuk-u-padding-top-3 nhsuk-u-padding-bottom-3">
                                <span className="nhsuk-table-responsive__heading">
                                    Personal Data{' '}
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.thePersonalDataWeCollectAndHowItIsUsed
                                            .table1.rows.rowFooter.text
                                    }
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/*Where is my data held? */}
            <div>
                <h4 className="nhsuk-heading-m nhsuk-u-padding-top-3">
                    {helpPrivacyNotice.whereIsMyDataHeld.title}
                </h4>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.text}
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.text1Bold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.text2Bold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup0.text2}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup1.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup1.text}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup2.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup2.text}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup3.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup3.text}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup4.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup4.text}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup5.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup5.text}
                    <br />
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup5.link.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup5.link.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup6.textBold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup6.text}
                    <br />
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup6.link.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup6.link.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup7.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup7.text1}
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup7.textbold2}
                    </span>
                    <br />
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup7.text2}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup7.link1.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup7.link1.text}
                    />
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup7.text3}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup7.link2.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup7.link2.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textGroup9.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup9.text1}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link1.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link1.text}
                    />
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup9.text2}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link2.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link2.text}
                    />
                    <br />
                    {helpPrivacyNotice.whereIsMyDataHeld.textGroup9.text3}
                    <br />
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link3.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link3.text}
                    />
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link4.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link4.text}
                    />
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link5.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textGroup9.link5.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup10.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup10.text1}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textgroup10.link1.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textgroup10.link1.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup14.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup14.text1}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textgroup14.link1.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textgroup14.link1.text}
                    />
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup11.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup11.text1}
                    <a
                        onClick={(e) => onClickCookiePolicy(e)}
                        href={getInternalHref(HELP_COOKIE_POLICY)}
                        id="privacy-notice-cookie-policy-link"
                        data-testid="privacy-notice-cookie-policy-link"
                        className="nhsuk-link nhsuk-link--no-visited-state-link">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup11.link1.text}
                    </a>
                </p>
            </div>
            <div>
                <table
                    role="table"
                    className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                    <thead className="nhsuk-table__head">
                        <tr role="row" className="nhsuk-table__row">
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.cookies.tableGroup1.expander1.table.headings
                                        .heading1
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.cookies.tableGroup1.expander1.table.headings
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
                                        helpPrivacyNotice.cookies.tableGroup1.expander1.table
                                            .headings.heading1
                                    }
                                </span>
                                {
                                    helpPrivacyNotice.cookies.tableGroup1.expander1.table.rows.row1
                                        .col1
                                }
                            </td>
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup1.expander1.table
                                            .headings.heading2
                                    }
                                </span>
                                {
                                    helpPrivacyNotice.cookies.tableGroup1.expander1.table.rows.row1
                                        .col2
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p className="nhsuk-body nhsuk-u-margin-bottom-4">
                        {helpPrivacyNotice.cookies.text3}
                    </p>
                </div>

                <table
                    role="table"
                    className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                    <thead className="nhsuk-table__head">
                        <tr role="row" className="nhsuk-table__row">
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.cookies.tableGroup2.expander1.table.headings
                                        .heading1
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.cookies.tableGroup2.expander1.table.headings
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
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading1
                                    }
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row1.col1
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading2
                                    }
                                </span>
                                <ExternalLink
                                    href={
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row1.col2.link1.href
                                    }
                                    text={
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row1.col2.link1.text
                                    }
                                />
                            </td>
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading1
                                    }
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row2.col1
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading2
                                    }
                                </span>
                                <ExternalLink
                                    href={
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row2.col2.link1.href
                                    }
                                    text={
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row2.col2.link1.text
                                    }
                                />
                            </td>
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading1
                                    }
                                </span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table.rows
                                            .row3.col1
                                    }
                                </span>
                            </td>
                            <td className="nhsuk-table__cell">
                                <span className="nhsuk-table-responsive__heading">
                                    {
                                        helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                            .headings.heading2
                                    }
                                </span>
                                <span className="nhsuk-body">
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                                .rows.row3.col2.link1.href
                                        }
                                        text={
                                            helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                                .rows.row3.col2.link1.text
                                        }
                                    />
                                    <br />
                                    <ExternalLink
                                        href={
                                            helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                                .rows.row3.col2.link2.href
                                        }
                                        text={
                                            helpPrivacyNotice.cookies.tableGroup2.expander1.table
                                                .rows.row3.col2.link2.text
                                        }
                                    />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup12.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup12.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.whereIsMyDataHeld.textgroup13.textbold}
                    </span>
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup13.text1}
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup13.text2}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textgroup13.link1.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textgroup13.link1.href}
                    />
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.whereIsMyDataHeld.textgroup13.text3}
                    <ExternalLink
                        href={helpPrivacyNotice.whereIsMyDataHeld.textgroup13.link2.href}
                        text={helpPrivacyNotice.whereIsMyDataHeld.textgroup13.link2.href}
                    />
                </p>
            </div>

            {/* How will my information be shared */}
            <div>
                <h4 className="nhsuk-heading-s nhsuk-u-padding-top-3">
                    {helpPrivacyNotice.howWillMyInformationBeShared.title}
                </h4>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.howWillMyInformationBeShared.text}
                    <br />
                    {helpPrivacyNotice.howWillMyInformationBeShared.text2}
                </p>
            </div>

            {/* How long do we keep your Personal Data? */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.title}
                </h4>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup1.boldText}
                    </span>
                    {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup1.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup2.boldText}
                    </span>
                    {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup2.text1}
                </p>
                <div>
                    <p className="nhsuk-body">
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup3.boldText}
                        </span>
                        {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup3.text1}
                    </p>
                    <ul>
                        <li>
                            {
                                helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup3.list
                                    .item1
                            }
                        </li>
                        <li>
                            {
                                helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup3.list
                                    .item2
                            }
                        </li>
                        <li>
                            {
                                helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup3.list
                                    .item3
                            }
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="nhsuk-body">
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup4.boldText}
                        </span>
                        {helpPrivacyNotice.howLongDoWeKeepYourPersonalData.textGroup4.text1}
                    </p>
                </div>
            </div>

            {/*Checking your covid pass */}
            <div>
                <h4 className="nhsuk-heading-m">{helpPrivacyNotice.checkingYourCovidPass.title}</h4>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.checkingYourCovidPass.text}
                </p>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.checkingYourCovidPass.subHeading}
                    </span>
                </p>
                <ul>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.checkingYourCovidPass.list1.listItem1.boldText1}
                        </span>
                        {helpPrivacyNotice.checkingYourCovidPass.list1.listItem1.text1}
                    </li>
                </ul>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.checkingYourCovidPass.subHeading2}
                    </span>
                </p>
                <ul>
                    <li>
                        <span className="nhsuk-u-font-weight-bold">
                            {helpPrivacyNotice.checkingYourCovidPass.list2.listItem1.boldText1}
                        </span>
                        {helpPrivacyNotice.checkingYourCovidPass.list2.listItem1.text1}
                    </li>
                </ul>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.checkingYourCovidPass.body3.boldText1}
                    </span>
                    {helpPrivacyNotice.checkingYourCovidPass.body3.text1}
                </p>
            </div>

            {/* Who can have an NHS COVID Pass? */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.title}
                </h4>
                <p className="nhsuk-body">{helpPrivacyNotice.whoCanHaveAnNhsCovidPass.subtitle}</p>
                <table
                    role="table"
                    className="nhsuk-table nhsuk-table-responsive nhs-table-custom-changes">
                    <thead className="nhsuk-table__head">
                        <tr role="row">
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.headings
                                        .heading1
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.headings
                                        .heading2
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.headings
                                        .heading3
                                }
                            </th>
                            <th scope="col" role="columnheader">
                                {
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.headings
                                        .heading4
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody className="nhsuk-table__body">
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row1
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row1}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row2
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row2}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row3
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row3}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row4
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row4}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row5
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row5}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td className="nhsuk-table__cell nhsuk-u-padding-top-1 nhsuk-u-padding-bottom-1">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row6
                                            .col1
                                    }
                                </span>
                            </td>
                            <WhoCanHavePassTableTickRow
                                row={helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows.row6}
                            />
                        </tr>
                        <tr role="row" className="nhsuk-table__row">
                            <td
                                colSpan="7"
                                className="nhsuk-table__cell nhsuk-u-padding-top-3 nhsuk-u-padding-bottom-3">
                                <span className="nhsuk-table-responsive__heading">Age</span>
                                <span className="nhsuk-body">
                                    {
                                        helpPrivacyNotice.whoCanHaveAnNhsCovidPass.table1.rows
                                            .rowFooter.text
                                    }
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* -	If you are a clinical trial participant */}
                <div>
                    <h3 className="nhsuk-heading-xs">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.title}
                    </h3>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text1}
                        <span className="nhsuk-u-font-weight-bold">
                            {
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1
                                    .boldText1
                            }
                        </span>
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text2}
                    </p>
                    <p>
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text3}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link1
                                    .href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link1
                                    .text
                            }
                        />
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text4}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link2
                                    .href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link2
                                    .text
                            }
                        />
                    </p>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text5}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link3
                                    .href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.link3
                                    .text
                            }
                        />
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body1.text6}
                    </p>
                    <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2.text1}
                    </p>
                    <ul>
                        <li>
                            {
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2.list1
                                    .listItem1.text1
                            }
                            <ExternalLink
                                href={
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2
                                        .list1.listItem1.link1.href
                                }
                                text={
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2
                                        .list1.listItem1.link1.text
                                }
                            />
                        </li>
                        <li>
                            {
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2.list1
                                    .listItem2.text1
                            }
                            <ExternalLink
                                href={
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2
                                        .list1.listItem2.link1.href
                                }
                                text={
                                    helpPrivacyNotice.whoCanHaveAnNhsCovidPass.clinicalTrial.body2
                                        .list1.listItem2.link1.text
                                }
                            />
                        </li>
                    </ul>
                </div>

                {/* -	If you have a Medical Exemption */}
                <div>
                    <h3 className="nhsuk-heading-xs">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.medicalExemption.title}
                    </h3>

                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.medicalExemption.body1.text1}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.medicalExemption.body1
                                    .link1.href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.medicalExemption.body1
                                    .link1.text
                            }
                        />
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.medicalExemption.body1.text2}
                    </p>
                </div>

                {/* -	If you are an English resident who has been vaccinated overseas */}
                <div>
                    <h3 className="nhsuk-heading-xs">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.title}
                    </h3>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body1.text1}
                    </p>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body2.text1}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body2
                                    .link1.href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body2
                                    .link1.text
                            }
                        />
                    </p>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body3.text1}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body3
                                    .link1.href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body3
                                    .link1.text
                            }
                        />
                    </p>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4.text1}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4
                                    .link1.href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4
                                    .link1.text
                            }
                        />
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4.text2}
                        <ExternalLink
                            href={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4
                                    .link2.href
                            }
                            text={
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.body4
                                    .link2.text
                            }
                        />
                    </p>
                    <p className="nhsuk-body">
                        <span className="nhsuk-u-font-weight-bold">
                            {
                                helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas
                                    .text1Bold
                            }
                        </span>
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.vaccinationOverseas.text1}
                    </p>
                </div>
                {/* -	If you are a visitor to England with an International Pass */}
                <div>
                    <h3 className="nhsuk-heading-xs">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.visitorToEngland.title}
                    </h3>
                    <p className="nhsuk-body">
                        {helpPrivacyNotice.whoCanHaveAnNhsCovidPass.visitorToEngland.body1.text1}
                    </p>
                </div>
            </div>

            {/* User Satisfaction Survey */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.userSatisfactionSurvey.title}
                </h4>
                <p className="nhsuk-body">{helpPrivacyNotice.userSatisfactionSurvey.text1}</p>
                <ul>
                    <li>{helpPrivacyNotice.userSatisfactionSurvey.list1.item1}</li>
                    <li>{helpPrivacyNotice.userSatisfactionSurvey.list1.item2}</li>
                    <li>{helpPrivacyNotice.userSatisfactionSurvey.list1.item3}</li>
                </ul>
                <p className="nhsuk-body">{helpPrivacyNotice.userSatisfactionSurvey.text2}</p>
            </div>

            {/* How is Data security managed?  */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.howIsDataSecurityManaged.title}
                </h4>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.howIsDataSecurityManaged.body1.text1}
                </p>
            </div>

            {/* Our legal basis to use your information  */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.title}
                </h4>
                <p className="nhsuk-body">{helpPrivacyNotice.OurLegalBasisToUseYourInfo.text1}</p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup1.boldText}
                    </span>
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup1.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup2.boldText}
                    </span>
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup2.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup3.boldText}
                    </span>
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup3.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup4.boldText}
                    </span>
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup4.text1}
                </p>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup5.boldText}
                    </span>
                    {helpPrivacyNotice.OurLegalBasisToUseYourInfo.textGroup5.text1}
                </p>
            </div>

            {/* Your rights over your information */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.yourRightsOverYourInfo.title}
                </h4>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.yourRightsOverYourInfo.list1.text1}
                </p>
                <ul>
                    <li>{helpPrivacyNotice.yourRightsOverYourInfo.list1.listItem1}</li>
                    <li>{helpPrivacyNotice.yourRightsOverYourInfo.list1.listItem2}</li>
                    <li>{helpPrivacyNotice.yourRightsOverYourInfo.list1.listItem3}</li>
                    <li>{helpPrivacyNotice.yourRightsOverYourInfo.list1.listItem4}</li>
                    <li>{helpPrivacyNotice.yourRightsOverYourInfo.list1.listItem5}</li>
                </ul>
            </div>

            {/* How to get in touch or raise a concern */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.title}
                </h4>
                <p className="nhsuk-body nhsuk-u-margin-bottom-2">
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body1.text1}
                    <br />
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body1.text2}
                    <ExternalLink
                        href={helpPrivacyNotice.getInTouchOrRaiseConcern.body1.link1.href}
                        text={helpPrivacyNotice.getInTouchOrRaiseConcern.body1.link1.text}
                    />
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body2.text1}
                    <br />
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body2.address.line2}
                    <br />
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body2.address.line3}
                    <br />
                    {helpPrivacyNotice.getInTouchOrRaiseConcern.body2.address.line4}
                </p>
            </div>

            {/* Formal complaint about the processing */}
            <div>
                <h4 className="nhsuk-heading-s">
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.title}
                </h4>
                <p className="nhsuk-body nhsuk-u-margin-bottom-1">
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.text1}
                </p>
                <p className="nhsuk-body">
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.line2}
                    <br />
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.line3}
                    <br />
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.line4}
                    <br />
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.line5}
                    <br />
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.line6}
                    <br />
                    {helpPrivacyNotice.formalComplaintAboutTheProcessing.address.tel}
                    <br />
                    <ExternalLink
                        href={
                            helpPrivacyNotice.formalComplaintAboutTheProcessing.address.web.linkHref
                        }
                        text={
                            helpPrivacyNotice.formalComplaintAboutTheProcessing.address.web.linkText
                        }
                    />
                </p>
            </div>

            {/* Changes to this Privacy Notice  */}
            <div>
                <p className="nhsuk-body">
                    <span className="nhsuk-u-font-weight-bold">
                        {helpPrivacyNotice.changeToThisPn.boldText1}
                    </span>
                    {helpPrivacyNotice.changeToThisPn.text1}
                </p>
            </div>

            {getUserToken(cookies) ? (
                <TimeoutAlert
                    id="privacy-notice-timeoutalert"
                    headerText={timeoutAlertStrings.alertHeader1}
                    bodyText={timeoutAlertStrings.alertBody1}
                />
            ) : null}
        </div>
    )
}

PrivacyNotice.propTypes = {
    showBackButton: PropTypes.bool
}

export default PrivacyNotice
