import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Card, Button, LinkButton } from '../StyledComponents';
import { statusTypes } from '../../utils';

const Container = Card.extend`
  width: 500px;
  height: auto;
  input {
    font-size: 13px;
    padding: 7px 11px;
    border: solid 1px #d3dbe7;
    border-radius: 3px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    justify-content: space-between;
    height: auto;
    span {
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      margin-top: 20px;
    }
    h5 {
      color: red;
    }
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { player1: '', player2: '', error: '' };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { player1, player2 } = this.state;
    if (player1 && player2) {
      const { createPlayers } = this.props;
      if (createPlayers) {
        createPlayers([{ name: player1 }, { name: player2 }]);
      }
    } else {
      this.setState({ error: 'Please enter the name of each player' });
    }
  };

  render() {
    const { createPlayersStatus } = this.props;
    const { error } = this.state;
    const redirect =
      createPlayersStatus !== statusTypes.SUCCEED_STATE ? (
        ''
      ) : (
        <Redirect to="/game" />
      );
    return (
      <Container>
        {redirect}
        <h1>Enter player's names</h1>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>Player 1</label>
            <input
              type="text"
              onChange={e => this.setState({ player1: e.target.value })}
            />
          </span>
          <span>
            <label>Player 2</label>
            <input
              type="text"
              onChange={e => this.setState({ player2: e.target.value })}
            />
          </span>
          <h5>{error}</h5>
          <span>
            <Button type="submit">Start</Button>
            <LinkButton to="/players">View All Players</LinkButton>
          </span>
        </form>
      </Container>
    );
  }
}
export default Register;
