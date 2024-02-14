import React, { useState, useEffect } from 'react'
import { weather } from '../../hooks/weather/Weather';
import { weatherStatus } from '../../utill/WeatherStatus';

const index = () => {

    const serviceKeyIncoding = "UQ8rHfkilyp7O5%2FdWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc%2Fafb3ecEvI3k0uR6eNW2YObO5Q%2FGQ%3D%3D";
    const serviceKey = "UQ8rHfkilyp7O5/dWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc/afb3ecEvI3k0uR6eNW2YObO5Q/GQ==";
    const [weatherList, setWeatherList] = useState();
    console.log("weatherList: ", weatherList);

    useEffect(() => {

        const weatherFunc = async() => {
            const response = await weather(serviceKey);
            console.log("response: ", response);
            const temp = response.data.response.body.items.item.filter(x=> x.category == "T1H")[0].fcstValue;
            const rain = response.data.response.body.items.item.filter(x=>x.category == "RN1")[0].fcstValue;
            const sky = response.data.response.body.items.item.filter(x=>x.category == "SKY")[0].fcstValue;
            setWeatherList({
                temp: temp,
                rain: rain,
                sky: sky
            })
          }

        weatherFunc();
    }, [])

    return (
        <div>
            <div>온도: {weatherList?.temp}</div>
            <div>강수: {weatherList?.rain}</div>
            <div>하늘: {weatherList?.sky}</div>
            {weatherList && weatherStatus(weatherList)}
        </div>
    )
}

export default index