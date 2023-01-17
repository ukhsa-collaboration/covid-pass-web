import LocalizedStrings from 'react-localization'
//Using library: https://www.npmjs.com/package/react-localization
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

export const indexPageStrings = new LocalizedStrings({
    en: {
        headLanding: 'Landing Page' + headTitleSuffix_en,
        headSso: 'NHS Login' + headTitleSuffix_en,
        heading1: 'Get your NHS COVID Pass',
        body1: "By accessing your NHS COVID Pass and clicking continue, you're also agreeing to the service's ",
        termsAndConditionsLinkText: 'terms of use',
        bindingTermsAndPrivacy: 'and',
        privayPolicyLinkText: 'privacy policy.',
        body3: 'Find out',
        serviceHref:
            'https://www.nhs.uk/nhs-services/online-services/nhs-app/nhs-app-help-and-support/about-the-share-your-covid-19-status-service/',
        linkText1: 'more about this service',
        body4: 'or read more',
        coronavirusHref: 'https://www.nhs.uk/conditions/coronavirus-covid-19/',
        linkText2: 'about coronavirus (COVID-19), testing and vaccination on the NHS website.',
        buttonText1: 'Continue'
    },
    cy: {
        headLanding: 'Tudalen Lanio' + headTitleSuffix_cy,
        headSso: "Mewngofnodi i'r GIG" + headTitleSuffix_cy,
        heading1: 'Sicrhewch eich Pàs COVID GIG',
        body1: "Trwy gyrchu'ch Pàs COVID GIG a chlicio parhau, rydych hefyd yn cytuno i ",
        termsAndConditionsLinkText: "telerau defnyddio'r gwasanaeth",
        bindingTermsAndPrivacy: 'a',
        privayPolicyLinkText: 'pholisi preifatrwydd.',
        body3: 'Darganfyddwch',
        serviceHref:
            'https://www.nhs.uk/nhs-services/online-services/nhs-app/nhs-app-help-and-support/about-the-share-your-covid-19-status-service/',
        linkText1: 'fwy am y gwasanaeth hwn',
        body4: 'neu darllenwch fwy',
        coronavirusHref: 'https://www.nhs.uk/conditions/coronavirus-covid-19/',
        linkText2: 'am goronafeirws (COVID-19), profi a brechu ar wefan y GIG.',
        buttonText1: 'Parhau'
    }
})

export const selectedFlowStrings = new LocalizedStrings({
    en: {
        head: 'Choose Covid Pass' + headTitleSuffix_en,
        title: 'Get your NHS COVID Pass',
        body1: 'Use this service to view and share proof of your COVID-19 status.',
        domestic: {
            cardTitle: 'Domestic',
            cardText:
                'You may need to show your NHS COVID Pass at places that have chosen to use the service',
            underAge: {
                title: 'Going to events in the United Kingdom?',
                text1: 'You do not need to show a COVID Pass in the UK until you are aged ',
                text2: ' or over.'
            },
            toggleOff: {
                text1: 'In line with government policy, the domestic NHS COVID Pass is no longer available.'
            }
        },
        international: {
            cardTitle: 'Travel',
            cardText: 'You may need to share your NHS COVID Pass when travelling abroad',
            uplift: {
                title: 'Travelling abroad?',
                textGroup1: {
                    text1: 'You will need to provide extra ID before using your NHS COVID Pass for travel. This process usually takes up to 2 hours after you have provided your ID, but it may sometimes take longer.',
                    link1: { text: 'Verify your identity now.' }
                },
                textGroup2: {
                    text1: 'If you have a mobile phone number or email address on your GP record, you can also',
                    link1: {
                        text: 'get an NHS COVID Pass sent to you by email',
                        href: 'https://covid-status-letter.service.nhsx.nhs.uk/who-are-you-requesting-for?service=digital'
                    },
                    text2: ' without having to provide extra ID.'
                }
            }
        }
    },
    cy: {
        head: 'Dewis Pàs Covid' + headTitleSuffix_cy,
        title: 'Sicrhewch eich Pàs COVID GIG',
        body1: "Defnyddiwch y gwasanaeth hwn i weld eich statws COVID-19 a'i rannu.",
        domestic: {
            cardTitle: 'Domestig',
            cardText:
                "Efallai y bydd angen i chi ddangos eich Pàs COVID GIG mewn lleoedd sydd wedi dewis defnyddio'r gwasanaeth",
            underAge: {
                title: 'Mynd i ddigwyddiadau yn y Deyrnas Unedig?',
                text1: 'Does dim angen ichi ddangos Pàs COVID yn y Deyrnas Unedig nes eich bod yn ',
                text2: " oed neu'n hŷn."
            },
            toggleOff: {
                text1: `Yn unol â pholisi'r llywodraeth, nid yw Pàs COVID domestig y GIG ar gael mwyach.`
            }
        },
        international: {
            cardTitle: 'Teithio',
            cardText: "Efallai y bydd angen i chi rannu'ch Pàs COVID GIG wrth deithio dramor",
            uplift: {
                title: 'Teithio dros y môr?',
                textGroup1: {
                    text1: 'Bydd angen ichi ddarparu ID ychwanegol cyn defnyddio Pàs COVID y GIG i deithio. Mae’r broses hon fel arfer yn cymryd hyd at 2 awr ar ôl i chi ddarparu’ch ID, ond fe all gymryd mwy o amser weithiau.',
                    link1: { text: 'Dilyswch eich hunaniaeth nawr.' }
                },
                textGroup2: {
                    text1: 'Os oes gennych chi rif ffôn symudol neu gyfeiriad ebost ar gofnod eich meddyg teulu, gallwch hefyd',
                    link1: {
                        text: 'gael Pàs COVID y GIG wedi’i anfon atoch drwy’r ebost',
                        href: 'https://covid-status-letter.service.nhsx.nhs.uk/who-are-you-requesting-for?service=digital'
                    },
                    text2: ' heb orfod darparu ID ychwanegol.'
                }
            }
        }
    }
})

