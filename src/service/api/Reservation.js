import { client } from "../";

const RESERVATION_URL = {
    reservationList: "/api/reservation/list",
    reservationDetails: "/api/reservation/details"
}

// 예약 목록
export const getReservationList = () => client.get(RESERVATION_URL.reservationList);

// 예약 상세
export const getReservationDetails = (params) => client.get(RESERVATION_URL.reservationDetails, { params: params });