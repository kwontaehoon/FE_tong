import { useQuery, useMutation } from "react-query";
import { getBoardList, getBoardDetails, postBoardWrite, postMyBoardList, putBoardUpdate, delBoardDelete } from "../../../service/api/Board";

const BOARD_KEYS = {
  boardList: "boardList",
  boardDetails: "boardDetails",
  myBoardList: "/myBoardList"
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

/**
* 게시판 수정
* 
*/

export const useBoardUpdateMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return putBoardUpdate(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 게시판 삭제
* 
*/

export const useBoardDeleteMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return delBoardDelete(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });


/**
* 내가 쓴 게시글
* 
*/

export const useMyBoardListQuery = (params) => {
  return useQuery(BOARD_KEYS.myBoardList, async () => {
    const { data } = await postMyBoardList(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};