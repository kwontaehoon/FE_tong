import { client } from "../";

const SEARCH_URL = {
    searchRecommendList: "/api/search/recommend/list"
}

// 추천 검색어
export const getSearchRecommendList = () => client.get(SEARCH_URL.searchRecommendList);