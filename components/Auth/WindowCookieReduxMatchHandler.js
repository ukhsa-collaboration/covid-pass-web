import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { getUserToken } from 'helpers/cookieHelper'
import { uuidCookieReduxNotMatching } from 'helpers/auth'
import { REMOVE_ALL_REDUX } from 'actions/types'
import { SESSION_ENDED } from 'constants/routes'

const WindowCookieReduxMatchHandler = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cookies] = useCookies([COOKIE_USER_TOKEN_KEY])
    const user = useSelector((state) => state.userReducer.user)
    const [inFocusFunction, setInFocusFunction] = useState(false)

    useEffect(() => {
        // User has switched back to the tab
        const onFocus = () => {
            if (inFocusFunction === true) return

            setInFocusFunction(true)

            if (user.uuid !== null && getUserToken(cookies)) {
                if (uuidCookieReduxNotMatching(cookies, user)) {
                    router.push(SESSION_ENDED).then(() => {
                        setInFocusFunction(false)

                        dispatch({ type: REMOVE_ALL_REDUX })
                    })
                }
            }
            setInFocusFunction(false)
        }

        window.addEventListener('focus', onFocus)
        document.addEventListener('focus', onFocus)

        // Calls onFocus when the window first loads
        onFocus()

        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener('focus', onFocus)
            document.removeEventListener('focus', onFocus)
        }
    }, [cookies, user, router, inFocusFunction, dispatch])

    return <></>
}

export default WindowCookieReduxMatchHandler
