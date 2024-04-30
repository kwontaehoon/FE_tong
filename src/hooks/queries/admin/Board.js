import { useQuery, useMutation } from "react-query";
import { getBoardLlist, postBoardModify } from "../../../service/admin/Board";

const BOARD_KEYS = {
  boardList: "boardList"
}

/**
 * 관리자 게시판 목록
 * 
 */
export const useBoardListQuery = (params) => {
  return useQuery(BOARD_KEYS.boardList, async () => {
    const { data } = await getBoardLlist(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * 관리자 게시판 수정
 * 
 */
export const useBoardModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postBoardModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });