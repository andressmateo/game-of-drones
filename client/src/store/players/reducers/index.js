import { combineReducers } from 'redux';

import at from '../actions/types';

const createPlayersStatus = (state = '', action) => {
  switch (action.type) {
    case at.CREATE_REQUEST: {
      return 'LOADING';
    }
    case at.CREATE_FAILURE: {
      return 'FAILED';
    }
    case at.CREATE_SUCCESS: {
      return 'SUCCESS';
    }
    default:
      return state;
  }
};

const activePlayers = (state = [], { type, payload }) => {
  switch (type) {
    case at.CREATE_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({ activePlayers, createPlayersStatus });
