import axios from 'axios';

export const weather = async (serviceKey) => {
    return await axios({
        url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst',
        method: 'GET',
        params: {
            serviceKey: serviceKey,
            numOfRows: 60,
            pageNo: 1,
            base_date: 20240215,
            base_time: 1100,
            nx: 54,
            ny: 128,
            dataType: "JSON"
        },
       
        // 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst',
        
    });
}