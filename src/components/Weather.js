import React from 'react';
import './../App.css';

import Img from '../sun.png'
 
const Weather = (props) => {
    return (
        <div className="weather-container">
            <div className="header">
                <h2 className="weather-location">{props.location}</h2>
                <h3>{props.time}</h3>
            </div>
            <div className="inner-container">
                <div className="image">
                    <img src={props.icon} />
                </div>
                <div className="current">
                    {props.temperature >=0 && <h2 className="weather-value"><span>{props.temperature}</span>&deg; C</h2>}
                    {props.humidity >=0 && <p>Humidity: <span>{props.humidity}</span>%</p>}
                    {props.precip >= 0 && <p>Precip: <span>{props.precip}</span>%</p> }
                    {props.wind >=0 && <p>Wind: <span>{props.wind}</span>km/h</p> }  
                </div>
            </div>
            <div className="footer">
                <h3>
                    {props.description}
                </h3>
            </div>
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;