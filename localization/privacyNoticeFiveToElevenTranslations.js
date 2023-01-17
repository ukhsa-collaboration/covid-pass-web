import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

const strings_en = {
    head: 'Privacy Notice 5 to 11' + headTitleSuffix_en,
    title: 'NHS COVID Pass Privacy Notice for 5 to 11 year olds access to the COVID Pass for Travel',
    linkToChildFriendly: {
        text: 'We use child friendly ways of presenting privacy information in our privacy notice for children.'
    },
    whatIsPrivacyNotice: {
        heading: 'What is a Privacy Notice?',
        textGroup1: {
            text1: 'A privacy notice tells you the ways we use, share, and manage your personal and health information.'
        }
    },
    whyDoYouNeedAnNhsCovidPassLetter: {
        heading: 'Why do you need an NHS COVID Pass?',
        textGroup1: { text1: 'Some countries need children to be vaccinated against COVID-19.' },
        textGroup2: {
            text1: 'The COVID Pass shows which vaccinations you have had or if you have had COVID-19 in the last 6 months.'
        }
    },
    whoWeAre: {
        heading: 'Who are we?',
        textGroup1: { text1: 'We are the Department for Health and Social Care (DHSC).' },
        textGroup1a: { text1: 'We manage your information in the NHS COVID Pass service.' },
        textGroup2: {
            text1: 'We are known as the ',
            boldText1: 'Data Controllers.'
        },
        textGroup3: { text1: 'We sometimes call the information we collect ‘data’.' },
        textGroup4: { text1: 'We follow the rules of Data Protection Law.' },
        textGroup5: { text1: 'We will keep the information about you safe.' }
    },
    howToGetDigitalPassFor5To11: {
        heading: 'How can I get the digital NHS COVID Pass for a child aged 5-11 year old?',
        textGroup1: {
            text1: 'Parents/guardians in England & Isle of Man can apply for a digital NHS COVID Pass by visiting the NHS website or calling 119',
            list1: {
                listItem1:
                    'Your parent/guardian can visit nhs.uk and enter the mobile phone number on your GP record.',
                listItem2:
                    'This mobile number will receive a password to enter into the NHS website',
                listItem3:
                    'If the information is matched and correct, an NHS COVID Pass travel pass will be sent to an email address.'
            }
        },
        textGroup2: {
            text1: 'If you do not have a mobile number on your GP record, your parent/guardian can still request a digital pass via the NHS website or by calling 119 by giving the email address on your GP record.'
        },
        textGroup3: {
            text1: 'If something is not right, you can receive an email or a message to your mobile phone explaining what you need to do to sort it out.'
        }
    },
    whatIsTravelLetter: {
        heading: 'What is the NHS COVID Pass travel letter, and can I apply for one?',
        textGroup1: {
            text1: 'If you are travelling abroad to a country that needs children to be fully vaccinated against COVID-19',
            text2: 'Your parent/guardians or carers can ask for an NHS ',
            boldText1: 'COVID Pass Travel letter or Recovery Pass letter ',
            text3: 'if the following are true:',
            list1: {
                listItem1: 'You are aged 5-11 years old',
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
        }
    },
    whatDoesTheLetterSay: {
        heading: 'What does the letter say?',
        textGroup1: {
            list1: {
                listItem1: 'It tells you that it is an NHS COVID Pass travel letter',
                listItem2: 'It shows your name and date of birth',
                listItem3: 'It shows you how many doses of the vaccine you have had',
                listItem4: 'It shows the name of the vaccine',
                listItem5: 'You have had a positive NHS PCR test within the last 180 days'
            }
        }
    },
    howCanIGetTravelPass: {
        heading:
            'How can I get the NHS COVID Pass travel letter or a Recovery Pass letter? What information do I need?',
        textGroup1: {
            list1: {
                listItem1:
                    'Your parents/guardians or carers can apply for your travel pass or recovery pass letter either online on the NHS website or by calling 119.',
                listItem2:
                    'You can call 119 from a mobile or home phone in England, Wales or the Isle of Man (0808 1624 119 for Isle of Man).',
                listItem3: {
                    text1: 'They will ask your parent/guardian or carer a few questions (personal data):',
                    subList1: {
                        listItem1: 'Your first name and family name',
                        listItem2: 'Your date of birth',
                        listItem3: 'Your postcode where you live.'
                    }
                },
                listItem4: 'This is matched to what we know about you in our systems.',
                listItem4b: 'Your letter request will be passed on to our printers.',
                listItem5: {
                    text1: 'They will print and post out your NHS COVID Pass travel letter to ',
                    boldText1: 'your home',
                    text2: ' (the address the GP has for you)'
                },
                listItem5b:
                    'It will take 5-7 days for your letter to arrive and shall be addressed to the parents/guardian or carer.',
                listItem6:
                    'Once your letter has been printed, your information will be kept 30 days - long enough for you to get your letter.',
                listItem7:
                    'You can visit the website at NHS.uk and apply for a NHS COVID Pass travel letter'
            }
        },

        keepingAddressUpdated: {
            heading: 'Keeping your address details up to date.',
            text1: 'It is important to tell your GP when something changes, like your address, so that we have the right details about you and so that we can make sure your NHS COVID Pass travel letter is sent to the right address. '
        }
    },
    yourRightsToYourInfo: {
        heading: 'What are your rights when it comes to your information?',
        textGroup1: {
            text1: 'You have the right to ask:',
            list1: {
                listItem1: 'about how your information is used',
                listItem2: 'for a copy of your information',
                listItem3: 'for anything that is wrong to be put right'
            }
        },
        textGroup2: {
            text1: 'You can also:',
            list1: {
                listItem1: 'ask us a question or tell us you are not happy about something',
                listItem2:
                    'ask us to remove your information if you think there is no longer a reason for us having it',
                listItem3: 'ask that we do not share your information in some situations'
            }
        }
    },
    importantContactDetails: {
        heading: 'Important Contact Details',
        textGroup1: {
            text1: 'If you are unhappy or wish to complain about how your information is being used by us, your parent/guardian or carer can write to or email the Data Protection Officer for DHSC. His name is Lee Cramp.'
        },
        email: {
            href: 'mailto:data_protection@dhsc.gov.uk',
            text: 'data_protection@dhsc.gov.uk'
        },
        address: {
            line1: 'Department of Health and Social Care',
            line2: '1st Floor North',
            line3: '39 Victoria Street',
            line4: 'London SW1H 0EU'
        },
        textGroup2: {
            text1: 'Once you have got in touch, we will contact you to let you know we have your letter or email.'
        },
        textGroup3: {
            text1: 'If you are still concerned, you can complain to the Information Commissioner’s Office.'
        },
        ico: {
            text1: 'The Information Commissioner, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF ',
            telText1: 'Tel: 0303 123 1113: ',
            link1: { text: 'www.ico.org.uk', href: 'https://ico.org.uk/' }
        },
        textGroup4: {
            text1: 'If you would like more information on how we keep your data safe, and protected, this can be found in the main NHS COVID Pass Privacy Notice at ',
            link1: { text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice/' }
        }
    },
    changeToThisPn: {
        boldText1: 'Changes to this Privacy Notice: ',
        text1: 'We keep our Privacy Notice under regular review. This Privacy Notice was last updated on 28th September 2022.'
    }
}

const strings_cy = {
    head: 'Hysbysiad Preifatrwydd 5 i 11' + headTitleSuffix_cy,
    title: 'Hysbysiad Preifatrwydd Pàs COVID y GIG ynghylch mynediad plant 5-11 oed i’r Pàs COVID ar gyfer Teithio',
    linkToChildFriendly: {
        text: 'Yn ein hysbysiad preifatrwydd y blant, rydyn ni’n defnyddio ffyrdd o gyflwyno gwybodaeth am breifatrwydd sy’n addas i blant.'
    },
    whatIsPrivacyNotice: {
        heading: 'Beth yw Hysbysiad Preifatrwydd?',
        textGroup1: {
            text1: 'Mae hysbysiad preifatrwydd yn dweud wrthoch chi sut rydyn ni’n defnyddio, yn rhannu ac yn rheoli eich gwybodaeth bersonol a gwybodaeth am eich iechyd.'
        }
    },
    whyDoYouNeedAnNhsCovidPassLetter: {
        heading: 'Pam mae arnoch chi angen Pàs COVID y GIG?',
        textGroup1: {
            text1: 'Mae rhai gwledydd angen i blant fod wedi’u brechu yn erbyn COVID-19.'
        },
        textGroup2: {
            text1: 'Mae’r Pàs COVID yn dangos pa frechiadau rydych chi wedi’u cael neu a ydych chi wedi cael COVID-19 yn y 6 mis diwethaf.'
        }
    },
    whoWeAre: {
        heading: 'Pwy ydyn ni?',
        textGroup1: { text1: "Ni yw'r Adran Iechyd a Gofal Cymdeithasol (DHSC)." },
        textGroup1a: { text1: 'Ni sy’n rheoli’ch gwybodaeth yng ngwasanaeth Pàs COVID y GIG.' },
        textGroup2: {
            text1: 'Rydyn ni’n cael ein hadnabod fel y ',
            boldText1: 'Rheolwyr Data.'
        },
        textGroup3: { text1: "Weithiau rydyn ni’n galw'r wybodaeth a gasglwn yn 'ddata'." },
        textGroup4: { text1: 'Rydyn ni’n dilyn rheolau’r Deddfau Diogelu Data. ' },
        textGroup5: { text1: "Byddwn yn cadw'r wybodaeth amdanoch chi yn ddiogel. " }
    },
    howToGetDigitalPassFor5To11: {
        heading: 'Sut mae cael Pàs COVID digidol y GIG i blentyn 5-11 oed?',
        textGroup1: {
            text1: 'Mae rhieni/gwarcheidwaid yn Lloegr ac Ynys Manaw yn cael gwneud cais am Bàs COVID digidol y GIG drwy ymweld â gwefan y GIG neu drwy ffonio 119',
            list1: {
                listItem1:
                    'Gall eich rhiant/gwarcheidwad fynd nhs.uk a rhoi’r rhif ffôn symudol sydd ar gofnod eich meddyg teulu.',
                listItem2:
                    "Bydd y rhif ffôn symudol hwn yn derbyn cyfrinair i'w deipio i mewn i wefan y GIG",
                listItem3:
                    "Os yw'r wybodaeth yn cyfateb ac yn gywir, bydd pàs teithio COVID y GIG yn cael ei anfon i gyfeiriad e-bost"
            }
        },
        textGroup2: {
            text1: "Os nad oes gennych chi rif ffôn symudol ar gofnod eich meddyg teulu, gall eich rhiant/gwarcheidwad wneud cais am bàs digidol o hyd drwy wefan y GIG neu drwy ffonio 119 drwy roi'r cyfeiriad ebost sydd ar gofnod eich meddyg teulu."
        },
        textGroup3: {
            text1: "Os oes rhywbeth o’i le, fe allwch chi gael neges ebost neu neges i'ch ffôn symudol yn esbonio'r hyn mae angen ichi ei wneud i ddatrys hyn."
        }
    },
    whatIsTravelLetter: {
        heading: 'Beth yw llythyr teithio Pàs COVID y GIG, ac ydw i’n cael gwneud cais am un?',
        textGroup1: {
            text1: "Os ydych chi’n teithio dros y môr i wlad sydd angen i blant fod wedi’u brechu'n llawn yn erbyn COVID-19. ",
            text2: 'Gall eich rhieni/gwarcheidwaid neu’ch gofalwyr ofyn am ',
            boldText1: 'lythyr Teithio Pàs COVID y GIG neu lythyr Pas Gwella ',
            text3: "os yw'r canlynol yn wir:",
            list1: {
                listItem1: 'Eich bod yn 5-11 oed',
                listItem2: {
                    text1: 'Eich bod wedi cael ',
                    boldText1: 'cwrs llawn ',
                    text2: 'o frechlyn COVID-19 yng Nghymru, Lloegr neu Ynys Manaw'
                },
                listItem3: 'Eich bod wedi aros 5 diwrnod ar ôl yr ail ddos cyn gwneud cais',
                listItem4:
                    'Eich bod wedi cael prawf PCR GIG positif o fewn y 180 diwrnod diwethaf (heb fod ar gael yn Ynys Manaw)',
                listItem5:
                    'Bod gennych chi feddyg teulu yng Nghymru, Lloegr ac Ynys Manaw neu rif GIG'
            }
        }
    },
    whatDoesTheLetterSay: {
        heading: "Beth mae'r llythyr yn ei ddweud?",
        textGroup1: {
            list1: {
                listItem1: "Mae'n dweud wrthoch chi mai llythyr teithio pàs COVID y GIG ydy e",
                listItem2: "Mae'n dangos eich enw a'ch dyddiad geni",
                listItem3: "Mae'n dangos sawl dos o'r brechlyn rydych chi wedi'u cael",
                listItem4: "Mae’n dangos enw'r brechlyn",
                listItem5: 'Eich bod wedi cael prawf PCR GIG positif o fewn y 180 diwrnod diwethaf'
            }
        }
    },
    howCanIGetTravelPass: {
        heading:
            'Sut mae cael llythyr teithio Pàs COVID y GIG neu lythyr Pàs Gwella? Pa wybodaeth sydd ei hangen arnaf?',
        textGroup1: {
            list1: {
                listItem1:
                    'Gall eich rhieni/gwarcheidwaid neu’ch gofalwyr wneud cais am eich pàs teithio neu’ch llythyr pàs gwella naill ai ar wefan y GIG neu drwy ffonio 119.',
                listItem2:
                    'Gallwch ffonio 119 o ffôn symudol neu ffôn cartref yng Nghymru, Lloegr neu Ynys Manaw (0808 1624 119 yn achos Ynys Manaw).',
                listItem3: {
                    text1: "Byddan nhw’n gofyn ychydig o gwestiynau (data personol) i'ch rhiant/gwarcheidwad neu’ch gofalwr:-",
                    subList1: {
                        listItem1: 'Eich enw cyntaf a’ch enw teuluol',
                        listItem2: 'Eich dyddiad geni ',
                        listItem3: "Eich cod post lle rydych chi'n byw."
                    }
                },
                listItem4:
                    "Mae hyn yn cael ei gyplysu â'r hyn rydyn ni’n ei wybod amdanoch chi yn ein systemau. ",
                listItem4b: "Bydd eich cais am lythyr yn cael ei drosglwyddo i'n hargraffwyr. ",
                listItem5: {
                    text1: "Byddan nhw’n argraffu ac yn postio eich llythyr teithio Pàs COVID GIG i'ch ",
                    boldText1: 'cartref',
                    text2: '(y cyfeiriad sydd gan eich meddyg teulu ar eich cyfer)'
                },
                listItem5b:
                    "Bydd hi’n cymryd tua 5-7 diwrnod i’ch llythyr gyrraedd ac fe fydd wedi’i gyfeirio at y rhieni/gwarcheidwad neu'r gofalwr",
                listItem6:
                    'Ar ôl i’ch llythyr gael ei argraffu, bydd eich gwybodaeth yn cael ei chadw am 30 diwrnod -  yn ddigon hir ichi gael eich llythyr.',
                listItem7:
                    "Gallwch ymweld â'r wefan yn NHS.uk a gwneud cais am lythyr teithio pàs COVID y GIG "
            }
        },
        keepingAddressUpdated: {
            heading: 'Cadw manylion eich cyfeiriad yn gyfredol.',
            text1: "Mae'n bwysig dweud wrth eich meddyg teulu pan fydd rhywbeth yn newid, fel eich cyfeiriad, fel bod gennyn ni’r manylion cywir amdanoch chi ac fel y gallwn sicrhau bod eich llythyr teithio Pàs COVID GIG yn cael ei anfon i'r cyfeiriad cywir."
        }
    },
    yourRightsToYourInfo: {
        heading: 'Beth yw eich hawliau chi o ran eich gwybodaeth?',
        textGroup1: {
            text1: 'Mae gennych chi hawl i ofyn:',
            list1: {
                listItem1: 'am sut mae’ch gwybodaeth yn cael ei defnyddio',
                listItem2: "am gopi o'ch gwybodaeth",
                listItem3: "am gywiro unrhyw beth sy'n anghywir "
            }
        },
        textGroup2: {
            text1: 'Rydych chi hefyd yn gallu:',
            list1: {
                listItem1:
                    'gofyn cwestiwn inni neu ddweud wrthon ni nad ydych chi’n fodlon ar rywbeth',
                listItem2:
                    'gofyn inni ddileu eich gwybodaeth os ydych chi’n credu nad oes rheswm bellach iddi fod gennyn ni',
                listItem3: 'gofyn inni beidio â rhannu’ch gwybodaeth mewn rhai sefyllfaoedd'
            }
        }
    },
    importantContactDetails: {
        heading: 'Manylion Cyswllt Pwysig',
        textGroup1: {
            text1: 'Os ydych chi’n anfodlon neu os hoffech chi gwyno am sut rydyn ni’n defnyddio’ch gwybodaeth, gall eich rhiant/gwarcheidwad neu’ch gofalwr ysgrifennu at Swyddog Diogelu Data y DHSC neu anfon neges ebost ato. Ei enw yw Lee Cramp. '
        },
        email: {
            href: 'mailto:data_protection@dhsc.gov.uk',
            text: 'data_protection@dhsc.gov.uk'
        },
        address: {
            line1: 'Department of Health and Social Care',
            line2: '1st Floor North',
            line3: '39 Victoria Street',
            line4: 'London SW1H 0EU'
        },
        textGroup2: {
            text1: 'Ar ôl ichi ddod i gysylltiad, byddwn yn cysylltu â chi i roi gwybod bod eich llythyr neu’ch neges ebost gennyn ni.'
        },
        textGroup3: {
            text1: "Os ydych yn dal i bryderu, gallwch gwyno i Swyddfa'r Comisiynydd Gwybodaeth."
        },
        ico: {
            text1: 'Y Comisiynydd Gwybodaeth, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF',
            telText1: 'Ffôn: 0303 123 1113: ',
            link1: { text: 'www.ico.org.uk', href: 'https://ico.org.uk/' }
        },
        textGroup4: {
            text1: "Os hoffech gael rhagor o wybodaeth am sut rydyn ni’n cadw’ch data'n ddiogel ac wedi'i warchod, mae hyn i'w weld ym mhrif Hysbysiad Preifatrwydd Pàs COVID y GIG yn ",
            link1: { text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice/' }
        }
    },
    changeToThisPn: {
        boldText1: "Newidiadau i'r Hysbysiad Preifatrwydd hwn ",
        text1: 'Rydyn ni’n adolygu’n Hysbysiad Preifatrwydd yn rheolaidd. Y tro diwethaf i’r Hysbysiad Preifatrwydd hwn gael ei ddiweddaru oedd 28 Medi 2022.'
    }
}

export const helpPrivacyNoticeFiveToEleven = new LocalizedStrings({
    en: strings_en,
    cy: strings_cy
})
