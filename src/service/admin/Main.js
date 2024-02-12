import { client } from "../";

const MAIN_URL = {

    bannerList: "/admin/banner/list",
    bannerModify: "/admin/banner/modify",

    pickList: "/admin/pick/list",
    pickModify: "/admin/pick/modify",

    reservationList: "/admin/reservation/list",
    reservationModify: "/admin/reservation/modify",
}

// 관리자 배너 목록
export const getBannerList = () => client.get(MAIN_URL.bannerList);

// 관리자 배너 수정
export const postBannerModify = (params) => client.post(MAIN_URL.bannerModify, params);

// 관리자 pick 목록
export const getPickList = () => client.get(MAIN_URL.pickList);

// 관리자 pick 수정
export const postPickModify = (params) => client.post(MAIN_URL.pickModify, params);

// 관리자 예약 목록
export const getReservationList = () => client.get(MAIN_URL.reservationList);

// 관리자 예약 수정
export const postReservationModify = (params) => client.post(MAIN_URL.reservationModify, params); 