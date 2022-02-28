import { useState } from "react";


const useWeather = () => {
    const [cityWeather, setCityWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);




    // const basicW = cityWeather?.list[0];

    // useEffect(()=>{
    //     fetch("./onecall.json")
    //     .then(res => res.json())
    //     .then(data => setForecast(data));
    //     // console.log(forecast);
    // },[])

    // const we = ()=>{
    //    setIsLodding(true)
    //         fetch("./current.json")
    //         .then(res=> res.json())
    //         .then(data => setCityWeather(data));
    //         setIsLodding(false);
    //         // console.log(cityWeather?.list[0]?.coord?.lat);
    // }

    // daily weather 
    const currentWeather = (cityName) => {
        setIsLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=be50a25517c85b53aadc1715321af62f`)
            .then(res => res.json())
            .then(data => setCityWeather(data));


        const lat = cityWeather?.list[0]?.coord?.lat;
        const lon = cityWeather?.list[0]?.coord?.lon;

        if (cityWeather) {
            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=74a8802d5091210cdbca89eb149584d6`)
                .then(res => res.json())
                .then(data => setForecast(data));
            console.log(cityWeather);
            console.log(forecast);
            setIsLoading(false);
            //    }
            //    // console.log(lat, lon)

        };
    }




    // const weatherCity = (cityName) => {
    //     console.log(cityName);

    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74a8802d5091210cdbca89eb149584d6`)
    //         .then(res => res.json())
    //         .then(data => setCityWeather(data));


    // };



    return {
        cityWeather,
        forecast,
        currentWeather,
        isLoading

    }
}

export default useWeather;