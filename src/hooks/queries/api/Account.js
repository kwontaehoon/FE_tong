import { useQuery, useMutation } from "react-query";
import { postSignup, postLogin, postIdCheck, postFindId, postFindPassword, postNewPassword, postSocialLogin, postProfileUpdate, getInfo, postWithdraw, postUserInfoUpdate } from "../../../service/api/Account";

const ACCOUNT_KEYS = {
  info: "info"
}

/**
* 게시판 목록
* 
*/

export const useInfoQuery = (params) => {
  return useQuery(ACCOUNT_KEYS.info, async () => {
    const { data } = await getInfo(params);
    return data;
  }, {
    staleTime: Infinity,
  });
};

/**
 * 회원가입
 * 
 */

export const useSignupMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postSignup(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 로그인
 * 
 */

export const useSocialLoginMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postSocialLogin(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 로그인
 * 
 */

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postLogin(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 아이디 중복확인
* 
*/

export const useIdCheckMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postIdCheck(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 아이디 찾기
 * 
 */

export const useFindIdMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postFindId(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 비밀번호 찾기
* 
*/

export const useFindPasswordMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postFindPassword(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 비밀번호 변경
* 
*/

export const useNewPasswordMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postNewPassword(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 회원 탈퇴
 * 
 */

export const useWithdrawMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postWithdraw(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 프로필 변경
* 
*/

export const useProfileUpdateMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postProfileUpdate(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
* 내 정보 변경
* 
*/

export const useUserInfoUpdateMutation = () =>
  useMutation({
    mutationFn: (params) => {
      return postUserInfoUpdate(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });