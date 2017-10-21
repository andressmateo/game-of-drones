import { connect } from 'react-redux';

import { actions, selectors } from '../store/players';

import Register from '../components/Register';

function mapStateToProps(state) {
  const players = selectors(state);

  return {
    createPlayersStatus: players.getcreatePlayersStatus
  };
}

export default connect(mapStateToProps, {
  createPlayers: actions.create
})(Register);
