import { client } from "../";

const BOARD_URL = {
    boardList: "/admin/board/list",
    boardModify: "/admin/board/modify"
}

// 관리자 게시판 목록
export const getBoardLlist = (params) => client.get(BOARD_URL.boardList, { params: params });

// 관리자 게시판 수정
export const postBoardModify = (params) => client.post(BOARD_URL.boardModify, params);