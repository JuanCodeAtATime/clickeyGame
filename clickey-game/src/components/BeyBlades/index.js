import React from 'react';
import "./style.css"

const BeyBlades = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>Name: </li> {props.name}
                <li>Type: </li> {props.type}
            </ul>
        </div>
        <button onClick={() => props.removeBey(props.id)} className="remove">X</button>
    </div>
);

export default BeyBlades;