export const statusStrings = new LocalizedStrings({
    en: {
        domesticStatusHead: 'Your Domestic Pass' + headTitleSuffix_en,
        internationalStatusHead: 'Your Travel Pass' + headTitleSuffix_en,
        recordsHead: 'Covid Status' + headTitleSuffix_en
    },
    cy: {
        domesticStatusHead: 'Eich Pàs Teithio' + headTitleSuffix_cy,
        internationalStatusHead: 'Eich Pàs domestig' + headTitleSuffix_cy,
        recordsHead: 'Statws Covid' + headTitleSuffix_cy
    }
})
export const surveyBannerStrings = new LocalizedStrings({
    en: {
        title: 'Do you have 2 minutes to give us your feedback?',
        text1: 'All answers are anonymous',
        yesButtonText: 'Yes',
        noButtonText: 'No',
        hasCertificateAppLink: 'https://redacted/',
        noCertificateAppLink: 'https://redacted/',
        hasCertificateBrowserLink: 'https://redacted/',
        noCertificateBrowserLink: 'https://redacted/'
    },
    cy: {
        title: 'Oes gennych chi 2 funud i roi’ch adborth inni?',
        text1: 'Mae pob ateb yn ddienw',
        yesButtonText: 'Oes',
        noButtonText: 'Nac oes',
        hasCertificateAppLink: 'https://redacted/',
        noCertificateAppLink: 'https://redacted/',
        hasCertificateBrowserLink: 'https://redacted/',
        noCertificateBrowserLink: 'https://redacted/'
    }
})
export const domesticPageStrings = new LocalizedStrings({
    en: {
        validCertificate: {
            dateOfBirth: 'Date of birth:',
            default: {
                attendUntil: 'Your NHS COVID Pass expires',
                verifiedStatus: 'Valid'
            },
            mandatoryVoluntary: {
                subHeading1: 'NHS COVID Pass DOMESTIC',
                linkText: 'Where can I use this pass?',
                href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                expires: 'Expires:',
                statusType: {
                    domesticVoluntary: 'WALES VENUES ONLY',
                    domesticMandatory: 'ALL UK VENUES',
                    domesticMandatoryOnly: 'Valid'
                }
            }
        },
        noCertificateAndExpired: {
            headingNoCertificate: 'How to get an NHS COVID Pass',
            headingExpired: 'Your NHS COVID Pass expired',
            subheadExpired: 'How to get a new one',
            subHead1: 'Testing',
            subHead2: 'Vaccination',
            subHead3: 'Natural immunity',
            subHead4: 'Exemptions',
            ariaLabelReportResult: 'report covid 19 result link',
            href: 'https://www.gov.uk/report-covid19-result',
            linkText: 'report a COVID-19 rapid lateral flow test result.',
            body1: 'There are 4 ways you can get an NHS COVID Pass: through testing, full vaccination, natural immunity, or an exemption.',
            body2: 'Get a negative lateral flow test (LFT) or polymerase chain reaction (PCR) test at a testing site. The result will be reported automatically.',
            body3: 'You can also do a lateral flow test at home and use the NHS service to ',
            body4: ' It can take up to 2 hours for your test record to show.',
            body5: 'Your new NHS COVID Pass will be valid for 48 hours.',
            body6: 'You can get an NHS COVID Pass 2 weeks after completing a full course of vaccine.',
            body7: ' It can take up to 5 days for your vaccination record to show.',
            body8: "If you've previously tested positive for COVID-19 using a PCR test, and it's been at least 10 days since your positive result, you are eligible for an NHS COVID Pass for up to 180 days from the test date.",
            body9: "If you've taken part in a COVID-19 vaccine clinical trial, you are eligible for an NHS COVID Pass. Your clinical trial site can provide more details."
        },
        onePassExpired: {
            heading: 'Your NHS COVID Pass has expired',
            body1: {
                text1: 'Find out how to ',
                serviceHref1:
                    'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                linkText1: 'get an NHS COVID Pass.'
            },
            body2: {
                text1: 'Find out about ',
                serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                linkText1: 'using your NHS COVID Pass',
                text2: ' at home and when travelling abroad.'
            }
        },
        twoPassExpired: {
            heading: 'You no longer have a Domestic NHS COVID Pass',
            body1: {
                text1: 'This is because either:',
                list1: 'your pass has expired',
                list2: 'you need to follow new rules to get a pass'
            },
            body2: {
                text1: 'To get a COVID Pass you must be one of the following:',
                list1: 'fully vaccinated (in England or overseas)',
                list2: 'medically exempt from vaccination',
                list3: 'a clinical trial participant'
            },
            body3: {
                text1: 'You can no longer get an NHS COVID Pass by having: ',
                list1: 'a negative lateral flow test (LFT)',
                list2: 'a negative polymerase chain reaction (PCR) test',
                list3: 'natural immunity due to recent recovery from COVID-19'
            },
            body4: {
                text1: 'You can still use test results and natural immunity to gain entry to venues in Wales but you can no longer use a COVID Pass to prove your test or immunity status. ',
                serviceHref: 'https://www.wales.nhs.uk/ourservices/contactus/healthservicesnearyou',
                linkText1: 'Find out how to show evidence ',
                text2: 'of test results or natural immunity to gain entry to venues in Wales.'
            },
            body5: {
                text1: 'Get your COVID Pass ',
                serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                linkText1: 'in England',
                text2: ' or ',
                serviceHref2: 'https://gov.wales/get-your-nhs-covid-pass',
                linkText2: 'in Wales'
            },
            body6: {
                text1: 'If you get a new COVID Pass, remember to replace your old pass in Google Pay or Apple Wallet. Download a new PDF if you need one.'
            },
            body7: {
                text1: 'If you think your Domestic NHS COVID Pass should be here, call 119 (NHS COVID Pass Service) free of charge, 7 days a week. If you are in Wales, ',
                linkText1: 'contact your local Health Board.',
                serviceHref: 'https://www.wales.nhs.uk/ourservices/contactus/healthservicesnearyou',
                text2: 'You can also do this if you were vaccinated abroad.'
            }
        },
        onePassNoRecords: {
            heading: 'How to get an NHS COVID Pass',
            textGroup1: {
                list1: {
                    text: {
                        text1: 'To get an NHS COVID Pass for use in the UK (a ‘domestic’ pass) you must ',
                        boldText1: 'either:'
                    },
                    listItem1: 'be fully vaccinated against COVID-19',
                    listItem2: 'have tested negative for COVID-19 in the past 48 hours'
                }
            },
            textGroup2: {
                heading: 'Get fully vaccinated',
                body1: {
                    text1: 'If you meet the vaccination requirements, you can refresh your pass every 30 days. The 2D barcode has a 30-day expiry. ',
                    boldText1:
                        'It can take up to 5 working days for your vaccination records to show.'
                },
                link: {
                    text: 'Find out how to get vaccinated.',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/coronavirus-booster-vaccine/'
                }
            },
            textGroup3: {
                heading: 'Get tested',
                body1: {
                    text1: 'You can get an NHS COVID Pass with a negative COVID-19 test result. With a negative result, your COVID Pass will be valid for ',
                    boldText1: 'only 48 hours',
                    text2: '. It can take up to two hours for your test record to show.'
                },
                link: {
                    text: 'Find out how to get a test',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/'
                }
            },
            textGroup4: {
                body1: {
                    text1: 'You can also get a COVID Pass if you are ',
                    boldText1: 'exempt ',
                    text2: 'from vaccination or testing. Find out about ',
                    link: {
                        text: 'applying for an exemption.',
                        href: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated'
                    }
                }
            },
            textGroup5: {
                body1: {
                    text1: 'You can no longer get a domestic pass by proving you have ',
                    boldText1: 'recovered from COVID-19 ',
                    text2: '(also called ‘natural immunity’).'
                }
            },
            textGroup6: {
                body1: {
                    text1: 'Find out about ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'getting an NHS COVID Pass.'
                }
            },
            textGroup7: {
                body1: {
                    text1: 'Find out about ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'using your NHS COVID Pass',
                    text2: ' at home and when travelling abroad.'
                }
            }
        },
        twoPassNoRecords: {
            headingNoCertificate: 'How to get an NHS COVID Pass',
            headingExpired: 'Your NHS COVID Pass expired',
            subheadExpired: 'How to get a new one',
            subHead1: 'Testing',
            subHead2: 'Vaccination',
            subHead3: 'Natural immunity',
            subHead4: 'Exemptions',
            ariaLabelReportResult: 'report covid 19 result link',
            href: 'https://www.gov.uk/report-covid19-result',
            linkText: 'report a COVID-19 rapid lateral flow test result.',
            body1: 'There are 4 ways you can get an NHS COVID Pass: through testing, full vaccination, natural immunity, or an exemption.',
            body2: 'Get a negative lateral flow test (LFT) or polymerase chain reaction (PCR) test at a testing site. The result will be reported automatically.',
            body3: 'You can also do a lateral flow test at home and use the NHS service to ',
            body4: ' It can take up to 2 hours for your test record to show.',
            body5: 'Your new NHS COVID Pass will be valid for 48 hours.',
            body6: 'You can get an NHS COVID Pass 2 weeks after completing a full course of vaccine.',
            body7: ' It can take up to 5 days for your vaccination record to show.',
            body8: "If you've previously tested positive for COVID-19 using a PCR test, and it's been at least 10 days since your positive result, you are eligible for an NHS COVID Pass for up to 180 days from the test date.",
            body9: "If you've taken part in a COVID-19 vaccine clinical trial, you are eligible for an NHS COVID Pass. Your clinical trial site can provide more details."
        },
        errorMessages: {
            pcr: {
                heading: 'You have had a positive PCR test result',
                body1: {
                    text1: 'You must wait 5 days after a positive PCR test before you can either get an NHS COVID Pass or start using an existing one again.'
                },
                body2: {
                    text1: 'You must wait until ',
                    text2: ' before you can get or use your pass.'
                },
                body3: {
                    text1: 'Find out how to ',
                    serviceHref1:
                        'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                    linkText1: 'get an NHS COVID Pass',
                    text2: ' if you do not have one.'
                },
                body4: {
                    text1: 'Find out about ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'using your NHS COVID Pass',
                    text2: ' at home and when travelling abroad.'
                },
                body5: {
                    text1: 'If you think the date above is wrong:',
                    list1: 'call 119 (NHS COVID Pass service) free of charge, 7 days a week',
                    list2: 'select option 1 for NHS Test and Trace',
                    list3: 'quote error code '
                }
            },
            lft: {
                heading: 'You have had a positive lateral flow test result',
                body1: {
                    text1: 'You must wait 5 days after a positive lateral flow test before you can either get an NHS COVID Pass or start using an existing one again.'
                },
                body2: {
                    text1: 'You must wait until ',
                    text2: ' before you can get or use your pass.'
                },
                body3: {
                    text1: 'Find out how to ',
                    serviceHref1:
                        'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                    linkText1: 'get an NHS COVID Pass',
                    text2: ' if you do not have one.'
                },
                body4: {
                    text1: 'Find out about ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'using your NHS COVID Pass',
                    text2: ' at home and when travelling abroad.'
                },
                body5: {
                    text1: 'If you think the date above is wrong:',
                    list1: 'call 119 (NHS COVID Pass service) free of charge, 7 days a week',
                    list2: 'select option 1 for NHS Test and Trace',
                    list3: 'quote error code '
                }
            }
        }
    },
    cy: {
        validCertificate: {
            dateOfBirth: 'Dyddiad geni:',
            dateOfBirth__bilingual: 'Date of birth:',
            default: {
                attendUntil: 'Mae eich Pàs COVID GIG yn dod i ben',
                attendUntil__bilingual: 'Your NHS COVID Pass expires',
                verifiedStatus: 'Yn ddilys',
                verifiedStatus__bilingual: 'Valid'
            },
            mandatoryVoluntary: {
                subHeading1: 'Tocyn COVID GIG Domestig',
                linkText: "Ble alla i ddefnyddio'r pàs hwn?",
                href: 'https://www.gov.uk/guidance/nhs-covid-pass',
                expires: 'Yn dod i ben:',
                statusType: {
                    domesticVoluntary: "LLEOLIADAU CYMRU'N UNIG",
                    domesticMandatory: "HOLL LEOLIADAU'R DU",
                    domesticMandatoryOnly: 'Yn ddilys'
                }
            }
        },
        noCertificateAndExpired: {
            headingNoCertificate: 'Sut i gael Pàs COVID y GIG',
            headingExpired: 'Daeth eich Pàs COVID GIG i ben',
            subheadExpired: 'Sut i gael un newydd',
            subHead1: 'Profi',
            subHead2: 'Brechiad',
            subHead3: 'Imiwnedd naturiol',
            subHead4: 'Eithriadau',
            ariaLabelReportResult: 'riportiwch ddolen canlyniad 19 covid',
            href: 'https://www.gov.uk/report-covid19-result',
            linkText: 'adrodd yn ôl Prawf llif unffordd brys COVID-19',
            body1: 'Mae 4 ffordd y gallwch gael Pàs COVID y GIG: trwy brofion, brechu llawn, imiwnedd naturiol, neu eithriad.',
            body2: 'Sicrhewch brawf llif unffordd brys (LFT) neu brawf adwaith cadwynol polymerasau (PCR) negyddol mewn safle profi. Adroddir y canlyniad yn ôl atoch yn awtomatig.',
            body3: "Gallwch hefyd wneud prawf llif unffordd brys gartref a defnyddio'r gwasanaeth GIG i ",
            body4: " Gall gymryd hyd at 2 awr i'ch cofnod prawf ei ddangos.",
            body5: 'Bydd eich Pàs COVID GIG newydd yn ddilys am 48 awr.',
            body6: 'Gallwch gael Pàs COVID y GIG bythefnos ar ôl cwblhau cwrs llawn o frechlyn.',
            body7: " Gall gymryd hyd at 5 diwrnod i'ch cofnodion o'r brechiad ddangos.",
            body8: "Os ydych chi wedi profi'n bositif o'r blaen am COVID-19 gan ddefnyddio prawf PCR, a'i fod wedi bod o leiaf 10 diwrnod ers eich canlyniad positif, rydych chi'n gymwys i gael Pàs COVID y GIG am hyd at 180 diwrnod o ddyddiad y prawf.",
            body9: "Os ydych chi wedi cymryd rhan mewn treial clinigol brechlyn COVID-19, rydych chi'n gymwys i gael Pàs COVID y GIG. Gall safle eich treial clinigol ddarparu mwy o fanylion."
        },
        onePassExpired: {
            heading: 'Mae eich Pàs COVID GIG wedi dod i ben',
            body1: {
                text1: 'Darganfyddwch sut i ',
                serviceHref1:
                    'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                linkText1: 'Cael Pas COVID y GIG.'
            },
            body2: {
                text1: 'Gwybodaeth am ',
                serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                linkText1: 'ddefnyddio’ch Pàs COVID GIG',
                text2: ' gartref ac wrth deithio dros y môr.'
            }
        },
        twoPassExpired: {
            heading: 'Nid oes gennych Pàs COVID y GIG domestig mwyach',
            body1: {
                text1: 'Y rheswm am hyn yw naill ai:',
                list1: 'mae eich pàs wedi dod i ben',
                list2: 'mae angen i chi ddilyn rheolau newydd i gael pàs'
            },
            body2: {
                text1: "I gael Pàs COVID mae'n rhaid i chi fod yn un o'r canlynol:",
                list1: "wedi'ch brechu'n llawn (yn Lloegr neu dramor)",
                list2: "wedi'ch eithrio'n feddygol rhag brechu",
                list3: 'cyfranogwr prawf clinigol'
            },
            body3: {
                text1: 'Ni allwch gael Pàs COVID mwyach drwy gael:',
                list1: 'prawf llif unffordd (LFT) negyddol',
                list2: 'prawf adwaith cadwynol polymerasau (PCR) negyddol',
                list3: 'imiwnedd naturiol oherwydd adferiad diweddar o COVID-19'
            },
            body4: {
                text1: 'Gallwch barhau i ddefnyddio canlyniadau profion ac imiwnedd naturiol i gael mynediad i leoliadau yng Nghymru ond ni allwch ddefnyddio Pàs COVID mwyach i brofi eich prawf neu statws imiwnedd. ',
                serviceHref: 'https://www.wales.nhs.uk/ourservices/contactus/healthservicesnearyou',
                linkText1: 'Dysgu sut i ddangos tystiolaeth o ganlyniadau profion neu ',
                text2: 'imiwnedd naturiol i gael mynediad i leoliadau yng Nghymru.'
            },
            body5: {
                text1: 'Cael eich Pàs COVID ',
                serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                linkText1: 'yn Lloegr',
                text2: ' neu ',
                serviceHref2: 'https://gov.wales/get-your-nhs-covid-pass',
                linkText2: 'yng Nghymru.'
            },
            body6: {
                text1: 'Os cewch Pàs COVID newydd, cofiwch amnewid eich hen pàs yn Google Pay neu Apple Wallet. Lawrlwythwch PDF newydd os oes angen un arnoch.'
            },
            body7: {
                text1: 'Os credwch y dylech gael Pàs COVID o dan y rheolau presennol, ffoniwch 119 (Gwasanaeth Pàs COVID y GIG) yn rhad ac am ddim, 7 diwrnod yr wythnos. Os ydych yng Nghymru, ',
                serviceHref: 'https://www.wales.nhs.uk/ourservices/contactus/healthservicesnearyou',
                linkText1: "cysylltwch â'ch Bwrdd Iechyd Lleol.",
                text2: 'Gallwch hefyd wneud hyn os cawsoch eich brechu dramor.'
            }
        },
        onePassNoRecords: {
            heading: 'Sut i gael Pàs COVID y GIG',
            textGroup1: {
                list1: {
                    text: {
                        text1: "I gael Pàs COVID y GIG i'w ddefnyddio yn y Deyrnas Unedig (pàs 'domestig') rhaid i chi fod ",
                        boldText1: 'naill ai:'
                    },
                    listItem1: "wedi cael eich brechu'n llawn yn erbyn COVID-19",
                    listItem2: "wedi profi'n negatif am COVID-19 yn ystod y 48 awr ddiwethaf"
                }
            },
            textGroup2: {
                heading: 'Mynnwch gael eich brechu’n llawn',
                body1: {
                    text1: "Os ydych chi'n bodloni'r gofynion brechu, gallwch chi adnewyddu'ch pàs bob 30 diwrnod. Mae'r cod bar 2D yn dod i ben af 30 diwrnod. ",
                    boldText1:
                        "Gall gymryd hyd at 5 diwrnod gwaith i'ch cofnodion brechu ymddangos."
                },
                link: {
                    text: 'Dysgwch sut i gael eich brechu.',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/coronavirus-booster-vaccine/'
                }
            },
            textGroup3: {
                heading: 'Mynnwch brawf',
                body1: {
                    text1: 'Gallwch gael Pàs COVID y GIG gyda chanlyniad prawf COVID-19 negatif. Gyda chanlyniad negatif, bydd eich Pàs COVID yn ddilys am ',
                    boldText1: '48 awr yn unig',
                    text2: ". Gall gymryd hyd at ddwy awr i'ch cofnod prawf ymddangos."
                },
                link: {
                    text: 'Gwybodaeth ar sut i gael prawf.',
                    href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/'
                }
            },
            textGroup4: {
                body1: {
                    text1: "Gallwch gael Pàs COVID hefyd os ydych chi wedi'ch ",
                    boldText1: 'eithrio ',
                    text2: 'rhag cael eich brechu neu eich profi. Dysgwch sut i ',
                    link: {
                        text: 'wneud cais am eithriad.',
                        href: 'https://www.gov.uk/guidance/covid-19-medical-exemptions-proving-you-are-unable-to-get-vaccinated'
                    }
                }
            },
            textGroup5: {
                body1: {
                    text1: 'Allwch chi ddim cael pàs domestig mwyach drwy brofi eich bod ',
                    boldText1: 'wedi gwella o COVID-19 ',
                    text2: "(sydd hefyd yn cael ei alw’n 'imiwnedd naturiol')."
                }
            },
            textGroup6: {
                body1: {
                    text1: 'Gwybodaeth am ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'sut i sicrhau Pàs COVID y GIG.'
                }
            },
            textGroup7: {
                body1: {
                    text1: 'Gwybodaeth am ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'ddefnyddio’ch Pàs COVID GIG',
                    text2: ' gartref ac wrth deithio dros y môr.'
                }
            }
        },
        twoPassNoRecords: {
            headingNoCertificate: 'Sut i gael Pàs COVID y GIG',
            headingExpired: 'Daeth eich Pàs COVID GIG i ben',
            subheadExpired: 'Sut i gael un newydd',
            subHead1: 'Profi',
            subHead2: 'Brechiad',
            subHead3: 'Imiwnedd naturiol',
            subHead4: 'Eithriadau',
            ariaLabelReportResult: 'riportiwch ddolen canlyniad 19 covid',
            href: 'https://www.gov.uk/report-covid19-result',
            linkText: 'adrodd yn ôl Prawf llif unffordd brys COVID-19',
            body1: 'Mae 4 ffordd y gallwch gael Pàs COVID y GIG: trwy brofion, brechu llawn, imiwnedd naturiol, neu eithriad.',
            body2: 'Sicrhewch brawf llif unffordd brys (LFT) neu brawf adwaith cadwynol polymerasau (PCR) negyddol mewn safle profi. Adroddir y canlyniad yn ôl atoch yn awtomatig.',
            body3: "Gallwch hefyd wneud prawf llif unffordd brys gartref a defnyddio'r gwasanaeth GIG i ",
            body4: " Gall gymryd hyd at 2 awr i'ch cofnod prawf ei ddangos.",
            body5: 'Bydd eich Pàs COVID GIG newydd yn ddilys am 48 awr.',
            body6: 'Gallwch gael Pàs COVID y GIG bythefnos ar ôl cwblhau cwrs llawn o frechlyn.',
            body7: " Gall gymryd hyd at 5 diwrnod i'ch cofnodion o'r brechiad ddangos.",
            body8: "Os ydych chi wedi profi'n bositif o'r blaen am COVID-19 gan ddefnyddio prawf PCR, a'i fod wedi bod o leiaf 10 diwrnod ers eich canlyniad positif, rydych chi'n gymwys i gael Pàs COVID y GIG am hyd at 180 diwrnod o ddyddiad y prawf.",
            body9: "Os ydych chi wedi cymryd rhan mewn treial clinigol brechlyn COVID-19, rydych chi'n gymwys i gael Pàs COVID y GIG. Gall safle eich treial clinigol ddarparu mwy o fanylion."
        },
        errorMessages: {
            pcr: {
                heading: 'Rydych chi wedi cael canlyniad prawf PCR positif',
                body1: {
                    text1: "Rhaid ichi aros 5 diwrnod ar ôl prawf PCR positif cyn y gallwch chi naill ai cael Pàs COVID y GIG neu ddechrau defnyddio un sy'n bodoli eisoes eto."
                },
                body2: {
                    text1: 'Rhaid i chi aros tan ',
                    text2: ' cyn y gallwch sicrhau’ch pàs neu ei ddefnyddio.'
                },
                body3: {
                    text1: 'Gwybodaeth am sut i ',
                    serviceHref1:
                        'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                    linkText1: 'sicrhau Pàs COVID',
                    text2: ' os nad oes un gennych.'
                },
                body4: {
                    text1: 'Gwybodaeth am ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'ddefnyddio’ch Pàs COVID GIG',
                    text2: ' gartref ac wrth deithio dros y môr.'
                },
                body5: {
                    text1: "Os ydych chi'n credu bod y dyddiad hwn yn anghywir:",
                    list1: 'ffoniwch 119 (gwasanaeth Pàs COVID y GIG) am ddim, 7 diwrnod yr wythnos',
                    list2: 'dewiswch opsiwn 1 ar gyfer Profi ac Olrhain y GIG',
                    list3: 'dyfynnwch god gwall '
                }
            },
            lft: {
                heading: 'Rydych chi wedi cael canlyniad prawf llif unffordd positif',
                body1: {
                    text1: "Rhaid ichi aros 5 diwrnod ar ôl prawf llif unffordd positif cyn y gallwch chi naill ai cael Pàs COVID y GIG neu ddechrau defnyddio un sy'n bodoli eisoes eto."
                },
                body2: {
                    text1: 'Rhaid i chi aros tan ',
                    text2: ' cyn y gallwch sicrhau’ch pàs neu ei ddefnyddio.'
                },
                body3: {
                    text1: 'Gwybodaeth am sut i ',
                    serviceHref1:
                        'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/',
                    linkText1: 'sicrhau Pàs COVID',
                    text2: ' os nad oes un gennych.'
                },
                body4: {
                    text1: 'Gwybodaeth am ',
                    serviceHref1: 'https://www.gov.uk/guidance/nhs-covid-pass',
                    linkText1: 'ddefnyddio’ch Pàs COVID GIG',
                    text2: ' gartref ac wrth deithio dros y môr.'
                },
                body5: {
                    text1: "Os ydych chi'n credu bod y dyddiad hwn yn anghywir:",
                    list1: 'ffoniwch 119 (gwasanaeth Pàs COVID y GIG) am ddim, 7 diwrnod yr wythnos',
                    list2: 'dewiswch opsiwn 1 ar gyfer Profi ac Olrhain y GIG',
                    list3: 'dyfynnwch god gwall '
                }
            }
        }
    }
})

