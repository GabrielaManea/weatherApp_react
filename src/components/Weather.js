import React from 'react';
import './../App.css';

const Weather = ({location, time, icon, temperature, humidity, precip, wind, description, error}) => {
    return (
         <div className="weather-container">
            <div className="card-section">
                <div className="card-desc">
                    {location && <h2 className="location">{location}</h2>}
                    {time && <h4>{time}</h4>}
                    {description && <h3>{description}</h3>}
                </div>
                <div className="card-temp">
                    {icon && <img src={icon}/> }
                    {temperature  && <h1><span>{temperature}</span>&deg;C</h1>}
                </div>
            </div>
            <div className="card-details">
                {humidity  && <p>Humidity: <span>{humidity}</span>%</p>}
                {precip  && <p>Precip: <span>{precip}</span>%</p> }
                {wind  && <p>Wind: <span>{wind}</span>km/h</p> }
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}


export default Weather;
