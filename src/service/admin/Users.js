import { client } from "../";

const USERS_URL = {
    usersList: "/admin/users/list",
}

// 목록
export const getusersList = () => client.get(USERS_URL.usersList);