import React from 'react';
import { useForm } from 'react-hook-form';
import useW from '../../hooks/useW';

const SearchField = () => {
    const { currentWeather } = useW()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data.city);
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

                    <input className='bg-green-400 py-2 px-4' type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default SearchField;