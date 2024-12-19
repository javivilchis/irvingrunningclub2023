import React, { useEffect, useState } from 'react'
import './../App.css'

const Weather = () => {
  //const [WeatherResponse, setWeatherResponse] = useState('');
  const [data, setData] = useState({});
  const [icon, setIcon] = useState('');
  const GetWeather = async (props) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=32.814&lon=-96.9489&appid=e465842ba80afb5a0a0b44d4bcaa4d1e&units=imperial`;
    const response = await fetch(url);

    const result = await response.json();
    setData(result);
    
    if(result){
      setIcon("https://openweathermap.org/img/wn/" + result.weather[0].icon + ".png");
    }
  }
  useEffect(() => {
    GetWeather();
  }, [])


    if ({data} === 0) {
      return (<div className="my-5 container">
        <div className="col-12">
          <p>Current temperature in {data.name}, Texas</p>
          <div className="ttl-project">
            <div className="pr-data">
              <h5>{data.main.temp}°F</h5>
              <span>Current Temperature</span>
             
            </div>
            <div className="pr-data">
              <h5 className="text-primary">{data.main.temp_max}°F</h5>
              <span>Max Temp</span>
            </div>
            <div className="pr-data">
              <h5>{data.main.temp_min}°F</h5>
              <span>Min Temp</span>
            </div>
            <div className="pr-data">
              <h5 className="text-success">{data.main.humidity}%</h5>
              <span>Humidity</span>
            </div>
          </div>
        </div>
      </div>)

    } else {
      return (
        <div className="container">
          <div className="col-4">
           <div className="mt-4 pb-0 text-left">
            <p className="mb-0 text-left">Irving, Texas</p>
            <div className="d-flex">
            {data.main ? <h1 className="text-secondary">{data.main.temp.toFixed()}°F</h1> : <h1 className="my-0 py-0">107°F</h1>}
            <img src={icon} alt="weather icon" width="100%" />
            </div>
          </div>
          </div>
         <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : <p className='bold'>107°F</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : <p className='bold'>45%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : <p className='bold'>10 MPH</p>}
              <p>Wind Speed</p>
            </div>
      </div>
      </div>)
    }
  
}

export default Weather;
