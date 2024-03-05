import React, { useState, useEffect } from 'react'
import { weather } from '../../hooks/weather/Weather';
import { weatherStatus } from '../../function/weatherStatus';

const index = ({reservation, data}) => {

    const serviceKeyIncoding = "UQ8rHfkilyp7O5%2FdWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc%2Fafb3ecEvI3k0uR6eNW2YObO5Q%2FGQ%3D%3D";
    const serviceKey = "UQ8rHfkilyp7O5/dWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc/afb3ecEvI3k0uR6eNW2YObO5Q/GQ==";
    const [weatherList, setWeatherList] = useState();
    console.log("weatherList: ", weatherList);

    useEffect(() => {

        const weatherFunc = async() => {
            const response = await weather(serviceKey, data);
            console.log("response: ", response);
            const temp = response.data.response.body.items.item.filter(x=> x.category == "T1H")[0].fcstValue;
            const rain = response.data.response.body.items.item.filter(x=>x.category == "RN1")[0].fcstValue;
            const sky = response.data.response.body.items.item.filter(x=>x.category == "SKY")[0].fcstValue;
            // const high = response.data.response.body.items.item.filter(x=>x.category == "TMX")[0].fcstValue;
            // const low = response.data.response.body.items.item.filter(x=>x.category == "TMN")[0].fcstValue;
            setWeatherList({
                temp: temp,
                rain: rain,
                sky: sky,
                // high: high,
                // low: low
            })
          }

        weatherFunc();
    }, [])

    return (
        <div className='flex mb-six'>
            {!reservation && <div className='flex items-center font-bold text-sm'>
                {weatherList && weatherStatus(weatherList)}
                {<div className='ml-2 mr-six'>현재온도</div>}
                <div>{weatherList?.temp}º</div>
                {/* <div>강수: {weatherList?.rain}</div>
                <div>하늘: {weatherList?.sky}</div> */}
            </div>}
            {reservation && 
            <div className='flex'>
                <div className='flex flex-1'>
                    {weatherList && weatherStatus(weatherList)}
                    <div className='ml-1' style={{marginRight: "10px"}}>{weatherList?.temp}º</div>
                    <div>{data.location}</div>
                </div>
                {/* <div className='flex absolute right-5'>
                    <div>최저</div>
                    <div></div>
                    <div>최고</div>
                    <div></div>
                </div> */}
            </div>}
        </div>
    )
}

export default index