import LocalizedStrings from 'react-localization'
import { headTitleSuffix_en, headTitleSuffix_cy } from 'localization/commonTranslations'

export const helpAccessibility = new LocalizedStrings({
    en: {
        head: 'Accessibility statement' + headTitleSuffix_en,
        title: 'Accessibility Statement for the NHS COVID Pass',
        subTitle1:
            'The NHS COVID Pass is committed to making its website and mobile application accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.',
        subTitle2:
            'This accessibility statement applies to the NHS COVID Pass (the Service), which can be accessed via the NHS App (Version 2.17.1, 18 August 2022) or via NHS.UK (',
        subtitle2HrefText: 'https://covid-status.service.nhsx.nhs.uk/',
        subtitle2HrefLink: 'https://covid-status.service.nhsx.nhs.uk/',
        subTitle3: ') from a web browser.',
        textGroup1: {
            heading: 'Compliance status',
            body1: 'The NHS COVID Pass (the Service), accessed via the NHS App or NHS.UK, is fully compliant with the ',
            hrefText: 'Web Content Accessibility Guidelines version 2.1 AA standard.',
            hrefLink: 'https://www.w3.org/TR/WCAG21/',
            body2: ' All identified outstanding non-compliances have been addressed.'
        },
        textGroup2: {
            heading: 'Preparation of this accessibility statement',
            body1: 'This statement was first prepared on 07 June 2021.',
            body2: 'The NHS COVID Pass for Apple iOS and Android devices last underwent an external Digital Accessibility Centre (DAC) test on 31 December 2021.',
            body3: 'This statement was last reviewed on 15 September 2022.',
            body4: 'NHS COVID Pass for Apple iOS, Android devices and web browser is tested for accessibility issues every 2 weeks, in conjunction with technical updates. '
        },
        textGroup3: {
            heading: 'Feedback and contact information',
            body1: 'We are always looking to improve the accessibility of this Service.',
            body2: "If you find any problems that are not listed on this page, think we're not meeting accessibility requirements or you would like to report positive feedback about this website’s accessibility, then please email ",
            hrefText: 'england.covidaccessibility@nhsbsa.nhs.uk',
            hrefLink: 'mailto:england.covidaccessibility@nhsbsa.nhs.uk',
            body3: 'If you have a disability or other specific access need, you can adapt the content of the Service using your device to make it easier for you. AbilityNet has advice to help you make your device easier to use: ',
            href2Text: 'https://mcmw.abilitynet.org.uk/',
            href2Link: 'https://mcmw.abilitynet.org.uk/'
        },
        textGroup4: {
            heading: 'Enforcement procedure',
            body1: 'The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’).',
            body2: 'If you are not happy with how we respond to your complaint, contact the Equality Advisory and Support Service (EASS) by calling 0808 800 0082 or submitting a complaint via the website: ',
            hrefText: 'https://www.equalityadvisoryservice.com/app/ask',
            hrefLink: 'https://www.equalityadvisoryservice.com/app/ask'
        }
    },
    cy: {
        head: 'Datganiad hygyrchedd' + headTitleSuffix_cy,
        title: 'Datganiad Hygyrchedd ar gyfer Pàs COVID y GIG',
        subTitle1:
            'Mae Gwasanaeth Pàs COVID y GIG wedi ymrwymo i sicrhau bod ei wefan a’i raglen ar gyfer ffonau symudol yn hygyrch, yn unol â Rheoliadau Hygyrchedd Cyrff y Sector Cyhoeddus (Gwefannau a Chymwysiadau Symudol) (Rhif 2) 2018.',
        subTitle2:
            "Mae'r datganiad hygyrchedd hwn yn gymwys i Bàs COVID y GIG (y Gwasanaeth), y gellir ei gyrchu trwy Ap y GIG (Fersiwn 2.17.1, 18 Awst 2022) neu drwy NHS.UK (",
        subtitle2HrefText: 'https://covid-status.service.nhsx.nhs.uk/',
        subtitle2HrefLink: 'https://covid-status.service.nhsx.nhs.uk/',
        subTitle3: ') mewn porwr gwe.',
        textGroup1: {
            heading: 'Statws cydymffurfio',
            body1: "Mae Pàs COVID y GIG (y Gwasanaeth), sy'n cael ei gyrchu trwy Ap y GIG neu NHS.UK, yn cydymffurfio'n llawn â ",
            hrefText: 'safon AA Canllawiau Hygyrchedd Cynnwys Gwe, fersiwn 2.1.',
            hrefLink: 'https://www.w3.org/TR/WCAG21/',
            body2: ' Mae’r holl enghreifftiau o ddiffyg cydymffurfio a welwyd wedi cael sylw.'
        },
        textGroup2: {
            heading: "Paratoi'r datganiad hygyrchedd hwn",
            body1: 'Cafodd y datganiad hwn ei baratoi gyntaf ar 07 Mehefin 2021.',
            body2: 'Y tro diwethaf i Bàs COVID y GIG ar gyfer dyfeisiau Apple iOS ac Android gael prawf y Ganolfan Hygyrchedd Digidol (DAC) allanol oedd 31 Rhagfyr 2021.',
            body3: 'Y tro diwethaf i’r datganiad hwn gael ei adolygu oedd 15 Medi 2022.',
            body4: 'Mae Pàs COVID y GIG ar gyfer dyfeisiau Apple iOS ac Android a phorwr gwe yn cael ei brofi ar gyfer materion hygyrchedd bob pythefnos, ar y cyd â diweddariadau technegol.'
        },
        textGroup3: {
            heading: 'Adborth a gwybodaeth gyswllt',
            body1: 'Rydyn ni bob amser yn ceisio gwella hygyrchedd y Gwasanaeth hwn.',
            body2: "Os byddwch chi'n dod o hyd i unrhyw broblemau nad ydyn nhw wedi'u rhestru ar y dudalen hon, neu'n credu nad ydyn ni'n cwrdd â gofynion hygyrchedd neu os hoffech chi roi adborth cadarnhaol ynglŷn â hygyrchedd y wefan hon, yna e-bostiwch ",
            hrefText: 'england.covidaccessibility@nhsbsa.nhs.uk',
            hrefLink: 'mailto:england.covidaccessibility@nhsbsa.nhs.uk',
            body3: "Os oes gennych anabledd neu angen mynediad penodol arall, gallwch addasu cynnwys y Gwasanaeth gan ddefnyddio'ch dyfais i'w gwneud yn haws i chi. Mae gan AbilityNet gyngor i'ch helpu chi i wneud eich dyfais yn haws i'w defnyddio: ",
            href2Text: 'https://mcmw.abilitynet.org.uk/',
            href2Link: 'https://mcmw.abilitynet.org.uk/'
        },
        textGroup4: {
            heading: 'Gweithdrefn orfodi',
            body1: 'Mae’r Comisiwn Cydraddoldeb a Hawliau Dynol (EHRC) yn gyfrifol am orfodi Rheoliadau Hygyrchedd Cyrff y Sector Cyhoeddus (Gwefannau a Chymwysiadau Symudol) (Rhif 2) 2018 (y ‘rheoliadau hygyrchedd’).',
            body2: "Os nad ydych yn hapus â sut rydym yn ymateb i'ch cwyn, cysylltwch â'r Gwasanaeth Cynghori a Chefnogaeth Cydraddoldeb (EASS) trwy ffonio 0808 800 0082 neu drwy gyflwyno cwyn drwy’r wefan: ",
            hrefText: 'https://www.equalityadvisoryservice.com/app/ask',
            hrefLink: 'https://www.equalityadvisoryservice.com/app/ask'
        }
    }
})
