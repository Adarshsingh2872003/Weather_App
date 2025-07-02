import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import React, { useState } from 'react'
import'./SearchBox.css'

function SearchBox({UpdateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY ="c8ef1f2f55b86eec244c24a69a9e08e4"

    let getWeatherInfo = async()=>{
        try{
           let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
           let jsonResponse = await response.json();
           console.log(jsonResponse);

        let results = {
            city : city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather :  jsonResponse.weather[0].description
        };
        console.log(results);
        return results;
        }catch(err){
         throw err
        }
        
    }

    let handleChange = (e)=>{
        setCity(e.target.value );
    }

    let handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            console.log(city)
            setCity("")
            let newInfo = await getWeatherInfo();
            UpdateInfo(newInfo);
            setError(false)
        }catch(err){
            setError(true)
        }
       
    }

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <h3>search for the weather</h3>
        <TextField
         id="outlined-basic" 
         label="city name" 
         variant="outlined" 
         required
         value={city}
         onChange={handleChange} />
        <br></br><br></br>
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color:"red"}}>NO such place Exist</p>}
      </form>
    </div>
  )
}

export default SearchBox
