import { createBrowserRouter } from "react-router-dom"
import Confirm from '../component/confirm'
import MyPage from '../component/mypage'
import Signup from '../component/signup'
import Login from '../component/login'
import Main from '../component/main'
import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Confirm /> },
            { path: "/main", element: <Main /> },
            { path: "/mypage", element: <MyPage /> },
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> }
        ]
    },
    
])