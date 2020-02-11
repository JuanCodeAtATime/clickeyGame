import React from 'react';
const HelloDiv = () => {
    const myTopFavThing = 'Floating';
    return (
        <div>
            <h1>Hello World!</h1>;
            <h2>My Name is Juan</h2>
            <ul>
                <li> {myTopFavThing} </li>
                <li>Noodles</li>
                <li>Family</li>
            </ul>
        </div>
    )
}

export default HelloDiv;