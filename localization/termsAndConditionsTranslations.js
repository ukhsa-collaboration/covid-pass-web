import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

export const helpTermsAndConditions = new LocalizedStrings({
    en: {
        main: {
            head: 'Terms and Conditions' + headTitleSuffix_en,
            title: 'Terms and conditions for the NHS COVID Pass service',
            subTitle: 'By using this Service, you agree to these Terms.',
            list1: {
                title: 'Introduction to the terms of use',
                subListItem1: {
                    text1: 'The service is available to residents of England and the Isle of Man through the NHS App, a web browser, and the 119 telephone line.',
                    list1: {
                        item1: 'Residents of the Isle of Man can call 0808 1624 119 free from any Isle of Man landline or mobile phone (dial the full 11-digit number)',
                        item2: {
                            text1: 'The service is also available to residents of Wales through a web browser or Welsh call centre',
                            item1: 'For 5-11 year olds resident in Wales, the letter service is accessed via the same web journey as English residents',
                            item2: 'For all other ages looking to access a letter, Welsh residents can call 0300 303 5667.'
                        }
                    }
                },
                subListItem2:
                    "The Department of Health and Social Care ('DHSC', 'we', 'our') has overall responsibility for the Service, which has been developed by, and will be operated by, NHS England. For the purposes of clause 8, ‘we’ is deemed to include NHS Digital with respect to liability for NHS Digital’s role as the certifying authority.",

                subListItem3:
                    'NHS Digital is the certifying authority for the digital services, which means it certifies that it has provided the information about (i) your vaccination history to the Service, on behalf of NHS England, for the vaccination database it operates (or in Wales, on behalf of the Welsh Government for the vaccination database operated by the Welsh Health Board, or in the Isle of Man on behalf of Manx Care for the vaccination database it operates) and (ii) about your testing data to the Service on behalf of UK HSA (UK Health Security Agency) for DHSC, for the test result database it operates on behalf of DHSC (the Approved Source Systems). This contains (i) vaccination information supplied from the COVID-19 vaccine point of care systems approved by NHS England, which is the controller for and operates the COVID-19 Vaccination Programme in England (or in Wales, by Public Health Wales, which is the data controller for, and operates, the COVID-19 Vaccination Programme in Wales, or in Isle of Man, by Manx Care, which is the data controller for the vaccination programme in the Isle of Man) and (ii) testing information supplied from UK HSA, for which DHSC is the data controller.',
                subListItem4:
                    'These Terms apply to the assisted digital (web-based and app) and letter (non-digital) service. There are separate terms of use that apply to: (i) the NHS App; and (ii) NHS login. For the purposes of the NHS login, the Service is a “Connected Service”; for the purposes of the NHS App the Service is a “Platform Service”. If you choose to download your COVID Pass to your Apple Wallet or to Google Pay, you should be aware that those are third party apps owned by Apple and Google (respectively) and are subject to their own terms of use.'
            },
            list2: {
                title: 'Purpose of the Service',
                subListItem1: {
                    text1: 'The purpose of the Service is to allow you to produce an NHS COVID Pass certified by a 2D barcode. This allows you to demonstrate your COVID-19 status for the purposes of international travel, as some countries may request evidence that you have been vaccinated or recovered from COVID-19 on entry to their country or at domestic events in that country.'
                },
                subListItem2:
                    'The Service is only designed to be used for purposes approved in Government guidance.',
                subListItem3:
                    'The Service is provided free of charge, and it is expressly prohibited to attempt to sell or license use of the Service to any person, or to include the Service as part of a paid-for service or product.'
            },
            list3: {
                title: 'How to use the Service',
                subListItem1:
                    'To use the Service, you must either i) first download the NHS App, ii) use the digital or letter service via web browser, which allows you to download a PDF, add the COVID Pass to a digital wallet, access a COVID Pass via email, or order a letter to be sent to you by post, or iii) call 119 (English residents),  0808 1624 119 (Isle of Man residents) or 0300 303 5667 (Welsh residents) in order to request an email or accessible letter.',
                subListItem2Paragraph1:
                    'If it is your first time using NHS digital services via NHS login then you will need to set up NHS login credentials (controlled by NHS Digital) and verify your identity. In order to use the digital services via NHS login, you will need to complete the highest level of identity verification. This involves an online or offline identity verification process where physical comparison between you and a photographic form of identity has occurred.',
                subListItem2Paragraph2:
                    'It is important that you keep your NHS login credentials confidential and do not share these with any other person.',
                subListItem3:
                    'You can also request an NHS COVID Pass via letter or email (all ages) by calling 119 or by completing the online letter journey, if you have a mobile phone number or email address on your GP record.',
                subListItem4:
                    "In order to verify your identity during the 119 or online letter journey, the Service will ask for basic personal demographic information such as your name, address, date of birth and NHS number. If you are unable to prove your identity by providing this information, or if the information you provided does not match what we have on record, you will be unable to use the letter Service. You can use the letter or online service on behalf of someone else (called 'proxy access'), for a friend, a dependent under the age of 16, or relative who may not be able to access the service, although you must have their permission.",
                subListItem5:
                    "We strongly recommend that if you request a letter, you do so well in advance of any planned travel, or any other permitted use of the letter to demonstrate your vaccination status. You can use the letter service 14 days after you've completed your primary course of vaccination, and it can take up to 7 working days for the letter to arrive from the date on which it is requested. This timescale is provided as an estimate only, and we can offer no guarantees regarding timescales for delivery of your letter.",
                subListItem6:
                    "Note: the definition of being 'fully vaccinated' is determined by Government policy and subject to change.",
                subListItem7:
                    'You should test the Service at home, prior to using it in a live setting, to ensure it works correctly and to give you time to discuss any issues with us (see the contact information provided below) or to consider alternative options to using the Service (such as taking a coronavirus test) where these are available.',
                subListItem8:
                    'All the Services are available to persons 16 years of age or older. In addition: (i) 12 - 15 year olds can access the COVID Pass for the purposes of international travel by using the web service or the letter service; (ii)  13 to 15 year olds can access the COVID Pass for the purposes of international travel using the NHS App; and (iii) a person can request a COVID Pass for the purpose of international travel on behalf of someone else by using the web or letter service via NHS.uk or by telephoning 119 (0808 1624 119 for Isle of Man, or 0300 303 5667 for Wales).',
                subListItem9:
                    'You must confirm that you are the parent or legal guardian in order to access the service on behalf of a child. This service is available for children in England, Wales and the Isle of Man (children in Wales can only use the letter service)'
            },
            list4: {
                title: 'How the Service works',
                subListItem1: {
                    text1: 'The Service works by establishing whether you have (i) received a COVID-19 vaccine, or (ii) recovered from COVID-19 in the past 180 days. The service may also hold data about whether you have (i) a recent negative NHS PCR test result for COVID-19, or (ii) participated in a COVID-19 vaccine clinical trial in the form and to the standard previously ',
                    link1: {
                        text: 'required by Government guidance',
                        href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/'
                    },
                    text2: '; or (iii) hold a medical exemption, as these factors were relevant to historic domestic uses for the Service.'
                },
                subListItem2:
                    'The Service does this by using your NHS login credentials or information on your GP record to verify your identity, and to retrieve your COVID-19 status from the Approved Source System.',
                subListItem3:
                    'Letter service: If you have requested a letter by post and your vaccination record is incomplete, you can choose to receive an SMS or email (only available for users over 12) informing you that the problem might be that your data is not properly recorded in your NHS record and to call 119 (Welsh residents can call 0300 303 5667).',
                subListItem4:
                    'If you took part in a clinical trial, you are encouraged to contact your clinical trial site.',
                subListItem5:
                    'If you were vaccinated overseas, manufacturer data fields will default to the EU Specification values, so may appear differently to overseas data sources. For those aged between 5 and 16, this service is also available but must be accompanied by information provided by, and conducted in the presence of, an adult over 18 years of age.',
                subListItem6:
                    'The Service is dependent on receiving data from external sources and on data sharing permissions with organisations outside of DHSC, including permissions given to your GP. If in doubt, please refer to 119 (0808 1624 119 for Isle of Man, or 0300 303 5667 for Wales).'
            },
            list5: {
                title: 'Accessibility',
                subListItem1:
                    'You can request a letter via the Letter Service in a range of accessible formats, including braille, large print and audio CD. You will still receive the official version in English. We also offer a translation guide in 17 different languages, which is sent with the official English language letter for standard international use. These Terms apply in the same way regardless of the format in which you choose to receive the letter, and you are advised to always take the English language version document with you for travel purposes. Welsh residents should contact 0300 303 5667 to get an accessible version.'
            },
            list6: {
                title: 'Privacy',
                subListItem1: {
                    text1: 'Please refer to the general ',
                    link1: {
                        text: 'Privacy Notice',
                        href: '#'
                    },
                    text2: ', the ',
                    link2: {
                        text: 'Under 16s Privacy Notice',
                        href: '#'
                    },
                    text2a: ' or the ',
                    link2a: {
                        text: '5-11 Privacy Notice',
                        href: '#'
                    },
                    text3: ' for further information about how the Service processes personal data and respects your rights of privacy and confidentiality under data protection laws or contact ',
                    email: {
                        text: 'data_protection@dhsc.gov.uk',
                        href: 'mailto:data_protection@dhsc.gov.uk'
                    }
                }
            },
            list7: {
                title: 'Your right to use the Service',
                subListItem1:
                    'The Service and its content belong to DHSC, NHS England or their respective licensors as appropriate, and are protected by intellectual property laws. As long as you comply with these Terms, you have a personal, perpetual, non-exclusive, non-transferable, revocable, limited licence to use the Service for your own personal use. We reserve all other licence rights not expressly permitted under these Terms.',
                subListItem2:
                    'For the avoidance of doubt, any reproduction, representation, distribution, modification, adaptation or translation of the Service and its content, in whole or in part, is prohibited, except within the limit of these Terms or with the express authorisation of DHSC.'
            },
            list8: {
                title: 'Limitations of liability',
                subListItem1:
                    'We will use reasonable efforts to keep the Service up-to-date and functioning as intended.',
                subListItem2:
                    'However, the Service is provided on an "as is" basis and, to the extent permitted by law, we make no other representations, warranties or guarantees, whether express or implied that the Service, or any information held within the Service, will be accurate at all times. We also cannot guarantee that the Service will be uninterrupted, secure or error or virus free, or that defects will be corrected.',
                subListItem3: {
                    title: 'We will not be liable to you for:',
                    item1: 'any use of the Service that does not comply with these Terms;',
                    item2: 'any business loss, for example from an inability to access and/or use the Service (including but not limited to loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure);',
                    item3: 'any loss or damage arising from an inability to access and/or use the Service;',
                    item4: 'any indirect or consequential losses that were not foreseeable to both you and us when you commenced using the Service; or',
                    item5: 'any loss or damage caused by a virus or other technologically harmful material that may infect your device or data due to your use of the Service.'
                },
                subListItem4:
                    "This clause 8 does not affect any legal rights you may have as a consumer in relation to defective services or software. Advice about your legal rights is available from your local Citizen's Advice or Trading Standards Office.",
                subListItem5:
                    'Nothing in this clause 8 excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by law.'
            },
            list9: {
                title: 'Continuity of the Service',
                subListItem1:
                    'We reserve the right to suspend, terminate or otherwise alter access to some or all of the Service at any time and without notice.'
            },
            list10: {
                title: 'Security',
                subListItem1: {
                    text1: 'If you discover a potential security vulnerability or suspect a security incident related to this service, please follow the vulnerability disclosure programme for the NHS COVID Pass Service and infrastructure. You can read our Vulnerability Disclosure Policy at ',
                    link1: {
                        text: 'COVID Pass vulnerability disclosure policy - COVID-19 response - NHS Transformation Directorate (nhsx.nhs.uk)',
                        href: 'https://www.nhsx.nhs.uk/covid-19-response/covid-19-vaccination-status-vulnerability-disclosure-policy'
                    }
                },
                subListItem2: {
                    text1: 'You can report a vulnerability in the app, backend infrastructure or on the website by emailing ',
                    email: {
                        text: 'covid-status.security@nhs.net',
                        href: 'mailto:covid-status.security@nhs.net'
                    }
                },
                subListItem3:
                    'The Service has been and will continue to be subjected to security audits.'
            },
            list11: {
                title: 'Complaints ',
                subListItem1: {
                    text: 'If you have complaints or concerns about the Service, please contact ',
                    email: {
                        text: 'covid-status.complaints@nhs.net',
                        href: 'mailto:covid-status.complaints@nhs.net'
                    }
                },
                subListItem2: {
                    text: 'If you have a complaint or query about how your personal data is used by the service, you can contact DHSC Data Protection Officer (DPO) by email to ',
                    email: {
                        text: 'data_protection@dhsc.gov.uk.',
                        href: 'mailto:data_protection@dhsc.gov.uk'
                    }
                }
            },
            list12: {
                title: 'Miscellaneous ',
                subListItem1:
                    'We may revise these Terms of Use at any time and your continued use of the Service will be deemed acceptance of such revised Terms of Use. Any such revisions take effect when this page is published.',
                subListItem2: 'These Terms of Use are governed by the laws of England and Wales.',
                subListItem3:
                    'These Terms do not provide rights to, and may not be enforced by, any third party.',
                subListItem4:
                    'Each of the clauses in these Terms operates separately. If any part of these Terms is determined to be invalid or unenforceable then the remainder of these Terms will remain in full force and effect.'
            },
            lastUpdated: 'Last updated: 15th September 2022'
        }
    },
    cy: {
        main: {
            head: 'Telerau ac Amodau' + headTitleSuffix_cy,
            title: 'Telerau ac amodau gwasanaeth Pàs COVID y GIG',
            subTitle: "Trwy ddefnyddio'r Gwasanaeth hwn, rydych chi'n cytuno i'r Telerau hyn.",
            list1: {
                title: "Cyflwyniad i'r telerau defnyddio",
                subListItem1: {
                    text1: "Mae'r gwasanaeth ar gael i drigolion Lloegr ac Ynys Manaw drwy Ap y GIG, porwr gwe, a'r llinell ffôn 119.",
                    list1: {
                        item1: 'Gall trigolion Ynys Manaw ffonio 0808 1624 119 am ddim o unrhyw linell dir neu ffôn symudol ar Ynys Manaw (deialwch y rhif 11 digid llawn)',
                        item2: {
                            text1: "Mae'r gwasanaeth ar gael i drigolion Cymru hefyd drwy borwr gwe neu drwy ganolfan alwadau Cymru",
                            item1: "Ar gyfer plant 5-11 oed sy'n byw yng Nghymru, mae modd defnyddio'r gwasanaeth llythyrau drwy'r un siwrnai we â thrigolion Lloegr",
                            item2: 'Ar gyfer pob oed arall sydd eisiau defnyddio llythyr, gall trigolion Cymru ffonio 0300 303 5667.'
                        }
                    }
                },
                subListItem2:
                    "Yr Adran Iechyd a Gofal Cymdeithasol ('DHSC', 'ni', 'ein') sydd â’r cyfrifoldeb cyffredinol dros y Gwasanaeth, sydd wedi'i ddatblygu ac a fydd yn cael ei weithredu, gan NHS England. At ddibenion cymal 8 bernir bod 'ni' yn cynnwys NHS Digital mewn perthynas ag atebolrwydd dros rôl NHS Digital fel yr awdurdod ardystio.",
                subListItem3:
                    "NHS Digital yw'r awdurdod ardystio ar gyfer y gwasanaethau digidol, sy'n golygu ei fod yn ardystio ei fod wedi darparu'r wybodaeth (i) am eich hanes brechu i'r Gwasanaeth, ar ran NHS England, yn achos y gronfa ddata frechiadau y mae'n ei gweithredu (neu yng Nghymru, ar ran Llywodraeth Cymru yn achos y gronfa ddata frechiadau sy’n cael ei gweithredu gan Fwrdd Iechyd Cymru, neu yn Ynys Manaw ar ran Manx Care yn achos y gronfa ddata frechiadau y mae hwnnw'n ei gweithredu) a (ii) am ddata’ch profion i'r Gwasanaeth ar ran UK HSA (Asiantaeth Diogelwch Iechyd y Deyrnas Unedig ar ran y DHSC), yn achos y gronfa ddata canlyniadau prawf y mae'n ei gweithredu ar ran DHSC (y Systemau Ffynhonnell a Gymeradwywyd). Mae hyn yn cynnwys (i) gwybodaeth am frechiadau a ddarparwyd o systemau man gofal brechlyn COVID-19 a gymeradwywyd gan NHS England, sef rheolwr data a gweithredwr Rhaglen Frechu COVID-19 yn Lloegr (neu yng Nghymru, gan Iechyd Cyhoeddus Cymru, sef rheolwr data a gweithredwr Rhaglen Frechu COVID-19 yng Nghymru, neu yn Ynys Manaw, gan Manx Care, sef rheolwr data a gweithredwr rhaglen frechu Ynys Manaw) a (ii) gwybodaeth am brofion a ddarparwyd gan UK HSA, y mae DHSC yn rheolwr data ar ei gyfer.",
                subListItem4: `Mae'r Telerau hyn yn gymwys i'r gwasanaeth cymorth digidol (ar y we a’r ap) a’r gwasanaeth llythyrau (nad yw’n ddigidol). Mae yna delerau defnyddio ar wahân sy'n gymwys i: (i) Ap y GIG; a (ii) mewngofnodi i'r GIG. At ddibenion dull mewngofnodi'r GIG, mae'r Gwasanaeth yn "Wasanaeth Cysylltiedig"; at ddibenion Ap y GIG mae'r Gwasanaeth yn "Wasanaeth Llwyfan". Os byddwch yn dewis lawrlwytho'ch Pàs COVID i'ch Waled Apple neu i Google Pay, dylech fod yn ymwybodol mai apiau trydydd parti yw'r rhain sy'n perthyn i Apple a Google  (yn y drefn honno) ac sy'n dod o dan eu telerau defnyddio eu hunain.`
            },
            list2: {
                title: 'Diben y Gwasanaeth',
                subListItem1: {
                    text1: "	Diben y Gwasanaeth yw caniatáu ichi gynhyrchu Pàs COVID y GIG, sy’n cael ei ardystio gan god bar 2D. Mae hyn yn caniatáu ichi ddangos eich statws COVID-19 at ddibenion teithio rhyngwladol, gan y gallai rhai gwledydd ofyn am dystiolaeth eich bod wedi cael eich brechu neu eich bod wedi gwella o COVID-19 wrth ichi fynd i mewn i'w gwlad neu mewn digwyddiadau domestig yn y wlad honno."
                },
                subListItem2:
                    "Dim ond at ddibenion a gymeradwywyd yng nghanllawiau’r Llywodraeth y mae'r Gwasanaeth wedi'i fwriadu i'w ddefnyddio.",
                subListItem3:
                    "Darperir y Gwasanaeth yn rhad ac am ddim, ac fe'i gwaherddir yn benodol rhag ceisio gwerthu neu drwyddedu defnydd o'r Gwasanaeth i unrhyw berson, neu gynnwys y Gwasanaeth fel rhan o wasanaeth neu gynnyrch y telir amdano."
            },
            list3: {
                title: "Sut i ddefnyddio'r Gwasanaeth",
                subListItem1:
                    "I ddefnyddio'r Gwasanaeth, rhaid ichi naill ai i) lawrlwytho Ap y GIG yn gyntaf, ii) defnyddio'r gwasanaeth digidol neu’r gwasanaeth llythyrau drwy gyfrwng porwr gwe, sy'n eich galluogi i lawrlwytho PDF, ychwanegu'r Pàs COVID at waled ddigidol, cyrchu Pàs COVID drwy’r ebost, neu archebu llythyr i'w anfon atoch drwy'r post, neu iii) ffonio 119 (trigolion Lloegr), 0808 1624 119 (trigolion Ynys Manaw) neu 0300 303 5667 (trigolion Cymru) i wneud cais am neges ebost neu lythyr hygyrch.",
                subListItem2Paragraph1:
                    "Os mai dyma'ch tro cyntaf yn defnyddio gwasanaethau digidol y GIG drwy fewngofnodi i’r GIG yna bydd angen ichi sefydlu’ch manylion mewngofnodi GIG (a reolir gan NHS Digital) a phrofi pwy ydych chi. Er mwyn defnyddio'r gwasanaethau digidol drwy fewngofnodi i’r GIG, bydd angen ichi gwblhau'r lefel uchaf o ddilysu hunaniaeth. Mae hyn yn cynnwys proses gwirio hunaniaeth ar-lein neu all-lein lle mae cymhariaeth gorfforol rhyngoch chi a dull adnabod ffotograffig wedi digwydd.",
                subListItem2Paragraph2:
                    "Mae'n bwysig eich bod yn cadw'ch manylion mewngofnodi GIG yn gyfrinachol ac nad ydych yn rhannu'r rhain gyda neb arall.",
                subListItem3:
                    "Gallwch hefyd ofyn am Bàs COVID y GIG drwy lythyr neu ebost (pob oed) drwy ffonio 119 neu drwy gwblhau siwrnai y llythyr ar-lein, os oes gennych rif ffôn symudol neu gyfeiriad e-bost ar gofnod eich meddyg teulu. Er mwyn dilysu pwy ydych chi yn ystod y siwrnai 119 neu siwrnai’r llythyr, bydd y Gwasanaeth yn gofyn am wybodaeth ddemograffig bersonol sylfaenol fel eich enw, eich cyfeiriad, eich dyddiad geni a’ch rhif GIG. Os na allwch brofi pwy ydych chi drwy ddarparu'r wybodaeth hon, neu os nad yw'r wybodaeth a ddarparwyd gennych yn cyfateb i'r hyn sydd gennyn ni ar glawr, byddwch yn methu defnyddio'r Gwasanaeth llythyrau. ",
                subListItem4:
                    "Gallwch ddefnyddio'r gwasanaeth llythyrau neu’r gwasanaeth ar-lein ar ran rhywun arall (sy’n cael ei alw’n 'fynediad drwy ddirprwy'), ar ran ffrind, dibynnydd o dan 16 oed neu berthynas nad yw efallai'n gallu defnyddio'r gwasanaeth, er bod rhaid ichi gael eu caniatâd. Os byddwch yn gofyn am lythyr, rydyn ni’n argymell yn gryf eich bod yn gwneud hynny ymhell cyn unrhyw daith arfaethedig, neu unrhyw ddiben arall i’r llythyr a ganiateir i ddangos eich statws brechu. ",
                subListItem5:
                    "Gallwch ddefnyddio'r gwasanaeth llythyrau 14 diwrnod ar ôl i chi orffen eich cwrs brechu sylfaenol a gall gymryd hyd at 7 diwrnod gwaith i'r llythyr gyrraedd o'r dyddiad y gofynnir amdano. Darperir yr amserlen hon fel amcangyfrif yn unig, ac ni allwn gynnig unrhyw warantiad ynghylch amserlenni ar gyfer danfon eich llythyr.",
                subListItem6:
                    "Sylwch: mae'r diffiniad o fod 'wedi’ch brechu'n llawn' yn cael ei bennu gan bolisi'r Llywodraeth ac fe all gael ei newid.",
                subListItem7:
                    "Dylech brofi'r Gwasanaeth gartref, cyn ei ddefnyddio mewn lleoliad byw, i sicrhau ei fod yn gweithio'n gywir ac i roi amser ichi drafod unrhyw faterion gyda ni (gweler yr wybodaeth gysylltu isod) neu i ystyried opsiynau eraill yn lle defnyddio'r Gwasanaeth (megis cymryd prawf coronafeirws) lle mae'r rhain ar gael.",
                subListItem8:
                    "Mae'r Gwasanaethau i gyd ar gael i bobl 16 oed a throsodd. Hefyd: (i) gall pobl ifanc 12-15 oed gyrchu'r Pàs COVID er mwyn teithio’n rhyngwladol drwy ddefnyddio'r gwasanaeth gwe neu'r gwasanaeth llythyrau; (ii)  gall pobl ifanc 13 i 15 oed gyrchu’r Pàs COVID er mwyn teithio’n rhyngwladol drwy ddefnyddio Ap y GIG; a (iii) gall person wneud cais am Bàs COVID er mwyn teithio’n rhyngwladol ar ran rhywun arall drwy ddefnyddio’r gwasanaeth gwe neu’r gwasanaeth llythyrau drwy NHS.uk neu drwy ffonio 119 (0808 1624 119 ar gyfer Ynys Manaw, neu 0300 303 5667 ar gyfer Cymru).",
                subListItem9:
                    "Rhaid ichi gadarnhau mai chi yw'r rhiant neu’r gwarcheidwad cyfreithiol er mwyn cyrchu’r gwasanaeth hwn ar ran plentyn. Mae'r gwasanaeth hwn ar gael i blant yng Nghymru, Lloegr ac Ynys Manaw (dim ond y gwasanaeth llythyrau y caiff plant yng Nghymru ei ddefnyddio)."
            },
            list4: {
                title: "Sut mae'r Gwasanaeth yn gweithio",
                subListItem1: {
                    text1: "Mae'r Gwasanaeth yn gweithio drwy sefydlu a ydych chi (i) wedi cael brechlyn COVID-19, neu (ii) wedi gwella o COVID-19 yn y 180 diwrnod diwethaf. Fe all fod gan y Gwasanaeth ddata hefyd ynghylch a ydych chi (i) wedi cael canlyniad prawf negatif diweddar ar gyfer COVID-19 neu (ii) wedi cymryd rhan mewn treial clinigol ar gyfer brechlyn COVID-19 yn y ffurf ac yn ôl y safon a oedd yn ofynnol o’r blaen ",
                    link1: {
                        text: "o dan ganllawiau'r Llywodraeth",
                        href: 'https://www.nhs.uk/conditions/coronavirus-covid-19/testing/'
                    },
                    text2: "; neu (iii) a oes gennych chi eithriad meddygol, gan fod y ffactorau hyn yn berthnasol ar gyfer y modd roedd y Gwasanaeth yn cael ei ddefnyddio'n hanesyddol."
                },
                subListItem2:
                    "Mae’r Gwasanaeth yn gwneud hyn drwy ddefnyddio’ch manylion mewngofnodi i’r GIG neu wybodaeth ar eich cofnod meddyg teulu i ddilysu pwy ydych chi, ac i adennill eich statws COVID-19 o'r System Ffynonellau a Gymeradwywyd.",
                subListItem3:
                    "Gwasanaeth llythyrau: Os ydych chi wedi gofyn am lythyr drwy'r post a bod eich cofnod brechu’n anghyflawn, gallwch ddewis cael SMS, neu neges ebost (ar gael ar gyfer defnyddwyr dros 12 yn unig) yn dweud ei bod yn bosibl mai’r broblem yw nad yw eich data wedi’i gofnodi’n iawn yn eich cofnod GIG ac yn gofyn ichi ffonio 119 (gall trigolion Cymru ffonio 0300 303 5667).",
                subListItem4:
                    'Os buoch chi’n rhan o dreial clinigol, fe’ch anogir i gysylltu â safle’ch treial clinigol.',
                subListItem5:
                    "Os cawsoch chi’ch brechu dros y môr, bydd meysydd data y gweithgynhyrchwyr yn dangos gwerthoedd Manyleb yr UE yn ddiofyn, felly fe allan nhw ymddangos yn wahanol i ffynonellau data tramor. I'r rhai rhwng 5 ac 16 oed, mae'r gwasanaeth hwn hefyd ar gael ond mae’n rhaid cynnwys gwybodaeth a ddarperir gan oedolyn dros 18 oed a'i ddefnyddio ym mhresenoldeb oedolyn dros 18 oed.",
                subListItem6:
                    "Mae'r Gwasanaeth yn dibynnu ar gael data o ffynonellau allanol ac ar ganiatâd i rannu data gyda sefydliadau y tu allan i’r DHSC, gan gynnwys caniatâd a roddir i'ch meddyg teulu. Os nad ydych yn siŵr, trowch at 119 0808 1624 119 ar gyfer Ynys Manaw, neu 0300 303 5667 ar gyfer Cymru)."
            },
            list5: {
                title: 'Hygyrchedd',
                subListItem1:
                    "Gallwch ofyn am lythyr drwy'r Gwasanaeth Llythyrau mewn amryw o fformatau hygyrch, gan gynnwys braille, print bras a CD sain. Byddwch yn dal i gael y fersiwn swyddogol yn Saesneg. Rydym hefyd yn cynnig canllaw cyfieithu mewn 17 o ieithoedd gwahanol, sy'n cael ei anfon gyda'r llythyr Saesneg swyddogol at ddibenion rhyngwladol safonol. Mae'r Telerau hyn yn gymwys yn yr un modd ni waeth beth fo'r fformat y byddwch yn dewis cael y llythyr ynddo, ac fe'ch cynghorir i fynd â'r ddogfen Saesneg gyda chi bob amser at ddibenion teithio. Dylai trigolion Cymru gysylltu â 0300 303 5667 i sicrhau fersiwn hygyrch."
            },
            list6: {
                title: 'Preifatrwydd',
                subListItem1: {
                    text1: 'Cyfeiriwch at yr ',
                    link1: {
                        text: 'Hysbysiad Preifatrwydd',
                        href: '#'
                    },
                    text2: ' cyffredinol, yr ',
                    link2: {
                        text: 'Hysbysiad Preifatrwydd o dan 16 oed',
                        href: '#'
                    },
                    text2a: " neu'r ",
                    link2a: {
                        text: 'Hysbysiad Preifatrwydd 5-11 oed',
                        href: '#'
                    },
                    text3: " i gael rhagor o wybodaeth am sut mae'r Gwasanaeth yn prosesu data personol ac yn parchu'ch hawliau preifatrwydd a chyfrinachedd o dan y cyfreithiau diogelu data neu cysylltwch â ",
                    email: {
                        text: 'data_protection@dhsc.gov.uk.',
                        href: 'mailto:data_protection@dhsc.gov.uk'
                    }
                }
            },
            list7: {
                title: "Eich hawl i ddefnyddio'r Gwasanaeth",
                subListItem1:
                    "Mae'r Gwasanaeth a'i gynnwys yn perthyn i’r DHSC, NHS England neu eu trwyddedwyr priodol fel sy'n briodol, ac fe'u diogelir gan gyfreithiau eiddo deallusol. Cyn belled â'ch bod yn cydymffurfio â'r Telerau hyn, mae gennych drwydded gyfyngedig bersonol, barhaus, anghynhwysol, na ellir ei throsglwyddo ac y gellir ei dirymu, i ddefnyddio'r Gwasanaeth at eich defnydd personol eich hun. Rydym yn cadw'r holl hawliau trwydded eraill sydd heb eu caniatáu’n benodol o dan y Telerau hyn.",
                subListItem2:
                    "Er mwyn osgoi amheuaeth, gwaherddir unrhyw atgynhyrchu, cynrychioli, dosbarthu, addasu neu gyfieithu ar y Gwasanaeth a'i gynnwys, yn gyfan gwbl neu'n rhannol, ac eithrio o fewn terfyn y Telerau hyn neu gydag awdurdodiad penodol y DHSC."
            },
            list8: {
                title: 'Cyfyngiadau atebolrwydd',
                subListItem1:
                    "Byddwn yn defnyddio ymdrechion rhesymol i gadw'r Gwasanaeth yn gyfredol ac yn gweithredu yn unol â’r bwriad.",
                subListItem2: `Fodd bynnag, darperir y Gwasanaeth ar sail "fel y mae" ac, i'r graddau a ganiateir gan y gyfraith, nid ydym yn cyflwyno unrhyw sylwadau na gwarantau eraill, p'un a ydynt yn benodol neu'n ymhlyg y bydd y Gwasanaeth neu unrhyw wybodaeth sy’n cael ei chadw yn y Gwasanaeth yn gywir bob amser. Ni allwn warantu ychwaith y bydd y Gwasanaeth yn ddi-dor, yn ddiogel neu'n rhydd o wallau neu firysau, neu y bydd diffygion yn cael eu cywiro.`,
                subListItem3: {
                    title: 'Ni fyddwn yn atebol i chi am:',
                    item1: "unrhyw ddefnydd o'r Gwasanaeth nad yw'n cydymffurfio â'r Telerau hyn;",
                    item2: "unrhyw golled busnes, er enghraifft yn sgil methu cyrchu a/neu ddefnyddio’r Gwasanaeth (gan gynnwys ymysg pethau eraill colli elw, refeniw, contractau, arbedion a ragwelir, data, ewyllys da neu wariant wedi'i wastraffu);",
                    item3: "unrhyw golled neu ddifrod sy'n deillio o fethu cyrchu a/neu ddefnyddio'r Gwasanaeth;",
                    item4: "unrhyw golledion anuniongyrchol neu ganlyniadol nad oedd modd eu rhag-weld i chi a ninnau pan ddechreuoch ddefnyddio'r Gwasanaeth; neu",
                    item5: "unrhyw golled neu ddifrod a achosir gan firws neu ddeunydd arall sy'n niweidiol yn dechnolegol a allai heintio'ch dyfais neu'ch data oherwydd eich defnydd o'r Gwasanaeth."
                },
                subListItem4:
                    "Nid yw'r cymal 8 hwn yn effeithio ar unrhyw hawliau cyfreithiol sydd gennych fel defnyddiwr mewn perthynas â gwasanaethau neu feddalwedd ddiffygiol. Mae cyngor am eich hawliau cyfreithiol ar gael gan swyddfa leol Cyngor ar Bopeth neu’ch Swyddfa Safonau Masnach leol.",
                subListItem5:
                    "Nid oes dim yn y cymal 8 hwn yn eithrio nac yn cyfyngu ar ein hatebolrwydd am farwolaeth neu anaf personol sy'n deillio o'n hesgeulustod, neu o dwyll neu gamliwiad twyllodrus gennyn ni, neu unrhyw atebolrwydd arall na ellir ei eithrio na'i gyfyngu gan y gyfraith."
            },
            list9: {
                title: 'Parhad y Gwasanaeth',
                subListItem1:
                    "Rydym yn cadw'r hawl i atal, terfynu neu i newid fel arall mynediad i rywfaint neu’r cyfan o'r Gwasanaeth unrhyw bryd a heb rybudd."
            },
            list10: {
                title: 'Diogelwch',
                subListItem1: {
                    text1: "Os byddwch chi'n darganfod gwendid diogelwch posib neu'n amau digwyddiad diogelwch sy'n gysylltiedig â'r gwasanaeth hwn, dilynwch y rhaglen datgelu gwendid ar gyfer Gwasanaeth a seilwaith Pàs COVID y GIG. Gallwch ddarllen ein Polisi Datgelu Gwendid yn ",
                    link1: {
                        text: 'COVID Pass vulnerability disclosure policy - COVID-19 response - NHS Transformation Directorate (nhsx.nhs.uk).',
                        href: 'https://www.nhsx.nhs.uk/covid-19-response/covid-19-vaccination-status-vulnerability-disclosure-policy'
                    }
                },
                subListItem2: {
                    text1: 'Gallwch adrodd bregusrwydd yn yr ap neu’r ôl-isadeiledd neu ar y wefan trwy e-bostio ',
                    email: {
                        text: 'covid-status.security@nhs.net',
                        href: 'mailto:covid-status.security@nhs.net'
                    }
                },
                subListItem3:
                    "Mae'r Gwasanaeth wedi bod yn destun archwiliadau diogelwch, a bydd yn parhau i wneud hynny."
            },
            list11: {
                title: 'Cwynion',
                subListItem1: {
                    text: 'Os oes gennych gwynion neu bryderon am y Gwasanaeth, cysylltwch â  ',
                    email: {
                        text: 'covid-status.complaints@nhs.net',
                        href: 'mailto:covid-status.complaints@nhs.net'
                    }
                },
                subListItem2: {
                    text: "Os oes gennych gŵyn neu ymholiad am sut mae'r gwasanaeth yn defnyddio'ch data personol, gallwch gysylltu â Swyddog Diogelu Data (DPO) y DHSC drwy anfon neges ebost at  ",
                    email: {
                        text: 'data_protection@dhsc.gov.uk.',
                        href: 'mailto:data_protection@dhsc.gov.uk'
                    }
                }
            },
            list12: {
                title: 'Amrywiol',
                subListItem1:
                    "Rydym yn cael adolygu'r Telerau Defnyddio hyn unrhyw bryd a bernir bod eich defnydd parhaus o'r Gwasanaeth yn gyfystyr â derbyn y Telerau Defnyddio diwygiedig hynny. Daw unrhyw ddiwygiadau o'r fath i rym pan gyhoeddir y dudalen hon.",
                subListItem2:
                    "Mae'r Telerau Defnyddio hyn yn cael eu llywodraethu gan gyfreithiau Cymru a Lloegr.",
                subListItem3:
                    "Nid yw'r Telerau hyn yn darparu hawliau i drydydd parti, ac ni chaniateir iddynt gael eu gorfodi gan unrhyw drydydd parti.",
                subListItem4:
                    "Mae pob un o'r cymalau yn y Telerau hyn yn gweithredu ar wahân. Os penderfynir bod unrhyw ran o'r Telerau hyn yn annilys neu'n anorfodadwy, bydd gweddill y Telerau hyn yn parhau i fod mewn grym ag effaith lawn."
            },
            lastUpdated: 'Diweddarwyd ddiwethaf: 15 Medi 2022'
        }
    }
})
