import { client } from "../";

const ACCOUNT_URL = {
    signup: "/api/signup",
    login: "/api/login",
}

export const postSignup = (params) => client.post(ACCOUNT_URL.signup, params);

export const postLogin = (params) => client.post(ACCOUNT_URL.login, params);