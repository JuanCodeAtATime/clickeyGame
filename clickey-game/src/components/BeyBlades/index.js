import React from 'react';
import "./style.css"

const BeyBlades = props => (
    <div className="card click" onClick={() => props.handleClickEvent(props.name)}>
        <div className="img-container">
            <img alt={"BeyBlade"} src={props.image} />

        </div>
        <div className="content">
            <p className="beyName"><strong></strong>{props.name} <br></br><strong>Type: </strong>{props.type}</p>
        </div>

    </div>
);

export default BeyBlades;