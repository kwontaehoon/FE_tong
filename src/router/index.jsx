import { createBrowserRouter } from "react-router-dom"
import MyPage from '../component/mypage/index'
import Signup from '../component/signup/index'
import Login from '../component/login/index'
import Main from '../component/main'
import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            { path: "/mypage", element: <MyPage /> },
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> }
        ]
    },
    
])