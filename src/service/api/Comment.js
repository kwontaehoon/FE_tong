import { client } from "../";

const COMMENT_URL = {
    commentList: '/api/comments/getCommentList',
    mycommentList: '/api/myCommentList'
}

// 댓글 전체 보기
export const getCommentList = () => client.get(COMMENT_URL.commentList);

// 내가 쓴 댓글
export const postMyCommentList = (params) => client.post(COMMENT_URL.mycommentList, params);