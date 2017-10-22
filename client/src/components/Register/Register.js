import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
      <div>
        {redirect}
        <h1>Enter player's names</h1>
        <form onSubmit={this.handleSubmit}>
          Player 1
          <input
            type="text"
            onChange={e => this.setState({ player1: e.target.value })}
          />
          <br />
          Player 2
          <input
            type="text"
            onChange={e => this.setState({ player2: e.target.value })}
          />
          <br />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
}
export default Register;
