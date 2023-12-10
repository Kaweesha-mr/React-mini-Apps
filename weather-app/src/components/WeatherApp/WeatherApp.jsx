import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


const WeatherApp = () => {

  let api_key = "e0b75e0e42b73936bf02514b2ae174fe";


  const [wicon,setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
  
    if (element[0].value === '') {
      return 0;
    }
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;
  
    try {
      let response = await fetch(url);
  
      // Check if the response is successful (status code 200)
      if (response.ok) {
        // Read the JSON response only once
        let data = await response.json();
  
        // Check if the necessary properties exist before accessing them
        if (data.main && data.main.humidity !== undefined && data.wind) {
          const humidity = document.getElementsByClassName('humudity-percent');
          const wind = document.getElementsByClassName('wind');
          const temp = document.getElementsByClassName('weather-temp');
          const location = document.getElementsByClassName('weather-location');
  
          humidity[0].innerHTML = data.main.humidity + '%';
          wind[0].innerHTML = data.wind.speed + 'kmph';
          temp[0].innerHTML = data.main.temp + 'C';
          location[0].innerHTML = data.name;

          //hello


          if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
            setWicon(clear_icon);
          }

          else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
            setWicon(cloud_icon);
          }

          else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
            setWicon(drizzle_icon);
          }
            
            else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
              setWicon(rain_icon);
            }
  
            else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
              setWicon(snow_icon);
            }
  
            else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
              setWicon(rain_icon);
            }
  
            else if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n'){
              setWicon(rain_icon);
            }
  
            else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
              setWicon(snow_icon);
            }
  
            else if(data.weather[0].icon === '50d' || data.weather[0].icon === '50n'){
              setWicon(cloud_icon);
            }
  
            else{
              setWicon(cloud_icon);
            }




        } else {
          console.error('Unexpected data structure in API response:', data);
        }
      } else {
        console.error('Failed to fetch weather data. Status code:', response.status);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return (
    <div className='container'>
      <div className="topbar">
        <input type="text" placeholder='Search' className="cityInput" />

        {/* this will call the arrow function search */}
        <div className="search-icon" onClick={() => { search() }}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>

      <div className="weather-temp"></div>
      <div className="weather-location">London</div>
      <div className="data-container">

        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humudity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind">18kmph</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default WeatherApp;
