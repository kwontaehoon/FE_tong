export const infoValidation = (info, validation, setValidation, callback) => {

    let emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // 이메일 체크

    let arr = validation;

    if(info.email == ''){
        arr = { ...arr, email: true };
    }else if(!info.email.match(emailReg)){
        arr = { ...arr, email: false, emailForm: true};
    }

    if(String(info.birth).length !== 6){
        arr = { ...arr, birthLength: true};
    }

    // if(info.name == ''){
    //     arr = { ...arr, name: true };
    // }

    // if(info.birth == ''){
    //     arr= { ...arr, birth: true };
    // }

    if(Object.values(arr).every(value => value === false) && Object.values(info).every(value => value !== "")) {
        callback();
    }

    setValidation(arr);
}