import { client } from "../";

const USERS_URL = {
    usersList: "/admin/users/list",
    usersLogin: "/admin/users/login"
}

// 관리자 회원 목록
export const getUsersList = (params) => client.get(USERS_URL.usersList, { params: params });

// 관리자 로그인
export const postUsersLogin = (params) => client.post(USERS_URL.usersLogin, params);