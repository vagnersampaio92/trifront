import React from 'react';
import './styles.css';

const Backdrops = props =>(
    <div className='backdrops' onClick={props.click}/>
);
export default Backdrops;