export const internationalPageStrings = new LocalizedStrings({
    en: {
        titleInternational: 'Your NHS COVID Pass',
        body1: 'You need to show this when asked by officials.',
        body2: "Before you travel you'll need to:",
        bullet1: {
            text: 'check the ',
            link: {
                linkText: 'entry requirements for your destination',
                href: 'https://www.gov.uk/foreign-travel-advice'
            }
        },
        bullet2: 'make sure your vaccination information is correct',
        linkText1: 'Why am I seeing this message?'
    },
    cy: {
        titleInternational: 'Eich Pàs COVID GIG',
        body1: 'Mae angen i chi ddangos hwn pan ofynnir i chi gan swyddogion.',
        body2: 'Cyn i chi deithio bydd angen i chi:',
        bullet1: {
            text: "wirio'r ",
            link: {
                linkText: 'gofynion mynediad ar gyfer eich cyrchfan',
                href: 'https://www.gov.uk/foreign-travel-advice'
            }
        },
        bullet2: 'sicrhau bod gwybodaeth eich brechiad yn gywir',
        linkText1: "Pam ydw i'n gweld y neges hon?"
    }
})

export const statusCardStrings = new LocalizedStrings({
    en: {
        date: 'Date of birth:',
        ariaLabelShowDetailsButton: 'Show details for all COVID-19 records found',
        titleRecordNotFound: 'No COVID-19 records found',
        covidStatus: 'Your NHS COVID Pass is',
        details: 'Show details',
        titleRecordFound: 'COVID-19 records found'
    },
    cy: {
        date: 'Dyddiad geni:',
        date__bilingual: 'Date of birth:',
        ariaLabelShowDetailsButton: 'Dangos manylion yr holl gofnodion COVID-19 a gafwyd',
        titleRecordNotFound: 'Ni chanfuwyd unrhyw gofnodion COVID-19',
        titleRecordNotFound__bilingual: 'No COVID-19 records found',
        covidStatus: 'Eich Pàs COVID GIG yw',
        details: 'Dangos manylion',
        details__bilingual: 'Show details',
        titleRecordFound: "Cofnodion COVID-19 wedi'u darganfod",
        titleRecordFound__bilingual: 'COVID-19 records found'
    }
})

