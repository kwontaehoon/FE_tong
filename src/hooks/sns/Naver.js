import axios from "axios";

const REST_API_KEY ="JQ3LN1au64GoCxY_jppC";
// const REDIRECT_URI = "http://localhost:5173/login";
const REDIRECT_URI = "https://www.tongtongball.com/login";
const REST_API_SECRET_KEY = "FChqSs3QA6";

export const naverLogin = () => {

    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REST_API_KEY}&state=${Math.random()
    .toString(36)
    .substring(3, 14)}}&redirect_uri=${REDIRECT_URI}`

    window.location.href = NAVER_AUTH_URL;
}

export const naverToken = (code, state) => {
    const response = axios({
        url: "https://nid.naver.com/oauth2.0/token",
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            client_id: REST_API_KEY,
            client_secret: REST_API_SECRET_KEY,
            code: code,
            state: state,
            grant_type: "authorization_code",
        }
    });
    console.log("response: ", response);
    return response;
}