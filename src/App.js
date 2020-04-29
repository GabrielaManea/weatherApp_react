import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form'
import Weather from './components/Weather';

const API_KEY = '28925e3b712fe6872fea5ccaf96eb235';

export default class App extends React.Component {
  state = {
    temperature: undefined,
    location: undefined,
    humidity: undefined,
    precip: undefined,
    icon: undefined,
    description: undefined,
    wind: undefined,
    time: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
    const data = await api_call.json();
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
    } else {
      this.setState({
        temperature: undefined,
        location: undefined,
        humidity: undefined,
        precip: undefined,
        icon: undefined,
        wind: undefined,
        description: undefined,
        time: undefined,
        error: 'please enter the values'
      })
    }
  }
  render() {
    return (
      <div className="container">
        <Title></Title>
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature}
        description={this.state.description}
        location={this.state.location}
        humidity={this.state.humidity}
        precip={this.state.precip}
        icon={this.state.icon}
        wind={this.state.wind}
        time={this.state.time}
        error={this.state.error}
        />
      </div>
    );
  }
}

