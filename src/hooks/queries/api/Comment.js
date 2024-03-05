import { useQuery, useMutation } from "react-query";
import { delCommentDelete, getCommentList, postCommentWrite, postMyCommentList, putCommentUpdate } from "../../../service/api/Comment";

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
* 댓글 작성
* 
*/

export const useCommentWriteMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postCommentWrite(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 댓글 수정
* 
*/

export const useCommentUpdateMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return putCommentUpdate(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 댓글 삭제
* 
*/

export const useCommentDeleteMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return delCommentDelete(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

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