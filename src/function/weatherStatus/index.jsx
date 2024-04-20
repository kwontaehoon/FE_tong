export const weatherStatus = (weather) => {
    console.log("weather: ", weather);
    switch(true){
        case weather.sky == "1": return <img src="/svg/weather-sun.svg" />
        case weather.sky == "3": return <img src="/svg/weather-cloud.svg" />
        case weather.sky == "4": return <img src="/svg/weather-cloud.svg" />
        case weather.rain == "강수없음": return <img src="/svg/weather-cloud.svg" />
        case weather.rain == "1": return <img src="/svg/weather-sun-rain.svg" />
        case weather.rain == "2": return <img src="/svg/weather-sun-rain.svg" /> // 비/눈 svg 변경
        case weather.rain == "3": return <img src="/svg/weather-snow" />
        case weather.rain == "4": return <img src="/svg/weather-shower.svg" />
        default: return;
    }
}