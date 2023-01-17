import router from 'next/router'
import LocalizedStrings from 'react-localization'
export const HELP_PRIVACY_NOTICE = '/help/privacy-notice'

const strings_en = {
    title: 'NHS COVID Pass Privacy Notice for 5 to 11 year olds: NHS COVID Pass travel letter',
    card1: {
        title: 'NHS COVID Pass travel letter',
        text1: 'This page is to help you understand what happens to the information the Department of Health and Social Care collects about you when your parent/guardian or carer requests an NHS COVID Pass letter for you.'
    },
    card2: {
        title: 'What is an NHS COVID Pass travel letter?',
        text1: 'An NHS COVID Pass letter shows that you have received your COVID-19 vaccinations, or that you have recently had the virus.'
    },
    card3: {
        title: 'What is it for?',
        text1: 'You might need to show this letter if you are travelling to another country.'
    },
    card4: {
        title: 'Who looks after my information for the NHS COVID Pass service?',
        text1: 'The Department for Health and Social Care looks after information about you for the NHS COVID Pass service.'
    },
    card5: {
        title: 'What information do we put in your NHS COVID Pass letter?',
        list: {
            item1: 'your full name',
            item2: 'details about your vaccinations, such as when you had them and what they are called',
            item3: 'a recovery letter showing prior infection within 180 days.'
        }
    },
    card6: {
        title: 'How do we keep your information safe?',
        text1: 'We follow rules on who can see and use your information. This is called Data Protection Law.'
    },
    card7: {
        title: 'How long do we keep your information?',
        text1: 'We delete your information after 30 days.'
    },

    card8: {
        title: 'Your rights',
        text1: 'You or your parent/guardian or carer can ask us:',
        list: {
            item1: 'how we use your information',
            item2: 'for a copy of the information we have about you',
            item3: 'to correct any of the information we have about you that is wrong',
            item4: 'to delete information ',
            item5: 'not to share your information in some situations'
        },
        text2: 'If you or your parent/guardian or carer wish to correct, delete or amend any information which relates to the NHS Covid Pass, you should contact your GP Practice who shall look to update their systems.'
    },
    inset: {
        text1: 'If you or your parent/guardian or carer are unhappy or wish to complain about how your information is being used by us, ',
        text2: 'you can write to or email the ',
        link1: {
            text: 'Data Protection Officer for DHSC',
            href: 'mailto:data_protection@dhsc.gov.uk'
        },
        text3: ' or write to:',
        text4: 'Data Protection Officer',
        text5: 'Department of Health & Social Care',
        text6: '1st Floor North',
        text7: '39 Victoria Street',
        text8: 'London SW1H 0EU',
        text9: 'Our full privacy notice for adults to read can be found at ',
        link2: {
            text: 'nhsx.nhs.uk'
        }
    }
}
const strings_cy = {
    title: 'Hysbysiad Preifatrwydd Pàs COVID y GIG ar gyfer plant 5 i 11 oed: Llythyr teithio Pàs COVID y GIG',
    card1: {
        title: 'Llythyr teithio Pàs COVID y GIG',
        text1: "Diben y dudalen yma yw eich helpu i ddeall beth sy'n digwydd i'r wybodaeth mae'r Adran Iechyd a Gofal Cymdeithasol yn ei chasglu amdanoch chi pan fydd eich rhiant/gwarcheidwad neu’ch gofalwr yn gwneud cais am lythyr Pàs COVID y GIG ar eich cyfer."
    },
    card2: {
        title: 'Beth yw llythyr teithio Pàs COVID y GIG?',
        text1: 'Mae llythyr pàs COVID y GIG yn dangos eich bod chi wedi cael eich brechiadau COVID-19, neu eich bod wedi cael y feirws yn ddiweddar.'
    },
    card3: {
        title: 'Beth yw ei ddiben e?',
        text1: 'Efallai y bydd angen ichi ddangos y llythyr yma os ydych chi’n teithio i wlad arall.'
    },
    card4: {
        title: "Pwy sy'n gofalu am fy ngwybodaeth i ar ran gwasanaeth Pàs COVID y GIG?",
        text1: 'Yr Adran Iechyd a Gofal Cymdeithasol sy’n gofalu am wybodaeth amdanoch chi ar ran gwasanaeth Pàs COVID y GIG.'
    },
    card5: {
        title: 'Pa wybodaeth rydyn ni’n ei rhoi yn eich llythyr Pàs COVID GIG?',
        list: {
            item1: 'eich enw llawn',
            item2: "manylion am eich brechiadau, fel pryd cawsoch chi nhw a'u henw nhw",
            item3: 'llythyr gwella sy’n dangos haint blaenorol o fewn 180 diwrnod.'
        }
    },
    card6: {
        title: 'Sut rydyn ni’n cadw’ch gwybodaeth yn ddiogel?',
        text1: "Rydyn ni’n dilyn rheolau ynghylch pwy sy'n gallu gweld a defnyddio'ch gwybodaeth. Yr enw ar hyn yw’r Gyfraith Diogelu Data."
    },
    card7: {
        title: 'Pa mor hir rydyn ni’n cadw’ch gwybodaeth?',
        text1: 'Rydyn ni’ yn dileu eich gwybodaeth ar ôl 30 diwrnod.'
    },

    card8: {
        title: 'Eich hawliau',
        text1: "Rydych chi neu'ch rhiant/gwarcheidwad neu’ch gofalwr yn cael gofyn i ni:",
        list: {
            item1: "sut rydyn ni’n defnyddio'ch gwybodaeth",
            item2: "am gopi o'r wybodaeth sydd gennyn ni amdanoch chi",
            item3: "cywiro unrhyw ran o'r wybodaeth sydd gennyn ni amdanoch sy'n anghywir",
            item4: 'dileu gwybodaeth',
            item5: 'peidio â rhannu’ch gwybodaeth mewn rhai sefyllfaoedd'
        },
        text2: "Os ydych chi neu'ch rhiant/gwarcheidwad neu’ch gofalwr yn dymuno cywiro, dileu neu ddiwygio unrhyw wybodaeth sy'n ymwneud â Phàs Covid y GIG, dylech gysylltu â'ch Meddygfa a fydd yn ceisio diweddaru eu systemau."
    },
    inset: {
        text1: "Os ydych chi neu'ch rhiant/gwarcheidwad neu‘ch gofalwr yn anfodlon neu'n dymuno cwyno am sut mae’ch gwybodaeth yn cael ei defnyddio gennyn ni, ",
        text2: 'gallwch ysgrifennu neu anfon neges ebost at  ',
        link1: {
            text: 'Swyddog Diogelu Data’r DHSC',
            href: 'mailto:data_protection@dhsc.gov.uk'
        },
        text3: ' neu ysgrifennwch at:         ',
        text4: 'Data Protection Officer',
        text5: 'Department of Health & Social Care',
        text6: '1st Floor North',
        text7: '39 Victoria Street',
        text8: 'London SW1H 0EU',
        text9: 'Mae ein hysbysiad preifatrwydd llawn i oedolion ei ddarllen ar gael yn ',
        link2: {
            text: 'nhsx.nhs.uk'
        }
    }
}
export const helpPrivacyNoticeChildFriendly = new LocalizedStrings({
    en: strings_en,
    cy: strings_cy
})
