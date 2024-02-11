import { client } from "../";

const ACCOUNT_URL = {
    signup: "/api/signup",
    login: "/api/login",
}

export const postSignup = () => client.post(ACCOUNT_URL.signup);

export const postLogin = () => client.post(ACCOUNT_URL.login);