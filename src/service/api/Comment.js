import { client } from "../";

const COMMENT_URL = {
    commentList: '/api/comments/getCommentList',
}

// 댓글 전체 보기
export const getCommentList = () => client.get(COMMENT_URL.commentList);