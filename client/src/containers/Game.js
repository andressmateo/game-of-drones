import { connect } from 'react-redux';

import { actions, selectors } from '../store/players';

import Game from '../components/Game';

function mapStateToProps(state) {
  const players = selectors(state);

  return {
    players: players.getActivePlayers(),
    createPlayersStatus: players.getCreatePlayersStatus(),
    updatePlayerStatus: players.getUpdatePlayerStatus()
  };
}

export default connect(mapStateToProps, {
  updatePlayer: actions.update
})(Game);
