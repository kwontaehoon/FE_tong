import { useQuery } from "react-query";
import { getBannerList, getPickList } from "../../../service/api/Main";

const MAIN_KEYS = {
    bannerList: "bannerList",
    pickList: "pickList"
}

/**
 * 배너 목록
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