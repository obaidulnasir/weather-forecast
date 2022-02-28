import React from 'react';
import { useForm } from 'react-hook-form';
import useW from '../../hooks/useW';

const SearchField = () => {
    const { currentWeather } = useW()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.city);
        currentWeather(data.city)
        console.log(errors);
        reset();
    };
    return (
        <div>
            <div className="text-center my-2">
                {/* <form onSubmit={()=>handleSubmit(onSubmit)}>
                    <input className='py-2' type="text" {...register("cityName")} />
                    <input className='bg-green-400 py-2 px-4' type="submit" value="Search" />
                </form> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2' type="text" placeholder="Enter Your CityName" {...register("city", {})} />

                    <input className='bg-gradient-to-r from-green-500 to-yellow-500 py-2 px-4' type="submit" value="Search" />
                    {/* "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-2 hover:from-pink-500 hover:to-yellow-500 transition" */}
                </form>
            </div>
        </div>
    );
};

export default SearchField;