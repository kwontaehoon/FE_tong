import { client } from "../";

const USERS_URL = {
    usersList: "/admin/users/list",
    usersLogin: "/admin/users/login"
}

// 목록
export const getUsersList = () => client.get(USERS_URL.usersList);

// 로그인
export const postUsersLogin = (params) => client.post(USERS_URL.usersLogin, params);