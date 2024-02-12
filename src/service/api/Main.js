import { client } from "../";

const MAIN_URL = {
    banner: "/api/banner/list",
    pick: "/api/pick/list",
    reservation: "/api/reservation/list"
}

// 배너 목록
export const getBannerList = () => client.get(MAIN_URL.banner);

// Pick 목록
export const getPickList = () => client.get(MAIN_URL.pick);

// 예약 목록
export const getReservationList = () => client.get(MAIN_URL.reservation);