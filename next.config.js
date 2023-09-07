const path = require('path')

module.exports = () => {
    const basePathValue = process.env.NEXT_PUBLIC_BASE_PATH_EDIT === 'true' ? '/staticsite' : ''

    return {
        trailingSlash: true,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')]
        },
        basePath: basePathValue
    }
}
