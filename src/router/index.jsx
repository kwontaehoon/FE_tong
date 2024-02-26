import { createBrowserRouter } from "react-router-dom"
import Confirm from '../component/confirm'
import Signup from '../component/account/signup'
import Login from '../component/account/login'
import Main from '../component/main'
import FindId from '../component/account/findId'
import FindId_success from '../component/account/findId_success'
import FindPwd from '../component/account/findPwd'
import NewPwd from '../component/account/newPwd'
import FindPwd_success from '../component/account/findPwd_success'
import Admin from '../component/admin'
import Search from '../component/Search'
import Reservation from '../component/Reservation'
import Reservation_Details from '../component/Reservation_Details'
import Reservation_information from '../component/reservation_information'
import Breakdown from '../component/breakdown'
import Weather from '../component/weather'
import Category from '../component/category'
import Search_results from '../component/search_results'
import Bulletinboard from '../component/bulletinboard'
import Saving_details from '../component/saving_details'
import Recruitment from '../component/recruitment'
import Notice from '../component/notice'



import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Confirm /> },
            { path: "/main", element: <Main /> },
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> },
            { path: "/findId", element: <FindId/>},
            { path: "/findId_success", element: <FindId_success/> },
            { path: "/findPwd", element: <FindPwd /> },
            { path: "/newPwd", element: <NewPwd/> },
            { path: "/findPwd_success", element: <FindPwd_success /> },
            { path: "/admin", element: <Admin /> },
            { path: "/search", element: <Search/>},
            { path: "/reservation", element: <Reservation/>},
            { path: "/reservation_details", element: <Reservation_Details/>},
            { path: "/reservation_information", element: <Reservation_information/>},
            { path: "/breakdown", element: <Breakdown/>},
            { path: "/weather", element: <Weather />},
            { path: "/category", element: <Category />},
            { path: "/search_results", element: <Search_results/>},
            { path: "/bulletinboard", element: <Bulletinboard/>},
            { path: "/saving_details", element: <Saving_details/>},
            { path: "/recruitment", element: <Recruitment/>},
            { path: "notice", element: <Notice/>}
            
           

           
          
           
           
           
        ]
    },
    
])