import React, { useState } from 'react';

const Modal = (props) => {
    // const {dt} = props.it;
    // const {dt}= props.dailyData;
    // console.log(dt);
    // console.log(props.it?.clouds)
     const [modal, setModal] = useState("hidden");
   
    const openModal= ()=>{
        setModal("")
        console.log("open hit")
    };
    const closeModal = ()=> {
        setModal("hidden");
    };


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


    return (
        <div >
            <button onClick={()=>openModal()} className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition" >Open modal</button>

            <div id="modal" className={`${modal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}>
                <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">

                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center bg-green-600 text-white text-xl rounded-t-md px-4 py-2">
                        <h3>{createDate(props?.it?.dt)}</h3>
                        <button onClick={()=>closeModal()}>x</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="max-h-48 overflow-y-scroll p-4">
                       {props.it.temp.max}
                    </div>


                    <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={()=>closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;