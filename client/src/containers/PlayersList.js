import { connect } from 'react-redux';

import { actions, selectors } from '../store/players';

import PlayersList from '../components/PlayersList';

function mapStateToProps(state) {
  const players = selectors(state);

  return {
    players: players.getAllPlayers(),
    fetchPlayersStatus: players.getFetchPlayersStatus()
  };
}

export default connect(mapStateToProps, {
  fetchPlayers: actions.fetch
})(PlayersList);
