import React from 'react';
import Daily from './Daily/Daily';
import HourlyCard from './Daily/HourlyCard';

const Forecast = () => {


    return (
        <div>
            <div className='mt-1.5'>
                <hr />
                <div className="flex justify-center space-x-4 mt-2">
                    {/* <Link to={`${url}`}>
                        <button className="btn btn-primary mx-1" type="button">My Order</button>
                    </Link>
                    <Link to={`${url}/addProduct`}>
                        <button className="btn btn-primary mx-1" type="button">Add Product</button>
                    </Link> */}
                    <HourlyCard></HourlyCard>
                    {/* <Route path={url} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Hourly</Route>

                    <Route path={`${url}/daily`} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Daily</Route> */}

                    {/* <Link to={url} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Hourly</Link>

                    <Link to={`${url}/daily`} className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500"> Daily</Link> */}

                    {/* <a href="/projects" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Projects</a>
                    <a href="/reports" className="font-bold px-3 py-2 text-yellow-500 rounded-lg hover:bg-slate-100 hover:text-green-500">Reports</a> */}

                </div>
            </div>
            <div className='mt-4'>
                {/* <Switch>
                    <Route exact path={path}>
                        <HourlyCard></HourlyCard>
                    </Route>
                    <Route exact path={`${path}/addProduct`}>
                        <Daily></Daily>
                    </Route>

                </Switch> */}
                <Daily></Daily>  
            </div>
        </div>
    );
};

export default Forecast;