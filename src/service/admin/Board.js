import { client } from "../";

const BOARD_URL = {
    boardModify: "/admin/board/modify"
}

// 관리자 회원 수정
export const postBoardModify = (params) => client.post(BOARD_URL.boardModify, params);