import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

const strings_en = {
    head: 'Privacy Notice' + headTitleSuffix_en,
    title: 'Privacy Notice',
    subHeading: 'About the NHS COVID Pass',
    intro: {
        text1: 'The Department for Health and Social Care (DHSC) is the data controller providing you with an NHS COVID Pass service to evidence your Coronavirus (COVID-19) status for international travel. This Privacy Notice explains how we use your data for the NHS COVID Pass for England.',
        text2: 'Although the Domestic NHS COVID Pass was removed on 12 May 2022, following the end of domestic certification, the Travel NHS COVID Pass remains in place to support certification requirements in other countries.'
    },
    whatIsMeantBy: {
        title: 'What is meant by  NHS COVID Pass ‘status’?',
        text1: 'The information displayed in your NHS COVID Pass is based on whether',
        list: {
            item1: {
                text: 'You meet current vaccine requirements – taking your COVID-19 vaccination details including any boosters, additional doses and vaccines given overseas if registered, where a specific extract of your COVID-19 vaccinations has been taken from England’s vaccinations database (NIMS). For more information, visit - ',
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass.'
                }
            },
            item2: 'You have a valid medical exemption status.',
            item3: 'You are or have been on an approved private or NHS clinical trial of a COVID-19 vaccine.',
            item4: 'You have had prior COVID-19 infection - and registered a positive PCR or equivalent test result with UK Health Security Agency (UKHSA) - providing an NHS COVID Pass valid for 180 days (not available in the Isle of Man).',

            item5: {
                text1: 'You are advised to check current government advice on when and how to use the NHS COVID Pass. ',
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass'
                },
                text2: '. Further advice on testing and registering a test result can be found at ',
                link2: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/get-tested-for-coronavirus/',
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/get-tested-for-coronavirus/'
                }
            }
        }
    },
    changesToTestResults: {
        title: 'Changes to test results for the NHS COVID Pass',
        text1: 'From 1 April 2022, the Government will no longer provide free universal symptomatic and asymptomatic testing for the general public in England. Test results through private providers for travel purposes (LFT, PCR etc, both positive and negative) will not be available for use in the NHS COVID Pass.',
        text2: 'For those that may qualify for continued free testing',
        list: {
            item1: 'if symptomatic of COVID-19 and at high risk of COVID-19 or its effects,',
            item2: 'social care staff,',
            item3: 'hospital admissions,'
        },
        text3: 'further information is available on gov.uk. Where there is continued use of  NHS testing, it is expected that Test result data will continue to flow into the NHS COVID Pass where reported to UK HSA (',
        link2: {
            text: 'Report a COVID-19 rapid lateral flow test result - GOV.UK (www.gov.uk).',
            href: 'https://www.gov.uk/report-covid19-result'
        }
    },
    accessingCovidPass: {
        title: 'Accessing your NHS COVID Pass',
        text1: 'For travel, you will need to check the entry requirements of your destination country well in advance of booking and travel (',
        text2: ') and ensure you continue to comply with vaccine requirements, which may require you to have boosters.',
        link1: {
            href: 'https://www.gov.uk/foreign-travel-advice',
            text: 'https://www.gov.uk/foreign-travel-advice'
        },
        digitalService: {
            subHeading: 'The digital travel service',
            text1: 'You can access your travel NHS COVID Pass digitally via the NHS App  (',
            link1: { href: 'https://www.nhs.uk/nhs-app/', text: 'https://www.nhs.uk/nhs-app/' },
            text2: '), or through the website at NHS.uk (',
            link2: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/'
            },
            text3: ')',
            boldText1:
                'You are advised to download and make available a copy of your NHS COVID Pass to ensure you are not solely reliant on live service connectivity.',
            text4: 'You can use the digital NHS COVID Pass for international travel if you are',
            list: {
                item1: 'vaccinated',
                item2: 'an unblinded clinical trial participant and your vaccination details have been upload to the NHS vaccination database',
                item3: 'have prior infection status reported following a positive NHS PCR test or equivalent to UKHSA'
            },
            text5: 'Note: From the travel pass screen in the NHS COVID Pass, you will be able to ‘View COVID-19 Records’ and see a history of your vaccinations and test results as well as your medical exemption. Your data is processed from the same sources for this purpose. The Domestic NHS COVID Pass is no longer available in line with changing government policy'
        },
        letterRequest: {
            subHeading: 'The letter request service available via NHS.uk or by calling 119',
            text1: 'You can use the NHS COVID letter pass for international travel if you',
            list1: {
                item1: 'have completed a primary course of COVID-19 vaccination',
                item2: 'an unblinded clinical trial participant and your vaccination details have been upload to the NHS vaccination database'
            },
            text3: ' Note: Further details on the Medical Exemption process can be found at ',
            link1: {
                href: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated',
                text: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated'
            },
            text4: 'You can also request a letter on behalf of a third party with their consent - which will be sent to the third-party address as shown on their GP medical record.',
            textBold: 'For those aged 12-15 years wanting an NHS COVID Travel Pass',
            text5: ' If you are over the age of 12, you can get a travel pass online at NHS.uk or request an NHS COVID Pass travel letter or PDF by calling 119 or by visiting the NHS.uk website at ',
            link3: {
                href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/covid-pass/get-your-covid-pass-letter/',
                text: 'Get your NHS COVID Pass letter - NHS (www.nhs.uk). '
            },
            text6: 'If you are aged 13 or over, you can also get your travel pass via the NHS App. A privacy notice detailing how your data is used can be found at: ',
            link4: {
                text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice-under16s/'
            },
            text7: 'Note: If you are aged 13 to 15, you will not be able to access your full medical records through the NHS App from the COVID Pass. You will need to request separate access from your registered GP who will need you to take a separate competency assessment. You will be able to access a library of A-Z of Health service information as well as details about organ donation (still requiring parental consent) and the 111 online service.',
            text8: 'Your letter will be printed and posted by nominated printers to the service to the address held on your GP medical record. '
        },
        scotNIWalesIoM: {
            subHeadingBold: 'If you live in Scotland, Wales, Northern Ireland, and the Isle of Man',
            subHeading2: ', you can find further information here',
            table: {
                headings: {
                    heading1: 'Administration',
                    heading2: 'Website',
                    heading3: 'Guidance'
                },
                col1: {
                    row1: 'Scotland',
                    row2: 'Northern Ireland',
                    row3: 'Wales',
                    row4: 'Isle of Man'
                },
                col2: {
                    row1: {
                        link: {
                            href: 'https://www.nhsinform.scot/nhs-scotland-covid-status/covid-status-common-questions/covid-status-guidance-common-questions/ ',
                            text: 'https://www.nhsinform.scot/nhs-scotland-covid-status/covid-status-common-questions/covid-status-guidance-common-questions/ '
                        }
                    },
                    row2: {
                        link1: {
                            href: 'https://www.nidirect.gov.uk/articles/get-covid-19-vaccination-and-booster-northern-ireland#toc-7',
                            text: 'Get a COVID-19 vaccination in Northern Ireland | nidirect'
                        },
                        link2: {
                            href: 'https://www.nidirect.gov.uk/articles/coronavirus-covid-19-regulations-and-guidance-what-they-mean-you',
                            text: 'https://www.nidirect.gov.uk/articles/coronavirus-covid-19-regulations-and-guidance-what-they-mean-you'
                        },
                        text: ' and '
                    },
                    row3: {
                        link: {
                            href: 'https://gov.wales/covid-pass-guidance-businesses-and-events-html',
                            text: 'https://gov.wales/covid-pass-guidance-businesses-and-events-html'
                        }
                    },
                    row4: {
                        link: {
                            href: 'https://www.visitisleofman.com/visitor-information/coronavirus-information',
                            text: 'https://www.visitisleofman.com/visitor-information/coronavirus-information'
                        }
                    }
                },
                col3: {
                    row1: 'If you live in Scotland but are registered with a GP in England, you will be able to access the NHS App system for England. Scotland has developed a similar but separate solution to England ',
                    row2: 'Northern Ireland have a separate COVID Pass service to that of England',
                    row3: 'The NHS COVID Pass is available and can be accessed via a smartphone, tablet, or computer or by letter from the Welsh service',
                    row4: 'Isle of Man residents can access the NHS England COVID Pass service via the NHS App on Apple only and website or a letter'
                }
            },
            under16: {
                title: '-	If you are 12-15 years old and live in',
                text1Bold: 'Scotland ',
                text1: '- Paper youth passes are available for the under 16s in Scotland and further information on the digital solution will follow in due course.',
                text2Bold: 'Northern Ireland ',
                text2: '- Further information will be available shortly from the Department of Health for the under 16s at ',
                link: {
                    href: 'https://www.health-ni.gov.uk/',
                    text: 'https://www.health-ni.gov.uk/'
                },
                text3Bold: 'Wales ',
                text3: '- 12–15-year-olds can generate an NHS COVID Travel Pass via NHS.uk based on vaccination and prior infection status.',
                text4Bold: 'Isle of Man ',
                text4: '- 12–15-year-olds can generate an NHS COVID Travel Pass via NHS.uk and those over 13 can use the NHS App via the Apple store, based on vaccination only.'
            },
            textBold: 'Note',
            text: ': If you were vaccinated in Wales, Scotland, Northern Ireland and are an English resident, your vaccine data will be processed under cross border data sharing agreements and will show in your NHS COVID Pass.'
        },
        age5to15DigitalPass: {
            title: 'How can I get the digital NHS COVID Pass for a child aged 5-15 year olds?',
            text1: 'Parents/guardians in England & Isle of Man can apply for a digital NHS COVID Pass travel letter by visiting NHS.uk',
            list1: {
                item1: 'Your parent/guardian can visit the website at NHS.uk and enter the mobile phone number registered with your GP record.',
                item2: 'This mobile number will receive a one-time code to enter into NHS.uk',
                item3: 'If the information is matched and correct, your parent/guardian will then be able to request a PDF version of the NHS COVID Pass travel pass which can be sent to any email address they have entered.'
            },
            text2: 'If you do not have a mobile number registered with your GP practice, your parent/guardian can still request a digital pass via NHS.uk by entering the email address registered with your GP record. The information will be checked and if matched to what we know about you in our systems, the PDF version of the NHS COVID Pass will then be sent to your email address.',
            text3: 'If something is not right with your details and you are unable to get a digital Travel NHS COVID Pass, you can receive an email or a message to your mobile phone explaining what you need to do to resolve this.'
        },
        age5To11TravelPass: {
            title: 'For those aged 5-11 years wanting an NHS COVID Travel Pass or a Recovery Pass letter',
            textGroup1: {
                text1: 'If you are aged 5 to 11 years old, your parents/guardians or carers can request an NHS COVID Pass travel letter or a separate Recovery Pass letter by calling 119 or by visiting the NHS.uk website at ',
                link1: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/nhs-covid-pass/get-an-nhs-covid-pass/get-your-nhs-covid-pass-letter/',
                    text: 'Get your NHS COVID Pass letter - NHS (www.nhs.uk)'
                },
                text2: '.'
            }
        },
        age5To11RecoveryPass: {
            title: 'Recovery Pass letter for those aged 5-11 years old',
            textGroup1: {
                text1: 'You can get a recovery pass letter if you have had a positive NHS PCR test in the past 6 months (not available in the Isle of Man). The recovery pass letter is available 10 day after the test and lasts until 180 days after the test. If you are travelling abroad to a country that needs children to be fully vaccinated against COVID-19, your parent/guardians or carers can ask for an NHS ',
                boldText1: 'COVID Pass Travel letter or a Recovery Pass letter ',
                text2: 'if the following are true:',
                list1: {
                    listItem1: 'You are aged over 5 and under 11',
                    listItem2: {
                        text1: 'You have had a ',
                        boldText1: 'full course ',
                        text2: 'of a COVID-19 vaccination in England, Wales or Isle of Man'
                    },
                    listItem3: 'You have waited 5 days after the second dose before applying',
                    listItem4:
                        'You have had a positive NHS PCR test within the last 180 days (not available in the Isle of Man)',
                    listItem5: 'You have a GP in England, Wales and Isle of Man or an NHS number'
                }
            },
            howToGetTravelLetter: {
                title: 'How can I get the NHS COVID Pass travel letter or a Recovery Pass letter? What information do I need?',
                textGroup1: {
                    list1: {
                        listItem1:
                            'Your parents/guardians or carers can apply for your travel pass or recovery pass letter either online via NHS.uk or by calling 119.',
                        listItem2: {
                            text1: 'You can call 119 from a mobile or home phone in England, Wales or the Isle of Man (0808 1624 119 for Isle of Man). You will be connected to a 119 NHS COVID Pass member of staff. They will ask your parent/guardian or carer a few questions (personal data): ',
                            subList1: {
                                listItem1: 'Your first name and family name',
                                listItem2: 'Your date of birth',
                                listItem3: 'Your postcode where you live.'
                            }
                        }
                    }
                },
                textGroup2: {
                    text1: 'This is matched to what we know about you in our systems. Your letter request will be passed on to our printers. They will print and post out your NHS COVID Pass travel letter or recovery pass letter to ',
                    boldText1: 'your home address ',
                    text2: '(the one your GP has for you) and will take about 5-7 days to arrive and shall be addressed to the parents/guardian or carer.'
                },
                textGroup3: {
                    boldTextHeading: 'Keeping your address details up to date.',
                    italicText1:
                        'It is important to tell your GP when something changes, like your address, so that we have the right details about you and so that we can make sure your NHS COVID Pass travel letter is sent to the right address. '
                }
            }
        }
    },
    thePersonalDataWeCollectAndHowItIsUsed: {
        title: 'The information we collect',
        table1: {
            headings: {
                heading1: 'Personal Data',
                heading2: 'NHS App',
                heading3: 'Website NHS.uk',
                heading4: 'NHS login for NHS App and NHS.uk',
                heading5: 'Vaccination Letter service (119 and NHS.uk)',
                heading6: 'Hash encoded data in the 2D barcode',
                heading7: 'Medical Exemptions'
            },
            rows: {
                row1: {
                    col1: 'Full name to correctly identify you.',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row2: {
                    col1: 'Date of Birth to correctly identify you.',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row3: {
                    col1: 'NHS number to correctly identify you.',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row4: {
                    col1: 'Home address (Including Postcode) * To correctly send COVID Pass letters to your home address if requested.',
                    col2: { tick: 'no', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: {
                        tick: 'yes',
                        text: 'Taking address from PDS*',
                        link: 'https://digital.nhs.uk/services/demographics'
                    },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row5: {
                    col1: {
                        text1: 'Landline and/or Mobile phone numbers.',
                        list1: 'To be able to contact you if you have requested a Pass, or require support.',
                        list2: 'SMS text message if using the letter route in the event of a failed journey or to receive a vaccine test result.'
                    },
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: 'Mobile' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'no', text: '' }
                },
                row6: {
                    col1: {
                        text1: 'Email address.',
                        list1: 'To be able to contact you if you have requested a Pass, or require support',
                        list2: 'If using the non-digital letter service in the event of a failed journey'
                    },
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row7: {
                    col1: 'Third parties’ contact details may be taken if they have agreed to be contacted on behalf of other adults.',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'no', text: '' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row8: {
                    col1: 'Photographic ID verification',
                    col2: { tick: 'no', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'no', text: '' }
                },
                row9: {
                    col1: 'Special Category (Health) Data Your vaccination and test data',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'no', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row10: {
                    col1: 'Automated decision making or profiling is not engaged in this service provision (Article 22 of UK GDPR)',
                    col2: { tick: 'no', text: 'X' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'no', text: 'X' },
                    col5: { tick: 'no', text: 'X' },
                    col6: { tick: 'no', text: 'X' },
                    col7: { tick: 'no', text: 'X' }
                },
                rowFooter: {
                    text: '* Only required for international travel'
                }
            }
        }
    },
    whereIsMyDataHeld: {
        title: 'How do you process my information and where is my data held?',
        textGroup0: {
            textBold: 'Your digital NHS COVID Pass ',
            text: 'itself does not hold any data ',
            text1Bold: 'and ',
            text1: 'is a means of ',
            text2Bold: 'displaying ',
            text2: 'your COVID status. Your GP medical records are not accessed for this purpose and no access permissions are required or provided by your GP for you to access the NHS COVID Pass. Logging out ends the display session.'
        },
        textGroup1: {
            textBold: 'Your COVID-19 vaccination history ',
            text: 'is held digitally by NHS England and Improvement (NHSE and I) in the National Immunisation Management Service (NIMS) data store. NHSE is the data controller for the vaccination programme and provides your GP (who is the data controller for your medical record) with details of your vaccinations.'
        },
        textGroup2: {
            textBold: 'Your COVID-19 test results, ',
            text: 'including those processed in a hospital setting through UK HSA laboratories (from those with a clinical need or who work in clinical settings) are held by the UK Health Security Agency’s (UK HSA) Test and Trace Service. A positive PCR test result will provide an NHS COVID Pass based on prior infection for 180 days from the date of the test. Private test results are currently not included in the NHS COVID Pass.'
        },
        textGroup3: {
            textBold: 'Your Medical and Clinical Exemption data ',
            text: 'is held by NHS Digital (NHSD) as data controller for the Summary Care Record. Your medical records held by your GP are under the separate data controllership of your GP practice and are not used or accessed by the NHS COVID Pass service. For those taking part in clinical trials, including private trial sites, the data controller for your trial-based medical information is the clinical trial research body, who can provide you with a Privacy Notice to explain how they process your personal and health data.'
        },
        textGroup4: {
            textBold: 'Your Welsh Vaccination Data ',
            text: 'is shared under agreement between DHSC and the Welsh Government to provide those Citizens residing in Wales with the ability to demonstrate their COVID-19 status. The Welsh vaccination database is operated by the Welsh Health Board, from the COVID-19 vaccine point of care systems approved by Public Health Wales who is the data controller for (and operates) the COVID-19 Vaccination Programme in Wales.'
        },
        textGroup5: {
            textBold: 'Your Isle of Man data ',
            text: 'uses the English NHS App to provide you with a COVID-19 vaccination certificate . Your vaccination information is shared with NHS Digital under agreement with Manx Care. The Manx-care website as below signposts you to decide whether you wish to opt out of sharing your data for this service and to your Data Protection Officer at ',
            link: {
                href: 'https://www.gov.im/about-the-government/statutory-boards/manx-care/COVID-19-vaccination-certificate-privacy-statement/#accordion',
                text: 'https://www.gov.im/about-the-government/statutory-boards/manx-care/COVID-19-vaccination-certificate-privacy-statement/#accordion'
            }
        },
        textGroup6: {
            textBold: 'Your demographic data and personal details ',
            text: 'are held by the NHS Digital Personal Demographic Service (PDS). Information such as your name, address, date of birth and NHS number, and if recorded, email address and mobile telephone number provided to your GP - are all processed to assist in your rapid and accurate identification. For the purposes of the letter service, your address is then linked to your vaccination data and provided to a secure printer service (including a Braille version) from where the letter will be posted to you. Further information and a link to the PDS Privacy Notice can be found here:',
            link: {
                href: 'https://digital.nhs.uk/services/demographics/personal-demographics-service-fair-processing',
                text: 'https://digital.nhs.uk/services/demographics/personal-demographics-service-fair-processing'
            }
        },
        textGroup7: {
            textbold: 'Data provided by you to access the NHS COVID Pass service via NHS login: ',
            text1: 'You will need to undertake the NHS login registration process to authenticate your identity and to help prevent fraud and misuse for the NHS App and NHS.UK online route. Your NHS COVID Travel Pass contains sensitive medical information about your COVID status and therefore, you will need to provide a high level of authentication including photographic ID (such as a passport or driving licence). The PDF and letter request route do not require NHS login. ',
            textbold2:
                ' Please ensure your GP has an up-to-date mobile telephone number for you and you may want to register an email address with your GP.',
            text2: 'Further information and a privacy notice for the NHS login can be found at ',
            text3: ' and ',
            link1: {
                href: 'https://access.login.nhs.uk/privacy',
                text: 'Your Privacy on NHS login'
            },
            link2: {
                href: 'https://www.nhs.uk/nhs-services/online-services/nhs-log-in/',
                text: 'https://www.nhs.uk/nhs-services/online-services/nhs-log-in/'
            }
        },
        textGroup9: {
            textbold: 'When accessing the NHS Website for the purposes of the NHS COVID Pass: ',
            text1: 'You can access NHS App services from the website at the NHS.uk website by clicking on the section marked as the COVID Pass status service. The content, data and services on the website are commissioned by ',
            text2: ' and delivered by ',
            text3: 'Further information and a privacy notice for the NHS Website can be found at',
            link1: {
                href: 'https://www.england.nhs.uk/',
                text: 'NHS England'
            },
            link2: {
                href: 'https://digital.nhs.uk/',
                text: 'NHS Digital.'
            },
            link3: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/'
            },
            link4: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/'
            },
            link5: {
                href: 'https://www.nhs.uk/our-policies/privacy-policy/',
                text: 'https://www.nhs.uk/our-policies/privacy-policy/'
            }
        },
        textgroup10: {
            textbold: 'When accessing the NHS COVID Pass via the NHS App: ',
            text1: 'NHS Digital operates, and is the data controller for, the NHS App.  Further information as well as Privacy Notices for the NHS App can be found at  ',
            link1: {
                href: 'https://www.nhs.uk/apps-library/nhs-app/',
                text: 'https://www.nhs.uk/apps-library/nhs-app/'
            }
        },
        textgroup14: {
            textbold: 'The 119 call centre service: ',
            text1: 'Now operating Monday to Friday from 8am to 8pm (including bank holidays), on Saturday from 8am to 4pm and closed on Sunday. 119 operators will process personal and demographic details to assist you with receiving an NHS COVID Pass by letter or PDF. For those that are currently, or have been on a clinical trial, please do not call 119 in the first instance but refer back to your trial site as data controller. Further information on the 119 service can be found at ',
            link1: {
                href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/using-the-nhs-and-other-health-services/when-to-call-119/',
                text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/using-the-nhs-and-other-health-services/when-to-call-119/'
            }
        },
        textgroup11: {
            textbold: 'What cookies are used in the NHS COVID Pass? ',
            text1: 'To enable the technology to work within the NHS COVID Pass in the NHS App, and to function more efficiently in use, we place small files called cookies that are strictly necessary, on your devices. The cookie policy for the NHS COVID Pass is at ',
            link1: {
                href: 'https://COVID-status.service.nhsx.nhs.uk/help/CookiePolicy/',
                text: 'https://COVID-status.service.nhsx.nhs.uk/help/CookiePolicy/'
            }
        },
        textgroup12: {
            textbold: 'Data processed in the IP address: ',
            text1: 'An Internet Protocol (IP) address is a unique address that identifies the device you use on the internet or a local network to access the digital NHS COVID Pass. This is inherent to the use of internet and IP technology and is necessary to technically establish a connection between the service and your phone or browser. The IP address is processed for management and security purposes only and is not used for marketing purposes.'
        },
        textgroup13: {
            textbold:
                'Data processed when using your mobile phone’s wallet to save your NHS COVID Pass offline: ',
            text1: 'Both Apple and Google smartphones have a wallet function which will allow you to save, see and share your NHS COVID Pass when offline. You can download this directly from the live NHS COVID Pass screen. You are advised to check the Apple and Google terms of Use and Privacy Policy for further information at',
            text2: 'Apple: ',
            text3: 'Google: ',
            link1: {
                href: 'https://support.apple.com/en-gb/HT203027',
                text: 'https://support.apple.com/en-gb/HT203027'
            },
            link2: {
                href: 'https://payments.google.com/files/privacy/archive/20111116_buyer.html',
                text: 'https://payments.google.com/files/privacy/archive/20111116_buyer.html'
            }
        }
    },
    cookies: {
        textBold: 'Cookies: ',
        text1: 'To enable the technology to work within the NHS COVID Pass in the NHS App, and to function more efficiently in use, we place small files called cookies that are strictly necessary, on your devices. The cookie policy for the NHS COVID Pass can be found at: ',
        text2: 'The ‘strictly necessary cookies added to the NHS COVID Pass are:',
        tableGroup1: {
            expander1: {
                table: {
                    headings: {
                        heading1: 'Name',
                        heading2: 'Strictly necessary Purpose'
                    },
                    rows: {
                        row1: {
                            col1: 'COVIDStatusUserPreference',
                            col2: 'We store which flow choice you made (UK events or international travel) to bring you back to the right place'
                        }
                    }
                }
            }
        },
        text3: 'There are separate cookie policies for the wider applications of the NHS App, NHS login and the NHS.uk website. NHS Digital (NHSD) is the data controller for these technologies and further information can be found as below',
        tableGroup2: {
            expander1: {
                table: {
                    headings: {
                        heading1: 'Site',
                        heading2: 'Link'
                    },
                    rows: {
                        row1: {
                            col1: 'NHS login',
                            col2: {
                                link1: {
                                    href: 'https://access.login.nhs.uk/cookies',
                                    text: 'https://access.login.nhs.uk/cookies'
                                }
                            }
                        },
                        row2: {
                            col1: 'NHS App',
                            col2: {
                                link1: {
                                    href: 'https://www.nhs.uk/nhs-app/nhs-app-legal-and-cookies/nhs-app-cookies-policy/',
                                    text: 'https://www.nhs.uk/nhs-app/nhs-app-legal-and-cookies/nhs-app-cookies-policy/'
                                }
                            }
                        },
                        row3: {
                            col1: 'NHS Website',
                            col2: {
                                link1: {
                                    href: 'https://www.nhs.uk/our-policies/cookies-policy/',
                                    text: 'https://www.nhs.uk/our-policies/cookies-policy/'
                                },
                                link2: {
                                    href: 'https://www.nhs.uk/our-policies/privacy-policy/',
                                    text: 'https://www.nhs.uk/our-policies/privacy-policy/'
                                }
                            }
                        }
                    }
                }
            }
        },
        textGroup1: {
            titleBold: 'IP address: ',
            text: 'The NHS app and website use an internet connection therefore your IP address will also be processed. This is inherent to the use of internet and IP technology and is necessary to technically establish a connection between the test performer’s or vaccinator’s server and your phone or browser. The IP address is processed for management and security purposes only.'
        },
        textGroup2: {
            titleBold: 'Apple Wallet option: ',
            text: 'The iOS operating systems provide a feature called a “Wallet Function”. This will allow Apple smartphone users to collect and organise personal data within their device and have an available offline, downloaded copy of their COVID Pass. This can take place directly from the NHS COVID Pass App. Check the Apple terms and conditions of use prior to accepting inclusion of their COVID Pass into a local wallet function.'
        },
        textGroup3: {
            titleBold: 'Google Wallet option: ',
            text: 'If you obtain your NHS COVID Pass through the NHS App or Google Chrome web browser using an Android phone, you will be able to store your NHS COVID Pass in the Google Pay Digital Wallet of your mobile device (through certified android devices manufactured from 2014 onwards (version 5 onwards). You will see the ‘Google Pay - save to phone’ button within the NHS App.'
        }
    },
    howWillMyInformationBeShared: {
        title: 'How will my information be shared?',
        text: 'DHSC is the data controller for the NHS COVID Pass. Your data including your NHS number is taken and processed from approved NHS England source systems, point of care systems, the National Immunisation Management System (NIMS) and Personal Demographic Service (NHSD). This demographic data is used to verify and cross match your information.',
        text2: 'Note: There is no transfer of data outside the wider UK and Crown Dependency community.'
    },
    howLongDoWeKeepYourPersonalData: {
        title: 'How long do we keep your information?',
        textGroup1: {
            boldText: 'Digital users: ',
            text1: 'Data is not kept within the NHS COVID Pass section of the NHS App. The data is displayed during your live login session. Your COVID-19 data will not be retained in the digital pass once you log off.'
        },
        textGroup2: {
            boldText: 'The letter service via 119 or self request at NHS.uk: ',
            text1: 'Your data will be retained for 90 days which shall allow for your letter to be printed and posted.'
        },
        textGroup3: {
            boldText: 'Additional retention periods ',
            text1: 'may be engaged in circumstances where a data subject exercises their information access rights:',
            list: {
                item1: 'In cases of legal complaints - data may be retained for a period of 10 years.',
                item2: 'Subject Access Requests (SAR) and Freedom of Information Requests (FOI) - 3 years.',
                item3: 'Subject Access requests & FOI requests where there has been an appeal - 6 years.'
            }
        },
        textGroup4: {
            boldText: 'Gov.uk: ',
            text1: 'A link is provided in the digital pass for travel use allowing a copy of your NHS COVID Pass to be sent to your stored email address as a link in the body of the email.  The related content of your download is subject to the Gov.uk retention policy period of 18 months.'
        }
    },
    checkingYourCovidPass: {
        title: 'How will my NHS COVID Pass be checked?',
        text: "Your NHS COVID Pass may be checked visually or by scanning by the NHS COVID Pass Verifier (App) downloaded to an operator's mobile device using the camera in the operator's phone. The NHS COVID Pass Verifier (App) is downloaded to an operator's mobile device to allow the phone’s camera to scan your 2D barcode. As of 12th May 2022, the domestic pass is no longer available. When an  attempt is made to use the domestic mode and a travel NHS COVID Pass barcode is produced, this will display an error message on the screen.",
        subHeading: 'The data displayed from your mobile phone:',
        list1: {
            listItem1: {
                boldText1: 'For international travel it is held ',
                text1: 'within the encoded 2D barcode, used for point-of-departure and arrival visual checking, or scanning purposes. Your mobile phone screen will display your positive or negative pass status.  The travel pass screens also carry the full details of the vaccines you have had and when you had them. As a requirement of international travel, you may be asked to disclose this information at border control.'
            }
        },
        subHeading2: 'The data displayed in your COVID Pass Letter:',
        list2: {
            listItem1: {
                boldText1: 'For international travel, ',
                text1: 'the 2D barcode and vaccine information is the same as in the digital pass and can either be scanned or visually checked. Your NHS COVID travel pass also carries full details of your vaccination events as a requirement of international travel and you may be required to demonstrate these.'
            }
        },
        body3: {
            boldText1: 'International visitors to England ',
            text1: "can continue to show an international pass (digital or paper versions) to an operator for a visual check in domestic venues that have chosen to check certification as a condition of entry. There is also the ability to scan your 2D international barcodes in domestic mode where EU countries and those outside the EU, including the UK are using the same barcode standards. This has been made possible through international compliance with EU DCC standards (the EU Commission's Digital COVID Certificate) making the encoding of the 2D barcode within the COVID-19 international passes standard. The NHS COVID Pass Verifier App can also scan and accept EU DCC test certificate data where administered in the last 48 hours. Proof of prior infection is not accepted."
        }
    },

    whoCanHaveAnNhsCovidPass: {
        title: 'Who can have an NHS COVID Pass?',
        subtitle: '-	The table below summarises the availability by age groups',
        table1: {
            headings: {
                heading1: 'Age',
                heading2: 'Digital Travel Pass via NHS.uk website',
                heading3: 'Digital Travel Pass via NHS App',
                heading4: 'Letter Pass for Travel via 119 or NHS.uk'
            },
            rows: {
                row1: {
                    col1: '5-11',
                    col2: { tick: 'yes', text: '(PDF route only)' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'yes', text: '' }
                },
                row2: {
                    col1: '12+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row3: {
                    col1: '13+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row4: {
                    col1: '16+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row5: {
                    col1: '18+ adult',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row6: {
                    col1: 'Proxy*',
                    col2: { tick: 'no', text: 'X' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'yes', text: '' }
                },
                rowFooter: {
                    text: '* On behalf of someone else'
                }
            },
            body2: {
                text1: 'Note: Please ensure your contact and personal details including mobile phone number, are up to date with your registered GP.'
            }
        },
        clinicalTrial: {
            title: '-	If you are a clinical trial participant',
            body1: {
                text1: 'If you are ',
                boldText1: 'exempt ',
                text2: 'from receiving COVID-19 vaccinations because you are in, or have taken part in, an NHS or private clinical trial, and may have received other vaccinations, you will be able to use the NHS COVID Pass service and your vaccination information shall be recorded on (NIMS) and you will be able to qualify for a COVID PASS.',
                text3: 'As of 30th June 2022, the Health Service Control of Patient Information (COPI) 2002 regulations will come to an end. Therefore, no further information will be collected on blinded trial participants (those who don’t know whether they are being treated with a vaccine in development or a placebo). Any existing information on blinded participants will be removed and deleted from our systems. Your travel pass can be available via the app, website, or letter. Further information is available at ',
                link1: {
                    text: 'https://www.gov.uk/government/publications/certification-for-vaccine-clinical-trial-participants',
                    href: 'https://www.gov.uk/government/publications/certification-for-vaccine-clinical-trial-participants'
                },
                text4: ' and ',
                link2: {
                    text: 'https://www.nhsx.nhs.uk/covid-19-response/using-the-nhs-covid-pass/#exemptions',
                    href: 'https://www.nhsx.nhs.uk/covid-19-response/using-the-nhs-covid-pass/#exemptions'
                },
                text5: 'International acceptance may depend on the trial that you have taken part in and, pending any international agreements, you may need to evidence your status for foreign travel through testing. As a private or NHS clinical trial participant, you now have the option to get additional vaccine doses, to enable international travel to countries which currently only accept vaccination records with deployed COVID-19 vaccinations. You can book online at the National Booking Service (',
                link3: {
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/'
                },
                text6: ').'
            },
            body2: {
                text1: 'Both the National Immunisation management System (NIMS) and the NBS are under the data controllership of NHS England. Privacy Notices for these services can be found by following the links below:',
                list1: {
                    listItem1: {
                        text1: 'NBS: ',
                        link1: {
                            href: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/',
                            text: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/'
                        }
                    },
                    listItem2: {
                        text1: 'NIMS: ',
                        link1: {
                            href: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/',
                            text: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/'
                        }
                    }
                }
            }
        },
        medicalExemption: {
            title: '-	If you have a Medical Exemption',
            body1: {
                text1: 'In line with removing the domestic NHS COVID Pass for use in venues or events as a condition of entry, the medical exemptions service has closed. Your medical exemption will still be included in the ‘View COVID-19 Records’ history section with an expiry date (if applicable). Further guidance is available at ',
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass'
                },
                text2: '.'
            }
        },
        vaccinationOverseas: {
            title: ' -	If you are an English resident who has been vaccinated overseas',
            body1: {
                text1: 'If you live in England, are over 5 years of age, have an NHS number, and have had one or more of your COVID-19 vaccinations given to you overseas, subject to proof of identification and vaccination, you can have your vaccination details added to your NHS Record (stored in the NIMS system) and in turn, generate an NHS COVID Pass and update your medical record if you meet the vaccine requirements. An adult can act as a proxy for a child and it is not necessary to take the child to the centre with you for their data to be processed.'
            },
            body2: {
                text1: 'Your data will be processed by the online National Booking System (NBS) for vaccinations when you request an appointment to register your overseas vaccinations at ',
                link1: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/tell-nhs-about-coronavirus-vaccinations-abroad/',
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/tell-nhs-about-coronavirus-vaccinations-abroad/'
                }
            },
            body3: {
                text1: 'The privacy notice explaining how the NBS service uses your data is available at: ',
                link1: {
                    href: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/',
                    text: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/'
                }
            },
            body4: {
                text1: 'The vaccination centre you attend will complete a form using the information you provide to them about your vaccination history. This form is then sent to the Vaccine Data Resolution Service (VDRS), under the data controllership of NHSE, who will enter your information onto the NIMS system. Further information on the VDRS can be found at ',
                link1: {
                    href: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/#vaccine-data-resolution-service',
                    text: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/#vaccine-data-resolution-service'
                },
                text2: ' and ',
                link2: {
                    href: 'https://www.nhs.uk/contact-us/vaccine-record-help/',
                    text: 'https://www.nhs.uk/contact-us/vaccine-record-help/'
                }
            },
            text1Bold: 'Note: ',
            text1: 'some manufacturer data fields will default to EU specification values and so may appear differently in your NHS COVID Pass.'
        },
        visitorToEngland: {
            title: '-	If you are a visitor to England with an International Pass',
            body1: {
                text1: "Travellers to England attending English venues and settings (where the organiser has chosen to apply the use of the NHS COVID Pass), can use their international COVID passes that were accepted at the UK border to gain entry to events and venues in England. This has been made possible through international compliance with EU DCC (2D barcode) standards (the EU Commission's Digital COVID Certificate). This applies to EU countries and those outside the EU, including the UK, wishing to use this same standard. Passes can be checked visually or by using the NHS COVID Pass Verifier App."
            }
        }
    },
    userSatisfactionSurvey: {
        title: 'User Satisfaction Survey',
        text1: 'NHSBSA will run an optional user satisfaction survey on behalf of the NHS COVID Pass. The surveys ask questions regarding your experience of the service that you received whilst obtaining your NHS COVID Travel Pass. Your feedback will be analysed to review our services and drive improvements. Integrating customer feedback into the delivery process will help improve the service by focusing on the following;',
        list1: {
            item1: 'How do users feel about the service they receive',
            item2: 'How satisfied are users with the ease of finding the right information they need',
            item3: 'Would users recommend the service to a friend or colleague'
        },
        text2: 'The processing of data from the satisfaction survey is based upon consent from the participant and is voluntary, you are free to decide not to take part if you do not want to. Participants are not required to provide contact details to complete the survey and information provided shall be anonymous, we will therefore not be able to identify your responses. Please note that the answers you provide in the survey will not impact your ability to obtain a NHS COVID Pass.'
    },
    howIsDataSecurityManaged: {
        title: 'How is Data security managed?',
        body1: {
            text1: 'Appropriate technical, organisational, and administrative security measures are employed within our systems to protect any information we hold in our records from loss, misuse, unauthorised access, disclosure, alteration, and destruction. We have written procedures and policies which are regularly audited and reviewed at a senior level. '
        }
    },
    OurLegalBasisToUseYourInfo: {
        title: 'Our legal basis to use your information',
        text1: 'We process both personal information and special categories data about health for the purposes of providing the English NHS COVID Pass service under:',
        textGroup1: {
            boldText: 'UK GDPR Art. 6 (1)(e)',
            text1: ' ‘processing is necessary for the performance of a task carried out in the public interest’ and'
        },
        textGroup2: {
            boldText: 'UK GDPR Art. 9 (2)(g)',
            text1: ' ‘processing is necessary for reasons of substantial public interest’, supported by the Data Protection Act (DPA) 2018 – Schedules 1, Part 2, para 6 - Statutory and government purposes relating to public health and in particular the management of the COVID-19 public health emergency.'
        },
        textGroup3: {
            boldText: 'UK GDPR Art. 9 (2)(h)',
            text1: ' ‘processing is necessary for the provision of health or social care or treatment or the management of health or social care systems and services’, underpinned by'
        },
        textGroup4: {
            boldText: 'Data Protection Act 2018 (DPA 2018), Schedule 1 - Part 1, Section 2 (2) [f]',
            text1: ' where the condition for processing special category data is met for the health or social care purposes through the management of healthcare systems or services where the conditions and safeguards in Section 3, public health, are met.'
        },
        textGroup5: {
            boldText: 'UK GDPR Art. 9 (2)(i)',
            text1: ' ‘processing is necessary for the provision of health or social care or treatment or the management of health or social care systems and services.'
        }
    },
    yourRightsOverYourInfo: {
        title: 'Your rights over your information',
        list1: {
            text1: 'By law, you have information access rights under the General Data Protection Regulation and the UK Data Protection Act 2018. You can',
            listItem1: 'Ask for a copy of any information we hold about you.',
            listItem2:
                'Ask for any information we hold about you to be changed if it is inaccurate.',
            listItem3:
                'Ask us to consider restricting our use of your information, although this is not an absolute right, and we may need to continue to use your information in certain circumstances – we will tell you why if this is the case.',
            listItem4:
                'Ask for any information held about you to not be used. However, this is not an absolute right, and we may need to continue to use your information in certain circumstances – we will tell you why if this is the case. ',
            listItem5:
                'Ask to have your information deleted – this is not an absolute right, and we may need to continue to use your information, and we will tell you if this is the case. '
        }
    },
    getInTouchOrRaiseConcern: {
        title: 'How to get in touch or raise a concern',
        body1: {
            text1: 'If you are unhappy, wish to bring something to our attention, or wish to complain about how your personal data is used by the service, you can contact DHSC Data Protection Officer (DPO), Lee Cramp who will try and resolve your issue.',
            text2: 'By email - to ',
            link1: {
                href: 'mailto:data_protection@dhsc.gov.uk',
                text: 'data_protection@dhsc.gov.uk'
            }
        },
        body2: {
            text1: 'By letter - to Department of Health and Social Care',
            address: {
                line0: '',
                line1: 'Department of Health and Social Care',
                line2: '        1st Floor North',
                line3: '        39 Victoria Street',
                line4: '        London SW1H 0EU'
            }
        }
    },
    formalComplaintAboutTheProcessing: {
        title: 'Formal complaint about the processing',
        text1: "If, after contacting the DPO as above, you wish to make a formal complaint about the processing of your personal data, please contact the Information Commissioner's Office (ICO) at",
        address: {
            line1: "Information Commissioner's Office (ICO)",
            line2: 'Wycliffe House',
            line3: 'Water Lane',
            line4: 'Wilmslow',
            line5: 'Cheshire',
            line6: 'SK9 5AF',
            tel: 'Telephone: 0303 123 1113',
            fax: 'Fax: 01625 524510',
            web: {
                linkHref: 'https://ico.org.uk/',
                linkText: 'https://ico.org.uk/'
            }
        }
    },
    changeToThisPn: {
        boldText1: 'Changes to this Privacy Notice: ',
        text1: 'We keep our Privacy Notice under regular review. This Privacy Notice was last updated on 24th November 2022.'
    }
}

const strings_cy = {
    head: 'Hysbysiad Preifatrwydd' + headTitleSuffix_cy,
    title: 'Hysbysiad Preifatrwydd',
    subHeading: 'Ynghylch Pàs COVID y GIG',
    intro: {
        text1: "Yr Adran Iechyd a Gofal Cymdeithasol (DHSC) yw'r rheolwr data sy'n darparu gwasanaeth Pàs COVID y GIG er mwyn ichi i ddangos eich statws Coronafeirws (COVID-19) ar gyfer teithio’n rhyngwladol. Mae'r Hysbysiad Preifatrwydd hwn yn esbonio sut rydym yn defnyddio'ch data ar gyfer Pàs COVID y GIG ar gyfer Lloegr.",
        text2: 'Er bod Pás COVID Domestig y GIG wedi’i dynnu’n ôl ar 12 Mai 2022, ar ôl i ardystio domestig ddod i ben, mae Pàs Teithio COVID y GIG yn dal ar waith i ategu’r gofynion ynglŷn ag ardystio mewn gwledydd eraill.'
    },
    whatIsMeantBy: {
        title: 'Beth yw ystyr ‘statws’ Pàs COVID y GIG?',
        text1: "Mae'r wybodaeth a ddangosir yn eich Pàs COVID GIG wedi’i seilio ar y canlynol",
        list: {
            item1: {
                text: "a ydych yn bodloni’r gofynion cyfredol ynglŷn â brechiadau – gan gymryd y manylion am eich brechiadau COVID-19 gan gynnwys unrhyw frechiadau hybu, dosau ychwanegol a brechiadau a gawsoch dros y môr os oes rhai wedi’u cofrestru, lle mae dyfyniad penodol o'ch hanes brechiadau COVID-19 wedi'i gymryd o gronfa ddata brechiadau Lloegr (NIMS). I gael rhagor o wybodaeth, ewch i - ",
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass.'
                }
            },
            item2: 'a oes gennych statws eithriad meddygol dilys',
            item3: 'a ydych chi ar dreial clinigol preifat neu dreial clinigol y GIG o frechlyn COVID-19, neu wedi bod ar dreial felly.',
            item4: "a ydych chi wedi cael haint COVID-19 o’r blaen - ac wedi cofrestru canlyniad prawf PCR neu brawf cyfatebol positif gydag Asiantaeth Diogelwch Iechyd y Deyrnas Unedig (UKHSA) – sy'n darparu Pàs COVID y GIG sy'n ddilys am 180 diwrnod (heb fod ar gael yn Ynys Manaw).",

            item5: {
                text1: 'Fe’ch cynghorir i wirio cyngor cyfredol y llywodraeth ynghylch pryd a sut i ddefnyddio Pàs COVID y GIG ',
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass'
                },
                text2: '. Mae rhagor o gyngor ar brofion a chofrestru canlyniad prawf ar gael yn ',
                link2: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/get-tested-for-coronavirus/',
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/get-tested-for-coronavirus/'
                }
            }
        }
    },
    changesToTestResults: {
        title: 'Newidiadau yng nghanlyniadau profion ar gyfer Pàs COVID y GIG',
        text1: "O 1 Ebrill 2022 ymlaen, ni fydd y Llywodraeth bellach yn darparu profion symptomatig ac asymptomatig cyffredinol am ddim i'r cyhoedd yn Lloegr. Ni fydd canlyniadau profion drwy ddarparwyr preifat at ddibenion teithio (LFT, PCR etc, positif a negatif) ar gael i'w defnyddio ym Mhàs COVID y GIG.",
        text2: "I'r rhai a allai fod yn gymwys i gael profion di-dâl o hyd",
        list: {
            item1: "os ydych chi'n symptomatig o COVID-19 ac yn wynebu risg uchel o COVID-19 neu ei effeithiau,",
            item2: 'staff gofal cymdeithasol,',
            item3: "derbyniadau i'r ysbyty,"
        },
        text3: 'mae rhagor o wybodaeth ar gael ar gov.uk. Pan fo profion y GIG yn parhau i gael eu defnyddio, disgwylir y bydd data o ganlyniadau profion yn dal i lifo i mewn i Bàs COVID y GIG lle caiff ei adrodd i UKHSA (',
        link2: {
            text: 'Cofnodi canlyniad prawf llif unffordd cyflym COVID-19)',
            href: 'https://www.gov.uk/report-covid19-result'
        }
    },
    accessingCovidPass: {
        title: 'Cyrchu’ch Pàs COVID GIG',
        text1: 'Er mwyn teithio, bydd angen ichi wirio gofynion mynediad eich gwlad gyrchfan ymhell cyn archebu a theithio (',
        link1: {
            href: 'https://www.gov.uk/foreign-travel-advice',
            text: 'https://www.gov.uk/foreign-travel-advice'
        },
        text2: ') a sicrhau eich bod yn parhau i gydymffurfio â gofynion y brechlyn, a all olygu y bydd angen ichi gael brechlyn hybu.',
        digitalService: {
            subHeading: 'Y gwasanaeth teithio digidol',
            text1: 'Gallwch gyrchu’ch Pàs teithio COVID GIG yn ddigidol drwy Ap y GIG (',
            link1: { href: 'https://www.nhs.uk/nhs-app/', text: 'https://www.nhs.uk/nhs-app/' },
            text2: "), neu drwy'r wefan yn NHS.uk (",
            link2: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/'
            },
            text3: ').',
            boldText1:
                "Fe'ch cynghorir i lawrlwytho a darparu copi o'ch Pàs COVID GIG i sicrhau nad ydych yn dibynnu'n llwyr ar gysylltu â’r gwasanaeth byw.",
            text4: 'Gallwch ddefnyddio Pàs COVID digidol y GIG er mwyn teithio’n rhyngwladol os ydych chi',
            list: {
                item1: "wedi'ch brechu",
                item2: 'yn gyfranogwr heb eich dallu mewn treial clinigol a bod eich manylion wedi’u huwchlwytho i gronfa ddata brechiadau’r GIG',
                item3: 'â statws heintiad blaenorol wedi’i adrodd yn dilyn prawf PCR GIG positif neu brawf cyfatebol i UKHSA'
            },
            text5: "Sylwch: O sgrin y pàs teithio yn Pàs COVID y GIG, byddwch yn gallu dewis ‘View COVID-19 Records’ a gweld hanes eich brechiadau a’ch canlyniadau profion yn ogystal â'ch eithriad meddygol. Mae eich data’n cael ei brosesu o'r un ffynonellau at y diben hwn. Nid yw’ Pàs COVID  Domestig y GIG ar gael mwyach, yn unol â newid ym mholisi’r llywodraeth."
        },
        letterRequest: {
            subHeading: 'Y gwasanaeth cais am lythyr sydd ar gael drwy NHS.uk neu drwy ffonio 119',
            text1: 'Gallwch ddefnyddio llythyr pàs COVID y GIG er mwyn teithio’n rhyngwladol os ydych chi',
            list1: {
                item1: 'wedi cwblhau cwrs sylfaenol o frechiad COVID-19',
                item2: 'yn gyfranogwr heb eich dallu mewn treial clinigol a bod eich manylion brechu wedi’u huwchlwytho i gronfa ddata brechiadau’r GIG'
            },
            text3: "Sylwch: Mae rhagor o fanylion am y broses Eithrio Meddygol i'w gweld yn ",
            link1: {
                href: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated',
                text: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated'
            },

            text4: "Gallwch hefyd ofyn am lythyr ar ran trydydd parti gyda'u cydsyniad nhw - a fydd yn cael ei anfon i gyfeiriad y trydydd parti fel y’i gwelir ar gofnod meddygol eu meddyg teulu.",
            textBold: 'I’r rhai 12-15 oed sydd eisiau Pàs Teithio COVID y GIG',
            text5: 'Os ydych chi dros 12 oed, gallwch gael pàs teithio ar-lein yn NHS.uk neu wneud cais am lythyr teithio Pàs COVID y GIG neu PDF drwy ffonio 119 neu drwy fynd i wefan NHS.uk yn  ',
            link3: {
                href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/covid-pass/get-your-covid-pass-letter/',
                text: 'Cael eich Pàs COVID y GIG - GIG (www.nhs.uk).'
            },
            text6: "Os ydych yn 13 oed neu'n hŷn, gallwch gael eich pàs teithio drwy Ap y GIG. Mae hysbysiad preifatrwydd sy'n nodi sut y defnyddir eich data ar gael yn: ",
            link4: {
                text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice-under16s/'
            },
            text7: "Sylwch: Os ydych rhwng 13 a 15 oed, fyddwch chi ddim yn gallu cael mynediad i'ch cofnodion meddygol llawn drwy Ap y GIG o'r Pàs COVID. Bydd angen ichi ofyn am fynediad ar wahân gan eich meddyg teulu cofrestredig a fydd yn gofyn ichi gymryd asesiad cymhwysedd ar wahân. Byddwch yn gallu cael mynediad i lyfrgell o wybodaeth A-Z am y gwasanaeth iechyd yn ogystal â manylion am roi organau (sydd angen caniatâd rhieni o hyd) a'r gwasanaeth ar-lein 111.",
            text8: 'Bydd eich llythyr yn cael ei argraffu a’i bostio gan argraffwyr sydd wedi’u henwebu ar gyfer y gwasanaeth, i’r cyfeiriad sy’n cael ei gadw ar gofnod meddygol eich meddyg teulu.'
        },
        scotNIWalesIoM: {
            subHeadingBold:
                'Os ydych chi’n byw yng Nghymru, yr Alban, Gogledd Iwerddon, ac Ynys Manaw,',
            subHeading2: ' gallwch weld rhagor o wybodaeth yma',
            table: {
                headings: {
                    heading1: 'Gweinyddiaeth',
                    heading2: 'Gwefan',
                    heading3: 'Gyfarwyddyd'
                },
                col1: {
                    row1: 'Yr Alban',
                    row2: 'Gogledd Iwerddon',
                    row3: 'Cymru',
                    row4: 'Ynys Manaw'
                },
                col2: {
                    row1: {
                        link: {
                            href: 'https://www.nhsinform.scot/nhs-scotland-covid-status/covid-status-common-questions/covid-status-guidance-common-questions/ ',
                            text: 'https://www.nhsinform.scot/nhs-scotland-covid-status/covid-status-common-questions/covid-status-guidance-common-questions/ '
                        }
                    },
                    row2: {
                        link1: {
                            href: 'https://www.nidirect.gov.uk/articles/get-covid-19-vaccination-and-booster-northern-ireland#toc-7',
                            text: 'Mynnwch frechiad COVID-19 yng Ngogledd Iwerddon | nidirect'
                        },
                        link2: {
                            href: 'https://www.nidirect.gov.uk/articles/coronavirus-covid-19-regulations-and-guidance-what-they-mean-you',
                            text: 'https://www.nidirect.gov.uk/articles/coronavirus-covid-19-regulations-and-guidance-what-they-mean-you'
                        },
                        text: ' ac '
                    },
                    row3: {
                        link: {
                            href: 'https://gov.wales/covid-pass-guidance-businesses-and-events-html',
                            text: 'https://gov.wales/covid-pass-guidance-businesses-and-events-html'
                        }
                    },
                    row4: {
                        link: {
                            href: 'https://www.visitisleofman.com/visitor-information/coronavirus-information',
                            text: 'https://www.visitisleofman.com/visitor-information/coronavirus-information'
                        }
                    }
                },
                col3: {
                    row1: "Os ydych chi'n byw yn yr Alban ond wedi'ch cofrestru gyda meddyg teulu yn Lloegr byddwch chi'n gallu cyrchu system Ap y GIG ar gyfer Lloegr. Mae'r Alban wedi datblygu ateb tebyg ond ar wahân i Loegr ",
                    row2: 'Mae gan Ogledd Iwerddon wasanaeth Pàs COVID ar wahân i un Lloegr',
                    row3: 'Mae Pàs COVID y GIG ar gael a gellir ei gyrchu drwy ffôn clyfar, llechen, neu gyfrifiadur neu drwy lythyr oddi wrth y gwasanaeth Cymreig',
                    row4: 'Gall trigolion Ynys Manaw gael mynediad at wasanaeth Pàs COVID GIG Lloegr trwy Ap y GIG ar Apple yn unig a gwefan neu lythyr.'
                }
            },
            under16: {
                title: 'Os ydych chi’n 12-15 oed ac yn byw yn',
                text1Bold: 'Yr Alban ',
                text1: '- Mae pasys ieuenctid papur ar gael i bobl ifanc dan 16 oed yn yr Alban a bydd rhagor o wybodaeth am yr ateb digidol yn dilyn maes o law.',
                text2Bold: 'Gogledd Iwerddon ',
                text2: '- Bydd rhagor o wybodaeth ar gael yn fuan gan yr Adran Iechyd i blant dan 16 oed yn ',
                link: {
                    href: 'https://www.health-ni.gov.uk/',
                    text: 'https://www.health-ni.gov.uk/'
                },
                text3Bold: 'Cymru ',
                text3: '- Gall pobl ifanc 12–15 oed gynhyrchu Pàs Teithio COVID y GIG drwy NHS.uk ar sail statws brechu a statws heintiadau blaenorol.',
                text4Bold: 'Ynys Manaw ',
                text4: '- Gall pobl ifanc 12–15 oed gynhyrchu Pàs Teithio COVID y GIG drwy NHS.uk a gall y rhai dros 13 oed ddefnyddio Ap y GIG drwy’r Apple Store, ar sail brechiadau yn unig.'
            },
            textBold: 'Sylwch',
            text: ": Os cawsoch eich brechu yng Nghymru, yr Alban, Gogledd Iwerddon a'ch bod yn breswylydd yn Lloegr, bydd eich data am ddigwyddiadau brechu yn cael ei brosesu o dan gytundebau rhannu data trawsffiniol a bydd yn ymddangos yn eich Pàs COVID."
        },
        age5to15DigitalPass: {
            title: 'Sut mae cael Pàs COVID digidol y GIG ar gyfer plentyn 5-15 oed?',
            text1: 'Mae rhieni/gwarcheidwaid yn Lloegr ac Ynys Manaw yn cael gwneud cais am lythyr teithio Pàs COVID digidol y GIG drwy ymweld ag NHS.uk',
            list1: {
                item1: "Gall eich rhiant/gwarcheidwad fynd i’r wefan yn NHS.uk a rhoi’r rhif ffôn symudol sydd wedi'i gofrestru gyda'ch cofnod meddyg teulu.",
                item2: "Bydd y rhif ffôn symudol hwn yn derbyn cod untro i'w deipio i mewn i NHS.uk",
                item3: "Os yw'r wybodaeth yn cyfateb ac yn gywir, bydd eich rhiant/gwarcheidwad wedyn yn gallu gwneud cais am fersiwn PDF o bàs teithio COVID y GIG sy’n gallu cael ei anfon i unrhyw gyfeiriad e-bost maen nhw wedi'i roi."
            },
            text2: "Os nad oes gennych chi rif ffôn symudol sydd wedi'i gofrestru gyda'ch meddygfa, gall eich rhiant/gwarcheidwad wneud cais am bàs digidol o hyd drwy NHS.uk drwy roi'r cyfeiriad ebost sydd wedi'i gofrestru gyda'ch meddyg teulu. Bydd yr wybodaeth yn cael ei gwirio ac os yw’n cyfateb i'r hyn rydyn ni’n ei wybod amdanoch chi yn ein systemau ni, bydd fersiwn PDF o Bàs COVID y GIG yn cael ei anfon wedyn i'ch cyfeiriad e-bost.",
            text3: "Os oes rhywbeth o’i le gyda'ch manylion ac na allwch chi gael Pàs Teithio COVID digidol y GIG, fe allwch chi gael neges ebost neu neges i'ch ffôn symudol yn esbonio'r hyn mae angen ichi ei wneud i ddatrys hyn."
        },
        age5To11TravelPass: {
            title: 'I’r rhai 5-11 oed sydd eisiau Pàs Teithio COVID y GIG neu lythyr Pàs Gwella',
            textGroup1: {
                text1: "Os ydych chi'n 5-11 oed, gall eich rhieni/gwarcheidwaid neu’ch gofalwyr wneud cais am lythyr teithio Pàs COVID neu lythyr Pàs Gwella ar wahân drwy ffonio 119 neu drwy fynd i wefan NHS.uk yn ",
                link1: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/nhs-covid-pass/get-an-nhs-covid-pass/get-your-nhs-covid-pass-letter/',
                    text: 'Cael eich Pàs COVID y GIG - GIG (www.nhs.uk)'
                },
                text2: '.'
            }
        },
        age5To11RecoveryPass: {
            title: "Llythyr Pàs Gwella i'r rhai 5-11 oed",
            textGroup1: {
                text1: 'Gallwch gael llythyr Pàs Gwella os ydych chi wedi cael prawf PCR GIG negatif yn y 6 mis diwethaf (heb fod ar gael yn Ynys Manaw). Mae’r llythyr pàs gwella ar gael 10 diwrnod ar ôl y prawf ac mae’n para tan 180 diwrnod ar ôl y prawf. Os ydych chi’n teithio dros y môr i wlad sydd angen i blant fod wedi’u brechu’n llawn yn erbyn COVID-19, gall eich rhieni/gwarcheidwaid neu’ch gofalwyr ofyn am ',
                boldText1: 'lythyr teithio Pàs COVID y GIG neu lythyr Pàs Gwella ',
                text2: "os yw'r canlynol yn wir: ",
                list1: {
                    listItem1: 'Eich bod dros 5 oed ac o dan 11 oed',
                    listItem2: {
                        text1: 'Eich bod wedi cael ',
                        boldText1: 'cwrs llawn ',
                        text2: 'o frechlyn COVID-19 yng Nghymru, Lloegr neu Ynys Manaw'
                    },
                    listItem3: 'Eich bod wedi aros 5 diwrnod ar ôl yr ail ddos cyn gwneud cais',
                    listItem4:
                        'Eich bod wedi cael prawf PCR GIG negatif yn y 6 mis diwethaf (heb fod ar gael yn Ynys Manaw)',
                    listItem5:
                        'Bod gennych chi feddyg teulu yng Nghymru, Lloegr ac Ynys Manaw neu rif GIG'
                }
            },
            howToGetTravelLetter: {
                title: 'Sut mae cael llythyr teithio Pàs COVID y GIG neu lythyr Pàs Gwella? Pa wybodaeth sydd ei hangen arnaf?',
                textGroup1: {
                    list1: {
                        listItem1:
                            'Gall eich rhieni/gwarcheidwaid neu’ch gofalwyr wneud cais am eich pàs teithio neu’ch llythyr pàs gwella naill ai ar-lein drwy NHS.uk neu drwy ffonio 119.',
                        listItem2: {
                            text1: 'Gallwch ffonio 119 o ffôn symudol neu ffôn cartref yng Nghymru, Lloegr neu Ynys Manaw (0808 1624 119 yn Ynys Manaw). Cewch eich cysylltu ag aelod o staff 119 sy’n ymwneud â phasys COVID y GIG. Byddan nhw’n gofyn ychydig o gwestiynau i’ch rhiant/gwarcheidwad neu’ch gofalwr (data personol):',
                            subList1: {
                                listItem1: 'Eich enw cyntaf a’ch enw teuluol',

                                listItem2: 'Eich dyddiad geni',
                                listItem3: "Eich cod post lle rydych chi'n byw."
                            }
                        }
                    }
                },
                textGroup2: {
                    text1: "Mae hyn yn cael ei gyplysu â’r hyn rydyn ni’n ei wybod amdanoch chi yn ein systemau. Bydd eich cais am lythyr yn cael ei drosglwyddo i’n hargraffwyr. Byddan nhw’n argraffu ac yn postio eich llythyr teithio pàs COVID GIG neu’ch llythyr pàs gwella i'ch ",
                    boldText1: 'cyfeiriad cartref ',
                    text2: "(yr un sydd gan eich meddyg teulu ar eich cyfer) a fydd yn cymryd tua 5-7 diwrnod i gyrraedd ac a fydd wedi’i gyfeirio at y rhieni/gwarcheidwad neu'r gofalwr."
                },
                textGroup3: {
                    boldTextHeading: 'Cadw manylion eich cyfeiriad yn gyfredol',
                    italicText1:
                        "Mae'n bwysig dweud wrth eich meddyg teulu pan fydd rhywbeth yn newid, fel eich cyfeiriad, fel bod gennyn ni’r manylion cywir amdanoch chi ac fel y gallwn sicrhau bod eich llythyr teithio Pàs COVID GIG yn cael ei anfon i'r cyfeiriad cywir."
                }
            }
        }
    },

    thePersonalDataWeCollectAndHowItIsUsed: {
        title: 'Yr wybodaeth rydyn ni’n ei chasglu',
        table1: {
            headings: {
                heading1: 'Data Personol',
                heading2: 'Ap y GIG',
                heading3: 'Gwefan NHS.uk',
                heading4: 'Mewngofnodi GIG ar gyfer Ap y GIG a',
                heading5: 'Gwasanaeth Llythyrau Brechu (119 ac NHS.uk)',
                heading6: "Data clwyd wedi'i amgodio yn y cod bar 2D",
                heading7: 'Eithriadau meddygol'
            },
            rows: {
                row1: {
                    col1: "Enw llawn i'ch adnabod chi'n gywir.",
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row2: {
                    col1: "Dyddiad geni i'ch adnabod chi'n gywir.",
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row3: {
                    col1: "Rhif GIG i'ch adnabod yn gywir.",
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row4: {
                    col1: "Cyfeiriad cartref (Gan gynnwys Cod Post) * Er mwyn anfon llythyrau Pàs COVID yn gywir i'ch cyfeiriad cartref os gofynnir am hynny.",
                    col2: { tick: 'no', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: {
                        tick: 'yes',
                        text: ' Gan gymryd y cyfeiriad o’r PDS*',
                        link: 'https://digital.nhs.uk/services/demographics'
                    },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row5: {
                    col1: {
                        text1: 'Rhifau llinell dir a/neu ffôn symudol.',
                        list1: "Er mwyn gallu cysylltu â'r rhai sydd wedi gofyn am Bàs, neu sydd angen cefnogaeth.",
                        list2: 'Neges destun SMS ar gyfer defnyddio’r opsiwn llythyr os bydd taith yn methu neu i dderbyn canlyniad prawf brechlyn.'
                    },
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: 'Symudol' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'no', text: '' }
                },
                row6: {
                    col1: {
                        text1: 'Cyfeiriad e-bost',
                        list1: 'Er mwyn gallu cysylltu â chi os ydych wedi gofyn am Bàs, neu os oes angen cefnogaeth arnoch',
                        list2: "Os ydych chi'n defnyddio'r gwasanaeth llythyrau nad yw'n ddigidol os bydd taith yn methu"
                    },
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row7: {
                    col1: 'Gellir cymryd manylion cyswllt trydydd partïon pan fyddant wedi cytuno i gysylltu â nhw ar ran oedolion eraill.',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'no', text: '' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row8: {
                    col1: 'Gwirio ID ffotograffig',
                    col2: { tick: 'no', text: '' },
                    col3: { tick: 'no', text: '' },
                    col4: { tick: 'yes', text: '*' },
                    col5: { tick: 'no', text: '' },
                    col6: { tick: 'no', text: '' },
                    col7: { tick: 'no', text: '' }
                },
                row9: {
                    col1: 'Data Categori Arbennig (Iechyd) Eich data brechu a phrofi',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'no', text: '' },
                    col5: { tick: 'yes', text: '' },
                    col6: { tick: 'yes', text: '' },
                    col7: { tick: 'yes', text: '' }
                },
                row10: {
                    col1: 'Nid yw penderfyniadau na phroffilio awtomataidd yn cael eu defnyddio wrth ddarparu’r gwasanaeth hwn (Erthygl 22 o GDPR y DU)',
                    col2: { tick: 'no', text: 'X' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'no', text: 'X' },
                    col5: { tick: 'no', text: 'X' },
                    col6: { tick: 'no', text: 'X' },
                    col7: { tick: 'no', text: 'X' }
                },
                rowFooter: {
                    text: '* Dim ond ei angen ar gyfer teithio rhyngwladol'
                }
            }
        }
    },
    whereIsMyDataHeld: {
        title: "Sut rydych chi'n prosesu fy ngwybodaeth a ble mae fy nata'n cael ei gadw?",
        textGroup0: {
            textBold: 'Nid yw eich Pàs COVID digidol GIG ',
            text: "ei hun yn cadw unrhyw ddata ac mae'n fodd o ddangos eich statws COVID. Nid oes mynediad at gofnodion meddygol eich meddyg teulu at y diben hwn ac nid oes angen unrhyw ganiatâd mynediad nac yn cael ei ddarparu gan eich meddyg teulu i chi gael mynediad at Pàs COVID y GIG. Mae allgofnodi yn dod â'r sesiwn arddangos i ben. ",
            text1Bold: '',
            text1: '',
            text2Bold: '',
            text2: ''
        },
        textGroup1: {
            textBold: 'Mae’ch hanes brechiadau COVID-19 ',
            text: "yn cael ei gadw'n ddigidol gan NHS England and Improvement (NHSE and I) yn storfa ddata'r Gwasanaeth Rheoli Imiwneiddio Genedlaethol (NIMS). NHSE yw rheolwr data’r rhaglen frechu ac mae'n rhoi manylion eich brechiadau i'ch meddyg teulu (sef rheolwr data eich cofnod meddygol)."
        },
        textGroup2: {
            textBold: 'Mae canlyniadau’ch profion COVID-19, ',
            text: "gan gynnwys y rhai a brosesir mewn ysbyty drwy labordai UKHSA (sef y rhai ag angen clinigol neu sy'n gweithio mewn lleoliadau clinigol) yn cael eu dal gan Wasanaeth Profi ac Olrhain UKHSA. Bydd canlyniad PCR positif yn darparu Pàs COVID y GIG sydd wedi'i seilio ar heintiad blaenorol am 180 diwrnod o ddyddiad y prawf. Nid yw canlyniadau profion preifat yn cael eu cynnwys ym Mhàs COVID y GIG ar hyn o bryd."
        },
        textGroup3: {
            textBold: 'Mae’ch data Eithriadau Meddygol a’ch data Clinigol, ',
            text: "yn cael ei gadw gan NHS Digital (NHSD) fel rheolwr data y Cofnod Gofal Cryno. Mae’ch cofnodion meddygol a gedwir gan eich meddyg teulu o dan reolaeth data eich meddyg teulu ar wahân ac nid ydynt yn cael eu defnyddio na'u cyrchu gan wasanaeth Pàs COVID y GIG. I'r rhai sy'n cymryd rhan mewn treialon clinigol, gan gynnwys safleoedd profion preifat, rheolwr data eich gwybodaeth feddygol sydd wedi’i seilio ar y treial yw corff ymchwil y treial clinigol, a all roi Hysbysiad Preifatrwydd i chi i esbonio sut maen nhw’n prosesu’ch data personol a’ch data iechyd."
        },
        textGroup4: {
            textBold: 'Mae Data Brechiadau Cymru ',
            text: "yn cael ei rannu o dan gytundeb rhwng y DHSC a Llywodraeth Cymru i roi'r gallu i'r dinasyddion hynny sy'n byw yng Nghymru ddangos eu statws COVID-19. Mae cronfa ddata brechiadau Cymru yn cael ei gweithredu gan Fwrdd Iechyd Cymru, o’r systemau mannau gofal brechlyn COVID-19 a gymeradwywyd gan Iechyd Cyhoeddus Cymru sef rheolwr data (a gweithredwr) Rhaglen Frechu COVID-19 Cymru."
        },
        textGroup5: {
            textBold: 'Mae eich data Ynys Manaw ',
            text: 'yn defnyddio Ap GIG Lloegr i roi tystysgrif brechu COVID-19 i chi. Rhennir eich gwybodaeth frechu gydag NHS Digital dan gytundeb gyda Manx Care. Mae gwefan Manx Care fel isod yn eich cyfeirio i benderfynu a ydych am optio allan o rannu eich data ar gyfer y gwasanaeth hwn ac at eich Swyddog Diogelu Data yn ',
            link: {
                href: 'https://www.gov.im/about-the-government/statutory-boards/manx-care/COVID-19-vaccination-certificate-privacy-statement/#accordion',
                text: 'https://www.gov.im/about-the-government/statutory-boards/manx-care/COVID-19-vaccination-certificate-privacy-statement/#accordion'
            }
        },
        textGroup6: {
            textBold: "Mae’ch data demograffig a'ch manylion personol ",
            text: "yn cael eu cadw gan Wasanaeth Demograffeg Bersonol Digidol (PDS) y GIG. Mae gwybodaeth fel eich enw, eich cyfeiriad, eich dyddiad geni a’ch rhif GIG, ac os cânt eu cofnodi, eich cyfeiriad ebost a'ch rhif ffôn symudol a roddir i'ch meddyg teulu - i gyd yn cael eu prosesu i'n helpu i’ch adnabod yn gyflym ac yn gywir. At ddibenion y gwasanaeth llythyrau, mae’ch cyfeiriad yn cael ei gysylltu wedyn â'ch data brechu ac yn cael ei ddarparu i wasanaeth argraffydd diogel (gan gynnwys fersiwn Braille) y caiff y llythyr ei bostio atoch ganddo. Mae rhagor o wybodaeth a dolen i Hysbysiad Preifatrwydd y PDS i'w gweld yma:",
            link: {
                href: 'https://digital.nhs.uk/services/demographics/personal-demographics-service-fair-processing',
                text: 'https://digital.nhs.uk/services/demographics/personal-demographics-service-fair-processing'
            }
        },
        textGroup7: {
            textbold:
                "Data rydych chi’n ei ddarparu er mwyn cyrchu gwasanaeth Pàs COVID y GIG drwy ddull mewngofnodi'r GIG: ",
            text1: 'bydd angen ichi ymgymryd â phroses gofrestru ar gyfer dull mewngofnodi’r GIG i ddilysu pwy ydych chi ac i helpu i atal twyll a chamddefnyddio Ap y GIG a llwybr ar-lein NHS.UK. Mae’ch Pàs Teithio COVID GIG yn cynnwys gwybodaeth feddygol sensitif am eich statws COVID ac felly bydd angen ichi ddarparu lefel uchel o ddilysiad gan gynnwys ID ffotograffig (fel pasbort neu drwydded yrru). Does dim angen mewngofnodi i’r GIG er mwyn gwneud cais am lythyr a PDF.',
            textbold2:
                ' Sicrhewch fod gan eich meddyg teulu rif ffôn symudol cyfredol ar eich cyfer ac mae’n bosibl yr hoffech gofrestru cyfeiriad ebost gyda’ch meddyg teulu.',
            text2: 'Gellir dod o hyd i ragor o wybodaeth a hysbysiad preifatrwydd ynglŷn â mewngofnodi i’r GIG yn ',
            text3: ' ac ',
            link1: {
                href: 'https://access.login.nhs.uk/privacy',
                text: 'Your Privacy on NHS login'
            },
            link2: {
                href: 'https://www.nhs.uk/nhs-services/online-services/nhs-log-in/',
                text: 'https://www.nhs.uk/nhs-services/online-services/nhs-log-in/'
            }
        },
        textGroup9: {
            textbold: 'Wrth gyrchu gwefan y GIG at ddibenion Pàs COVID y GIG: ',
            text1: "Gallwch gael mynediad at wasanaethau Ap y GIG o'r wefan yn NHS.uk drwy glicio ar yr adran sydd wedi'i marcio fel gwasanaeth statws Pàs COVID. Mae’r cynnwys, y data a’r gwasanaethau ar y wefan yn cael eu comisiynu gan ",
            text2: " a'u darparu gan ",
            text3: 'Gellir dod o hyd i ragor o wybodaeth a hysbysiad preifatrwydd ar gyfer Gwefan y GIG yn',
            link1: {
                href: 'https://www.england.nhs.uk/',
                text: 'NHS England'
            },
            link2: {
                href: 'https://digital.nhs.uk/',
                text: 'NHS Digital.'
            },
            link3: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/'
            },
            link4: {
                href: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/',
                text: 'https://www.nhs.uk/conditions/coronavirus-COVID-19/COVID-pass/'
            },
            link5: {
                href: 'https://www.nhs.uk/our-policies/privacy-policy/',
                text: 'https://www.nhs.uk/our-policies/privacy-policy/'
            }
        },
        textgroup10: {
            textbold: 'Wrth gyrchu Pàs COVID y GIG drwy Ap y GIG: ',
            text1: 'NHS Digital yw gweithredwr, a rheolwr data Ap y GIG. Mae rhagor o wybodaeth yn ogystal â Hysbysiadau Preifatrwydd ar gyfer Ap y GIG ar gael yn ',
            link1: {
                href: 'https://www.nhs.uk/apps-library/nhs-app/',
                text: 'https://www.nhs.uk/apps-library/nhs-app/'
            }
        },
        textgroup14: {
            textbold: 'Gwasanaeth y ganolfan alwadau 119: ',
            text1: "Nawr yn gweithredu dydd Llun i ddydd Gwener rhwng 8am ac 8pm (gan gynnwys gwyliau banc), dydd Sadwrn rhwng 8am a 4pm ac ar gau ar ddydd Sul. Bydd gweithredwyr 119 yn prosesu manylion personol a demograffig i'ch helpu i gael Pàs COVID y GIG drwy lythyr neu PDF. I'r rhai sydd ar hyn o bryd ar dreial clinigol, neu sydd wedi bod ar dreial clinigol, peidiwch â ffonio 119 yn y lle cyntaf ond cyfeiriwch yn ôl at safle’ch treial fel y rheolwr data. Mae rhagor o wybodaeth am wasanaeth 119 ar gael yn ",
            link1: {
                href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/using-the-nhs-and-other-health-services/when-to-call-119/',
                text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/using-the-nhs-and-other-health-services/when-to-call-119/'
            }
        },
        textgroup11: {
            textbold: "Pa gwcis sy'n cael eu defnyddio ym Mhàs COVID y GIG? ",
            text1: "Er mwyn galluogi'r dechnoleg i weithio o fewn Pàs COVID y GIG yn Ap y GIG, ac i weithredu'n fwy effeithlon wrth ei defnyddio, rydyn ni'n gosod ffeiliau bach o'r enw cwcis sy'n hollol angenrheidiol, ar eich dyfeisiau. Gellir gweld y polisi cwcis ar gyfer Pàs COVID y GIG yn: ",
            link1: {
                href: 'https://COVID-status.service.nhsx.nhs.uk/help/CookiePolicy/',
                text: 'https://COVID-status.service.nhsx.nhs.uk/help/CookiePolicy/'
            }
        },
        textgroup12: {
            textbold: 'Data a brosesir yn y cyfeiriad IP: ',
            text1: "Mae cyfeiriad Protocol Rhyngrwyd (IP) yn gyfeiriad unigryw sy'n nodi'r ddyfais rydych chi'n ei defnyddio ar y rhyngrwyd neu rwydwaith lleol i gyrchu Pàs COVID digidol y GIG. Mae hyn yn rhan annatod o ddefnyddio technoleg y rhyngrwyd a thechnoleg IP ac mae’n angenrheidiol er mwyn sefydlu cysylltiad technegol rhwng y gwasanaeth a'ch ffôn neu’ch porwr. Mae'r cyfeiriad IP yn cael ei brosesu at ddibenion rheoli a diogelwch yn unig ac nid yw'n cael ei ddefnyddio at ddibenion marchnata."
        },
        textgroup13: {
            textbold:
                'Data a brosesir wrth ddefnyddio waled eich ffôn symudol i gadw’ch Pàs COVID GIG all-lein: ',
            text1: "Mae gan ffonau clyfar Apple a Google swyddogaeth waled a fydd yn eich galluogi i gadw, gweld a rhannu’ch Pàs COVID GIG pan na fyddwch chi ar-lein. Gallwch lawrlwytho hwn yn uniongyrchol o sgrin fyw Pàs COVID y GIG. Fe'ch cynghorir i wirio telerau defnyddio a Pholisi Preifatrwydd Apple a Google i gael rhagor o wybodaeth yn",
            text2: 'Apple: ',
            text3: 'Google: ',
            link1: {
                href: 'https://support.apple.com/en-gb/HT203027',
                text: 'https://support.apple.com/en-gb/HT203027'
            },
            link2: {
                href: 'https://payments.google.com/files/privacy/archive/20111116_buyer.html',
                text: 'https://payments.google.com/files/privacy/archive/20111116_buyer.html'
            }
        }
    },
    cookies: {
        textBold: 'Gwcis: ',
        text1: "Er mwyn galluogi'r dechnoleg i weithio o fewn Tocyn COVID y GIG yn Ap y GIG, ac i weithredu'n fwy effeithlon wrth ei defnyddio, rydyn ni'n gosod ffeiliau bach o'r enw cwcis sy'n hollol angenrheidiol, ar eich dyfeisiau. Gellir gweld y polisi cwcis ar gyfer Tocyn COVID y GIG yn: ",
        text2: 'The ‘strictly necessary cookies added to the NHS COVID Pass are:',
        tableGroup1: {
            expander1: {
                table: {
                    headings: {
                        heading1: 'Enw',
                        heading2: 'Pwrpas hollol angenrheidiol'
                    },
                    rows: {
                        row1: {
                            col1: 'COVIDStatusUserPreference',
                            col2: "Rydym yn storio pa ddewis llif a wnaethoch (digwyddiadau yn y DU neu deithio rhyngwladol) er mwyn dod â chi yn ôl i'r lle iawn"
                        }
                    }
                }
            }
        },
        text3: "Mae polisïau cwcis ar wahân ar gyfer swyddogaethau ehangach Ap y GIG, mewngofnodi'r GIG a gwefan NHS.uk. NHS Digital (NHSD) yw'r rheolwr data ar gyfer y technolegau hyn a gellir dod o hyd i ragor o wybodaeth fel isod.",
        tableGroup2: {
            expander1: {
                table: {
                    headings: {
                        heading1: 'Gwefan',
                        heading2: 'Dolen'
                    },
                    rows: {
                        row1: {
                            col1: 'Mewngofnodi GIG',
                            col2: {
                                link1: {
                                    href: 'https://access.login.nhs.uk/cookies',
                                    text: 'https://access.login.nhs.uk/cookies'
                                }
                            }
                        },
                        row2: {
                            col1: 'Ap y GIG',
                            col2: {
                                link1: {
                                    href: 'https://www.nhs.uk/nhs-app/nhs-app-legal-and-cookies/nhs-app-cookies-policy/',
                                    text: 'https://www.nhs.uk/nhs-app/nhs-app-legal-and-cookies/nhs-app-cookies-policy/'
                                }
                            }
                        },
                        row3: {
                            col1: 'Gwefan y GIG',
                            col2: {
                                link1: {
                                    href: 'https://www.nhs.uk/our-policies/cookies-policy/',
                                    text: 'https://www.nhs.uk/our-policies/cookies-policy/'
                                },
                                link2: {
                                    href: 'https://www.nhs.uk/our-policies/privacy-policy/',
                                    text: 'https://www.nhs.uk/our-policies/privacy-policy/'
                                }
                            }
                        }
                    }
                }
            }
        },
        textGroup1: {
            titleBold: 'IP address: ',
            text: 'The NHS app and website use an internet connection therefore your IP address will also be processed. This is inherent to the use of internet and IP technology and is necessary to technically establish a connection between the test performer’s or vaccinator’s server and your phone or browser. The IP address is processed for management and security purposes only.'
        },
        textGroup2: {
            titleBold: 'Apple Wallet option: ',
            text: 'The iOS operating systems provide a feature called a “Wallet Function”. This will allow Apple smartphone users to collect and organise personal data within their device and have an available offline, downloaded copy of their COVID Pass. This can take place directly from the NHS COVID Pass App. Check the Apple terms and conditions of use prior to accepting inclusion of their COVID Pass into a local wallet function.'
        },
        textGroup3: {
            titleBold: 'Google Wallet option: ',
            text: 'If you obtain your NHS COVID Pass through the NHS App or Google Chrome web browser using an Android phone, you will be able to store your NHS COVID Pass in the Google Pay Digital Wallet of your mobile device (through certified android devices manufactured from 2014 onwards (version 5 onwards). You will see the ‘Google Pay - save to phone’ button within the NHS App.'
        }
    },
    howWillMyInformationBeShared: {
        title: 'Sut bydd fy ngwybodaeth yn cael ei rhannu?',
        text: "DHSC yw'r rheolwr data ar gyfer Pàs COVID y GIG.  Caiff eich data, gan gynnwys eich rhif GIG, ei gymryd a'i brosesu o systemau gwreiddiol a gymeradwywyd yn NHS England, systemau wrth bwynt y gofal, y Gwasanaeth Rheoli Imiwneiddio Genedlaethol (NIMS) a'r Gwasanaeth Demograffig Personol (PDS). Defnyddir y data demograffig hwn i ddilysu a chroesgyfeirio’ch gwybodaeth.",
        text2: 'Sylwch: Does dim data’n cael ei drosglwyddo y tu allan i gymuned ehangach y DU a Dibyniaethau’r Goron.'
    },
    howLongDoWeKeepYourPersonalData: {
        title: "Pa mor hir ydyn ni'n cadw'ch gwybodaeth?",
        textGroup1: {
            boldText: 'Defnyddwyr digidol: ',
            text1: "Nid yw data'n cael ei storio yn ardal Pàs COVID y GIG yn Ap y GIG. Arddangosir y data yn ystod eich sesiwn mewngofnodi byw. Ni fydd eich data COVID-19 yn cael ei gadw ar ôl i chi allgofnodi."
        },
        textGroup2: {
            boldText: 'Y gwasanaeth llythyrau drwy 119 neu drwy ofyn eich hunan yn NHS.uk: ',
            text1: 'Bydd eich data yn cael ei gadw am 90 diwrnod a fydd yn caniatáu i’r llythyr gael ei argraffu a’i bostio.'
        },
        textGroup3: {
            boldText: 'Gall cyfnodau cadw ychwanegol ',
            text1: 'gael eu defnyddio mewn amgylchiadau lle mae testun data yn arfer ei hawl i weld gwybodaeth:',
            list: {
                item1: 'Yn achos cwynion cyfreithiol - gellir cadw data am gyfnod o 10 mlynedd.',
                item2: 'Ceisiadau Testun am Weld Data (SAR) a Cheisiadau Rhyddid Gwybodaeth (FOI) - 3 blynedd.',
                item3: 'Ceisiadau Testun am Weld Data a Cheisiadau Rhyddid Gwybodaeth lle bu apêl - 6 blynedd.'
            }
        },
        textGroup4: {
            boldText: 'Gov.uk: ',
            text1: "Darperir dolen yn y pàs digidol sy'n caniatáu i gopi o'ch Pàs COVID GIG gael ei anfon i'ch cyfeiriad ebost wedi'i storio fel dolen yng nghorff y neges ebost. Mae cynnwys perthynol eich lawrlwythiad yn dod o dan y cyfnod ym mholisi cadw Gov.uk, sef 18 mis."
        }
    },
    checkingYourCovidPass: {
        title: 'Sut bydd fy Mhàs COVID GIG yn cael ei wirio?',
        text: "Mae'n bosibl y bydd eich Pàs COVID GIG yn cael ei wirio'n weledol neu drwy sganio gan Ddilyswr Pàs COVID (Ap) y GIG wedi'i lawrlwytho i ddyfais symudol gweithredwr gan ddefnyddio'r camera yn ffôn y gweithredwr. Mae Gwiriwr Pàs COVID (Ap) y GIG yn cael ei lawrlwytho i ddyfais symudol gweithredwr i ganiatáu i gamera'r ffôn sganio'ch cod bar 2D. O 12 Mai 2022 ymlaen, nid yw'r pàs domestig ar gael mwyach. Pan wneir ymgais i ddefnyddio'r modd domestig a bod cod bar Pàs COVID y GIG yn cael ei ddangos, bydd hyn yn dangos neges gwall ar y sgrin.",
        subHeading: "Y data a ddangosir o'ch ffôn symudol:",
        list1: {
            listItem1: {
                boldText1: 'Ar gyfer teithio rhyngwladol ',
                text1: "mae'r wybodaeth yn cael ei chadw o fewn y cod bar 2D wedi'i amgodio, a ddefnyddir at ddibenion gwirio neu sganio gweledol yn y man ymadael. Bydd sgrîn eich ffôn symudol yn dangos statws positif neu negatif eich pàs. Mae sgriniau’r pàs teithio hefyd yn cynnwys manylion llawn y brechlynnau a gawsoch a pha bryd. Fel un o ofynion teithio rhyngwladol, efallai y gofynnir ichi ddatgelu'r wybodaeth hon wrth safle rheoli ar y ffin."
            }
        },
        subHeading2: 'Y data a ddangosir yn eich Llythyr Pàs COVID:',
        list2: {
            listItem1: {
                boldText1: 'Ar gyfer teithio rhyngwladol, ',
                text1: "mae'r cod bar 2D a'r wybodaeth am y brechlyn yr un fath ag yn y pas digidol a gellir eu sganio neu eu gwirio'n weledol. Mae eich pàs teithio COVID GIG hefyd yn cynnwys manylion llawn eich digwyddiadau brechu fel gofyniad teithio rhyngwladol ac efallai y bydd gofyn i chi ddangos y rhain."
            }
        },
        body3: {
            boldText1: 'Gall ymwelwyr rhyngwladol â Lloegr ',
            text1: " barhau i ddangos pàs rhyngwladol (fersiynau digidol neu bapur) i weithredwr am wiriad gweledol mewn lleoliadau domestig sydd wedi dewis gwirio ardystiad fel amod mynediad. Mae yna hefyd y gallu i sganio eich codau bar rhyngwladol 2D yn y modd domestig lle mae gwledydd yr UE a'r rhai y tu allan i'r UE, gan gynnwys y DU yn defnyddio'r un safonau cod bar. Mae hyn wedi'i wneud yn bosibl trwy gydymffurfiaeth ryngwladol â safonau DCC yr UE (Tystysgrif COVID Ddigidol Comisiwn yr UE) gan wneud amgodio'r cod bar 2D o fewn pasys rhyngwladol COVID-19 yn safonol. Gall Ap Dilyswr Pàs COVID y GIG hefyd sganio a derbyn data tystysgrif prawf DCC yr UE lle y’i gweinyddwyd yn ystod y 48 awr ddiwethaf. Ni dderbynnir prawf o haint blaenorol."
        }
    },

    whoCanHaveAnNhsCovidPass: {
        title: 'Pwy all gael Pàs COVID y GIG?',
        subtitle: "-	Mae'r tabl isod yn crynhoi argaeledd yn ôl grwpiau oedran",
        table1: {
            headings: {
                heading1: 'Oed',
                heading2: 'Pàs Teithio Digidol drwy wefan NHS.uk',
                heading3: 'Pàs Teithio Digidol drwy Ap y GIG',
                heading4: 'Llythyr Pàs ar gyfer Teithio drwy 119 neu NHS.uk'
            },
            rows: {
                row1: {
                    col1: '5-11',
                    col2: { tick: 'yes', text: '(llwybr PDF yn unig)' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'yes', text: '' }
                },
                row2: {
                    col1: '12+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row3: {
                    col1: '13+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row4: {
                    col1: '16+',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row5: {
                    col1: '18+ oedolyn',
                    col2: { tick: 'yes', text: '' },
                    col3: { tick: 'yes', text: '' },
                    col4: { tick: 'yes', text: '' }
                },
                row6: {
                    col1: 'Dirprwy*',
                    col2: { tick: 'no', text: 'X' },
                    col3: { tick: 'no', text: 'X' },
                    col4: { tick: 'yes', text: '' }
                },
                rowFooter: {
                    text: '* ar ran rhywun arall'
                }
            },
            body2: {
                text1: 'Note: Please ensure your contact and personal details including mobile phone number, are up to date with your registered GP.'
            }
        },
        clinicalTrial: {
            title: "- Os ydych chi'n gyfranogwr mewn prawf clinigol",
            body1: {
                text1: 'Os ydych chi wedi’ch ',
                boldText1: 'eithrio ',
                text2: 'rhag cael brechiadau COVID-19 am eich bod mewn treial clinigol GIG neu dreial clinigol preifat, neu wedi cymryd rhan mewn un, ac o bosibl wedi cael brechiadau eraill, byddwch yn gallu defnyddio gwasanaeth Pàs COVID y GIG a chofnodir yr wybodaeth am eich brechiadau ar NIMS a byddwch yn gymwys i gael Pàs COVID.',
                text3: "Ar 30 Mehefin 2022, bydd Rheoliadau Rheoli Gwybodaeth Cleifion y Gwasanaeth Iechyd (COPI) 2002 yn dod i ben. Gan hynny, ni fydd gwybodaeth bellach yn cael ei chasglu ar gyfranogwyr prawf wedi'u dallu (y rhai nad ydynt yn gwybod a ydynt yn cael eu trin â brechlyn sy’n cael ei ddatblygu ynteu placebo). Bydd unrhyw wybodaeth sy'n bodoli eisoes am gyfranogwyr wedi’u dallu yn cael ei dileu o’n systemau. Gall eich pàs teithio fod ar gael drwy’r ap, y wefan neu’r llythyr. Mae rhagor o wybodaeth ar gael yn ",
                link1: {
                    text: 'https://www.gov.uk/government/publications/certification-for-vaccine-clinical-trial-participants',
                    href: 'https://www.gov.uk/government/publications/certification-for-vaccine-clinical-trial-participants'
                },
                text4: ' ac ',
                link2: {
                    text: 'https://www.nhsx.nhs.uk/covid-19-response/using-the-nhs-covid-pass/#exemptions',
                    href: 'https://www.nhsx.nhs.uk/covid-19-response/using-the-nhs-covid-pass/#exemptions'
                },
                text5: 'Gall parodrwydd rhyngwladol i dderbyn hyn ddibynnu ar y treial rydych chi wedi cymryd rhan ynddo a, hyd nes ceir unrhyw gytundebau rhyngwladol, efallai y bydd angen ichi ddangos tystiolaeth o’ch statws ar gyfer teithio tramor drwy brofion. Fel cyfranogwr mewn prawf clinigol preifat neu brawf clinigol GIG, erbyn hyn mae gennych chi’r opsiwn o gael dosau brechlyn ychwanegol, er mwyn teithio’n rhyngwladol i wledydd sydd ar hyn o bryd yn derbyn cofnodion o frechiadau â brechiadau COVID-19 sydd wedi’u rhoi ar waith yn unig. Gallwch archebu ar-lein yn y Gwasanaeth Archebu Cenedlaethol ',
                link3: {
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/'
                },
                text6: '.'
            },
            body2: {
                text1: "NHS England yw’r rheolwr data ar gyfer y System Rheoli Imiwneiddio Genedlaethol (NIMS) a'r NBS. Gellir dod o hyd i Hysbysiadau Preifatrwydd y gwasanaethau hyn drwy ddilyn y dolenni isod:",
                list1: {
                    listItem1: {
                        text1: 'NBS: ',
                        link1: {
                            href: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/',
                            text: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/'
                        }
                    },
                    listItem2: {
                        text1: 'NIMS: ',
                        link1: {
                            href: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/',
                            text: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/'
                        }
                    }
                }
            }
        },
        medicalExemption: {
            title: '-	Os oes gennych eithriad meddygol',
            body1: {
                text1: 'Yn unol â’r penderfynaid i roi’r gorau i Bás COVID domestig y GIG i’w ddefnyddio mewn lleoliadau neu ddigwyddiadau fel un o amodau mynediad, mae’r gwasanaeth eithriadau meddygol wedi cau. Bydd eich eithriad meddygol yn dal i fod wedi’i gynnwys yn yr adran ‘View COVID-19 Records’ gyda’r dyddiad y daw i ben (os yw’n gymwys). Mae canllawiau pellach ar gael yn ',
                link1: {
                    href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    text: 'https://www.gov.uk/guidance/nhs-covid-pass'
                },
                text2: '.'
            }
        },
        vaccinationOverseas: {
            title: ' - Os ydych yn breswylydd o Loegr sydd wedi cael eich brechu dramor',
            body1: {
                text1: "Os ydych yn byw yn Lloegr, eich bod dros 5 oed, bod rhif GIG gennych chi, a bod un neu fwy o'ch brechiadau COVID-19 wedi’u rhoi ichi dros y môr, ar yr amod bod gennych chi brawf adnabod a phrawf eich bod wedi’ch brechu, gallwch ychwanegu manylion eich brechiadau at eich Cofnod GIG (sy’n cael ei storio yn system NIMS) ac yn ei dro, cynhyrchu Pàs COVID y GIG a diweddaru’ch cofnod meddygol os ydych yn bodloni'r meini prawf ynglŷn â brechlynnau. Caiff oedolyn weithredu fel dirprwy ar ran plentyn, a does dim angen mynd â'r plentyn i'r ganolfan gyda chi er mwyn i'w ddata gael ei brosesu."
            },
            body2: {
                text1: 'Bydd eich data’n cael ei brosesu gan y System Archebu Genedlaethol (NBS) ar-lein pan fyddwch yn gofyn am apwyntiad i gofrestru’ch brechiadau tramor yn ',
                link1: {
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/tell-nhs-about-coronavirus-vaccinations-abroad/',
                    text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/tell-nhs-about-coronavirus-vaccinations-abroad/'
                }
            },
            body3: {
                text1: "Mae'r hysbysiad preifatrwydd sy'n esbonio sut mae gwasanaeth yr NBS yn defnyddio'ch data ar gael yn: ",
                link1: {
                    href: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/',
                    text: 'https://www.nhs.uk/our-policies/nbs-privacy-policy/'
                }
            },
            body4: {
                text1: "Bydd y ganolfan frechu yn llenwi ffurflen gan ddefnyddio'r wybodaeth y byddwch chi’n ei rhoi mewn perthynas â'ch hanes brechu. Yna mae’r ffurflen hon yn cael ei hanfon at y Gwasanaeth Datrys Data Brechiadau (VDRS), sydd o dan reolaeth data NHSE, a fydd yn bwydo’ch gwybodaeth i system NIMS. Mae rhagor o wybodaeth am y VDRS ar gael yn ",
                link1: {
                    href: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/#vaccine-data-resolution-service',
                    text: 'https://www.england.nhs.uk/contact-us/privacy-notice/national-flu-vaccination-programme/#vaccine-data-resolution-service'
                },
                text2: ' ac ',
                link2: {
                    href: 'https://www.nhs.uk/contact-us/vaccine-record-help/',
                    text: 'https://www.nhs.uk/contact-us/vaccine-record-help/'
                }
            },
            text1Bold: 'Sylwch: ',
            text1: 'bydd rhai meysydd data gwneuthurwr yn troi’n ddiofyn i werthoedd manyleb yr UE ac felly gallant ymddangos yn wahanol yn eich Pàs COVID GIG.'
        },
        visitorToEngland: {
            title: '- Os ydych yn ymwelydd â Lloegr gyda Phàs Rhyngwladol',
            body1: {
                text1: "Mae teithwyr i Loegr sy'n mynd i leoliadau yn Lloegr (lle mae'r trefnydd wedi dewis defnyddio Pàs COVID y GIG), yn gallu defnyddio’u Pàs COVID rhyngwladol a gafodd ei dderbyn ar ffin y Deyrnas Unedig i gael mynediad i ddigwyddiadau a lleoliadau yn Lloegr. Gwnaed hyn yn bosibl drwy gydymffurfio'n rhyngwladol â safonau DCC (cod bar 2D) yr UE (Tystysgrif COVID Ddigidol Comisiwn yr UE). Mae hyn yn gymwys i wledydd yr UE a'r rhai y tu allan i'r UE, gan gynnwys y Deyrnas Unedig, sy'n dymuno defnyddio'r un safon. Gellir gwirio pasys yn weledol neu drwy ddefnyddio Ap Gwirio Pasys COVID y GIG."
            }
        }
    },
    userSatisfactionSurvey: {
        title: 'Arolwg Boddhad Defnyddwyr ',
        text1: "Bydd NHSBSA yn cynnal arolwg boddhad defnyddwyr dewisol ar ran gwasanaeth Pàs COVID y GIG. Mae'r arolwg yn gofyn cwestiynau am eich profiad o'r gwasanaeth a gawsoch wrth sicrhau’ch Pàs Teithio COVID GIG. Bydd eich adborth yn cael ei ddadansoddi i adolygu’n gwasanaethau a sbarduno gwelliannau. Bydd integreiddio adborth y cwsmeriaid yn y broses gyflenwi yn helpu i wella'r gwasanaeth drwy ganolbwyntio ar y canlynol:",
        list1: {
            item1: 'Sut mae’r defnyddwyr yn teimlo am y gwasanaeth y maen nhw’n ei gael',
            item2: "Pa mor fodlon yw’r defnyddwyr ar rwyddineb dod o hyd i'r wybodaeth gywir sydd ei hangen arnyn nhw",
            item3: 'A fyddai’r defnyddwyr yn argymell y gwasanaeth i ffrind neu gydweithiwr'
        },
        text2: "Mae gwaith prosesu’r data o'r arolwg boddhad wedi’i seilio ar gydsyniad y cyfranogwr ac mae'n wirfoddol. Rydych chi’n rhydd i benderfynu peidio â chymryd rhan os nad ydych am wneud hynny. Nid yw'n ofynnol i’r cyfranogwyr roi manylion cyswllt er mwyn cwblhau'r arolwg a bydd yr wybodaeth a roddir yn ddienw, felly fyddwn ni ddim yn gallu adnabod eich ymatebion. Sylwch na fydd yr atebion a roddwch yn yr arolwg yn effeithio ar eich gallu i gael Pàs COVID y GIG."
    },
    howIsDataSecurityManaged: {
        title: 'Sut mae diogelwch data yn cael ei reoli?',
        body1: {
            text1: "Defnyddir mesurau diogelwch technegol, sefydliadol a gweinyddol priodol yn ein systemau i amddiffyn unrhyw wybodaeth sydd gennym yn ein cofnodion rhag colled, camddefnydd, mynediad heb awdurdod, datgelu, newid a dinistrio. Mae gennym weithdrefnau a pholisïau ysgrifenedig sy'n cael eu harchwilio a'u hadolygu'n rheolaidd ar lefel uwch. "
        }
    },
    OurLegalBasisToUseYourInfo: {
        title: 'Ein sail gyfreithiol i ddefnyddio eich gwybodaeth',
        text1: 'Rydym yn prosesu gwybodaeth bersonol a chategorïau arbennig o wybodaeth bersonol, gan gynnwys data am iechyd er mwyn darparu gwasanaeth Pàs COVID y GIG yn Lloegr dan:',
        textGroup1: {
            boldText: 'GDPR y DU, Erthygl. 6 (1)(e)',
            text1: ' ‘processing is necessary for the performance of a task carried out in the public interest’ a'
        },
        textGroup2: {
            boldText: 'GDPR y DU, Erthygl. 9 (2)(g)',
            text1: " ‘processing is necessary for reasons of substantial public interest’, yn cael ei hategu gan Ddeddf Diogelu Data (DPA) 2018 – Atodlen 1, Rhan 2, para 6 - Dibenion statudol a dibenion y llywodraeth sy'n ymwneud ag iechyd cyhoeddus ac yn arbennig rheoli argyfwng iechyd cyhoeddus COVID-19."
        },
        textGroup3: {
            boldText: 'GDPR y DU, Erthygl. 9 (2)(h)',
            text1: ' ‘processing is necessary for the provision of health or social care or treatment or the management of health or social care systems and services’, yn cael ei hategu gan'
        },
        textGroup4: {
            boldText: 'Deddf Diogelu Data 2018 (DPA 2018), Atodlen 1 - Rhan 1, Adran 2 (2) [f]',
            text1: " pan fodlonir yr amod ar gyfer prosesu data categori arbennig at ddibenion iechyd neu ofal cymdeithasol trwy reoli systemau neu wasanaethau gofal iechyd lle mae'r amodau a'r mesurau diogelwch yn Adran 3, iechyd y cyhoedd, yn cael eu bodloni."
        },
        textGroup5: {
            boldText: 'GDPR y DU, Erthygl 9 (2)(i)',
            text1: ' ‘processing is necessary for the provision of health or social care or treatment or the management of health or social care systems and services.’'
        }
    },
    yourRightsOverYourInfo: {
        title: 'Eich hawliau dros eich gwybodaeth',
        list1: {
            text1: "Yn ôl y gyfraith, mae gennych hawliau i weld gwybodaeth o dan y Rheoliad Cyffredinol ar Ddiogelu Data a Deddf Diogelu Data 2018 y DU. Rydych chi'n gallu",
            listItem1: 'Gofyn am gopi o unrhyw wybodaeth sydd gennym amdanoch.',
            listItem2: "Gofyn am newid unrhyw wybodaeth sydd gennym amdanoch os yw'n anghywir.",
            listItem3:
                "Gofyn inni ystyried cyfyngu ar ein defnydd ar eich gwybodaeth, er nad yw hyn yn hawl absoliwt, ac y gall fod angen inni barhau i ddefnyddio'ch gwybodaeth mewn rhai amgylchiadau – byddwn yn dweud wrthoch pam os yw hyn yn wir.",
            listItem4:
                "Gofyn am beidio â defnyddio unrhyw wybodaeth amdanoch sy’n cael ei chadw. Ond, nid yw hon yn hawl absoliwt, ac efallai y bydd angen inni barhau i ddefnyddio'ch gwybodaeth o dan amgylchiadau penodol – byddwn yn dweud wrthoch os yw hyn yn wir.",
            listItem5:
                "Gofyn am ddileu’ch gwybodaeth – nid yw hyn yn hawl absoliwt, ac efallai y bydd angen inni barhau i ddefnyddio'ch gwybodaeth, a byddwn yn dweud wrthoch os yw hyn yn wir."
        }
    },
    getInTouchOrRaiseConcern: {
        title: 'Sut i gysylltu neu fynegi pryder',
        body1: {
            text1: 'Os ydych yn anhapus, yn dymuno dod â rhywbeth i’n sylw, neu’n dymuno cwyno am sut mae’ch data personol yn cael ei ddefnyddio gan y gwasanaeth, gallwch gysylltu â Swyddog Diogelu Data (DPO) DHSC, Lee Cramp, a fydd yn ceisio datrys eich mater.',
            text2: "Trwy'r ebost ",
            link1: {
                href: 'mailto:data_protection@dhsc.gov.uk',
                text: 'data_protection@dhsc.gov.uk'
            }
        },
        body2: {
            text1: "Trwy lythyr - i'r Adran Iechyd a Gofal Cymdeithasol",
            address: {
                line0: '',
                line1: 'Yr Adran Iechyd a Gofal Cymdeithasol',
                line2: '        1st Floor North',
                line3: '        39 Victoria Street',
                line4: '        London SW1H 0EU'
            }
        }
    },
    formalComplaintAboutTheProcessing: {
        title: 'Cwyn ffurfiol am y prosesu',
        text1: 'Os ydych, ar ôl cysylltu â’r DPO fel uchod, yn dymuno gwneud cwyn ffurfiol am brosesu eich data personol, cysylltwch â Swyddfa’r Comisiynydd Gwybodaeth (ICO) yn ',
        address: {
            line1: "Swyddfa'r Comisiynydd Gwybodaeth (ICO)",
            line2: 'Wycliffe House',
            line3: 'Water Lane',
            line4: 'Wilmslow',
            line5: 'Cheshire',
            line6: 'SK9 5AF',
            tel: 'Rhif ffôn: 0303 123 1113',
            fax: 'Ffacs: 01625 524510',
            web: {
                linkHref: 'https://ico.org.uk/',
                linkText: 'https://ico.org.uk/'
            }
        }
    },
    changeToThisPn: {
        boldText1: "Newidiadau i'r Hysbysiad Preifatrwydd hwn: ",
        text1: 'Rydym yn cadw’n Hysbysiad Preifatrwydd dan adolygiad rheolaidd. Diweddarwyd yr Hysbysiad Preifatrwydd hwn y tro diwethaf ar 24ain Tachwed 2022.'
    }
}

export const helpPrivacyNotice = new LocalizedStrings({
    en: strings_en,
    cy: strings_cy
})
