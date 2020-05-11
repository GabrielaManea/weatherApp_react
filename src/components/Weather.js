import React from 'react';
import './../App.css';

import Img from '../sun.png'

const Weather = ({location, time, icon, temperature, humidity, precip, wind, description, error}) => {
    return (
        <div className="weather-container">
            <div className="header">
                {location && <h2 className="weather-location">{location}</h2>}
                {time && <h3>{time}</h3>}
            </div>
            <div className="inner-container">
                <div className="image">
                    {icon && <img src={icon}/> }
                </div>
                <div className="current">
                    {temperature  && <h2 className="weather-value"><span>{temperature}</span>&deg; C</h2>}
                    {humidity  && <p>Humidity: <span>{humidity}</span>%</p>}
                    {precip  && <p>Precip: <span>{precip}</span>%</p> }
                    {wind  && <p>Wind: <span>{wind}</span>km/h</p> }  
                </div>
            </div>
            <div className="footer">
                {description && <h3>{description}</h3> }
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;