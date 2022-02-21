import { createContext } from "react";
import useWeather from "../../hooks/useWeather";

export const WeatherContext= createContext();

const WeatherProvider = ({children})=>{
    const allContext = useWeather();

    return(
        <WeatherContext.Provider value={allContext}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;