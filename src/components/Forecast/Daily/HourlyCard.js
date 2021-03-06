import React from 'react';
import useW from '../../../hooks/useW';

const HourlyCard = () => {
    const { forecast } = useW();
    // const { list } = cityWeather;
    const { hourly } = forecast;
    const sliceList = hourly?.slice(0, 12);

    //dti to Hour
    // const hour = hourly[0].dt;
    const createTime = (dt) => {
        const day = new Date(dt * 1000);
        return day.getHours();
    };

    console.log(forecast);
    return (
        <div className='w-4/5 mx-auto'>
            <br /><br />
            <div className='my-10'>
                <h4 className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500 text-4xl my-4 font-bold text-center'>Next 12 Hour Expected Weather</h4>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {sliceList?.map((it) => (
                    <div key={it?.dt} className='px-2 py-2 shadow-md rounded-xl border'>
                        <div className='text-center'>
                            <p>{createTime(it?.dt)}:00</p>
                            <div className='flex justify-center'>
                                <img className='d-block' src={`https://openweathermap.org/img/wn/${it?.weather[0]?.icon}@2x.png`} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <p>T: {it?.temp}&#8451;</p>
                            <p>W: {it?.wind_speed} km/h</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>D: {it?.dew_point}</p>
                            <p>V: {it?.visibility}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyCard;