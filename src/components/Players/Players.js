import React, { useEffect, useState } from 'react';
import data from '../../FakeData/data.json';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import Team from '../Team/Team';
import './Players.css';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState([]);

    const addPlayer = (player) => {
        const newTeam = [...team, player];
        setTeam(newTeam);
    };

    useEffect(() => {
        setPlayers(data);
    }, []);

    return (
        <div className="total-info">
            <div className="players-info">
                {players.map((player) => (
                    <PlayersInfo player={player} addPlayer={addPlayer} />
                ))}
            </div>
            <div className="team-info text-center d-block">
                <h1>Team Info</h1>
                <h3>Total Players: {players.length}</h3>
                <hr />
                <Team team={team} />
            </div>
        </div>
    );
};

export default Players;
