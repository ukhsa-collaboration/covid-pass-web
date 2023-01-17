import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

const strings_en = {
    head: 'Privacy Notice Under 16' + headTitleSuffix_en,
    heading:
        'NHS COVID Pass Privacy Notice for 12-15 year olds’ access to the COVID Pass for Travel',
    age5To11Pn: {
        text: 'Click here to see the Privacy Notice for 5 to 11 year olds'
    },
    whatIsAPrivacyNotice: {
        heading: 'What is a Privacy Notice?',
        body1: 'A privacy notice tells you the ways we use, share, and manage (process) your personal and health information.'
    },
    whyDoYouNeedAnNhsCovidTravelPassLetter: {
        heading: 'Why do you need an NHS COVID Travel Pass?',
        body1: 'Some countries need children to be fully vaccinated against COVID-19.'
    },
    whoWeAre: {
        heading: 'Who are we?',
        body1: {
            text1: 'We are the Department for Health and Social Care (DHSC). We manage your information in the NHS COVID Pass service. We are known as the ',
            boldText1: 'Data Controllers ',
            text2: 'and bring together the right information from different places to give you a COVID Pass.'
        }
    },
    howCanIGetAnNhsCovidPass: {
        heading: 'How can I get an NHS COVID Travel Pass for a child aged 5-15 year old?',
        subsectionPdfVersion: {
            heading1: 'Digital NHS COVID Pass - PDF version',
            text1: 'Parents/guardians in England & Isle of Man can apply for a digital NHS COVID Pass Travel Letter by visiting nhs.uk',
            list: {
                item1: 'Your parent/guardian can visit the website at nhs.uk and enter the mobile phone number registered with your GP record.',
                item2: 'This mobile number will receive a one-time code to enter into nhs.uk',
                item3: 'If the information is matched and correct, your parent/guardian will then be able to request a PDF version of the NHS COVID Pass travel pass which can be sent to any email address they have entered.'
            },
            text2: 'If you do not have a mobile number registered with your GP practice, your parent/guardian can still request a digital pass via nhs.uk by entering the email address registered with your GP record. The information will be checked and if matched to what we know about you in our systems, the PDF version of the NHS COVID Pass will then be sent to your email address.',
            text3: 'If something is not right with your details and you are unable to get a digital NHS COVID Pass Travel Letter, you can receive an email or a message to your mobile phone explaining what you need to do to resolve this.'
        },
        subsectionTravelLetter: {
            heading: 'NHS COVID Pass Travel Letter',
            text1: 'You can ask our 119-call centre for an NHS COVID Pass Travel Letter',
            textGroup1: {
                body1: {
                    text1: 'If you are going abroad to a country that needs you to be fully vaccinated against COVID-19, either you or your parents/guardians can call the 119 service and ask for an ',
                    boldText1: 'NHS COVID Pass Travel letter',
                    text2: ' if the following are true:'
                },
                list1: {
                    listItem1: 'You are aged 12-15 years old',
                    listItem2: {
                        text1: 'You have had ',
                        boldText1: '2 doses ',
                        text2: 'of a COVID-19 vaccination in England, or 1 dose if Janssen'
                    },
                    listItem3: 'You have waited 5 days after the second dose before applying',
                    listItem4: 'You have a GP in England or an NHS number'
                }
            }
        }
    },
    whatDoesTheLetterSay: {
        heading: 'What does the letter say?',
        list1: {
            listItem1: 'It tells you that it is an NHS COVID Pass Travel letter',
            listItem2: 'It shows your name and date of birth',
            listItem3: 'How many doses of the vaccine you have had',
            listItem4: 'When and where you had the two vaccines',
            listItem5: 'The type and batch number of the vaccine. '
        }
    },
    howCanIGetTheTravelLetter: {
        heading: 'What information do I need when I call 119?',
        text1: 'You will need to tell the 119 agent',
        textGroup1: {
            list1: {
                listItem1: 'Your first name and family name',
                listItem2: 'Your date of birth',
                listItem3:
                    'Your postcode where you live. This helps the 119 agents to find your NHS number and vaccination information (which is health data).'
            }
        },
        textGroup2: {
            text1: 'If you have asked your parents or guardians to apply for you, they will be asked the same questions and to give their contact telephone number.',
            list1: {
                listItem1: {
                    text1: 'Your letter request will be sent to our NHS printers.  They will print and post out your NHS COVID Pass Travel Letter to ',
                    boldText1: 'you at your home address ',
                    text2: '(the one your GP has for you). This takes about 5-7 days to arrive.'
                }
            }
        },
        textGroup3: {
            text1: 'If you need to have your letter in a different language, please ask the agent when you call. You can also have your NHS COVID Pass Travel letter in Braille, large print, printed on yellow paper or in a way you can listen to.'
        },
        textGroup4: {
            text1: 'If something is not right with your details, you will get a letter telling you why you are not able to have a Travel Pass.'
        },
        textGroup5: {
            heading: 'NHS COVID Digital Travel Pass via NHS App',
            list1: {
                listItem1:
                    'You can download the NHS App to a mobile phone and get an NHS COVID Digital Travel Pass'
            },
            text1: 'If you are 13 or over, are registered with a GP surgery in England, and have access to a mobile phone, you can download the NHS App.The NHS App is owned and run by the NHS and so it is a simple and secure way to access your NHS COVID Travel Pass.  Visit Google Play or the App Store and look for the icon',
            imgAltText: 'NHS App icon',
            text2: 'You will be asked to set up your NHS login so that we can confirm who you are, and it is safe to share your information with you. You will need to give some information to NHS Digital who run the service, including ',
            list2: {
                listItem1: 'an email address that is just your own',
                listItem2: 'your NHS number if you know it',
                listItem3: 'a mobile number',
                listItem4: 'your first name and family name',
                listItem5: 'your date of birth and ',
                listItem6: 'your home postcode.',
                listItem7:
                    'You will also need your Passport and be asked for a recording of your face. '
            },
            text3: {
                text1: 'All this information is then checked out by a specially trained NHS Digital staff. You can find out more at ',
                link1: {
                    text: 'https://help.login.nhs.uk/provewhoyouare/withid/',
                    href: 'https://help.login.nhs.uk/provewhoyouare/withid/'
                },
                text2: '. This process can take a few days but may be quicker'
            },
            text4: 'Just like the letter service you will need to be fully vaccinated with more than one jab. You can also get a COVID Pass if you have had COVID-19 and reported a positive PCR type test result. This is your recovery information, held by the Test and Trace service, giving you a COVID Pass for 180 days from the date of the test.',
            text5: 'You can download your digital Pass to your phone - this will be a good idea in case where you go does not have an internet connection. You can choose who you show your NHS COVID Pass to (for visual check or scanning) when you travel, but you will not be able to share this information directly from the NHS App.',
            text6: 'From the NHS App, you will only have access to the NHS COVID Pass, the 111 online service, the A-Z of Health information, and some information on organ donation.  To see your full medical records, you will need to ask your GP’s permission.',
            text7: 'Once you have your NHS login, you can also visit NHS.uk and see your digital travel pass there.'
        },
        textGroup6: {
            list1: {
                listItem1: 'You can visit the website at NHS.uk and apply for a travel letter '
            },
            text1: 'The NHS.uk website is run by NHS Digital and is a safe and secure website with millions of visits each month. If you are aged 12, you will not be able to get the NHS COVID Pass through the NHS App as you need to be at least 13.  At NHS.uk, you will need to be registered with a GP in England, and enter some details onto the screen to share with NHS Digital including',
            list2: {
                listItem1: 'your first name and family name',
                listItem2: 'your NHS number (if you know this)',
                listItem3: 'your date of birth and',
                listItem4: 'your home postcode.'
            },
            text2: 'This will be matched to what we already know about you on our systems. You can then request your NHS COVID Travel Pass letter, which will take about a week to get to you through the post. You will need to provide some information about you to NHS login so that you can be sent a letter to your home address.'
        },
        textGroup7: {
            text1: 'You won’t be able to get an NHS COVID Travel Pass if',
            list1: {
                listItem1: 'You have only had one dose of a COVID-19 vaccine (the first dose). ',
                listItem2: 'You are 16 or older and can already use the travel NHS COVID Pass ',
                listItem3: {
                    text1: 'You have tested positive for COVID-19 and are waiting for 12 weeks before you can have a COVID-19 vaccine or 4 weeks if you are at higher risk from the effects of the disease. There is more information on this at ',
                    link1: {
                        text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/book-or-manage-a-1st-or-2nd-dose-of-the-coronavirus-covid-19-vaccination/',
                        href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/book-or-manage-a-1st-or-2nd-dose-of-the-coronavirus-covid-19-vaccination/'
                    }
                }
            }
        }
    },
    whatDoWeDoWithYourInfo: {
        heading: 'What do we do with your information?',
        textGroup1: {
            text1: 'We need to keep your vaccination information for several years in a system called the National Immunisation Management System (NIMS), kept by NHS Digital. This is joined to your name and address in another NHS Digital system called PDS (Personal Demographic Service), which is kept up to date by your GP. It is important to tell your GP when your information changes, like your address, so that we have the right details about you. The printers who print your letter only keep your information for 30 days - long enough for you to get your letter. Information about you does not leave the UK.'
        },
        textGroup2: {
            text1: 'We look after your information carefully (under UK GDPR). There is a full explanation of what we do in the main COVID pass Privacy Notice at ',
            link1: {
                text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice/'
            }
        }
    },
    whatAreYourRights: {
        heading: 'What are your rights when it comes to your information (data)?',
        textGroup1: {
            text1: 'You have the right to ask:',
            list1: {
                listItem1: 'about how your information is used',
                listItem2:
                    'for a copy of your information (also known as a Subject Access Request)',
                listItem3: 'anything that you find is wrong that needs to be put right'
            }
        },
        textGroup2: {
            text1: 'You can also:',
            list1: {
                listItem1:
                    'ask us a question or tell us you are not happy about something (known as an objection)',
                listItem2:
                    'ask us to remove your information if you think there is no longer a reason for us having it',
                listItem3: "ask that we don't share your information in some situations"
            }
        },
        textGroup3: {
            text1: "Note: If we can't do what you have asked us to do, we will tell you and explain why."
        },
        textGroup4: {
            body1: {
                boldText1: 'This is how you can find us ',
                text1: 'if you are unhappy or wish to let us know something about how your information is being used by us. You can write to or email the Data Protection Officer for DHSC. His name is Lee Cramp. '
            }
        },
        textGroup5: {
            email: {
                text: 'data_protection@dhsc.gov.uk',
                href: 'mailto:data_protection@dhsc.gov.uk'
            },
            address: {
                line1: 'Department of Health and Social Care',
                line2: '1st Floor North',
                line3: '39 Victoria Street',
                line4: 'London SW1H 0EU'
            }
        },
        textGroup6: {
            text1: 'We will contact you to let you know we got your letter or email and try to put things right. If you are not happy with what we have done to try and make things better, you can complain to the Information Commissioner’s Office. This is separate to us at DHSC. '
        },
        textGroup7: {
            body1: {
                text1: 'The Information Commissioner, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF Tel: 0303 123 1113: ',
                link1: { text: 'www.ico.org.uk', href: 'https://ico.org.uk/' }
            }
        }
    }
}

