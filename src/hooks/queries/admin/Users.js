import { useQuery, useMutation } from "react-query";
import { getUsersList, postUsersLogin, postUsersModify } from "../../../service/admin/Users";

const USERS_KEYS = {
  usersList: "usersList"
}

/**
 * 관리자 회원 목록
 * 
 */
export const useUsersListQuery = (params) => {
  return useQuery(USERS_KEYS.usersList, async () => {
    const { data } = await getUsersList(params);
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

/**
* 관리자 회원 수정
* 
*/
export const useUsersModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postUsersModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });