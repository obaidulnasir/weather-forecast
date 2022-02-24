import { useEffect, useState } from "react";


const useWeather = () => {
    const [cityWeather, setCityWeather] = useState([]);
    const [forecast, setForecast] = useState([]);


    // const lat = cityWeather?.list[0]?.coord?.lat;
    // const lon = cityWeather?.list[0]?.coord?.lon;
    // console.log(lat, lon)

    useEffect(()=>{
        fetch("./current.json")
        .then(res=> res.json())
        .then(data => setCityWeather(data))
        // console.log(cityWeather?.list[0]?.coord?.lat);
    },[]);
 
    useEffect(()=>{
        fetch("./onecall.json")
        .then(res => res.json())
        .then(data => setForecast(data));
        // console.log(forecast);
    },[])

    // daily weather 
    // const currentWeather = (cityName)=>{
    //    fetch(`http://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=be50a25517c85b53aadc1715321af62f`)
    //    .then(res=> res.json())
    //    .then(data => setCityWeather(data));
    //    console.log(cityWeather);
    // };

   


    // const weatherCity = (cityName) => {
    //     console.log(cityName);

    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74a8802d5091210cdbca89eb149584d6`)
    //         .then(res => res.json())
    //         .then(data => setCityWeather(data));

        
    // };

    return {
        cityWeather,
        forecast,
        
    }
}

export default useWeather;