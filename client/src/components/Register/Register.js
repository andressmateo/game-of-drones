import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Card, Button, LinkButton } from '../StyledComponents';

const Container = Card.extend`
  width: 500px;
  height: 300px;
  input {
    font-size: 13px;
    padding: 7px 11px;
    border: solid 1px #d3dbe7;
    border-radius: 3px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    justify-content: space-between;
    height: 50%;
    span {
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
    }
  }
  button,
  a {
    margin-top: 30px;
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { player1: '', player2: '' };
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
      console.log('Error');
    }
  };

  render() {
    const { createPlayersStatus } = this.props;
    const redirect =
      createPlayersStatus !== 'SUCCESS' ? '' : <Redirect to="/game" />;
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
