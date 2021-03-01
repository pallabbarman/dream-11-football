import React from 'react';

const PlayersInfo = (props) => {
    const { player } = props;
    const { name, image, salary, gender } = player;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>Gender: {gender}</h4>
            <p>Salary: ${salary}</p>
        </div>
    );
};

export default PlayersInfo;
