import { client } from "../";

const COMMENT_URL = {
    commentList: '/api/comments/getCommentList',
    commentWrite: '/api/comments/write',
    commentUpdate: '/api/comments/updateComment',
    commentDelete: '/api/comments/deleteComment',
    mycommentList: '/api/myCommentList',
    commentResponse: '/api/comments/response',
    recommentsWrite: '/api/recomments/write',
    recommentsUpdate: '/api/recomments/updateRecomment',
    recommentsDelete: '/api/recomments/deleteRecomment'
}

// 댓글 전체 보기
export const getCommentList = () => client.get(COMMENT_URL.commentList);

// 댓글 등록
export const postCommentWrite = (params) => client.post(COMMENT_URL.commentWrite, params);

// 댓글 수정
export const putCommentUpdate = (params) => client.put(COMMENT_URL.commentUpdate, params);

// 댓글 삭제
export const delCommentDelete = (params) => client.delete(COMMENT_URL.commentDelete, { params: params });

// 내가 쓴 댓글
export const postMyCommentList = (params) => client.post(COMMENT_URL.mycommentList, params);

// 댓글 반응
export const postCommentResponse = (params) => client.post(COMMENT_URL.commentResponse, params);

// 대댓글 등록
export const postRecommentsWrite = (params) => client.post(COMMENT_URL.recommentsWrite, params);

// 대댓글 수정
export const putRecommentsUpdate = (params) => client.put(COMMENT_URL.recommentsUpdate, params);

// 대댓글 삭제
export const delRecommentsDelete = (params) => client.delete(COMMENT_URL.recommentsDelete, { params: params });