export const detailsStrings = new LocalizedStrings({
    en: {
        name: 'Name:',
        date: 'Date of birth:',
        barcodeRefreshInternationalText:
            'The 2D barcode refreshes every time you log in. If you save your pass to wallet or as a PDF copy, the barcode will have an expiry date to protect your data. If your pass expires, you can log back in to get a new one.',
        expiration: '2D barcode expires',
        eligibility: 'Eligibility period:'
    },
    cy: {
        name: 'Enw:',
        name__bilingual: 'Name',
        date: 'Dyddiad geni:',
        date__bilingual: 'Date of birth:',
        barcodeRefreshInternationalText:
            "Mae'r cod bar 2D yn adnewyddu bob tro y byddwch yn mewngofnodi. Os cadwch chi'ch pàs mewn waled neu fel copi PDF, bydd gan y cod bar ddyddiad dod i ben er mwyn diogelu'ch data. Os daw eich pàs i ben, gallwch fewngofnodi i gael un newydd.",
        expiration: "Mae'r cod bar 2D yn dod i ben",
        expiration__bilingual: '2D barcode expires',
        eligibility: 'Cyfnod cymhwysedd:'
    }
})

export const qrCode = new LocalizedStrings({
    en: {
        ariaLabel:
            'This is a 2D barcode. It contains details of your COVID-19 vaccinations details. Please show this when asked by officials.'
    },
    cy: {
        ariaLabel:
            "Cod bar 2D yw hwn. Mae'n cynnwys manylion am eich brechiad COVID-19. Dangoswch hyn pan ofynnir gan swyddogion."
    }
})

