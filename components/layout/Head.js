import * as NextHeadComponent from 'next/head'
import { headStrings } from 'localization/translations'
import { getInternalHref } from 'helpers/index'

const Head = () => {
    return (
        <NextHeadComponent>
            <title>{headStrings.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Covid Status" />
            <meta name="author" content="NHS" />
            <meta name="keywords" content="HTML, CSS, JavaScript" />
            <link
                rel="shortcut icon"
                type="image/icon"
                href={getInternalHref('/favicon-shortcut.ico')}
            />
            <link rel="apple-touch-icon" href={getInternalHref('/apple-touch-icon-180x180.png')} />
            <link
                rel="apple-touch-icon"
                href={getInternalHref('/favicon-512x512-120x120.png')}
                sizes="120x120"
            />
            <link
                rel="apple-touch-icon"
                href={getInternalHref('/favicon-512x512-152x152.png')}
                sizes="152x152"
            />
            <link
                rel="apple-touch-icon"
                href={getInternalHref('/apple-touch-icon-180x180.png')}
                sizes="180x180"
            />
            <link rel="mask-icon" href={getInternalHref('/favicon.svg')} color="#005eb8" />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href={getInternalHref('/favicon-192x192.png')}
            />
            <meta
                name="msapplication-TileImage"
                content={getInternalHref('/mediumtile-144x144.png')}
            />
            <meta name="msapplication-TileColor" content="#005eb8" />
            <meta
                name="msapplication-square70x70logo"
                content={getInternalHref('/smalltile-70x70.png')}
            />
            <meta
                name="msapplication-square150x150logo"
                content={getInternalHref('/mediumtile-150x150.png')}
            />
            <meta
                name="msapplication-wide310x150logo"
                content={getInternalHref('/widetile-310x150.png')}
            />
            <meta
                name="msapplication-square310x310logo"
                content={getInternalHref('/largetile-310x310.png')}
            />
        </NextHeadComponent>
    )
}

export default Head
