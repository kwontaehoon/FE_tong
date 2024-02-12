import { client } from "../";

const ACCOUNT_URL = {
    signup: "/api/signup",
    login: "/api/login",
}

// 회원가입
export const postSignup = (params) => client.post(ACCOUNT_URL.signup, params);

// 로그인
export const postLogin = (params) => client.post(ACCOUNT_URL.login, params);