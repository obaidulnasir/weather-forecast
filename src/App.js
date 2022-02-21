import './App.css';
import BasicWeather from './components/BasicWeather/BasicWeather';
import WeatherProvider from './components/WeatherProvider/WeatherProvider';

function App() {
  return (
    <div className="bg-sky-900 h-screen">
     <WeatherProvider>
     <br />
       <BasicWeather></BasicWeather>
     </WeatherProvider>
    </div>
  );
}

export default App;