export const footerStrings = new LocalizedStrings({
    en: {
        links: 'Support links',
        privacyLinkText: 'Privacy notice',
        privacyLinkTitle: 'Privacy notice - NHS',
        u16PrivacyLinkText: 'Under 16s privacy notice',
        u16PrivacyLinkTitle: 'Under 16s privacy notice - NHS',
        age5To11PrivacyLinkText: '5 to 11s privacy notice',
        age5To11PrivacyLinkTextTitle: '5 to 11s privacy notice - NHS',
        tncLinkText: 'Terms and conditions',
        tncLinkTitle: 'Terms and conditions - NHS',
        accessibilityLinkText: 'Accessibility statement',
        accessibilityLinkTitle: 'Accessibility statement - NHS',
        cookieLinkText: 'Cookie policy',
        cookieLinkTitle: 'Cookie policy - NHS',
        crownCopyright: 'Crown copyright',
        release: 'release'
    },
    cy: {
        links: 'Dolenni cymorth',
        privacyLinkText: 'Rhybudd preifatrwydd',
        privacyLinkTitle: 'Rhybudd preifatrwydd - GIG',
        u16PrivacyLinkText: 'Hysbysiad preifatrwydd i rai dan 16 oed',
        u16PrivacyLinkTitle: 'Hysbysiad preifatrwydd i rai dan 16 oed - GIG',
        age5To11PrivacyLinkText: 'Hysbysiad preifatrwydd 5-11',
        age5To11PrivacyLinkTextTitle: 'Hysbysiad preifatrwydd 5-11 - GIG',
        tncLinkText: 'Telerau ac amodau',
        tncLinkTitle: 'Telerau ac amodau - GIG',
        accessibilityLinkText: 'Datganiad hygyrchedd',
        accessibilityLinkTitle: 'Datganiad hygyrchedd - GIG',
        cookieLinkText: 'Polisi cwcis',
        cookieLinkTitle: 'Polisi cwcis - GIG',
        crownCopyright: 'Hawlfraint y goron',
        release: 'rhyddhau'
    }
})

export const headStrings = new LocalizedStrings({
    en: {
        title: 'NHS COVID Pass'
    },
    cy: {
        title: 'Pàs Covid y GIG'
    }
})

export const headerStrings = new LocalizedStrings({
    en: {
        title: 'NHS COVID Pass',
        skipContent: 'Skip to main content',
        logo: {
            ariaLabel: 'NHS logo back to start link'
        },
        menu: {
            text: 'Menu',
            ariaControls: 'header-navigation',
            ariaLabel: 'Open menu'
        },
        translate: {
            text: 'Cymraeg',
            ariaControls: 'header-navigation',
            ariaLabel: 'Change language to Welsh'
        },
        name: 'Name:',
        email: 'Email:',
        date: 'Date of birth:'
    },
    cy: {
        title: 'Pàs COVID y GIG',
        skipContent: "Neidio i'r prif gynnwys",
        logo: {
            ariaLabel: "Logo'r GIG yn ôl i ddechrau'r ddolen"
        },
        menu: {
            text: 'Dewislen',
            ariaControls: 'header-navigation',
            ariaLabel: 'Dewislen agored'
        },
        translate: {
            text: 'English',
            ariaControls: 'header-navigation',
            ariaLabel: 'Newid yr iaith i’r Saesneg'
        },
        name: 'Enw:',
        email: 'E-bost:',
        date: 'Dyddiad geni:'
    }
})

export const expiredTimeoutAlertStrings = new LocalizedStrings({
    en: {
        buttonText: 'Stay logged in',
        head: 'Your session has expired',
        body: 'For your security and privacy, this site has ended your session and cleared the data you entered.',
        okButtonText: 'Ok'
    },
    cy: {
        buttonText: 'Arhoswch wedi mewngofnodi',
        head: 'Mae eich sesiwn wedi dod i ben',
        body: "Er eich diogelwch a'ch preifatrwydd, mae'r wefan hon wedi dod â'ch sesiwn i ben ac wedi clirio'r data a gofnodwyd gennych.",
        okButtonText: 'Iawn'
    }
})

export const emailPhoneInputPageStrings = new LocalizedStrings({
    en: {
        errorMessage1: 'Please enter a valid email address',
        errorMessage2: 'Please enter an email address'
    },
    cy: {
        errorMessage1: 'Rhowch gyfeiriad e-bost dilys',
        errorMessage2: 'Rhowch gyfeiriad e-bost'
    }
})

export const covidRecordsPageStrings = new LocalizedStrings({
    en: {
        head: 'Details' + headTitleSuffix_en,
        heading1: 'Details'
    },
    cy: {
        head: 'Manylion' + headTitleSuffix_cy,
        heading1: 'Manylion'
    }
})

export const noRecordsPageStrings = new LocalizedStrings({
    en: {
        head: 'No Records Found' + headTitleSuffix_en,
        heading1: 'Why am I seeing this message?',
        heading2: 'Travelling within the next 4 weeks',
        heading3: 'Not travelling within the next 4 weeks',
        body1: 'Once you have been vaccinated it can take up to 5 days for your records to show.',
        body2: 'Do not contact your GP surgery about your NHS COVID Pass. GPs cannot provide letters showing your NHS COVID Pass.',
        body3: 'If you’re unable to access your records after 5 days and you’re planning to travel in the next 4 weeks, you will still need to follow other rules when travelling abroad – like getting a negative pre-departure test.',
        body4: 'You should:',
        body5: 'check the entry requirements for your destination country on the GOV.UK foreign travel advice pages',
        body6: 'get up-to-date information from the website of your destination country',
        body7: 'If your date of travel is more than 4 weeks away, you should wait 14 days for your records to update. If you’re still having trouble accessing your records after this time, call 119 for further assistance.'
    },
    cy: {
        head: 'Ni chanfuwyd unrhyw gofnodion' + headTitleSuffix_cy,
        heading1: "Pam ydw i'n gweld y neges hon?",
        heading2: 'Teithio o fewn y 4 wythnos nesaf',
        heading3: 'Ddim yn teithio o fewn y 4 wythnos nesaf',
        body1: "Ar ôl i chi gael eich brechiad gall gymryd hyd at 5 diwrnod i'ch cofnodion ddangos hyn.",
        body2: "Peidiwch â chysylltu â'ch meddygfa ynglŷn â'ch Pàs COVID GIG. Ni all meddygon teulu ddarparu llythyrau yn dangos eich Pàs COVID GIG.",
        body3: "Os na allwch gael mynediad i'ch cofnodion ar ôl 5 diwrnod a'ch bod yn bwriadu teithio yn ystod y 4 wythnos nesaf, bydd angen i chi ddilyn rheolau eraill wrth deithio dramor o hyd - fel cael prawf negyddol cyn gadael.",
        body4: 'Fe ddylech chi:',
        body5: 'wirio’r gofynion mynediad ar gyfer eich gwlad gyrchfan ar dudalennau cyngor teithio tramor GOV.UK.',
        body6: 'cael y wybodaeth ddiweddaraf o wefan eich gwlad gyrchfan',
        body7: "Os yw'ch dyddiad teithio fwy na 4 wythnos i ffwrdd, dylech aros 14 diwrnod i'ch cofnodion gael eu diweddaru. Os ydych chi'n dal i gael trafferth i gyrchu'ch cofnodion ar ôl yr amser hwn, ffoniwch 119 am gymorth pellach."
    }
})

export const recordsPageStrings = new LocalizedStrings({
    en: {
        head: 'Your Records' + headTitleSuffix_en,
        heading1: 'Your COVID-19 records',
        noRecords: 'No records found.',
        exemptUserMsg:
            'Your NHS COVID Pass is based on an exemption, meaning we cannot display your records. However, you do have a valid NHS COVID Pass based upon your exempt status.',
        filter: {
            title: 'Sort by',
            exemptions: 'Exemptions',
            vaccinations: 'Vaccinations',
            tests: 'Tests',
            showing: 'Showing',
            of: 'of',
            records: 'records',
            showAll: 'Show all'
        },
        monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    },
    cy: {
        head: 'Eich Cofnodion' + headTitleSuffix_cy,
        heading1: 'Eich cofnodion COVID-19',
        noRecords: 'Ni chanfuwyd unrhyw gofnodion.',
        exemptUserMsg:
            "Mae eich Pàs COVID GIG yn seiliedig ar eithriad, sy'n golygu na allwn arddangos eich cofnodion. Fodd bynnag, mae gennych Docyn COVID GIG dilys yn seiliedig ar eich statws eithriedig.",
        filter: {
            title: 'Trefnu yn ôl',
            exemptions: 'Eithriadau',
            vaccinations: 'Brechiadau',
            tests: 'Profion',
            showing: 'Yn dangos',
            of: 'o',
            records: 'o gofnodion',
            showAll: 'Dangos pob un'
        },
        monthNames: [
            'Ionawr',
            'Chwefror',
            'Mawrth',
            'Ebrill',
            'Mai',
            'Mehefin',
            'Gorffennaf',
            'Awst',
            'Medi',
            'Hydref',
            'Tachwedd',
            'Rhagfyr'
        ]
    }
})

