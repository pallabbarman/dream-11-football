import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PlayersInfo.css';

const PlayersInfo = (props) => {
    const { player, addPlayer } = props;
    const { name, image, salary, gender, club } = player;

    return (
        <div className="player-detail">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Club: {club}</p>
            <p>Salary: ${salary}</p>
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => addPlayer(player)}
                >
                    <FontAwesomeIcon icon={faUserPlus} />
                    Add Player
                </button>
            </div>
        </div>
    );
};

export default PlayersInfo;
