import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Board from './Board';
import Score from './Score';

class Game extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      currentRound: 1,
      currentMove: 0,
      move: '',
      options: ['rock', 'paper', 'scissors'],
      rounds: [],
      rules: {
        paper: 'rock',
        rock: 'scissors',
        scissors: 'paper'
      }
    };
    this.state = { ...this.initialState };
  }

  getRoundWinner = function(player1move, player2move, rules, rounds) {
    if (rules[player1move] === player2move) {
      rounds.push(0);
      return { rounds };
    } else if (rules[player2move] === player1move) {
      rounds.push(1);
      return { rounds };
    } else {
      rounds.push(-1);
      return { rounds };
    }
  };

  getWinsByPlayer = function(rounds) {
    return rounds.reduce(
      (acc, winner) => {
        if (winner === 0) {
          acc.player1wins += 1;
        } else if (winner === 1) {
          acc.player2wins += 1;
        }
        return acc;
      },
      { player1wins: 0, player2wins: 0 }
    );
  };

  nextRound = function(currentMove, currentRound, rounds) {
    let wins = { player1wins: 0, player2wins: 0 };
    let result = {};
    if (currentMove === 1) {
      wins = this.getWinsByPlayer(rounds);
      const { player1wins, player2wins } = wins;
      if (player1wins === 3) {
        const { updatePlayer } = this.props;
        if (updatePlayer) {
          const { players } = this.props;
          const playerToUpdate = players[0];
          playerToUpdate.gamesWon += 1;
          updatePlayer(playerToUpdate);
        }
        alert('player 1 wins');
      } else if (player2wins === 3) {
        alert('player 2 wins');
      }
      return { currentMove: +!currentMove };
    } else {
      result = {
        currentMove: +!currentMove,
        currentRound: currentMove === 1 ? ++currentRound : currentRound
      };
    }
    return result;
  };

  clearState = function() {
    this.setState({ ...this.initialState });
  };

  play = newMove => {
    this.setState(({ move, currentMove, rules, rounds, currentRound }) => {
      if (currentMove === 1) {
        const newState = this.getRoundWinner(move, newMove, rules, rounds);
        const newState2 = this.nextRound(
          currentMove,
          currentRound,
          newState.rounds
        );
        return { ...newState, ...newState2 };
      }
      const newstate2 = this.nextRound(currentMove, currentRound);
      return { move: newMove, ...newstate2 };
    });
  };

  render() {
    const { createPlayersStatus, players } = this.props;
    const { currentRound, options, currentMove, rounds } = this.state;
    const redirect =
      createPlayersStatus === 'SUCCESS' ? '' : <Redirect to="/" />;

    return (
      <div>
        <h1>Round {currentRound}</h1>
        {redirect ? (
          redirect
        ) : (
          <div>
            <Board
              player={players[currentMove]}
              options={options}
              play={this.play}
            />
            <Score rounds={rounds} players={players} />
          </div>
        )}
      </div>
    );
  }
}

export default Game;
