import React from 'react';
import useW from '../../../hooks/useW';
import Modal from '../../Modal/Modal';

const Daily = () => {
    const { forecast } = useW();
    const forecastDaily = forecast.daily;
    // console.log(forecast)
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
    };

    // console.log(createDate(1645598754))

    // const dti = 1645610400;

    // var day = new Date(dti * 1000);

    // console.log(day.toUTCString()) // 'Fri, 15 Jan 2021 04:32:29 GMT'
    // console.log(day.toDateString()) // 'Fri Jan 15 2021'
    // day.toISOString()) // '2021-01-15T04:32:29.000Z'
    // console.log(day.toString()) // 'Fri Jan 15 2021 07:32:29 GMT+0300 (GMT+03:00)'

    //this Time for HOurly data
    // console.log(day.getHours(), ":", day.getMinutes()) // 13:00



    return (
        <div >
            <div className='w-4/5 mx-auto'>
                <br />
                <br />
                <div className='my-5'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500 text-4xl my-4 font-bold text-center'>Next 7 Days Expected Weather</p>
                </div>
                <br /><br />
                <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {forecastDaily?.map((it) => (
                        <div key={it.dt} className='p-4 rounded-xl border'>
                            <div className='flex justify-center'>

                                <img className='' src={`http://openweathermap.org/img/wn/${it?.weather[0]?.icon}@2x.png`} alt="" />

                            </div>
                            <div className='text-center text-green-500 text-lg'>
                                <p>{it?.main?.feels_like}</p>
                            </div>
                            <div>
                                <p className='text-center'>{createDate(it.dt)}</p>
                                {/* <p>{it?.temp.main}</p> */}
                                {/* <p>time: {(new Date(it?.dt * 1000 - (forecast?.timezone_offset * 1000)))}</p> */}
                            </div>
                            <div className='flex justify-between text-sm mt-3'>
                                <div>
                                    <span>Day: {it?.temp?.day} &#8451;</span>
                                </div>
                                <div>
                                    <span>Night: {it?.temp?.night} &#8451;</span>
                                </div>
                            </div>

                            {/* modal */}
                            <div className='text-center mt-3'>
                                <Modal it={it}></Modal>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Daily;