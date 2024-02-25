export const loginFlag = () => {

    const token = JSON.stringify(localStorage.getItem("token"));

    return token == "null" ? false : true;
}