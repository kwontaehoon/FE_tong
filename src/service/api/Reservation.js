import { client } from "../";

const RESERVATION_URL = {
    reservationList: "/api/reservation/list"
}

// 추천 검색어
export const getReservationList = () => client.get(RESERVATION_URL.reservationList);