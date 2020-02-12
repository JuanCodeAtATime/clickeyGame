import React from 'react';
import "./style.css";
import Background from './beyblade-bg.jpg';


const Wrapper = props => <div className="Wrapper" style={{ backgroundImage: `url(${Background})` }}>{props.children} </div>

export default Wrapper;


// <img src="/images/beyblade-bg.jpg" alt="backgroundImage"></img>