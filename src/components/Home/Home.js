import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import Chart from '../Chart/Chart';
import Forecast from '../Forecast/Forecast';

const Home = () => {
    return (
        <div>
            {/* <BasicWeather></BasicWeather> */}
            {/* <Chart></Chart> */}
            <Forecast></Forecast>
        </div>
    );
};

export default Home;