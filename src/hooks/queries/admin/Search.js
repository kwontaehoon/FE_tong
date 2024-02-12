import { useQuery, useMutation } from "react-query";
import { getSearchRecommendList, postSearchRecommendModify } from "../../../service/admin/Search";

const SEARCH_KEYS = {
  searchRecommendList: "searchRecommendList"
}

/**
 * 관리자 추천 검색어 목록
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
 * 관리자 추천 검색어 수정
 * 
 */
export const useSearchRecommendModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postSearchRecommendModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });