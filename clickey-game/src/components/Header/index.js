import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header text-center">
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <p className="lead">Current Score: {props.score} </p>
                <p className="lead">High Score: {props.highScore}</p>
                <p className="lead"><em>{props.message}</em></p>

            </div>
        </div>

    );
}

export default Header;