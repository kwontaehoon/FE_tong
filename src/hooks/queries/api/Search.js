import { useQuery, useMutation } from "react-query";
import { getSearchRecommendList } from "../../../service/api/Search";

const SEARCH_KEYS = {
    searchRecommendList: "searchRecommendList"
}

/**
* 추천 검색어 목록
* 
*/

export const useRecommendListQuery = () => {
    return useQuery(SEARCH_KEYS.recommendSearchList, async () => {
      const { data } = await getSearchRecommendList();
      return data;
    }, {
      staleTime: Infinity,
    });
  };
