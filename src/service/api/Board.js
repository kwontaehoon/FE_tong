import { client } from "../";

const BOARD_URL = {
    boardList: '/api/board/getBoardList',
    boardDetails: '/api/board/getBoard',
    boardWrite: '/api/board/write'
}

// 게시판 전체 보기
export const getBoardList = () => client.get(BOARD_URL.boardList);

// 게시판 상세 보기
export const getBoardDetails = (params) => client.get(`${BOARD_URL.boardDetails}/${params}`);

// 게시판 작성
export const postBoardWrite = (params) => client.post(BOARD_URL.boardWrite, params);
