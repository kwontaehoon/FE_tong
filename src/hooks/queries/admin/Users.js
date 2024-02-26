import { useQuery, useMutation } from "react-query";
import { getusersList } from "../../../service/admin/Users";

const USERS_KEYS = {
  usersList: "usersList"
}

/**
 * 관리자 추천 검색어 목록
 * 
 */
export const useUsersListQuery = () => {
    return useQuery(USERS_KEYS.usersList, async () => {
        const { data } = await getusersList();
        return data;
    }, {
      staleTime: Infinity,
    });
};