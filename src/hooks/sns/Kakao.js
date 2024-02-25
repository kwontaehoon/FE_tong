import axios from "axios";

const REST_API_KEY ="ba157ca0d9257f05c9b0f7a77540df9e";
const REDIRECT_URI = "http://localhost:5173/login";
// const REDIRECT_URI = "http://52.78.174.115";

export const kakaoLogin = () => {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
};

export const kakaoToken = (code) => {
    return axios({
        url: "https://kauth.kakao.com/oauth/token",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code
        }
    })
}

export const kakaoInfo = (ACCESS_TOKEN) => {
    return axios({
        url: "https://kapi.kakao.com/v2/user/me",
        method: "post",
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}