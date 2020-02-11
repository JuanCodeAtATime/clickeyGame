import React from 'react';
import "./style.css"

const BeyBlades = props => (
    <div className="card click col-3" onClick={() => props.handleClickEvent(props.name)}>
        <div className="img-container">
            <img alt={"BeyBlade"} src={props.image} />

        </div>
        <div className="content">
            <p class="beyName"><strong>Name: </strong>{props.name} <br></br><strong>Type: </strong>{props.type}</p>
        </div>

    </div>
);

export default BeyBlades;