import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import search_icon from './Images/search-icon.png'
import demo from './Images/demo.png'
import cloud from './Images/Cloud.png'
import humidity from './Images/humidity.png'
import mist from './Images/mist.png'
import night from './Images/night.png'
import rain from './Images/Rain.png'
import snow from './Images/snow.png'
import sunny from './Images/Sunny.png'
import thunder from './Images/thunder.png'
import wind from './Images/wind.png'
import { useState } from 'react';


function App() {

  let api_key = "a2bc927c676538011eb4094ac7c1e663";

  const [w_icon, setw_icon] = useState(demo);

  const searchbtn = async () => {
    const element = document.getElementsByClassName("cityInpt")
    let inptvalue = (element[0].value);
    inptvalue = inptvalue.charAt(0).toUpperCase() + inptvalue.slice(1);
    console.log(inptvalue)

    if (inptvalue === "") {
      return 0;
    }
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${inptvalue}&units=Metric&appid=${api_key}`;

    let response = await fetch(api_url);
    let data = await response.json();

    const temp_ = document.getElementsByClassName("temp_");
    const city_ = document.getElementsByClassName("city_");
    const country = document.getElementsByClassName("country");
    const humidity_perc = document.getElementsByClassName("humidity_perc");
    const wind_perc = document.getElementsByClassName("wind_perc");
    const max_temp = document.getElementsByClassName("max_temp");
    const min_temp = document.getElementsByClassName("min_temp");

    if (inptvalue !== data.name) {
      alert("No Data Found, Please try with another city")
    } else {
      city_[0].innerHTML = data.name + ",";
      country[0].innerHTML = "&nbsp;" + data.sys.country;
      temp_[0].innerHTML = data.main.temp + "°c";
      humidity_perc[0].innerHTML = data.main.humidity + " %";
      wind_perc[0].innerHTML = data.wind.speed + " Km/hr";
      max_temp[0].innerHTML = data.main.temp_max + "°c";
      min_temp[0].innerHTML = data.main.temp_min + "°c";


      if (data.weather[0].icon === "01d") {
        setw_icon(sunny)
      } else if (data.weather[0].icon === "01n") {
        setw_icon(night)
      } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n" || data.weather[0].icon === "03d" || data.weather[0].icon === "03n" || data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setw_icon(cloud)
      } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n" || data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setw_icon(rain)
      } else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
        setw_icon(thunder)
      } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setw_icon(snow)
      } else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
        setw_icon(mist)
      } else {
        setw_icon(sunny)
      }
    }
  }


  return (
    <>
      <div className='mb-5 pt-3 text-decoration-underline'>
        <h1 className='main_heading'>Weather App</h1>
      </div>
      <div className='card_box'>
        {/* input bar starts */}
        <div className='inputDiv'>
          <input type='text' placeholder='Enter the City' className='cityInpt' />
          <img src={search_icon} alt='searchimg' onClick={searchbtn}></img>
        </div>
        {/* input bar ends */}

        {/* weather image starts */}
        <div className='imgDiv'>
          <img src={w_icon} alt="cloudimg" />
        </div>
        {/* weather image ends */}

        {/* Temp and city name start */}
        <div className='temp_city d-flex flex-column  align-items-center text-light'>

          <div className='city d-flex'>
            <p className='city_'>------,</p>
            <p className='country'>&nbsp; ---</p>
          </div>

          <div className='temp'>
            <p className='temp_'>----</p>
          </div>
          <hr className='w-75 mx-auto' />
        </div>
        {/* Temp and city name ends */}

        {/* max and min temp starts */}
        <div className='max_min text-light d-flex justify-content-center align-item-center'>

          <div className='maxElement d-flex justify-content-center align-item-center'>
            <div className='max_temp_text'>
              <p>Max Temp: </p>
            </div>
            <div className='max_temp'>
              <p>--</p>
            </div>
          </div>

          <div className='minElement d-flex justify-content-center align-item-center'>
            <div className='min_temp_text'>
              <p>Min Temp: </p>
            </div>
            <div className='min_temp'>
              <p>--</p>
            </div>
          </div>

        </div>
        {/* max and min temp ends */}

        {/* humidity and wind start */}

        <div className='hum_wind_Div'>

          <div className='hum_element d-flex'>
            <img className='hum_img' src={humidity} alt="" />
            <div className='data d-flex flex-column align-items-center justify-content-center'>
              <div className='humidity_perc'>
                ---
              </div>
              <div className='humidity_text'>
                Humidity
              </div>
            </div>
          </div>

          <div className='wind_element d-flex'>
            <img className='wind_img' src={wind} alt="" />
            <div className='data d-flex flex-column align-items-center justify-content-center'>
              <div className='wind_perc'>
                ---
              </div>
              <div className='wind_text'>
                Wind Speed
              </div>
            </div>
          </div>
        </div>
        {/* humidity and wind ends */}




      </div>
    </>
  );
}

export default App;
