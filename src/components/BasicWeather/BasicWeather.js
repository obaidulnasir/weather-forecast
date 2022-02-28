import useW from '../../hooks/useW';
import Daily from '../Forecast/Daily/Daily';
import HourlyCard from '../Forecast/Daily/HourlyCard';
import SearchField from '../SearchField/SearchField';

const BasicWeather = () => {
    const { cityWeather, forecast, isLoading } = useW();
    // const [myCityWeather, setMyCityWeather] = useState({});


    // useEffect(()=>{
    //     // fetch("http://api.openweathermap.org/data/2.5/find?q=dhaka&units=metric&appid=be50a25517c85b53aadc1715321af62f")
    //     fetch("./current.json")
    //     .then(res=> res.json())
    //     .then(data => setMyCityWeather(data));
    //     // console.log(myCityWeather)
    // },[]);

    console.log(cityWeather);


    console.log(forecast)




    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <SearchField></SearchField>
            </div>
            <br />

            {
                isLoading ? <div>
                    hello
                </div> : <div>
                    <div className='w-4/5 mx-auto my-8 border shadow-lg p-3 rounded-lg'>
                        <div className='text-center'>
                            {/* <p className='text-4xl font-bold'>{ myCityWeather?.list[0]?.name}, {myCityWeather?.list[0]?.sys?.country}</p> */}
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500 text-8xl my-4 font-thin'>
                                {cityWeather?.list[0]?.main?.temp}&#8451;
                            </p>
                            <p className='tex-lg'>
                                {cityWeather?.list[0]?.weather[0]?.description}
                            </p>
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-4'>
                            <div>
                                <p>Feels Like {cityWeather?.list[0]?.main?.feels_like}&#8451;</p>
                            </div>
                            <div>
                                <p>Wind speed {cityWeather?.list[0]?.wind?.speed} km/h</p>
                            </div>
                            <div>
                                <p>Humidity {cityWeather?.list[0]?.main?.humidity}</p>
                            </div>
                        </div>
                    </div>
                    <HourlyCard></HourlyCard>
                    <Daily></Daily>
                </div>
            }






        </div>
    );
};

export default BasicWeather;