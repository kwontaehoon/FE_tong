import { client } from "../";

const MAIN_URL = {
    bannerList: "/api/banner/list",
    pickList: "/api/pick/list",
    reservationList: "/api/reservation/list",
}

// 배너 목록
export const getBannerList = () => client.get(MAIN_URL.bannerList);

// Pick 목록
export const getPickList = () => client.get(MAIN_URL.pickList);

// 예약 목록
export const getReservationList = () => client.get(MAIN_URL.reservationList);