const strings_cy = {
    head: 'Hysbysiad Preifatrwydd o dan 16' + headTitleSuffix_cy,
    heading:
        'Hysbysiad Preifatrwydd Pàs COVID y GIG ynghylch mynediad plant 12-15 oed i’r Pàs COVID ar gyfer Teithio',
    age5To11Pn: {
        text: 'Click here to see the Privacy Notice for 5 to 11 year olds'
    },
    whatIsAPrivacyNotice: {
        heading: 'Beth yw Hysbysiad Preifatrwydd?',
        body1: 'Mae hysbysiad preifatrwydd yn sôn am sut rydyn ni’n defnyddio, yn rhannu ac yn rheoli (prosesu) eich gwybodaeth bersonol a’ch gwybodaeth iechyd.'
    },
    whyDoYouNeedAnNhsCovidTravelPassLetter: {
        heading: 'Pam mae arnoch chi angen Pàs Teithio COVID y GIG?',
        body1: "Mae rhai gwledydd yn gofyn bod plant wedi cael eu brechu'n llawn yn erbyn COVID-19."
    },
    whoWeAre: {
        heading: 'Pwy ydyn ni?',
        body1: {
            text1: "Ni yw'r Adran Iechyd a Gofal Cymdeithasol (DHSC). Ni sy’n rheoli’ch gwybodaeth yng ngwasanaeth Pàs COVID y GIG. Rydyn ni hefyd yn cael ein hadnabod fel y ",
            boldText1: 'Rheolwr Data ',
            text2: 'ac yn dod â’r wybodaeth gywir ynghyd o wahanol leoedd i roi Pàs COVID i chi.'
        }
    },
    howCanIGetAnNhsCovidPass: {
        heading: 'Sut mae cael Pàs Teithio COVID y GIG i blentyn 5-15 oed?',
        subsectionPdfVersion: {
            heading1: 'Pàs COVID GIG digidol – fersiwn PDF ',
            text1: 'Mae rhieni/gwarcheidwaid yn Lloegr ac Ynys Manaw yn cael gwneud cais am lythyr teithio Pàs COVID digidol y GIG drwy ymweld ag nhs.uk',
            list: {
                item1: "Gall eich rhiant/gwarcheidwad fynd i’r wefan yn nhs.uk a rhoi’r rhif ffôn symudol sydd wedi'i gofrestru gyda'ch cofnod meddyg teulu.",
                item2: "Bydd y rhif ffôn symudol hwn yn derbyn cod untro i'w deipio i mewn i nhs.uk",
                item3: "Os yw'r wybodaeth yn cyfateb ac yn gywir, bydd eich rhiant/gwarcheidwad wedyn yn gallu gwneud cais am fersiwn PDF o bàs teithio COVID y GIG sy’n gallu cael ei anfon i unrhyw gyfeiriad e-bost maen nhw wedi'i roi."
            },
            text2: "Os nad oes gennych chi rif ffôn symudol sydd wedi'i gofrestru gyda'ch meddygfa, gall eich rhiant/gwarcheidwad wneud cais am bàs digidol o hyd drwy nhs.uk drwy roi'r cyfeiriad ebost sydd wedi'i gofrestru gyda'ch meddyg teulu. Bydd yr wybodaeth yn cael ei gwirio ac os yw’n cyfateb i'r hyn rydyn ni’n ei wybod amdanoch chi yn ein systemau ni, bydd fersiwn PDF o Bàs COVID y GIG yn cael ei anfon wedyn i'ch cyfeiriad e-bost.",
            text3: "Os oes rhywbeth o’i le gyda'ch manylion ac na allwch chi gael pàs teithio COVID digidol y GIG, fe allwch chi gael neges ebost neu neges i'ch ffôn symudol yn esbonio'r hyn mae angen ichi ei wneud i ddatrys hyn."
        },
        subsectionTravelLetter: {
            heading: 'Llythyr Teithio Pàs COVID y GIG',
            text1: "Gallwch ofyn i'n canolfan alwadau 119 am Lythyr Teithio Pàs COVID y GIG",
            textGroup1: {
                body1: {
                    text1: "Os ydych chi'n mynd dros y môr i wlad sydd angen i chi fod wedi cael eich brechu'n llawn yn erbyn COVID-19, gallwch chi neu'ch rhieni neu’ch gwarcheidwaid ffonio'r gwasanaeth 119 a gofyn am lythyr Teithio ",
                    boldText1: 'Pàs COVID y GIG',
                    text2: " os yw'r canlynol yn wir:"
                },
                list1: {
                    listItem1: 'Eich bod yn 12-15 oed ',
                    listItem2: {
                        text1: 'Eich bod wedi cael ',
                        boldText1: '2 ddos ',
                        text2: 'o frechlyn COVID-19 yn Lloegr neu 1 dos yn achos Janssen'
                    },
                    listItem3: 'Eich bod chi wedi aros 5 diwrnod ar ôl yr ail ddos cyn gwneud cais',
                    listItem4: 'Bod gennych chi feddyg teulu yn Lloegr neu rif GIG'
                }
            }
        }
    },
    whatDoesTheLetterSay: {
        heading: "Beth mae'r llythyr yn ei ddweud?",
        list1: {
            listItem1: "Mae'n dweud wrthoch chi mai llythyr Teithio Pàs COVID y GIG ydy e",
            listItem2: "Mae'n dangos eich enw a'ch dyddiad geni",
            listItem3: "Sawl dos o'r brechlyn rydych chi wedi'u cael",
            listItem4: 'Pryd a ble cawsoch chi’r ddau frechlyn',
            listItem5: 'Y math o frechlyn a’r rhif swp.'
        }
    },
    howCanIGetTheTravelLetter: {
        heading: 'Pa wybodaeth sydd ei hangen arna i pan fydda i’n ffonio 119?',
        text1: 'Bydd angen ichi ddweud y canlynol wrth asiantau 119',
        textGroup1: {
            list1: {
                listItem1: "Eich enw cyntaf a'ch enw teuluol",
                listItem2: 'Eich dyddiad geni',
                listItem3:
                    "Eich cod post lle rydych chi'n byw. Mae hyn yn helpu'r asiantau 119 i ddod o hyd i'ch rhif GIG a gwybodaeth am eich brechiadau (sy’n ddata iechyd)."
            }
        },
        textGroup2: {
            text1: "Os ydych chi wedi gofyn i'ch rhieni neu’ch gwarcheidwaid wneud cais ar eich rhan, bydd yr un cwestiynau yn cael eu gofyn iddyn nhw a bydd gofyn iddyn nhw roi eu rhif ffôn.",
            list1: {
                listItem1: {
                    text1: 'Bydd eich cais am lythyr yn cael ei anfon at ein hargraffwyr GIG. Byddan nhw’n argraffu ac yn postio eich Llythyr Teithio Pàs COVID GIG atoch yn ',
                    boldText1: 'eich cyfeiriad cartref ',
                    text2: '(sef y cyfeiriad sydd gan eich meddyg teulu ar eich cyfer). Mae hyn yn cymryd tua 5-7 diwrnod i gyrraedd.'
                }
            }
        },
        textGroup3: {
            text1: "Os oes angen ichi gael eich llythyr mewn iaith wahanol, gofynnwch i'r asiant pan fyddwch yn ffonio. Gallwch hefyd gael eich llythyr Teithio Pàs COVID GIG mewn Braille, print bras, wedi'i argraffu ar bapur melyn neu mewn ffordd y gallwch wrando arni."
        },
        textGroup4: {
            text1: "Os bydd rhywbeth o’i le gyda'ch manylion, byddwch yn cael llythyr yn dweud wrthoch chi pam efallai na fyddwch yn gallu cael Pàs Teithio."
        },
        textGroup5: {
            heading: 'Pàs Teithio Digidol COVID y GIG drwy Ap y GIG',
            list1: {
                listItem1:
                    'Gallwch lawrlwytho Ap y GIG i ffôn symudol a sicrhau Pàs Teithio Digidol COVID y GIG'
            },
            text1: "Os ydych chi’n 13 oed neu'n hŷn, wedi cofrestru gyda meddygfa yn Lloegr, a bod gennych fynediad i ffôn symudol, gallwch lawrlwytho Ap y GIG. Mae Ap y GIG yn perthyn i'r GIG ac yn cael ei redeg gan y GIG ac felly mae'n ffordd syml a diogel o gael mynediad i'ch Pàs Teithio COVID GIG. Ewch i Google Play neu'r App Store a chwiliwch am yr eicon",
            imgAltText: 'Eicon ap y GIG',
            text2: "Gofynnir ichi osod eich manylion i fewngofnodi i’r GIG er mwyn inni gadarnhau pwy ydych chi, a chadarnhau ei bod yn ddiogel rhannu’ch gwybodaeth gyda chi. Bydd angen ichi roi rhywfaint o wybodaeth i NHS Digital sy'n rhedeg y gwasanaeth, gan gynnwys",
            list2: {
                listItem1: "cyfeiriad e-bost sy'n perthyn i chi yn unig",
                listItem2: 'eich rhif GIG os ydych yn ei wybod',
                listItem3: 'rhif ffôn symudol',
                listItem4: "Eich enw cyntaf a'ch enw teuluol",
                listItem5: 'Eich dyddiad geni a',
                listItem6: 'cod post eich cartref',
                listItem7:
                    "Bydd arnoch chi angen eich Pasbort hefyd a gofynnir i chi am recordiad o'ch wyneb."
            },
            text3: {
                text1: "Yna bydd yr holl wybodaeth hon yn cael ei gwirio gan staff NHS Digital, sydd wedi'u hyfforddi'n arbennig. Gallwch gael rhagor o wybodaeth yn ",
                link1: {
                    text: 'https://help.login.nhs.uk/provewhoyouare/withid/',
                    href: 'https://help.login.nhs.uk/provewhoyouare/withid/'
                },
                text2: '. Gall y broses hon gymryd ychydig ddyddiau ond fe allai fod yn gyflymach'
            },
            text4: "Yn union fel y gwasanaeth llythyrau, bydd angen ichi fod wedi’ch brechu'n llawn gyda mwy nag un pigiad. Gallwch gael Pàs COVID hefyd os ydych chi wedi cael COVID-19 ac wedi cofrestru canlyniad positif ar gyfer prawf math PCR. Dyma'ch gwybodaeth adfer, sy’n cael ei chadw gan y gwasanaeth Profi ac Olrhain, sy'n rhoi Pàs COVID ichi am 180 diwrnod o ddyddiad y prawf ymlaen.",
            text5: "Gallwch lawrlwytho’ch Pàs digidol i'ch ffôn a bydd hyn yn syniad da rhag ofn nad oes gennych gysylltiad â'r rhyngrwyd yn y fan lle rydych chi’n mynd. Gallwch ddewis i bwy rydych chi'n dangos eich Pàs COVID GIG (i'w wirio neu i’w sganio'n weledol) pan fyddwch chi'n teithio, ond fyddwch chi ddim yn gallu rhannu'r wybodaeth hon yn uniongyrchol o Ap y GIG.",
            text6: 'O Ap y GIG, y cyfan y gallwch ei gyrchu yw Pàs COVID y GIG, y gwasanaeth ar-lein 111, gwybodaeth Iechyd A-Z, a rhywfaint o wybodaeth am roi organau. I weld eich cofnodion meddygol llawn, bydd angen ichi ofyn am ganiatâd eich meddyg teulu.',
            text7: "Ar ôl ichi gael manylion mewngofnodi'r GIG, gallwch hefyd ymweld ag NHS.uk a gweld eich pàs teithio digidol yno."
        },
        textGroup6: {
            list1: {
                listItem1: "Gallwch ymweld â'r wefan yn NHS.uk a gwneud cais am lythyr teithio "
            },
            text1: "Mae gwefan NHS.uk yn cael ei rhedeg gan NHS Digital ac mae'n wefan ddiogel sy’n derbyn miliynau o ymweliadau bob mis. Os ydych chi’n 12 oed, fyddwch chi ddim yn gallu cael Pàs COVID y GIG drwy Ap y GIG gan fod angen ichi fod yn 13 oed o leiaf. Ar NHS.uk, bydd angen ichi fod wedi cofrestru gyda meddyg teulu yn Lloegr, a rhoi manylion ar y sgrin i'w rhannu gydag NHS Digital gan gynnwys",
            list2: {
                listItem1: "Eich enw cyntaf a'ch enw teuluol",
                listItem2: 'eich rhif GIG os ydych yn ei wybod',
                listItem3: 'Eich dyddiad geni a',
                listItem4: 'cod post eich cartref'
            },
            text2: "Bydd hyn yn cael ei baru â’r hyn rydyn ni eisoes yn ei wybod amdanoch ar ein systemau. Yna gallwch ofyn am eich llythyr Pàs Teithio COVID GIG, a fydd yn cymryd rhyw wythnos i'ch cyrraedd drwy'r post. Bydd angen ichi roi rhywfaint o wybodaeth amdanoch eich hun i  fewngofnodi i'r GIG er mwyn i llythyr gael ei anfon at eich cyfeiriad cartref."
        },
        textGroup7: {
            text1: 'Fyddwch chi ddim yn gallu cael Pàs Teithio COVID y GIG',
            list1: {
                listItem1:
                    "os mai dim ond un dos o frechlyn COVID-19 rydych chi wedi'i gael (y dos cyntaf)",
                listItem2:
                    "os ydych chi'n 16 oed neu'n hŷn a’ch bod chi eisoes yn gallu defnyddio Pàs COVID y GIG er mwyn teithio",
                listItem3: {
                    text1: "os ydych chi wedi profi'n bositif am COVID-19 a’ch bod yn aros am 12 wythnos cyn y gallwch chi gael brechlyn COVID-19 neu 4 wythnos os ydych chi’n wynebu mwy o risg o effeithiau'r clefyd. Mae rhagor o wybodaeth am hyn ar gael yn ",
                    link1: {
                        text: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/book-or-manage-a-1st-or-2nd-dose-of-the-coronavirus-covid-19-vaccination/',
                        href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/book-or-manage-a-1st-or-2nd-dose-of-the-coronavirus-covid-19-vaccination/'
                    }
                }
            }
        }
    },
    whatDoWeDoWithYourInfo: {
        heading: "Beth rydyn ni'n ei wneud gyda'ch gwybodaeth?",
        textGroup1: {
            text1: "Mae angen inni gadw’ch gwybodaeth frechu am nifer o flynyddoedd mewn system o'r enw y System Genedlaethol Rheoli Imiwneiddio (NIMS), sy’n cael ei chadw gan NHS Digital. Mae hyn yn gysylltiedig â'ch enw a'ch cyfeiriad yn un o systemau eraill NHS Digital o'r enw PDS (Gwasanaeth Demograffeg Bersonol), sy'n cael ei diweddaru gan eich meddyg teulu. Mae'n bwysig dweud wrth eich meddyg teulu pan fydd eich gwybodaeth yn newid, fel eich cyfeiriad, fel bod gennyn ni’r manylion cywir amdanoch. Mae'r argraffwyr sy'n argraffu’ch llythyr yn cadw’ch gwybodaeth am 30 diwrnod yn unig - yn ddigon hir ichi gael eich llythyr. Does dim gwybodaeth amdanoch yn gadael y Deyrnas Unedig."
        },
        textGroup2: {
            text1: 'Rydyn ni’n gofalu am eich gwybodaeth yn ofalus (o dan GDPR y DU). Mae esboniad llawn am yr hyn rydyn ni’n ei wneud ar gael yn y prif Hysbysiad Preifatrwydd ynglŷn â’r Pàs COVID yn ',
            link1: {
                text: 'https://covid-status.service.nhsx.nhs.uk/help/privacy-notice/'
            }
        }
    },
    whatAreYourRights: {
        heading: 'Beth yw’ch hawliau o ran eich gwybodaeth (data)?',
        textGroup1: {
            text1: 'Mae gennych chi hawl i ofyn:',
            list1: {
                listItem1: 'am sut mae’ch gwybodaeth yn cael ei defnyddio',
                listItem2:
                    "am gopi o'ch gwybodaeth (sydd hefyd yn cael ei alw’n Gais Testun am Weld Gwybodaeth)",
                listItem3: 'am unrhyw beth welwch chi sy’n anghywir ac sydd angen ei gywiro'
            }
        },
        textGroup2: {
            text1: 'Gallwch chi hefyd:',
            list1: {
                listItem1:
                    'gofyn cwestiwn inni neu ddweud nad ydych chi’n fodlon ynglŷn â rhywbeth (sy’n cael ei adnabod fel gwrthwynebiad)',
                listItem2:
                    'gofyn inni ddileu’ch gwybodaeth os ydych chi’n credu nad oes rheswm iddi fod gennyn ni mwyach',
                listItem3: 'gofyn inni beidio â rhannu’ch gwybodaeth mewn rhai sefyllfaoedd'
            }
        },
        textGroup3: {
            text1: 'Sylwch: Os na allwn ni wneud yr hyn rydych chi wedi gofyn inni ei wneud, byddwn yn dweud wrthoch chi ac yn esbonio pam.'
        },
        textGroup4: {
            body1: {
                boldText1: 'Dyma sut gallwch chi ddod o hyd inni ',
                text1: "os ydych chi’n anfodlon neu'n dymuno dweud rhywbeth wrthon ni am sut mae’ch gwybodaeth yn cael ei defnyddio gennyn ni. Gallwch ysgrifennu at Swyddog Diogelu Data’r DHSC, neu anfon neges ebost ato. Ei enw yw Lee Cramp."
            }
        },
        textGroup5: {
            email: {
                text: 'data_protection@dhsc.gov.uk',
                href: 'mailto:data_protection@dhsc.gov.uk'
            },
            address: {
                line1: 'Yr Adran Iechyd a Gofal Cymdeithasol',
                line2: '1st Floor North',
                line3: '39 Victoria Street',
                line4: 'London SW1H 0EU'
            }
        },
        textGroup6: {
            text1: "Byddwn yn cysylltu â chi i roi gwybod ein bod ni wedi cael eich llythyr neu’ch neges ebost ac yn ceisio unioni pethau. Os nad ydych chi’n fodlon â'r hyn rydyn ni wedi'i wneud i geisio gwneud pethau'n well, gallwch gwyno i Swyddfa'r Comisiynydd Gwybodaeth. Mae honno ar wahân i ni yn y DHSC."
        },
        textGroup7: {
            body1: {
                text1: "Swyddfa'r Comisiynydd Gwybodaeth (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF Tel: 0303 123 1113: ",
                link1: { text: 'www.ico.org.uk', href: 'https://ico.org.uk/' }
            }
        }
    }
}

export const helpPrivacyNoticeUnderSixteen = new LocalizedStrings({
    en: strings_en,
    cy: strings_cy
})
