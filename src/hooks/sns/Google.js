import axios from 'axios';

export const googleLogin = async(codeResponse) => {
    return await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`
    );
}