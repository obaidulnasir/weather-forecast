import React from 'react';
import Daily from './Daily/Daily';
// import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import HourlyCard from './Daily/HourlyCard';

const Forecast = () => {
    // const { path, url } = useRouteMatch();
    return (
        <div>
            <div className='mt-1.5'>
                <hr />
                <div className="flex justify-center space-x-4 mt-2">
                    <HourlyCard></HourlyCard>
                  
                    {/* <Link to={url} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Hourly</Link> */}
                    {/* <Link to={`${url}/daily`} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Daily</Link> */}
                   
                    {/* <a href="/projects" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Projects</a>
                    <a href="/reports" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Reports</a> */}
                    
                </div>
            </div>
            <div className='mt-4'>
            <Daily></Daily>  
            </div>
        </div>
    );
};

export default Forecast;