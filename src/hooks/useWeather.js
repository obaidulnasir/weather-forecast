import { useState } from "react";


const useWeather = () => {
    const [cityWeather, setCityWeather] = useState({});

    
    const weatherCity = (cityName) => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=74a8802d5091210cdbca89eb149584d6")
            .then(res => res.json())
            .then(data => setCityWeather(data));
    }

    return {
        cityWeather,
        weatherCity
    }
}

export default useWeather;