import { client } from "../";

const WISH_URL = {
    wish: "/api/wish/flag",
    myWishList: "/api/myWishList"
}

// 좋아요(찜) flag
export const postWish = (params) => client.post(WISH_URL.wish, params);

// 내가 찜한 시설
export const postMyWishList = (params) => client.post(WISH_URL.myWishList, params);
