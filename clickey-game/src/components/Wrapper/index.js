import React from 'react';
import "./style.css";
import Background from './beyblade-bg.jpg';


const Wrapper = props => <div className="Wrapper"
    style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'top',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }}>

    {props.children} </div>

export default Wrapper;


