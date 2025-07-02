import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Wonderland",
        feels_like: 43.96,
        humidity: 50,
        temp: 36.96,
        temp_max: 36.96,
        temp_min: 36.96,
        weather: "broken clouds"
    })

    let UpdateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
  return (
    <div>
      <h1>Weather App by Adarsh</h1>
      <SearchBox UpdateInfo={UpdateInfo}/>
      <InfoBox Info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
