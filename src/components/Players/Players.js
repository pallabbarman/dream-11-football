import React, { useEffect, useState } from 'react';
import data from '../../FakeData/data.json';
import PlayersInfo from '../PlayersInfo/PlayersInfo';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(data);
    }, []);

    return (
        <div>
            <h1>Hi I am {players.length}</h1>
            {players.map((player) => (
                <PlayersInfo player={player} />
            ))}
        </div>
    );
};

export default Players;
