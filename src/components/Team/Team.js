import React from 'react';

const Team = (props) => {
    const { cart } = props;
    const addCart = cart;
    const money = addCart.reduce((sum, player) => sum + player.salary, 0);
    return (
        <div>
            <h3>Players Added: {addCart.length}</h3>
            <h4>Players salary: {money}</h4>
        </div>
    );
};

export default Team;
