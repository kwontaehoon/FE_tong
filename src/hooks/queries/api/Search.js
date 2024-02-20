import { useQuery, useMutation } from "react-query";
import { getSearchRecommendList, postSearchResultList } from "../../../service/api/Search";

const SEARCH_KEYS = {
  searchRecommendList: "searchRecommendList",
  searchResultList: "searchResultList"
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


/**
* 검색 결과 목록
* 
*/

export const useSearchResultListMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postSearchResultList(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });
