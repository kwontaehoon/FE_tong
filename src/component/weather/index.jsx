import React, { useState, useEffect } from 'react'
import { weather } from '../../hooks/weather/Weather';
import { weatherStatus } from '../../function/weatherStatus';

const index = ({reservation, data}) => {

    const serviceKeyIncoding = "UQ8rHfkilyp7O5%2FdWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc%2Fafb3ecEvI3k0uR6eNW2YObO5Q%2FGQ%3D%3D";
    const serviceKey = "UQ8rHfkilyp7O5/dWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc/afb3ecEvI3k0uR6eNW2YObO5Q/GQ==";
    const [weatherList, setWeatherList] = useState();

    useEffect(() => {

        const weatherFunc = async() => {
            const response = await weather(serviceKey, data);
            const temp = response.data.response.body.items.item.filter(x=> x.category == "TMP")[0].fcstValue;
            const rain = response.data.response.body.items.item.filter(x=>x.category == "PTY")[0].fcstValue;
            const sky = response.data.response.body.items.item.filter(x=>x.category == "SKY")[0].fcstValue;
            const rainPersent = response.data.response.body.items.item.filter(x=>x.category == "POP")[0].fcstValue;
            const humidity = response.data.response.body.items.item.filter(x=>x.category == "REH")[0].fcstValue;
            // const high = response.data.response.body.items.item.filter(x=>x.category == "TMX")[0].fcstValue;
            // const low = response.data.response.body.items.item.filter(x=>x.category == "TMN")[0].fcstValue;
            setWeatherList({
                temp: temp,
                rain: rain,
                rainPersent: rainPersent,
                sky: sky,
                humidity: humidity
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
            <div className='flex items-center'>
                <div className='flex flex-1 items-center'>
                    {weatherList && weatherStatus(weatherList)}
                    <div className='ml-1 text-xl text-grey10 font-bold' style={{marginRight: "10px"}}>{weatherList?.temp}º</div>
                    <div className='text-grey04'>{data.location}</div>
                </div>
                <div className='flex absolute right-5 text-sm'>
                    <div className='text-grey04'>강수확률</div>
                    <div className='font-bold mx-1'>{weatherList?.rainPersent}%</div>
                    <div>/</div>
                    <div className='text-grey04'>습도</div>
                    <div className='font-bold ml-1'>{weatherList?.humidity}%</div>
                </div>
            </div>}
        </div>
    )
}

export default index