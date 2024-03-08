import { useQuery, useMutation } from "react-query";
import { getSearchRecommendList, postSearchRecommendModify } from "../../../service/admin/Search";
import { postNoticeWrite } from "../../../service/admin/Notice";
import { getNoticeList } from "../../../service/api/Notice";

const NOTICE_KEYS = {
  noticeList: "searchRecommendList"
}

/**
 * 관리자 공지사항 목록
 * 
 */
export const useNoticeListQuery = () => {
    return useQuery(NOTICE_KEYS.noticeList, async () => {
        const { data } = await getNoticeList();
        return data;
    }, {
      staleTime: Infinity,
    });
};

/**
 * 관리자 공지사항 등록
 * 
 */
export const useNoticeWriteMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postNoticeWrite(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });