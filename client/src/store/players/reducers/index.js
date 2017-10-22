import { combineReducers } from 'redux';

import at from '../actions/types';

const createPlayersStatus = (state = 'NOT_CREATED', action) => {
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
    case at.CLEAR: {
      return 'NOT_CREATED';
    }
    default:
      return state;
  }
};

const updatePlayerStatus = (state = '', action) => {
  switch (action.type) {
    case at.UPDATE_REQUEST: {
      return 'LOADING';
    }
    case at.UPDATE_FAILURE: {
      return 'FAILED';
    }
    case at.UPDATE_SUCCESS: {
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
    case at.CLEAR: {
      return [];
    }
    default:
      return state;
  }
};

export default combineReducers({
  activePlayers,
  createPlayersStatus,
  updatePlayerStatus
});
