import { useQuery, useMutation } from "react-query";
import { getReservationList } from "../../../service/api/Reservation";

const RESERVATION_KEYS = {
  reservationList: "reservationList"
}

/**
* 추천 검색어 목록
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