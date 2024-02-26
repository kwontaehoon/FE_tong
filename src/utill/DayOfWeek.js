// 요일 구하기 utill

export const dayOfWeek = (day) => {
    switch(true){
        case day == 0: return "일";
        case day == 1: return "월";
        case day == 2: return "화";
        case day == 3: return "수";
        case day == 4: return "목";
        case day == 5: return "금";
        case day == 6: return "토";
    }
}