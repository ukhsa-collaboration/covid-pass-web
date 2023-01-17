import axios from 'axios'

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

    const API = axios.create({
        baseURL: url,
        headers
    })

    return API
}

export default API
