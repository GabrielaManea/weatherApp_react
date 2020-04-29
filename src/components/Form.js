import React from 'react';
import '../App.css'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City.."/>
            <button>Serach!</button>
        </form>
    )
}

export default Form;