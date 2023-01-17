import PropTypes from 'prop-types'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import Head from 'next/head'

const LoadingPage = ({ headTitle, headerString }) => {
    return (
        <div>
            {headTitle && (
                <Head>
                    <title>{headTitle}</title>
                </Head>
            )}
            {headerString ? <h1 className="nhsuk-heading-xl">{headerString}</h1> : null}
            <div className="loading-page">
                <LoadingSpinner size="large" />
            </div>
        </div>
    )
}

LoadingPage.propTypes = {
    headTitle: PropTypes.string,
    headerString: PropTypes.string
}

export default LoadingPage
