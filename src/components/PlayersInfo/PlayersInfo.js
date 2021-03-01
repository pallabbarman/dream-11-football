import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PlayersInfo.css';

const PlayersInfo = (props) => {
    const { player, addPlayer } = props;
    const { name, image, salary, gender } = player;
    return (
        <div>
            <img src={image} alt="" />
            <h2 className="card-text">{name}</h2>
            <h4 className="card-text">Gender: {gender}</h4>
            <p className="card-text">Salary: ${salary}</p>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => addPlayer(player)}
            >
                <FontAwesomeIcon icon={faUserPlus} />
                Add Player
            </button>
        </div>
    );
};

export default PlayersInfo;
