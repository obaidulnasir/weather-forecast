import React from 'react';

const BasicWeather = () => {
    return (
        <div className='w-3/4 mx-auto'>

            <div className='flex items-center justify-between border'>

                <div className='border-2'>
                    {/* weather logo, humilidty, temperature, wind speed */}
                    <h3 className='font-bold text-4xl text-green-500'>Hello</h3>
                </div>
                <div className='border-2'>
                    {/* ekahane country name, day, time, weather condition hobe */}
                    <h3 className='font-bold text-4xl text-green-500'>Cox's Bazar</h3>
                </div>
               
            </div>
        </div>
    );
};

export default BasicWeather;