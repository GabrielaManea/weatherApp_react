import React from 'react';
import '../App.css'

const Form = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="city" placeholder="City.."/>
            <button>search!</button>
        </form>
    )
}

export default Form;