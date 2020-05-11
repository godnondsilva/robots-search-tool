import React from 'react';

import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`} />
            <h2 className="Heading">{props.robot.name} </h2>
            <p>Username: {props.robot.username} </p>
            <p>Email: {props.robot.email} </p>
            <p>Phone: {props.robot.phone} </p>
            <p>Website: {props.robot.website} </p>
        </div>
    )
}