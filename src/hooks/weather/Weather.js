import axios from 'axios';
import moment from 'moment';

export const weather = async (serviceKey) => {
    
    return await axios({
        url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst',
        method: 'GET',
        params: {
            serviceKey: serviceKey,
            numOfRows: 60,
            pageNo: 1,
            base_date: moment().format("YYYYMMDD"),
            base_time: 1100,
            nx: 54,
            ny: 128,
            dataType: "JSON"
        },
       
        // 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst',
        
    });
}