export const pdfCertificateGenerationPageStrings = new LocalizedStrings({
    en: {
        fileName: 'Coronavirus (COVID-19) records',
        downloading: 'Downloading PDF copy',
        download: 'Download PDF copy',
        pdfLimit: {
            text: 'You cannot download a PDF copy as you have reached your daily limit. You can download a new PDF copy in',
            hours: 'hours',
            hour: 'hour',
            minutes: 'minutes',
            minute: 'minute'
        },
        hiddenError: 'Error: '
    },
    cy: {
        fileName: 'Cofnodion coronafeirws (COVID-19)',
        downloading: 'Lawrlwytho copi PDF',
        downloading__bilingual: 'Downloading PDF copy',
        download: 'Lawrlwythwch gopi PDF',
        download__bilingual: 'Download PDF copy',
        pdfLimit: {
            text: 'Chewch chi ddim lawrlwytho copi PDF ar hyn o bryd, am eich bod chi wedi cyrraedd eich terfyn dyddiol. Cewch lawrlwytho copi PDF newydd mewn',
            hours: 'oriau',
            hour: 'awr',
            minutes: 'munudau',
            minute: 'munud'
        },
        hiddenError: 'Gwall: '
    }
})

export const shareByEmailGenerationPageStrings = new LocalizedStrings({
    en: {
        linkText1: 'Receive an offline copy by email',
        body1: 'Please confirm your email address:',
        buttonText1: 'Confirm and send email',
        hiddenError: 'Invalid email error',
        accessibilityExpanderText1:
            'Receive an offline copy by email - Expand card to fill out details',
        successfullySent: 'The email request has been sent successfully.',
        inputErrorAriaDescribedby: 'email_error',
        emailInputAriaLabel: 'Email Input - Please confirm your email address',
        error: {
            error1: 'You cant send anymore emails this session',
            error2: 'You have remaining emails for this session'
        },
        emailLimit: {
            error1: 'You have ',
            error2: ' emails left for this session.',
            error3: "You can't send anymore emails this session",
            error4: 'Email has not been sent, as you have reached your daily limit of 5'
        },
        emailTooLargeWarning:
            'Please note: if your NHS COVID Pass cannot be emailed due to its size, you will receive an email explaining this.'
    },
    cy: {
        linkText1: 'Derbyn copi all-lein trwy e-bost',
        linkText1__bilingual: 'Receive an offline copy by email',
        body1: 'Cadarnhewch eich cyfeiriad e-bost:',
        body1__bilingual: 'Please confirm your email address:',
        buttonText1: 'Cadarnhau ac anfon e-bost',
        hiddenError: 'Gwall e-bost annilys',
        accessibilityExpanderText1:
            'Derbyn copi all-lein trwy e-bost - Ehangu cerdyn i lenwi manylion',
        successfullySent: 'Anfonwyd y cais ebost yn llwyddiannus.',
        inputErrorAriaDescribedby: 'Gwall e-bost',
        emailInputAriaLabel: 'Mewnbwn E-bost - Cadarnhewch eich cyfeiriad e-bost',
        error: {
            error1: 'Ni allwch anfon mwy o negeseuon e-bost y sesiwn hon',
            error2: 'Mae gennych e-byst ar ôl ar gyfer y sesiwn hon'
        },
        emailLimit: {
            error1: 'Mae gennych ',
            error2: ' e-byst ar ôl ar gyfer y sesiwn hon.',
            error3: 'Ni allwch anfon mwy o negeseuon e-bost y sesiwn hon',
            error4: "Nid yw'r e-bost wedi'i anfon, gan eich bod wedi cyrraedd eich terfyn dyddiol o 5"
        },
        emailTooLargeWarning:
            'Noder: os nad oes modd ebostio eich Pàs COVID y GIG oherwydd ei faint, cewch ebost yn esbonio hyn.'
    }
})

export const appleWalletExpanderCardStrings = new LocalizedStrings({
    en: {
        linkText1: 'Add to Apple Wallet',
        body1: 'Add your COVID-19 travel passes to your wallet.',
        accessibilityExpanderText1: 'Add to Apple Wallet - Expand card to fill complete action',
        vaccination: {
            dose: 'Dose',
            doseOf: 'of',
            booster: '[Booster]'
        },
        recovery: {
            text: 'Recovery',
            immunity: 'Natural Immunity'
        }
    },
    cy: {
        linkText1: 'Ychwanegu at Apple Wallet',
        linkText1__bilingual: 'Add to Apple Wallet',
        body1: "Ychwanegu'ch pasys teithio COVID-19 at eich waled.",
        accessibilityExpanderText1: "Ychwanegu'ch pasys teithio COVID-19 at eich waled.",
        vaccination: {
            dose: 'Dos',
            doseOf: 'O',
            booster: '[Pigiad atgyfnerthu]'
        },
        recovery: {
            text: 'Adferiad',
            immunity: 'Imiwnedd Naturiol'
        }
    }
})

export const googlePayExpanderCardStrings = new LocalizedStrings({
    en: {
        linkText1: 'Save to Google Pay',
        body1: 'Add your COVID-19 travel passes to your wallet.',
        accessibilityExpanderText1: 'Save to Google Pay - Expand card to fill complete action',
        vaccination: {
            dose: 'Dose',
            doseOf: 'of',
            booster: '[Booster]'
        },
        recovery: {
            text: 'Recovery',
            immunity: 'Natural Immunity'
        }
    },
    cy: {
        linkText1: 'Arbedwch i Google Pay',
        linkText1__bilingual: 'Save to Google Pay',
        body1: "Ychwanegu'ch pasys teithio COVID-19 at eich waled.",
        accessibilityExpanderText1:
            "Arbedwch i Google Pay - Ehangu'r cerdyn i lenwi'r weithred gyflawn",
        vaccination: {
            dose: 'Dos',
            doseOf: 'O',
            booster: '[Pigiad atgyfnerthu]'
        },
        recovery: {
            text: 'Adferiad',
            immunity: 'Imiwnedd Naturiol'
        }
    }
})

export const antibodyResultCardPageStrings = new LocalizedStrings({
    en: {
        body1: 'Antibody not present.',
        body2: 'Antibody found.',
        body3: 'Test result void.'
    },
    cy: {
        body1: 'Gwrthgorff ddim yn bresennol',
        body2: "Gwrthgorff wedi'i ddarganfod",
        body3: 'Canlyniad y prawf yn amhendant.'
    }
})

export const errorPageStrings = new LocalizedStrings({
    en: {
        head: 'Page Not Found' + headTitleSuffix_en,
        heading1: 'Page not found.',
        body1: 'If you entered a web address please check it was correct.',
        linkText1: 'Return to starting page.'
    },
    cy: {
        head: 'Tudalen heb ei darganf' + headTitleSuffix_cy,
        heading1: 'Tudalen heb ei darganfod.',
        body1: 'Os gwnaethoch nodi cyfeiriad gwefan, gwiriwch ei fod yn gywir.',
        linkText1: "Dychwelwch i'r dudalen gychwyn."
    }
})

export const noConsentStrings = new LocalizedStrings({
    en: {
        head: 'No Consent Given' + headTitleSuffix_en,
        heading1: 'You must agree to share your NHS login information to continue.',
        body1: 'You cannot use this service if you have not agreed to share your NHS login information',
        linkText1: 'Back to start'
    },
    cy: {
        head: 'Cydsyniad heb ei roi' + headTitleSuffix_cy,
        heading1: 'Rhaid i chi gytuno i rannu eich gwybodaeth mewngofnodi GIG i barhau.',
        body1: "Ni allwch ddefnyddio'r gwasanaeth hwn os nad ydych wedi cytuno i rannu eich gwybodaeth mewngofnodi GIG",
        linkText1: "Nôl i'r dechrau"
    }
})

export const declinedTermsAndConditionsStrings = new LocalizedStrings({
    en: {
        head: 'Declined Terms and Conditions' + headTitleSuffix_en,
        heading1: 'You need to accept the terms and conditions to continue',
        body1: 'You need to accept the terms and conditions to use this service.',
        linkText1: 'Back to start'
    },
    cy: {
        head: "Telerau ac Amodau wedi'u Gwrthod" + headTitleSuffix_cy,
        heading1: 'Mae angen i chi dderbyn y telerau ac amodau i barhau',
        body1: "Mae angen i chi dderbyn y telerau ac amodau i ddefnyddio'r gwasanaeth hwn",
        linkText1: "Nôl i'r dechrau"
    }
})

