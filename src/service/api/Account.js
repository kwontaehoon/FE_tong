import { client } from "../";

const ACCOUNT_URL = {
    info: "/api/info",
    signup: "/api/signup",
    socialLogin: "/api/social/login",
    login: "/api/login",
    idCheck: "/api/idCheck",
    findId: "/api/findId",
    findPassword: "/api/findPassword",
    newPassword: "/api/newPassword",
    withdraw: "/api/withdraw",
    profileUpdate: "/api/profile/update",
    infoUpdate: "/api/info/modify"
}

// 내 정보
export const getInfo = (params) => client(ACCOUNT_URL.info, { params: params });

// 회원가입
export const postSignup = (params) => client.post(ACCOUNT_URL.signup, params);

// 소셜 로그인
export const postSocialLogin = (params) => client.post(ACCOUNT_URL.socialLogin, params);

// 로그인
export const postLogin = (params) => client.post(ACCOUNT_URL.login, params);

// 아이디 중복 확인
export const postIdCheck = (params) => client.post(ACCOUNT_URL.idCheck, params);

// 아이디 찾기
export const postFindId = (params) => client.post(ACCOUNT_URL.findId, params);

// 비밀번호 찾기
export const postFindPassword = (params) => client.post(ACCOUNT_URL.findPassword, params);

// 비밀번호 변경
export const postNewPassword = (params) => client.post(ACCOUNT_URL.newPassword, params);

// 회원 탈퇴
export const postWithdraw = (params) => client.post(ACCOUNT_URL.withdraw, params);

// 프로필 변경
export const postProfileUpdate = (params) => client.post(ACCOUNT_URL.profileUpdate, params);

// 내 정보 변경
export const postUserInfoUpdate = (params) => client.post(ACCOUNT_URL.infoUpdate, params);