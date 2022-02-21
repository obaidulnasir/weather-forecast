import useW from '../../hooks/useW';
import SearchField from '../SearchField/SearchField';

const BasicWeather = () => {
    const { cityWeather } = useW();


    console.log(cityWeather)
    // weatherCity("dhaka");


    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <SearchField></SearchField>
            </div>
            <div className='flex items-center justify-between border'>

                <div className=''>
                    {/* weather logo, humilidty, temperature, wind speed */}
                    <div className='flex items-center justify-between space-x-4'>
                        <div>
                            {/* <img src={`http://openweathermap.org/img/wn/${cityWeather?.weather[0]?.icon}@2x.png`} alt="icons" /> */}
                        </div>
                        <div>
                            <h3 className='font-bold text-4xl text-green-500'>{cityWeather?.main?.temp || "33"} F</h3>
                        </div>
                        <div className='text-yellow-300'>
                            <p>Humilidty: 50</p>
                            <p>Precitition: 87</p>
                            <p>Wind: {cityWeather?.wind?.speed || ""} mph</p>
                        </div>
                    </div>
                </div>

                <div className='border-2 text-right'>
                    {/* ekahane country name, day, time, weather condition hobe */}
                    <h3 className='font-bold text-4xl text-green-500'>{cityWeather?.city?.name}</h3>
                    <p className='text-2xl text-green-400'>Sunday, 6:30pm</p>
                    <p className='text-1xl text-yellow-300 text-right'>Weather Condition</p>
                    {/* <p>time : {(new Date(cityWeather?.list[0]?.dt * 1000 - (cityWeather?.city?.timezone * 1000)))}</p> */}
                </div>

            </div>
        </div>
    );
};

export default BasicWeather;