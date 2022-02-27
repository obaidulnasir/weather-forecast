import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useW from '../../hooks/useW';

const Chart = () => {
    
    const {forecast} = useW();
    const { daily } = forecast;
    console.log(daily)

    // const createTime = (dt) => {
    //     const day = new Date(dt * 1000);
    //     return day.getHours();
    // };
    const data = {
        hour: daily?.dt,
        temp: daily?.humidity
    }
    
    return (
        
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rain" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pop" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        
    );
};

export default Chart;