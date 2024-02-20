import { useQuery, useMutation } from "react-query";
import { getSearchRecommendList } from "../../../service/api/Search";

const SEARCH_KEYS = {
    searchRecommendList: "searchRecommendList"
}

/**
* 추천 검색어 목록
* 
*/

export const useSearchRecommendListQuery = () => {
    return useQuery(SEARCH_KEYS.searchRecommendList, async () => {
      const { data } = await getSearchRecommendList();
      return data;
    }, {
      staleTime: Infinity,
    });
  };
