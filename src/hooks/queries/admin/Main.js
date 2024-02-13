import { useQuery, useMutation } from "react-query";
import { getBannerList, postBannerModify, getPickList, postPickModify, getReservationList, postReservationModify, postReservationAdd } from "../../../service/admin/Main";

const MAIN_KEYS = {
  bannerList: "bannerList",
  pickList: "pickList",
  reservationList: "reservationList"
}

/**
 * 관리자 배너 목록
 * 
 */

export const useBannerListQuery = () => {
  return useQuery(MAIN_KEYS.bannerList, async () => {
      const { data } = await getBannerList();
      return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * 관리자 배너 수정
 * 
 */

export const useBannerModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postBannerModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 관리자 Pick 목록
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
 * 관리자 Pick 수정
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

/**
 * 관리자 예약 목록
 * 
 */

export const useReservationListQuery = () => {
  return useQuery(MAIN_KEYS.reservationList, async () => {
      const { data } = await getReservationList();
      return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * 관리자 예약 수정
 * 
 */

export const useReservationModifyMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postReservationModify(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

  /**
 * 관리자 예약 추가
 * 
 */

export const useReservationAddMutation = () =>
useMutation({
  mutationFn: (params) => {
    return postReservationAdd(params);
  },
  onSuccess: () => {
    // 성공 시 실행할 로직 추가
  }
});