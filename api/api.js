import axios from 'axios'
const timeoutLimit = 60000

const API = (token = null, tokenId = null) => {
    let headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-key': process.env.NEXT_PUBLIC_API_HEADER_SUBSCRIPTION_KEY
    }

    if (token) {
        const tokenHeader = { Authorization: 'Bearer ' + token }
        headers = { ...headers, ...tokenHeader }
    }

    if (tokenId) {
        const tokenIdHeader = { 'id-token': tokenId }
        headers = { ...headers, ...tokenIdHeader }
    }

    const url = process.env.NEXT_PUBLIC_API_BASE_URL

    return axios.create({
        baseURL: url,
        timeout: timeoutLimit,
        headers
    })
}

export default API
