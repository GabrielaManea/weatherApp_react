import React from 'react';
import '../App.css'

const ToggleMode = ({style, onClick}) => {
    return (
        <div className="toggle-container">
            <div 
                style = {style}
                onClick ={onClick} 
                className = "toggle">
            </div>
        </div>
    )

}


export default ToggleMode;
