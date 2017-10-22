import { connect } from 'react-redux';

import { selectors } from '../store/players';

import Game from '../components/Game';

function mapStateToProps(state) {
  const players = selectors(state);

  return {
    players: players.getActivePlayers(),
    createPlayersStatus: players.getCreatePlayersStatus()
  };
}

export default connect(mapStateToProps, {
  // createPlayers: actions.create
})(Game);
