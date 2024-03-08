import { client } from "../";

const NOTICE_URL = {
    noticeList: "/api/notice/list",
    noticeWrite: "/admin/notice/write"
}

// 목록
export const getusersList = () => client.get(NOTICE_URL.noticeList);

// 등록
export const postNoticeWrite = (params) => client.post(NOTICE_URL.noticeWrite, params)