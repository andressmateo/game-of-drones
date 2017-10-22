import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { Card, Button, LinkButton } from '../StyledComponents';
import Congratulations from './Congratulations';
import Board from './Board';
import Score from './Score';
import { statusTypes } from '../../utils';

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

const PLAYER_ONE = 0;
const PLAYER_TWO = 1;
const TIE = -1;

class Game extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      currentRound: 1,
      currentMove: 0,
      move: '',
      winner: '',
      options: ['rock', 'paper', 'scissors'],
      rounds: []
    };
    this.state = { ...this.initialState };
    this.rules = {
      paper: 'rock',
      rock: 'scissors',
      scissors: 'paper'
    };
  }

  getRoundWinner = function(playerOneMove, playerTwoMove, rounds) {
    const { rules } = this;
    if (rules[playerOneMove] === playerTwoMove) {
      rounds.push(0);
      return { rounds };
    } else if (rules[playerTwoMove] === playerOneMove) {
      rounds.push(1);
      return { rounds };
    } else {
      rounds.push(TIE);
      return { rounds };
    }
  };

  getWinsByPlayer = function(rounds) {
    return rounds.reduce(
      (acc, winner) => {
        if (winner === 0) {
          acc.playerOneWins += 1;
        } else if (winner === 1) {
          acc.playerTwoWins += 1;
        }
        return acc;
      },
      { playerOneWins: 0, playerTwoWins: 0 }
    );
  };

  nextRound = function(currentMove, currentRound, rounds) {
    const { players } = this.props;
    let wins = { playerOneWins: 0, playerTwoWins: 0 };
    if (currentMove === 1) {
      wins = this.getWinsByPlayer(rounds);
      const { playerOneWins, playerTwoWins } = wins;
      if (playerOneWins === 3) {
        this.updatePlayer(players[PLAYER_ONE]);
        return { winner: players[PLAYER_ONE].name };
      } else if (playerTwoWins === 3) {
        this.updatePlayer(players[PLAYER_TWO]);
        return { winner: players[PLAYER_TWO].name };
      }
    }
    return {
      currentMove: +!currentMove,
      currentRound: currentMove === 1 ? ++currentRound : currentRound
    };
  };

  updatePlayer = function(player) {
    const { updatePlayer } = this.props;
    if (updatePlayer) {
      player.gamesWon += 1;
      updatePlayer(player);
    }
  };

  playAgain = () => {
    this.setState({ ...this.initialState, rounds: [] });
  };

  play = newMove => {
    this.setState(({ move, currentMove, rounds, currentRound }) => {
      if (currentMove === 1) {
        const newState = this.getRoundWinner(move, newMove, rounds);
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
      createPlayersStatus !== statusTypes.SUCCEED_STATE ? (
        <Redirect to="/" />
      ) : (
        ''
      );

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
          <LinkButton to="/players">View All Players</LinkButton>
          <Button blue onClick={() => clearState()}>
            Play with new players
          </Button>
        </ActionsContainer>
      </div>
    );
  }
}

export default Game;
