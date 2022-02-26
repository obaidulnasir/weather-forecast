import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home/Home';
import WeatherProvider from './components/WeatherProvider/WeatherProvider';

function App() {
  return (
    // className="bg-sky-900"
    <div >
      <WeatherProvider>
        <br />
        <BrowserRouter>
          <Switch>

            {/* <Route path="/daily">
            <Daily></Daily>
         </Route> */}
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;
