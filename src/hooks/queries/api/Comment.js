import { useQuery } from "react-query";
import { getCommentList, postMyCommentList } from "../../../service/api/Comment";

const COMMENT_KEYS = {
  commentList: "commentList",
  myCommentList: "myCommentList"
}

/**
 * 댓글 전체 보기
 * 
 */

export const useCommentListQuery = () => {
  return useQuery(COMMENT_KEYS.commentList, async () => {
    const { data } = await getCommentList();
    return data;
  }, {
    staleTime: Infinity,
  });
};


/**
* 내가 쓴 댓글
* 
*/

export const useMyCommentListQuery = (params) => {
  return useQuery(COMMENT_KEYS.myCommentList, async () => {
    const { data } = await postMyCommentList(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};