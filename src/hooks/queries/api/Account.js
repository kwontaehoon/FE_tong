import { useQuery, useMutation } from "react-query";
import { postSignup, postLogin } from "../../../service/api/Account";

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
