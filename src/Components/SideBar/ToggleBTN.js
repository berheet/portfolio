import React from 'react';
import './ToggleBTN.css';

const ToggleBTN = (props) => (
    <button className='toggle-button' onClick={props.click}> 
    <div className='toggle-button-line'/>
    <div className='toggle-button-line' />
    <div className='toggle-button-line'/>
    </button>
)
export default ToggleBTN;