import { createBrowserRouter } from "react-router-dom"
import Confirm from '../component/confirm'
import MyPage from '../component/mypage'
import Signup from '../component/account/signup'
import Login from '../component/account/login'
import Main from '../component/main'
import FindId from '../component/account/findId'
import FindId_success from '../component/account/findId_success'
import FindPwd from '../component/account/findPwd'
import NewPwd from '../component/account/newPwd'
import FindPwd_success from '../component/account/findPwd_success'
import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Confirm /> },
            { path: "/main", element: <Main /> },
            { path: "/mypage", element: <MyPage /> },
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> },
            { path: "/findId", element: <FindId/>},
            { path: "/findId_success", element: <FindId_success/> },
            { path: "/findPwd", element: <FindPwd /> },
            { path: "/newPwd", element: <NewPwd/> },
            { path: "/findPwd_success", element: <FindPwd_success /> },
           
        ]
    },
    
])