import { client } from "../";

const NOTICE_URL = {
    noticeList: "/api/notice/list",
}

// 공지사항 목록
export const getNoticeList = () => client.get(NOTICE_URL.noticeList);