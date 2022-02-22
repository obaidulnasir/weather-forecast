import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Daily from './Daily/Daily';
import Hourly from './Hourly/Hourly';

const Forecast = () => {
    const { url, path } = useRouteMatch();
    return (
        <div>
            <div className='mt-1.5'>
                <hr />
                <nav className="flex justify-center space-x-4 mt-2">
                    
                    <Link to={url} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Hourly</Link>
                    <Link to={`${url}/daily`} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Daily</Link>
                   
                    {/* <a href="/projects" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Projects</a>
                    <a href="/reports" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Reports</a> */}
                </nav>
            </div>
            <div className='mt-3'>
                    <Switch>
                        <Route exact path={path}>
                            <Hourly></Hourly>
                        </Route>
                        <Route exact path={`${path}/daily`}>
                            <Daily></Daily>
                        </Route>
                    </Switch>
            </div>
        </div>
    );
};

export default Forecast;