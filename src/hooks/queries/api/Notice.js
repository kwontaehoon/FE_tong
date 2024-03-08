import { useQuery } from "react-query";
import { getNoticeList } from "../../../service/api/Notice";

const NOTICE_KEYS = {
  noticeList: "noticeList",
}

/**
 * 공지사항 목록
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