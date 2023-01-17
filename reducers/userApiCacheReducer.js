import {
    REMOVE_USER_CACHE,
    CACHE_VACCINATION_RESULTS,
    CACHE_DOMESTIC_CERTIFICATE_VALUES,
    CACHE_INTERNATIONAL_CERTIFICATE_VALUES,
    CACHE_INTERNATIONAL_RECOVERY_VALUES,
    CACHE_TEST_RESULTS,
    CACHE_EXEMPTION_RESULTS,
    CACHE_RECOVERY_TEST_RESULTS,
    REMOVE_ALL_REDUX,
    CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_EN,
    CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_CY,
    CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_EN,
    CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_CY,
    EMAIL_LIMIT,
    CACHE_GOOGLE_WALLET_DOMESTIC_URL,
    CACHE_PDF_DOMESTIC_DOWNLOAD_LIMIT_EXPIRY,
    CACHE_PDF_INTERNATIONAL_DOWNLOAD_LIMIT_EXPIRY
} from 'actions/types'

const initialState = {
    userApiCache: {
        emailSentCount: 1,
        pdfDownloadLimitExpiry: {
            domestic: null,
            international: null
        },
        certificate: {
            domestic: {
                status: null,
                qrCodeTokens: null,
                certificateScenario: null,
                expiryDate: null,
                cacheExpiry: null,
                eligibilityPeriod: null,
                uniqueCertificateIdentifier: null,
                certificateType: null,
                certificateEverExisted: null,
                twoPassStatus: null,
                errorCode: null,
                waitPeriod: null
            },
            international: {
                status: null,
                expiryDate: null,
                cacheExpiry: null,
                resultData: null,
                tag: null
            },
            recovery: {
                status: null,
                expiryDate: null,
                cacheExpiry: null,
                resultData: null,
                tag: null
            }
        },
        certificatePdfBlob: {
            domestic: {
                en: {
                    blob: null,
                    cacheExpiry: null
                },
                cy: {
                    blob: null,
                    cacheExpiry: null
                }
            },
            international: {
                en: {
                    blob: null,
                    cacheExpiry: null
                },
                cy: {
                    blob: null,
                    cacheExpiry: null
                }
            }
        },
        googleWalletUrls: {
            domestic: {
                url: null,
                cacheExpiry: null
            }
        },
        results: {
            vaccinationResults: {
                data: null,
                cacheExpiry: null
            },
            testResults: {
                data: null,
                cacheExpiry: null
            },
            recoveryResults: {
                data: null
            },
            exemptionResults: {
                data: null,
                cacheExpiry: null
            }
        }
    }
}

const userApiCacheReducer = (state = initialState, action) => {
    switch (action.type) {
        case CACHE_DOMESTIC_CERTIFICATE_VALUES:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificate: {
                        ...state.userApiCache.certificate,
                        domestic: {
                            status: action.payload.status,
                            qrCodeTokens: action.payload.qrCodeTokens,
                            expiryDate: action.payload.expiryDate,
                            cacheExpiry: action.payload.cacheExpiry,
                            eligibilityPeriod: action.payload.eligibilityPeriod,
                            uniqueCertificateIdentifier: action.payload.uniqueCertificateIdentifier,
                            certificateType: action.payload.certificateType,
                            certificateScenario: action.payload.certificateScenario,
                            certificateEverExisted: action.payload.certificateEverExisted,
                            twoPassStatus: action.payload.twoPassStatus,
                            errorCode: action.payload.errorCode,
                            waitPeriod: action.payload.waitPeriod
                        }
                    }
                }
            }
        case CACHE_INTERNATIONAL_CERTIFICATE_VALUES:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificate: {
                        ...state.userApiCache.certificate,
                        international: {
                            status: action.payload.status,
                            expiryDate: action.payload.expiryDate,
                            cacheExpiry: action.payload.cacheExpiry,
                            header: action.payload.header,
                            resultData: action.payload.resultData,
                            tag: action.payload.tag
                        }
                    }
                }
            }
        case CACHE_INTERNATIONAL_RECOVERY_VALUES:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificate: {
                        ...state.userApiCache.certificate,
                        recovery: {
                            status: action.payload.status,
                            expiryDate: action.payload.expiryDate,
                            cacheExpiry: action.payload.cacheExpiry,
                            header: action.payload.header,
                            resultData: action.payload.resultData,
                            tag: action.payload.tag
                        }
                    }
                }
            }
        case CACHE_VACCINATION_RESULTS:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    results: {
                        ...state.userApiCache.results,
                        vaccinationResults: action.payload
                    }
                }
            }
        case CACHE_TEST_RESULTS:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    results: {
                        ...state.userApiCache.results,
                        testResults: action.payload
                    }
                }
            }
        case CACHE_RECOVERY_TEST_RESULTS:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    results: {
                        ...state.userApiCache.results,
                        recoveryResults: action.payload
                    }
                }
            }
        case CACHE_EXEMPTION_RESULTS:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    results: {
                        ...state.userApiCache.results,
                        exemptionResults: action.payload
                    }
                }
            }
        case CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_EN:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificatePdfBlob: {
                        ...state.userApiCache.certificatePdfBlob,
                        domestic: {
                            ...state.userApiCache.certificatePdfBlob.domestic,
                            en: action.payload
                        }
                    }
                }
            }
        case CACHE_DOMESTIC_CERTIFICATE_PDF_BLOB_CY:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificatePdfBlob: {
                        ...state.userApiCache.certificatePdfBlob,
                        domestic: {
                            ...state.userApiCache.certificatePdfBlob.domestic,
                            cy: action.payload
                        }
                    }
                }
            }
        case CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_EN:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificatePdfBlob: {
                        ...state.userApiCache.certificatePdfBlob,
                        international: {
                            ...state.userApiCache.certificatePdfBlob.international,
                            en: action.payload
                        }
                    }
                }
            }
        case CACHE_INTERNATIONAL_CERTIFICATE_PDF_BLOB_CY:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    certificatePdfBlob: {
                        ...state.userApiCache.certificatePdfBlob,
                        international: {
                            ...state.userApiCache.certificatePdfBlob.international,
                            cy: action.payload
                        }
                    }
                }
            }
        case CACHE_GOOGLE_WALLET_DOMESTIC_URL:
            return {
                userApiCache: {
                    ...state.userApiCache,
                    googleWalletUrls: {
                        ...state.userApiCache.googleWalletUrls,
                        domestic: action.payload
                    }
                }
            }
        case EMAIL_LIMIT: {
            return {
                userApiCache: {
                    ...state.userApiCache,
                    emailSentCount: action.payload
                }
            }
        }
        case CACHE_PDF_DOMESTIC_DOWNLOAD_LIMIT_EXPIRY: {
            return {
                userApiCache: {
                    ...state.userApiCache,
                    pdfDownloadLimitExpiry: {
                        ...state.userApiCache.pdfDownloadLimitExpiry,
                        domestic: action.payload
                    }
                }
            }
        }
        case CACHE_PDF_INTERNATIONAL_DOWNLOAD_LIMIT_EXPIRY: {
            return {
                userApiCache: {
                    ...state.userApiCache,
                    pdfDownloadLimitExpiry: {
                        ...state.userApiCache.pdfDownloadLimitExpiry,
                        international: action.payload
                    }
                }
            }
        }
        case REMOVE_USER_CACHE:
            return initialState
        case REMOVE_ALL_REDUX:
            return initialState
        default:
            return state
    }
}

export default userApiCacheReducer
