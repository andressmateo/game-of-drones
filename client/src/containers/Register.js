import { connect } from 'react-redux';

import { actions, selectors } from '../store/players';

import Register from '../components/Register';

function mapStateToProps(state) {
  const players = selectors(state);

  return {
    createPlayersStatus: players.getCreatePlayersStatus()
  };
}

export default connect(mapStateToProps, {
  createPlayers: actions.create
})(Register);
