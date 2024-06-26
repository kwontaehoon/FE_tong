import { createBrowserRouter } from "react-router-dom"
import Confirm from '../component/confirm'
import Signup from '../component/account/signup'
import Login from '../component/account/login'
import Main from '../component/main'
import Mypage from '../component/mypage'
import FindId from '../component/account/findId'
import FindId_success from '../component/account/findId_success'
import FindPwd from '../component/account/findPwd'
import NewPwd from '../component/account/newPwd'
import FindPwd_success from '../component/account/findPwd_success'
import Admin from '../component/admin'
import Search from '../component/search'
import SearchResult from '../component/search_result'
import Reservation from '../component/Reservation'
import Reservation_Details from '../component/reservation_details'
import Reservation_information from '../component/reservation_information'
import Reservation_maps from '../component/reservation_details/maps_details'
import Breakdown from '../component/breakdown'
import Weather from '../component/weather'
import Mypage_info from '../component/mypage/myInfo'
import Expire from '../component/expire'
import MyInfo from '../component/mypage/myInfo'
import MyReservation_ing from '../component/myReservation/ing'
import MyReservation_cancel from '../component/myReservation/cancel'
import MyReservation_finish from '../component/myReservation/finish'

import Board from '../component/board/team'
import Board_details from '../component/board/team/details'
import Mercenary from '../component/board/mercenary'
import Mercenary_details from '../component/board/mercenary/details'
import FreeBoard from '../component/board/freeBoard'
import FreeBoard_details from '../component/board/freeBoard/details'
import Notice from '../component/board/notice'
import Notice_details from '../component/board/notice/details'
import Faq from '../component/board/faq'

import Event from '../component/event'

import Privacy from '../component/policy/privacy'
import Team from '../component/policy/term'

import BoardWrite from '../component/board/boardWrite'

import MyActiveBoard from '../component/myActive/board'
import MyActiveWish from '../component/myActive/wish'
import MyActiveComment from '../component/myActive/comment'

import Rendering1 from '../component/rendering/Rendering1'

import App from "../App"

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            // { path: "/main", element: <Main /> },
            { path: "/mypage", element: <Mypage/> },
            { path: "/myInfo", element: <MyInfo />},
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> },
            { path: "/findId", element: <FindId/>},
            { path: "/findId_success", element: <FindId_success/> },
            { path: "/findPwd", element: <FindPwd /> },
            { path: "/newPwd", element: <NewPwd/> },
            { path: "/findPwd_success", element: <FindPwd_success /> },
            { path: "/admin", element: <Admin /> },
            { 
                path: "search", 
                children: [
                    { index: true, element: <Search /> },
                    { path: ":id", element: <SearchResult />}
                ]
            },
            { 
                path: "reservation",
                children: [
                    { index: true, element: <Reservation /> },
                    { path: ":id", element: <Reservation_Details /> },
                    { path: ":id/maps", element: <Reservation_maps />}
                ]
            },
            { path: "/reservation_information/:id", element: <Reservation_information />},
            { path: "/breakdown/:id", element: <Breakdown />},
            { path: "/weather", element: <Weather />},
            { path: "/mypage_info", element: <Mypage_info />},
            { path: "/expire", element: <Expire />},
            { 
                path: "/board",
                children: [
                    { index: true, element: <Board /> },
                    { path: ":id", element: <Board_details /> }
                ]
            },
            {
                path: "/mercenary",
                children: [
                    { index: true, element: <Mercenary /> },
                    { path: ":id", element: <Mercenary_details /> }
                ]
            },
            {
                path: "/freeBoard",
                children: [
                    { index: true, element: <FreeBoard /> },
                    { path: ":id", element: <FreeBoard_details /> }
                ]
            },
            { 
                path: "/notice",
                children: [
                    { index: true, element: <Notice /> },
                    { path: ":id", element: <Notice_details /> }
                ]
            },
            { path: "/faq", element: <Faq /> },
            { path: "/boardWrite", element: <BoardWrite /> },
            { path: "/event", element: <Event /> },
            { path: "/myActive/board", element: <MyActiveBoard /> },
            { path: "/myActive/wish", element: <MyActiveWish /> },
            { path: "/myActive/comment", element: <MyActiveComment /> },
            { path: "/myReservation_ing", element: <MyReservation_ing /> },
            { path: "/myReservation_cancel", element: <MyReservation_cancel /> },
            { path: "/myReservation_finish", element: <MyReservation_finish /> },
            
            { path: "/privacy", element: <Privacy /> },
            { path: "/term", element: <Team /> },

            { path: "/rendering1", element: <Rendering1 /> },
        ]
    },
])