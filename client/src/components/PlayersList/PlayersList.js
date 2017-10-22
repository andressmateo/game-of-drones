import React, { Component } from 'react';
import styled from 'styled-components';

import { Card, LinkButton } from '../StyledComponents';
import { statusTypes } from '../../utils';

const Container = Card.extend`
  width: 500px;
  margin-bottom: 50px;
`;

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

class PlayersList extends Component {
  componentDidMount() {
    const { fetchPlayers, fetchPlayersStatus } = this.props;
    if (fetchPlayers && fetchPlayersStatus !== statusTypes.SUCCEED_STATE) {
      fetchPlayers();
    }
  }
  render() {
    const { players } = this.props;
    return (
      <div>
        <Container>
          <h1>Players</h1>
          <Row>
            <strong>Player</strong> <strong>Games won</strong>
          </Row>
          {players.map(({ _id, gamesWon, name }) => (
            <Row key={_id}>
              <span>{name}</span>
              <span>{gamesWon}</span>
            </Row>
          ))}
        </Container>
        <LinkButton to="/">Back to the game</LinkButton>
      </div>
    );
  }
}

export default PlayersList;
