import { useQuery, useMutation } from "react-query";
import { postMyWishList, postWish } from "../../../service/api/Wish";

const WISH_KEYS = {
  myWishList: "myWishList"
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


/**
* 내가 찜한 시설
* 
*/

export const useMyWishListQuery = (params) => {
  return useQuery(WISH_KEYS.myWishList, async () => {
    const { data } = await postMyWishList(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};