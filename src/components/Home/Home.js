import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import Forecast from '../Forecast/Forecast';

const Home = () => {
    return (
        <div>
            <BasicWeather></BasicWeather>
            <Forecast></Forecast>
        </div>
    );
};

export default Home;