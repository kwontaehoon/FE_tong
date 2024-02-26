import { client } from "../";

const SEARCH_URL = {
    searchRecommendList: "/api/search/recommend/list",
    searchResultList: "/api/search/result/list"
}

// 추천 검색어 목록
export const getSearchRecommendList = () => client.get(SEARCH_URL.searchRecommendList);

// 검색 결과 목록
export const postSearchResultList = (params) => client.post(SEARCH_URL.searchResultList, params);