import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

export const cookiePolicyPageStrings = new LocalizedStrings({
    en: {
        head: 'Cookie Policy' + headTitleSuffix_en,
        heading1: 'NHS COVID Pass Cookie Policy',
        textGroup1: {
            title: 'Cookies that measure website use (analytics cookies)',
            text: 'We do not use any cookies that measure website use.'
        },
        textGroup2: {
            title: 'Cookies that remember pop-ups',
            text: 'We do not use any cookies that remember pop-ups.'
        },
        textGroup3: {
            title: 'Cookies that help with our communications and marketing',
            text: 'We do not use any cookies that help with our communications and marketing.'
        },
        textGroup4: {
            title: 'Cookies that remember your settings',
            text: 'We do not use any cookies that remember your settings.'
        },
        textGroup5: {
            title: 'Strictly necessary cookies',
            text: 'They always need to be on.'
        },
        textGroup6: {
            title: 'NHS COVID Pass cookies',
            expander1: {
                table: {
                    headings: {
                        heading1: 'Name',
                        heading2: 'Purpose'
                    },
                    rows: {
                        row1: {
                            col1: 'covidStatusUserPreference',
                            col2: 'We store which flow choice you made (event trials or travel) so we can bring you back to the right place.'
                        },
                        row2: {
                            col1: 'covidStatus',
                            col2: 'This cookie holds a user’s session information so that when they return they can continue their session inside the service without having to log in again.'
                        }
                    }
                }
            }
        }
    },
    cy: {
        head: 'Polisi Cwcis' + headTitleSuffix_cy,
        heading1: 'Polisi Cwcis Pàs COVID y GIG',
        textGroup1: {
            title: "Cwcis sy'n mesur defnydd gwefan (cwcis dadansoddeg)",
            text: "Nid ydym yn defnyddio unrhyw gwcis sy'n mesur defnydd gwefan."
        },
        textGroup2: {
            title: "Cwcis sy'n cofio 'pop-ups'",
            text: "Nid ydym yn defnyddio unrhyw gwcis sy'n cofio 'pop-ups'."
        },
        textGroup3: {
            title: "Cwcis sy'n helpu gyda'n cyfathrebu a'n marchnata",
            text: "Nid ydym yn defnyddio unrhyw gwcis sy'n helpu gyda'n cyfathrebu a'n marchnata."
        },
        textGroup4: {
            title: "Cwcis sy'n cofio'ch gosodiadau",
            text: "Nid ydym yn defnyddio unrhyw gwcis sy'n cofio'ch gosodiadau."
        },
        textGroup5: {
            title: 'Cwcis angenrheidiol yn unig',
            text: 'Mae angen iddyn nhw fod ymlaen bob amser.'
        },
        textGroup6: {
            title: 'Cwcis Pàs COVID y GIG',
            expander1: {
                table: {
                    headings: {
                        heading1: 'Enw',
                        heading2: 'Pwrpas'
                    },
                    rows: {
                        row1: {
                            col1: 'covidStatusUserPreference',
                            col2: "Rydym yn storio pa ddewis llif a wnaethoch (treialon digwyddiadau neu deithio) fel y gallwn ddod â chi yn ôl i'r lle iawn."
                        },
                        row2: {
                            col1: 'covidStatus',
                            col2: 'Mae’r cwci hwn yn cadw gwybodaeth am sesiwn y defnyddiwr sy’n golygu y gall, wrth ddychwelyd, barhau gyda’i sesiwn o fewn y gwasanaeth heb orfod logio i mewn eto.'
                        }
                    }
                }
            }
        }
    }
})
