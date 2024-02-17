import { client } from "../";

const MAIN_URL = {

    bannerList: "/admin/banner/list",
    bannerModify: "/admin/banner/modify",

    pickList: "/admin/pick/list",
    pickModify: "/admin/pick/modify",
    pickAdd: "/admin/pick/add",
    pickDelete: "/admin/pick/delete",

    reservationList: "/admin/reservation/list",
    reservationModify: "/admin/reservation/modify",
    reservationAdd: "/admin/reservation/add",
    reservationDelete: "/admin/reservation/delete",
}

// 관리자 배너 목록
export const getBannerList = () => client.get(MAIN_URL.bannerList);

// 관리자 배너 수정
export const postBannerModify = (params) => client.post(MAIN_URL.bannerModify, params);

// 관리자 pick 목록
export const getPickList = () => client.get(MAIN_URL.pickList);

// 관리자 pick 수정
export const postPickModify = (params) => client.post(MAIN_URL.pickModify, params);

// 관리자 pick 추가
export const postPickAdd = (params) => client.post(MAIN_URL.pickAdd, params);

// 관리자 pick 삭제
export const postPickDelete = (params) => client.post(MAIN_URL.pickDelete, params);

// 관리자 예약 목록
export const getReservationList = () => client.get(MAIN_URL.reservationList);

// 관리자 예약 수정
export const postReservationModify = (params) => client.post(MAIN_URL.reservationModify, params);

// 관리자 예약 추가
export const postReservationAdd = (params) => client.post(MAIN_URL.reservationAdd, params);

// 관리자 예약 삭제
export const postReservationDelete = (params) => client.post(MAIN_URL.reservationDelete, params);