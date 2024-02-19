import { useQuery, useMutation } from "react-query";
import { postSignup, postLogin, postIdCheck, postFindId, postFindPassword } from "../../../service/api/Account";

const ACCOUNT_KEYS = {

}

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
