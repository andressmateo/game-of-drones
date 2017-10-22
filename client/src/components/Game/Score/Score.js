import React from 'react';

const Score = ({ rounds, players }) => {
  return (
    <div>
      <h1>Score</h1>
      {rounds.map((round, index) => (
        <div key={index}>
          <h3>
            round: {++index} winner:{round >= 0 ? players[round].name : 'Tie'}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Score;