export const gracePeriodStrings = new LocalizedStrings({
    en: {
        firstAccess: {
            head: 'Prove your identity to access your pass' + headTitleSuffix_en,
            heading: {
                text1: 'Prove your identity to access your pass'
            },
            body: {
                text1: 'We need additional information to help keep your records safe and unlock access to your NHS COVID Pass and other features. If you skip this step now, your COVID Pass will only be valid for',
                text2: 'from this login.'
            }
        },
        countDownAccess: {
            heading: {
                text1: 'You still need to prove your identity to access your pass'
            },
            body: {
                text1: 'We need additional information to help keep your records safe and unlock access to your NHS COVID Pass and other features. If you skip this step now, your COVID Pass will only be valid for',
                text2: 'from this login.'
            }
        },
        date: {
            text1: 'Without verification your pass will expire in',
            hours: 'hours',
            hour: 'hour',
            minutes: 'minutes',
            minute: 'minute'
        },
        skipButton: 'Skip',
        unlockButton: 'Unlock now'
    },
    cy: {
        firstAccess: {
            head: "Profwch eich hunaniaeth i gael mynediad i'ch pàs" + headTitleSuffix_cy,
            heading: {
                text1: "Profwch eich hunaniaeth i gael mynediad i'ch pàs"
            },
            body: {
                text1: "Mae angen gwybodaeth ychwanegol arnom i helpu i gadw'ch cofnodion yn ddiogel a datgloi mynediad i'ch Pàs COVID GIG a nodweddion eraill. Os ydych chi'n hepgor y cam hwn nawr, dim ond am",
                text2: "y bydd eich Pàs COVID yn ddilys o'r mewngofnodiad hwn."
            }
        },
        countDownAccess: {
            heading: {
                text1: "Mae angen i chi brofi pwy ydych chi o hyd i gael mynediad i'ch pàs"
            },
            body: {
                text1: "Mae angen gwybodaeth ychwanegol arnom i helpu i gadw'ch cofnodion yn ddiogel a datgloi mynediad i'ch Pàs COVID GIG a nodweddion eraill. Os ydych chi'n hepgor y cam hwn nawr, dim ond am",
                text2: " y bydd eich Pàs COVID yn ddilys o'r mewngofnodiad hwn."
            }
        },
        date: {
            text1: 'Heb ddilysu bydd eich pàs yn dod i ben yn',
            hours: 'oriau',
            hour: 'awr',
            minutes: 'munudau',
            minute: 'munudau'
        },
        skipButton: 'Hepgor',
        unlockButton: 'Unlock now'
    }
})

export const unverifiedStrings = new LocalizedStrings({
    en: {
        gracePeriod: {
            expiredAccess: {
                heading: 'Access to your pass has expired',
                body: {
                    text1: 'Confirm your identity to unlock access to your NHS COVID Pass.'
                }
            }
        },
        head: 'Unverified' + headTitleSuffix_en,
        heading: 'Choose how to unlock access',
        whatToDoNext: {
            option1: {
                heading: 'Verify your mobile number',
                body1: {
                    text1: 'Access your NHS COVID Pass by verifying that the number you used to log in matches the number held by your ',
                    inlineBold1: 'GP in England.'
                }
            },
            option2: {
                heading: 'Prove your identity',
                body1: {
                    text1: 'Access your NHS COVID Pass if you are registered with a ',
                    textBold1: 'GP outside of England',
                    text2: ', or choose not to verify your mobile number, by using government-issued ID. This could take up to ',
                    textBold2: '24 hours',
                    text3: ' or longer during peak times.'
                }
            }
        }
    },
    cy: {
        gracePeriod: {
            expiredAccess: {
                heading: "Mae mynediad i'ch pàs wedi dod i ben",
                body: {
                    text1: "Cadarnhewch eich hunaniaeth i ddatgloi mynediad i'ch Pàs COVID GIG."
                }
            }
        },
        head: 'Heb ei ddilysu' + headTitleSuffix_cy,
        heading: 'Dewiswch sut i ddatgloi mynediad',
        whatToDoNext: {
            option1: {
                heading: 'Gwiriwch eich rhif ffôn symudol',
                body1: {
                    text1: "Cyrchwch eich Pàs COVID GIG trwy wirio bod y rhif y defnyddioch chi i fewngofnodi yn cyfateb i'r rhif sydd gan eich ",
                    inlineBold1: 'meddyg teulu yn Lloegr.'
                }
            },
            option2: {
                heading: 'Profwch eich hunaniaeth',
                body1: {
                    text1: "Cyrchwch eich Pàs COVID GIG os ydych wedi'ch cofrestru gyda ",
                    textBold1: 'meddyg teulu y tu allan i Loegr',
                    text2: ", neu'n dewis peidio â gwirio'ch rhif ffôn symudol, trwy ddefnyddio ID a gyhoeddwyd gan y llywodraeth. Gallai hyn gymryd hyd at ",
                    textBold2: '24 awr',
                    text3: ' neu fwy yn ystod yr oriau brig.'
                }
            }
        }
    }
})

export const timeoutAlertStrings = new LocalizedStrings({
    en: {
        alertHeader1: 'You are about to be logged out',
        alertBody1:
            "For security reasons, we'll log you out of this service after 15 minutes of inactivity."
    },
    cy: {
        alertHeader1: 'Rydych chi ar fin cael eich allgofnodi',
        alertBody1:
            "Am resymau diogelwch, byddwn yn eich allgofnodi o'r gwasanaeth hwn ar ôl 15 munud o anweithgarwch."
    }
})

export const fiveHundredErrorPageStrings = new LocalizedStrings({
    en: {
        head: 'Server Error' + headTitleSuffix_en,
        heading1: 'Sorry, there is a problem with the service',
        covidRecordsText: 'We cannot access your records at the moment.',
        covidStatusText: 'We could not get your 2D barcode at this time.',
        body1: 'Try again later.',
        linkText1: 'Back to start'
    },
    cy: {
        head: 'Gwall Gweinydd' + headTitleSuffix_cy,
        heading1: "Mae'n ddrwg gennym, mae problem gyda'r gwasanaeth",
        covidRecordsText: "Ni allwn gael mynediad i'ch cofnodion ar hyn o bryd.",
        covidStatusText: 'Ni allem gael eich cod bar 2D ar hyn o bryd.',
        body1: 'Rhowch gynnig arall arni yn nes ymlaen.',
        linkText1: "Nôl i'r dechrau"
    }
})

export const SessionExpiredStrings = new LocalizedStrings({
    en: {
        head: 'Session Expired' + headTitleSuffix_en,
        heading: 'Your session has expired',
        body1: 'Please ',
        body2: 'here.',
        linkText: 'log in again'
    },
    cy: {
        head: 'Sesiwn wedi dod i ben' + headTitleSuffix_cy,
        heading: 'Mae eich sesiwn wedi dod i ben',
        body1: 'Os gwelwch yn dda ',
        body2: 'yma.',
        linkText: 'mewngofnodwch eto'
    }
})

export const sessionEndedStrings = new LocalizedStrings({
    en: {
        heading: 'You have been logged out',
        body1: 'Another user has logged in to their account on this browser since you last visited this site. For your security and privacy, this site has ended your session and cleared the data you entered.',
        linkText: 'Log back in to access your NHS COVID Pass.'
    },
    cy: {
        heading: 'Rydych chi wedi cael eich allgofnodi',
        body1: "Mae defnyddiwr arall wedi mewngofnodi i'w gyfrif ar y porwr yma ers y tro diwethaf i chi ymweld â'r wefan yma. O ran eich diogelwch a'ch preifatrwydd chi, mae'r wefan wedi dod â'ch sesiwn i ben ac wedi clirio'r data a roesoch chi.",
        linkText: "Mewngofnodwch eto i gael mynediad i'ch Pàs COVID GIG."
    }
})

export const invalidUserInfoStrings = new LocalizedStrings({
    en: {
        head: 'Invalid User Information' + headTitleSuffix_en,
        heading1: 'You cannot use this service.',
        body1: 'You must be at least 12 to use this service.',
        linkText1: 'Back to start'
    },
    cy: {
        head: 'Gwybodaeth Defnyddiwr Annilys' + headTitleSuffix_cy,
        heading1: "Ni allwch ddefnyddio'r gwasanaeth hwn.",
        body1: "Rhaid i chi fod yn 12 oed o leiaf i ddefnyddio'r gwasanaeth hwn.",
        linkText1: "Nôl i'r dechrau"
    }
})

export const nhsLoginFailedStrings = new LocalizedStrings({
    en: {
        head: 'NHS Login Error' + headTitleSuffix_en,
        nhsLoginErrorTitle: 'Login failed',
        nhsLoginErrorMessage: 'We cannot log you in to this service.',
        nhsLoginErrorGoBackMessage: 'Go back and try logging in again.',
        nhsLoginErrorBackToStartLink: 'Back to login'
    },
    cy: {
        head: "Gwall Mewngofnodi i'r GIG" + headTitleSuffix_cy,
        nhsLoginErrorTitle: 'Mewngofnodiad wedi methu',
        nhsLoginErrorMessage: "Ni allwn eich mewngofnodi i'r gwasanaeth hwn.",
        nhsLoginErrorGoBackMessage: 'Ewch yn ôl a cheisiwch fewngofnodi eto.',
        nhsLoginErrorBackToStartLink: "Nôl i'r mewngofnodiad"
    }
})

