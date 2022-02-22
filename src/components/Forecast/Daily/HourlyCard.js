import React from 'react';
import useW from '../../../hooks/useW';

const HourlyCard = () => {
    const { cityWeather } = useW();
    const { list } = cityWeather;
    const sliceList = list?.slice(0, 6);

    console.log(list);
    return (
        <div className='w-4/5 mx-auto'>
            <div className='my-3'>
                <h4 className='font-bold text-green-500 text-3xl text-center'>Next 18 Hour Expected Weather</h4>
            </div>
            <div className='grid grid-cols-6 gap-4'>
                {sliceList?.map((it) => (
                    <div className='px-2 py-2 rounded-xl shadow-lg shadow-yellow-400 '>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${it?.weather[0]?.icon}@2x.png`} alt="" />
                        </div>
                        <div className='text-center text-green-500 text-lg'>
                            <p>{it?.main?.feels_like}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg><span>{it?.main?.temp_max}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg><span>{it?.main?.temp_min}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyCard;