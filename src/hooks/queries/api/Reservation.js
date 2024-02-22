import { useQuery, useMutation } from "react-query";
import { getReservationDetails, getReservationList } from "../../../service/api/Reservation";

const RESERVATION_KEYS = {
  reservationList: "reservationList",
  reservationDetails: "reservationDetails"
}

/**
* 예약 목록
* 
*/

export const useReservationListQuery = () => {
  return useQuery(RESERVATION_KEYS.reservationList, async () => {
    const { data } = await getReservationList();
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
* 예약 목록
* 
*/

export const useReservationDetailsQuery = (params) => {
  return useQuery(RESERVATION_KEYS.reservationDetails, async () => {
    const { data } = await getReservationDetails(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};