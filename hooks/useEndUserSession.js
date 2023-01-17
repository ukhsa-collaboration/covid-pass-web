import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { removeUserCookie } from 'helpers/cookieHelper'
import { useCookies } from 'react-cookie'
import { COOKIE_USER_TOKEN_KEY } from 'constants/index'
import { REMOVE_ALL_REDUX } from 'actions/types'
import { INDEX_PAGE } from 'constants/routes'

const useEndUserSession = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies([COOKIE_USER_TOKEN_KEY])

    const routeThenEndSession = (pageRoute = INDEX_PAGE) => {
        router.push(pageRoute).then(() => endSession())
    }

    const endSession = () => {
        removeUserCookie(setCookie)
        dispatch({ type: REMOVE_ALL_REDUX })
    }

    return { routeThenEndSession, endSession }
}

export default useEndUserSession
