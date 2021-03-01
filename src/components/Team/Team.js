import React from 'react';

const Team = (props) => {
    const { team } = props;
    const addTeam = team;
    const salary = addTeam.reduce((sum, player) => sum + player.salary, 0);
    const playerName = {
        width: '50%',
    };
    const playerSalary = {
        float: 'right',
        width: '50%',
    };

    return (
        <div className="text-center d-block">
            <h4>Players Added: {addTeam.length}</h4>
            <br />
            {addTeam.map((player) => (
                <div>
                    <h5>
                        <span style={playerName}>{player.name}</span>{' '}
                        <span style={playerSalary}>${player.salary}</span>
                    </h5>
                    {/* <h5>{player.salary}</h5> */}
                </div>
            ))}
            <hr />
            <h5>Total Salary: ${salary}</h5>
        </div>
    );
};

export default Team;
