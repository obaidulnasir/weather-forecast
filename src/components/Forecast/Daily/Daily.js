import React from 'react';
import useW from '../../../hooks/useW';

const Daily = () => {
    const {forecast}= useW();
    const forecastDaily = forecast.daily;
    console.log(forecast)
    console.log(forecast.daily);

    // function createDate(dt, type) {
    //     var day = new Date(dt * 1000);
    //     if (type == "long") {
    //         let options = {
    //             weekday: "long",
    //             year: "numeric",
    //             month: "long",
    //             day: "numeric",
    //         };
    //         return day.toLocaleString("en-us", options); // Friday, January 15, 2021
    //     } else {
    //         return day.toLocaleString("en-us", { weekday: "long" }); // Friday
    //     }
    // }


    //For day name;
    function createDate(dt) {
        var day = new Date(dt * 1000);
        // if (type === "long") {
        //     let options = {
        //         weekday: "long",
        //         year: "numeric",
        //         month: "long",
        //         day: "numeric",
        //     };
        //     return day.toLocaleString("en-us", options); // Friday, January 15, 2021
        // } else {
            return day.toLocaleString("en-us", { weekday: "long" }); // Friday
    }

  console.log(createDate(1645598754))

    const dti = 1645610400;
    
    var day = new Date(dti*1000);
    
    // console.log(day.toUTCString()) // 'Fri, 15 Jan 2021 04:32:29 GMT'
    // console.log(day.toDateString()) // 'Fri Jan 15 2021'
    // console.log(day.toISOString()) // '2021-01-15T04:32:29.000Z'
    // console.log(day.toString()) // 'Fri Jan 15 2021 07:32:29 GMT+0300 (GMT+03:00)'

    //this Time for HOurly data
    console.log(day.getHours(), ":", day.getMinutes()) // 13:00
 
    return (
        <div className='w-4/5 mx-auto'>
            <div className='my-3'>
                <h4 className='font-bold text-green-500 text-3xl text-center'>Next 7 Days Expected Weather</h4>
            </div>
            <div className='grid grid-cols-6 gap-4'>
                {forecastDaily?.map((it) => (
                    <div key={it.dt} className='px-2 py-2 rounded-xl shadow-lg shadow-yellow-400 '>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${it?.weather[0]?.icon}@2x.png`} alt="" />
                        </div>
                        <div className='text-center text-green-500 text-lg'>
                            <p>{it?.main?.feels_like}</p>
                        </div>
                        <div>
                          <p className='text-center'>{createDate(it.dt)}</p>
                            {/* <p>time: {(new Date(it?.dt * 1000 - (forecast?.timezone_offset * 1000)))}</p> */}
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg><span>{it?.temp?.max}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg><span>{it?.temp?.min}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Daily;