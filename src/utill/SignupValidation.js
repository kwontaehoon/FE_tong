export const signupValidation = (info, validation, setValidation) => {

    let passwordReg = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,16}$/; // 비밀번호 체크
    let emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // 이메일 체크

    let arr = validation;

    if(info.id == ''){
        arr = { ...arr, id: true };
    }

    if(info.password == ''){
        arr = { ...arr, password: true };
    }else if(!info.password.match(passwordReg)){
        arr = { ...arr, password: false, passwordLength: true };
    }

    if(info.passwordCheck == ''){
        arr = { ...arr, passwordCheck: true };
    }else if(info.password !== info.passwordCheck){
        arr = { ...arr, passwordCheck: true };
    }

    if(info.email == ''){
        arr = { ...arr, email: true };
    }else if(!info.email.match(emailReg)){
        arr = { ...arr, email: false, emailForm: true};
    }

    if(info.nickname == ''){
        arr = { ...arr, nickname: true };
    }
    setValidation(arr);
}