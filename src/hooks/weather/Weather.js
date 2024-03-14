import axios from 'axios';
import moment from 'moment';

export const weather = async (serviceKey, data) => {
    let baseTime = "";

    const t =  moment(new Date()).format("HH");

    switch(true){
        case t < 5: baseTime = "0200"; break;
        case t < 8: baseTime = "0500"; break;
        case t < 11: baseTime = "0800"; break;
        case t < 14: baseTime = "1100"; break;
        case t < 17: baseTime = "1400"; break;
        case t < 20: baseTime = "1700"; break;
        case t < 23: baseTime = "2000"; break;
        default: baseTime = "2300";
    }
    
    return await axios({
        url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
        method: 'GET',
        params: {
            serviceKey: serviceKey,
            numOfRows: 30,
            pageNo: 1,
            base_date: t < 2 ? moment().subtract(1, 'days').format("YYYYMMDD") : moment().format("YYYYMMDD"),
            base_time: baseTime,
            nx: data.xcoordinate,
            ny: data.ycoordinate,
            dataType: "JSON"
        },
       
        // 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst',
        
    });
}