import { useQuery } from "react-query";
import { getCommentList } from "../../../service/api/Comment";

const COMMENT_KEYS = {
  commentList: "commentList",
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