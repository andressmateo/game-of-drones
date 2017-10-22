import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  margin-top: 10px;
  span {
    width: 50%;
  }
`;

const Score = ({ rounds, players }) => {
  return (
    <div>
      <h1>Score</h1>
      <Row>
        <strong>Round</strong> <strong>Winner</strong>
      </Row>
      {rounds.map((round, index) => (
        <Row key={index}>
          <span>{++index}</span>
          <span>{round >= 0 ? players[round].name : 'Tie'}</span>
        </Row>
      ))}
    </div>
  );
};

export default Score;
