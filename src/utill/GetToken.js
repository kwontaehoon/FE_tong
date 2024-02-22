import { jwtDecode } from "jwt-decode";

export const getToken = () => {

    const token = JSON.stringify(localStorage.getItem("token"));

    return token == "null" ? false : jwtDecode(token);

}