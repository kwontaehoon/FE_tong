import { client } from "../";

const MAIN_URL = {

    bannerList: "/admin/banner/list",
    bannerModify: "/admin/banner/modify",

    pickList: "/admin/pick/list",
    pickModify: "/admin/pick/modify",
}

// banner 목록
export const getBannerList = () => client.get(MAIN_URL.bannerList);

// banner 수정
export const postBannerModify = (params) => client.post(MAIN_URL.bannerModify, params);

// pick 목록
export const getPickList = () => client.get(MAIN_URL.pickList);

// pick 수정
export const postPickModify = (params) => client.post(MAIN_URL.pickModify, params);