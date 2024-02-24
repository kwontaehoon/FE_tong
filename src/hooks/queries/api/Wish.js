import { useQuery, useMutation } from "react-query";
import { postWish } from "../../../service/api/Wish";

const WISH_KEYS = {

}

/**
* 좋아요(찜) flag
* 
*/

export const useWishMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postWish(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });