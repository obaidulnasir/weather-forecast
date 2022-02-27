import moment from 'moment';
import React, { useState } from 'react';
import { mockComponent } from 'react-dom/test-utils';

const Modal = (props) => {
    // const {dt} = props.it;
    // const {dt}= props.dailyData;
    // console.log(dt);
    // console.log(props.it?.clouds)
    const [modal, setModal] = useState("hidden");

    const openModal = () => {
        setModal("")
        console.log("open hit")
    };
    const closeModal = () => {
        setModal("hidden");
    };

    function createDate(dt, type) {
        const day = new Date(dt * 1000);
        if (type === "long") {
            let options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            return day.toLocaleString("en-us", options); // Monday, Jun 15, 2022
        } else {
            return day.toLocaleString("en-us", { weekday: "long" }); // Monday
        };
    };

    // const createTime = (dt) => {
    //     const day = new Date(dt * 1000);
    //     // return day.getHours();
    //     return (day.getHours(), ":", day.getMinutes()) // 13:00
    // };
// createTime(props.dt)


    return (
        <div >
            <button onClick={() => openModal()} className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition" >Open modal</button>

            <div id="modal" className={`${modal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}>
                <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">

                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center bg-green-600 text-white text-xl rounded-t-md px-4 py-2">
                        <h3>{createDate(props?.it?.dt, "long")}</h3>
                        <button onClick={() => closeModal()}>x</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    {/* {props.it.temp.max} */}
                    <div className="max-h-48 overflow-y-scroll p-4">
                        <div>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'></p>
                                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500 text-4xl my-4 font-thin'>
                                    {props?.it?.temp?.max}&#8451;
                                </p>
                                <p className='tex-lg'>
                                    {props?.it?.weather?.description}
                                </p>
                            </div>
                            <div className='grid grid-cols-3 text-sm gap-4 my-4'>
                                <div>
                                    <p>Feels Like {props?.it?.temp?.max }&#8451;</p>
                                </div>
                                <div>
                                    <p>Wind speed { } km/h</p>
                                </div>
                                <div>
                                    <p>Humidity { }</p>
                                </div>
                                <div>
                                    <p>Sunrise: {moment(props?.it?.sunrise).format('LT')}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="px-4 py-2 border-t border-t-yellow-500 flex justify-end items-center space-x-4">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition" onClick={() => closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;