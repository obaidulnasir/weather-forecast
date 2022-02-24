import { useEffect, useState } from "react";


const useWeather = () => {
    const [cityWeather, setCityWeather] = useState([]);
    const [forecast, setForecast] = useState([]);

   useEffect(()=>{
       fetch("./forecast.json")
       .then(res=> res.json())
       .then(data => setCityWeather(data))
       console.log(cityWeather);
   },[]);

   useEffect(()=>{
       fetch("./onecall.json")
       .then(res => res.json())
       .then(data => setForecast(data));
       console.log(forecast);
   },[])


    // const weatherCity = (cityName) => {
    //     console.log(cityName);

    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74a8802d5091210cdbca89eb149584d6`)
    //         .then(res => res.json())
    //         .then(data => setCityWeather(data));

        
    // };

    return {
        cityWeather,
        forecast
    }
}

export default useWeather;