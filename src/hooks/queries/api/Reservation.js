import { useQuery, useMutation } from "react-query";
import { getReservationCancelList, getReservationDetails, getReservationList, postReservation, postReservationCancel } from "../../../service/api/Reservation";

const RESERVATION_KEYS = {
  reservationList: "reservationList",
  reservationCancelList: "reservationCancelList",
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
* 예약 상세
* 
*/

export const useReservationDetailsQuery = (params) => {
  return useQuery([RESERVATION_KEYS.reservationDetails, { id: params }], async () => {
    const { data } = await getReservationDetails(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
* 예약 하기
* 
*/

export const useReservationMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postReservation(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 예약 취소 하기
* 
*/

export const useReservationCancelMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postReservationCancel(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 예약 취소 목록
* 
*/

export const useReservationCancelListQuery = () => {
  return useQuery(RESERVATION_KEYS.reservationCancelList, async () => {
    const { data } = await getReservationCancelList();
    return data;
  }, {
    staleTime: Infinity,
  });
};