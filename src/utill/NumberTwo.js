// 번호가 한자리 수 일때 0 붙이는 utill

export const numberTwo = (date) => {
    return 10 - Number(date) > 0 ? '0'+String(date) : date;
}