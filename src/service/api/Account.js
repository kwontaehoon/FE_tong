import { client } from "../";

const ACCOUNT_URL = {
    signup: "/api/signup",
    login: "/api/login",
    idCheck: "/api/idCheck",
    findId: "/api/findId",
    findPassword: "/api/findPassword"
}

// 회원가입
export const postSignup = (params) => client.post(ACCOUNT_URL.signup, params);

// 로그인
export const postLogin = (params) => client.post(ACCOUNT_URL.login, params);

// 아이디 중복 확인
export const postIdCheck = (params) => client.post(ACCOUNT_URL.idCheck, params);

// 아이디 찾기
export const postFindId = (params) => client.post(ACCOUNT_URL.findId, params);

// 비밀번호 찾기
export const postFindPassword = (params) => client.post(ACCOUNT_URL.findPassword, params);