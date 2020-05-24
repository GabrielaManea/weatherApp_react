import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form'
import Weather from './components/Weather';
import ToggleMode from './components/ToggleMode';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class App extends React.Component {
  state = {
    temperature: '',
    location: '',
    humidity: '',
    precip: '',
    icon: '',
    description: '',
    wind: '',
    time: '',
    error: '',
    rotation: 0,
    darkMode: false
    }

  onSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const data = response;
           if(city) {
            this.setState({
              temperature: data.current.temperature,
              location: data.location.name,
              humidity: data.current.humidity,
              precip: data.current.precip,
              icon: data.current.weather_icons,
              description: data.current.weather_descriptions,
              wind: data.current.wind_speed,
              time: data.location.localtime,
              error: ""
            })
          }
      })
      .catch((error) => {
        this.setState({
          temperature: '',
          location: '',
          humidity: '',
          precip: '',
          icon: '',
          description: '',
          wind: '',
          time: '',
          error: "Something went wrong. Please refresh and try again!"
        })
      })
  }

  onClick = (e) => {
    e.preventDefault();
    let newRotation = this.state.rotation + 180;
    if(newRotation === 180){
      newRotation = -180;
    }

    this.setState({
      rotation: newRotation,
      darkMode: !this.state.darkMode
    })
  }


  render() {
    return (
      <div className= {`app ${this.state.darkMode ? "dark-mode" : ""} `}>
        <ToggleMode style = {{transform: `rotate(${this.state.rotation}deg)`, transitionDuration: "0.2s"}} onClick={this.onClick} />
        <div className="container">
          <Title></Title>
          <Form onSubmit={this.onSubmit} />
          <Weather {...this.state}/>
        </div>
      </div>
      
    );
  }
}
