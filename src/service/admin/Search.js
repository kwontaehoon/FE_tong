import { client } from "../";

const SEARCH_URL = {
    searchRecommendList: "/admin/search/recommend/list",
    searchRecommendModify: "/admin/search/recommend/modify"
}

// 추천 검색어
export const getSearchRecommendList = () => client.get(SEARCH_URL.searchRecommendList);

// 추천 검색어 수정
export const postSearchRecommendModify = (params) => client.post(SEARCH_URL.searchRecommendModify, params);