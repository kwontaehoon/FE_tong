import { client } from "../";

const WISH_URL = {
    wish: "/api/wish/flag",
}

// 좋아요(찜) flag
export const postWish = (params) => client.post(WISH_URL.wish, params);