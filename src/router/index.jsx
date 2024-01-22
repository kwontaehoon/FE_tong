import { createBrowserRouter } from "react-router-dom"
import Main from '../component/main'
import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            // { path: "/mypage", element: <MyPage /> },
        ]
    },
    
])