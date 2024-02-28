import { useQuery, useMutation } from "react-query";
import { getBoardList, getBoardDetails, postBoardWrite } from "../../../service/api/Board";

const BOARD_KEYS = {
  boardList: "boardList",
  boardDetails: "boardDetails"
}

/**
* 게시판 목록
* 
*/

export const useBoardListQuery = () => {
  return useQuery(BOARD_KEYS.boardList, async () => {
    const { data } = await getBoardList();
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
* 게시판 상세
* 
*/

export const useBoardDetailsQuery = (params) => {
  return useQuery([BOARD_KEYS.boardDetails, { id: params }], async () => {
    const { data } = await getBoardDetails(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
* 게시판 작성
* 
*/

export const useBoardWriteMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postBoardWrite(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });