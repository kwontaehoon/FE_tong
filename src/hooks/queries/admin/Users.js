import { useQuery, useMutation } from "react-query";
import { getUsersList, postUsersLogin } from "../../../service/admin/Users";

const USERS_KEYS = {
  usersList: "usersList"
}

/**
 * 관리자 회원 목록
 * 
 */
export const useUsersListQuery = () => {
  return useQuery(USERS_KEYS.usersList, async () => {
    const { data } = await getUsersList();
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * 관리자 로그인
 * 
 */
export const useUsersLoginMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postUsersLogin(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });