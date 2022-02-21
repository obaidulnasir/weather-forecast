import { useEffect, useState } from "react";


const useWeather = () => {
    const [cityWeather, setCityWeather] = useState({});

   useEffect(()=>{
       fetch("./forecast.json")
       .then(res=> res.json())
       .then(data => setCityWeather(data))
       console.log(cityWeather);
   },[])


    // const weatherCity = (cityName) => {
    //     console.log(cityName);

    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74a8802d5091210cdbca89eb149584d6`)
    //         .then(res => res.json())
    //         .then(data => setCityWeather(data));

        
    // };

    return {
        cityWeather,
    }
}

export default useWeather;