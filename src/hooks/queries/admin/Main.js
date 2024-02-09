import { useQuery, useMutation } from "react-query";
import { getBannerList, postBannerModify, getPickList, postPickModify } from "../../../service/admin/Main";

const MAIN_KEYS = {
  bannerList: "bannerList",
  pickList: "pickList"
}

/**
 * Banner 목록
 * 
 */
export const useBannerListQuery = () => {
  return useQuery(MAIN_KEYS.bannerList, async () => {
      const { data } = await getBannerList();
      return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * Banner 수정
 * 
 */
export const useBannerModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      console.log("params: ", params);
      return postBannerModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * Pick 목록
 * 
 */
export const usePickListQuery = () => {
    return useQuery(MAIN_KEYS.pickList, async () => {
        const { data } = await getPickList();
        return data;
    }, {
      staleTime: Infinity,
    });
};

/**
 * Pick 수정
 * 
 */
export const usePickModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postPickModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });