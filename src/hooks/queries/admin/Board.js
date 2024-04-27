import { useQuery, useMutation } from "react-query";
import { postBoardModify } from "../../../service/admin/Board";

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