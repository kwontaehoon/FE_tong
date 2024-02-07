import { useQuery, useMutation } from "react-query";
import { getPickList, postPickModify } from "../../../service/admin/Main";

const MAIN_KEYS = {
  pickList: "pickList"
}

/**
 * 목록
 * 
 */
export const usePickListQuery = () => {
    return useQuery(MAIN_KEYS.pickList, async () => {
        const { data } = await getPickList();
        return data;
    }, {
      staleTime: Infinity,
    });
};

/**
 * 수정
 * 
 */
export const usePickModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postPickModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });