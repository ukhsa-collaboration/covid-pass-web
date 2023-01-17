import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useIsLetterServiceUrlQuery = () => {
    const router = useRouter()
    const [isLetterService, setIsLetterService] = useState(null)

    useEffect(() => {
        if (!router.isReady) return
        if (!router.query) return

        const externalResource = router.query.externalResource
        setIsLetterService(externalResource?.toLowerCase() === 'letter')
    }, [router])

    return isLetterService
}

export default useIsLetterServiceUrlQuery
