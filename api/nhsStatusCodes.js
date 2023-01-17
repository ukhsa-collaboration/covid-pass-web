const nhsStatusCodes = {
    Success: 200,
    NotEligibleForCertificate: 204,
    JwtNotValid: 400,
    WrongRequest: 400, // used in Certificate api's
    AuthTokenIncorrect: 401,
    wafErrorError: 403, // WAF error forwarded via front door
    Expired2fa: 404,
    Wrong2fa: 404,
    RemoteShareCodeNotFound: 404,
    RequestTimeout: 408,
    CertificateErrorProcessing: 422, // used in Certificate api's
    ShareCodeLimitReached: 429,
    ServerError: 500
}

export default nhsStatusCodes
