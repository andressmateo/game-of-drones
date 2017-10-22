import React from 'react';
import styled from 'styled-components';

import { Card } from '../StyledComponents';

const Container = Card.extend`width: 500px;`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  margin-top: 12px;
  span,
  strong {
    width: 50%;
  }
`;

const PlayersList = ({ players, fetchPlayersStatus, fetchPlayers }) => {
  //  fetchPlayers();
  return (
    <Container>
      <h1>Players</h1>
      <Row>
        <strong>Player</strong> <strong>Games won</strong>
        <strong>Games lost</strong>
      </Row>
      {players.map(({ _id, gamesWon, name }) => (
        <Row key={_id}>
          <span>{name}</span>
          <span>{gamesWon}</span>
          <span>0</span>
        </Row>
      ))}
    </Container>
  );
};

export default PlayersList;
