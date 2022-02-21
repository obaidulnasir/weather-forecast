import { useContext } from "react"
import { WeatherContext } from "../components/WeatherProvider/WeatherProvider";

const useW = ()=>{
    return useContext(WeatherContext)
}

export default useW;