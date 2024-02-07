import { client } from "../";

const MAIN_URL = {
    pickList: "/admin/pick/list",
    pickModify: "/admin/pick/modify"
}

// pick 목록
export const getPickList = () => client.get(MAIN_URL.pickList);

// pick 수정
export const postPickModify = (params) => client.post(MAIN_URL.pickModify, params);