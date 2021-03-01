import React, { useEffect, useState } from 'react';
import data from '../../FakeData/data.json';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import Team from '../Team/Team';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    const addPlayer = (player) => {
        const newPlayer = [...cart, player];
        setCart(newPlayer);
    };

    useEffect(() => {
        setPlayers(data);
    }, []);

    return (
        <div>
            {players.map((player) => (
                <PlayersInfo player={player} addPlayer={addPlayer} />
            ))}
            <h2>Total Players: {players.length}</h2>
            <Team cart={cart} />
        </div>
    );
};

export default Players;
