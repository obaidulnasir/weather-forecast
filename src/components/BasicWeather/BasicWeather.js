import useW from '../../hooks/useW';
import SearchField from '../SearchField/SearchField';

const BasicWeather = () => {
    const { cityWeather } = useW();


    console.log(cityWeather);
    // weatherCity("dhaka");


    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <SearchField></SearchField>
            </div>
            <br />
            <div className='w-4/5 mx-auto my-8 border shadow-lg p-3 rounded-lg'>
                <div className='text-center'>
                    <p className='text-4xl font-bold'>{cityWeather?.list[0]?.name}, {cityWeather?.list[0]?.sys?.country}</p>
                    <p className='text-8xl my-4 font-thin'>
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



        </div>
    );
};

export default BasicWeather;