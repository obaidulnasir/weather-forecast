import React from 'react';
import { useForm } from 'react-hook-form';

const SearchField = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div>
             <div className="text-center my-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2' type="text" {...register("cityName")} />
                    <input className='bg-green-400 py-2 px-4' type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default SearchField;