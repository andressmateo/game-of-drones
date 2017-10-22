import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { Card, Button } from '../StyledComponents';
import Congratulations from './Congratulations';
import Board from './Board';
import Score from './Score';

const BoardContainer = Card.extend`
  width: 500px;
  margin-right: 50px;
`;
const ScoreContainer = Card.extend`width: 300px;`;
const ActionsContainer = Card.extend`
  width: auto;
  margin: 40px;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`display: flex;`;

class Game extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      currentRound: 1,
      currentMove: 0,
      move: '',
      winner: '',
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
    const { players } = this.props;
    let wins = { player1wins: 0, player2wins: 0 };
    if (currentMove === 1) {
      wins = this.getWinsByPlayer(rounds);
      const { player1wins, player2wins } = wins;
      if (player1wins === 3) {
        const { updatePlayer } = this.props;
        if (updatePlayer) {
          const playerToUpdate = players[0];
          playerToUpdate.gamesWon += 1;
          updatePlayer(playerToUpdate);
        }
        return { winner: players[0].name };
      } else if (player2wins === 3) {
        return { winner: players[1].name };
      }
    }
    return {
      currentMove: +!currentMove,
      currentRound: currentMove === 1 ? ++currentRound : currentRound
    };
  };

  clearState = function() {};

  playAgain = () => {
    this.setState({ ...this.initialState, rounds: [] });
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
    const { createPlayersStatus, players, clearState } = this.props;
    const { currentRound, options, currentMove, rounds, winner } = this.state;
    const redirect =
      createPlayersStatus === 'NOT_CREATED' ? <Redirect to="/" /> : '';

    return (
      <div>
        {redirect ? (
          redirect
        ) : winner ? (
          <Congratulations name={winner} playAgain={this.playAgain} />
        ) : (
          <span>
            <h1>Round {currentRound}</h1>
            <Container>
              <BoardContainer>
                <Board
                  player={players[currentMove]}
                  options={options}
                  play={this.play}
                />
              </BoardContainer>
              <ScoreContainer>
                <Score rounds={rounds} players={players} />
              </ScoreContainer>
            </Container>
          </span>
        )}
        <ActionsContainer>
          <Button blue>View all players</Button>
          <Button blue onClick={() => clearState()}>
            Play with new players
          </Button>
        </ActionsContainer>
      </div>
    );
  }
}

export default Game;