export const logoutErrorPageStrings = new LocalizedStrings({
    en: {
        head: 'Timeout Error' + headTitleSuffix_en,
        heading1: 'Sorry, there is a problem loading your records',
        linkText1: 'Try again now.'
    },
    cy: {
        head: 'Gwall terfyn amser' + headTitleSuffix_cy,
        heading1: "Mae'n ddrwg gennym, mae problem yn llwytho'ch cofnodion",
        linkText1: 'Ceisiwch eto nawr.'
    }
})

export const button = new LocalizedStrings({
    en: {
        continue: 'Continue',
        goBack: 'Go back',
        endSession: 'End session',
        manageNHSLogin: 'Manage NHS login',
        viewCovidRecords: 'View COVID-19 records',
        viewCovidRecordsAriaLabel: 'View COVID-19 records',
        openGoogleWalletText: 'Save to Google Pay',
        openAppleWalletText: 'Add to Apple Wallet',
        nhsLoginLabel: 'Continue with NHS login'
    },
    cy: {
        continue: 'Parhau',
        goBack: 'Yn ôl',
        endSession: "Diweddu'r sesiwn",
        manageNHSLogin: 'Rheoli mewngofnodiad GIG',
        viewCovidRecords: 'Gweld cofnodion COVID-19',
        viewCovidRecords__bilingual: 'View COVID-19 records',
        viewCovidRecordsAriaLabel: 'Gweld cofnodion COVID-19',
        openGoogleWalletText: 'Arbedwch i Google Pay',
        openAppleWalletText: 'Ychwanegu at Apple Wallet',
        nhsLoginLabel: 'Parhau gyda mewngofnodi’r GIG'
    }
})

export const iconStrings = new LocalizedStrings({
    en: {
        nhsSvgLogo: {
            alt_backToStartLink: 'NHS logo back to start link',
            alt_default: 'NHS logo'
        }
    },
    cy: {
        nhsSvgLogo: {
            alt_backToStartLink: 'Logo’r GIG yn ôl at y ddolen gychwyn',
            alt_default: "Logo'r GIG"
        }
    }
})

export const externalLinkStrings = new LocalizedStrings({
    en: { opensNewTab: 'opens in a new window' },
    cy: { opensNewTab: 'yn agor mewn ffenestr newydd' }
})

export const carouselStrings = new LocalizedStrings({
    en: {
        vaccineHead: 'Vaccinated against COVID-19',
        recoveredHead: 'Recovered from COVID-19',
        titleRecordNotFound: 'No COVID-19 records found',
        prevButtonAriaLabel: 'Go to previous barcode',
        nextButtonAriaLabel: 'Go to next barcode',
        dotButtonAriaLabel: 'Go to barcode'
    },
    cy: {
        vaccineHead: 'Wedi brechu yn erbyn COVID-19',
        vaccineHead__bilingual: 'Vaccinated against COVID-19',
        recoveredHead: 'Wedi gwella o COVID-19',
        recoveredHead__bilingual: 'Recovered from COVID-19',
        titleRecordNotFound: 'Ni chanfuwyd unrhyw gofnodion COVID-19',
        prevButtonAriaLabel: 'Ewch i’r cod bar blaenorol',
        nextButtonAriaLabel: 'Ewch i’r cod bar nesaf',
        dotButtonAriaLabel: 'Ewch i far cod'
    }
})

export const checkDatesForMiddayAndMidnightStrings = new LocalizedStrings({
    en: {
        midday: 'midday',
        midnight: 'midnight',
        at: ' at '
    },
    cy: {
        midday: 'canol dydd',
        midnight: 'hanner nos',
        at: ' am '
    }
})

export const resultsStrings = new LocalizedStrings({
    en: {
        VaccinationResultCard: {
            dose: 'Dose',
            doseOf: 'of',
            booster: '[Booster]',
            vaccineManufacturer: 'Manufacturer',
            diseaseTargeted: 'Disease targeted',
            vaccineType: 'Vaccine',
            vaccineProduct: 'Vaccine product',
            vaccineBatchNumber: 'Batch number',
            countryOfVaccination: 'Country of vaccination',
            issuer: 'Issuer',
            site: 'Administering Centre',
            vaccinationDate_domestic: 'Date of vaccination:',
            vaccinationDate_international: 'Date of vaccination',
            tagText: 'Vaccination'
        },
        RecoveryCard: {
            resultsDesc: 'Result',
            testType: 'Test Type',
            recoveryDate: 'Date of positive test:',
            diseaseTargeted: 'Disease targeted',
            country: 'Country of test',
            issuer: 'Issuer',
            validFrom: 'Date valid from',
            validUntil: 'Date valid until'
        },
        TestResultCard: {
            head1: 'test',
            body1: 'Negative test (COVID-19 not detected)',
            body2: 'You tested positive (COVID-19 detected)',
            body3: 'Test result void.',
            tested: 'Tested:'
        },
        ExemptionResultCard: {
            head1: 'Medical Exemption',
            expired: 'Expired',
            vaccineTesting: 'Exempt from vaccination and testing',
            vaccineOnly: 'Exempt from vaccination only',
            declinedVaccineTesting: 'Declined: Exempt from vaccination and testing',
            declinedVaccineOnly: 'Declined: Exempt from vaccination only',
            dateExemptionGiven: 'Date granted:',
            dateExemptionExpires: 'Valid until:',
            validPermanent: 'Permanent medical exemption',
            tagText: 'Exemption'
        },
        seeMore: 'See more'
    },
    cy: {
        VaccinationResultCard: {
            dose: 'Dos',
            dose__bilingual: 'Dose',
            doseOf: 'of / o',
            booster: '[Pigiad atgyfnerthu]',
            vaccineManufacturer: 'Gwneuthurwr',
            vaccineManufacturer__bilingual: 'Manufacturer',
            diseaseTargeted: 'Clefyd a dargedwyd',
            diseaseTargeted__bilingual: 'Disease targeted',
            vaccineType: 'Brechlyn',
            vaccineType__bilingual: 'Vaccine',
            vaccineProduct: 'Cynnyrch brechlyn',
            vaccineProduct__bilingual: 'Vaccine product',
            vaccineBatchNumber: 'Rhif swp',
            vaccineBatchNumber__bilingual: 'Batch number',
            countryOfVaccination: 'Gwlad y brechiad',
            countryOfVaccination__bilingual: 'Country of vaccination',
            issuer: 'Cyhoeddwr',
            issuer__bilingual: 'Issuer',
            site: 'Canolfan weinyddu',
            site__bilingual: 'Administering Centre',
            vaccinationDate_domestic: 'Dyddiad y brechiad:',
            vaccinationDate_international: 'Dyddiad y brechiad',
            vaccinationDate_international__bilingual: 'Date of vaccination',
            tagText: 'Brechiad'
        },
        RecoveryCard: {
            resultsDesc: 'Canlyniad',
            resultsDesc__bilingual: 'Result',
            testType: 'Math o Brawf',
            testType__bilingual: 'Test Type',
            recoveryDate: 'Dyddiad y prawf positif',
            recoveryDate__bilingual: 'Date of positive test',
            diseaseTargeted: 'Clefyd a dargedwyd',
            diseaseTargeted__bilingual: 'Disease targeted',
            country: 'Gwlad y prawf',
            country__bilingual: 'Country of test',
            issuer: 'Cyhoeddwr',
            issuer__bilingual: 'Issuer',
            validFrom: 'Yn ddilys o',
            validFrom__bilingual: 'Date valid from',
            validUntil: 'Yn dilys tan',
            validUntil__bilingual: 'Date valid to'
        },
        TestResultCard: {
            head1: 'Prawf',
            body1: 'Prawf negyddol (COVID-19 heb ei ganfod)',
            body2: "Fe wnaethoch chi brofi'n bositif (Covid-19 wedi'i ganfod)",
            body3: 'Canlyniad y prawf yn amhendant.',
            tested: 'Wedi profi:'
        },
        ExemptionResultCard: {
            head1: 'Eithrio Feddygol',
            expired: 'Daeth i ben',
            vaccineTesting: 'Eithrio rhag brechu a phrofi',
            vaccineOnly: 'Eithrio rhag brechu yn unig',
            declinedVaccineTesting: 'Gwrthodwyd: Eithrio rhag brechu a phrofi',
            declinedVaccineOnly: 'Gwrthodwyd: Eithrio rhag brechu yn unig',
            dateExemptionGiven: 'Dyddiad rhoddi:',
            dateExemptionExpires: 'Dilys hyd:',
            validPermanent: 'Eithriad meddygol parhaol',
            tagText: 'Eithriad'
        },
        seeMore: 'Gweld mwy'
    }
})

export const loadingSpinnerStrings = new LocalizedStrings({
    en: {
        loading: 'Loading'
    },
    cy: {
        loading: 'Yn llwytho'
    }
})
