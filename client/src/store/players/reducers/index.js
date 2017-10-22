import { combineReducers } from 'redux';

import at from '../actions/types';
import { statusTypes } from '../../../utils';

const createPlayersStatus = (state = statusTypes.UNLOAD_STATE, action) => {
  switch (action.type) {
    case at.CREATE_REQUEST: {
      return statusTypes.INIT_STATE;
    }
    case at.CREATE_FAILURE: {
      return statusTypes.FAILED_STATE;
    }
    case at.CREATE_SUCCESS: {
      return statusTypes.SUCCEED_STATE;
    }
    case at.CLEAR: {
      return statusTypes.UNLOAD_STATE;
    }
    default:
      return state;
  }
};

const updatePlayerStatus = (state = statusTypes.UNLOAD_STATE, action) => {
  switch (action.type) {
    case at.UPDATE_REQUEST: {
      return statusTypes.INIT_STATE;
    }
    case at.UPDATE_FAILURE: {
      return statusTypes.FAILED_STATE;
    }
    case at.UPDATE_SUCCESS: {
      return statusTypes.SUCCEED_STATE;
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
    case at.UPDATE_SUCCESS: {
      return state.map(
        player => (player._id === payload._id ? payload : player)
      );
    }
    case at.CLEAR: {
      return [];
    }
    default:
      return state;
  }
};

const players = (state = [], { type, payload }) => {
  switch (type) {
    case at.FETCH_SUCCESS: {
      return payload;
    }
    case at.UPDATE_SUCCESS: {
      return state.map(
        player => (player._id === payload._id ? payload : player)
      );
    }
    case at.CREATE_SUCCESS: {
      return [...state, ...payload];
    }
    default:
      return state;
  }
};

const fetchPlayersStatus = (state = statusTypes.UNLOAD_STATE, action) => {
  switch (action.type) {
    case at.FETCH_REQUEST: {
      return statusTypes.INIT_STATE;
    }
    case at.FETCH_FAILURE: {
      return statusTypes.FAILED_STATE;
    }
    case at.FETCH_SUCCESS: {
      return statusTypes.SUCCEED_STATE;
    }
    default:
      return state;
  }
};

export default combineReducers({
  activePlayers,
  createPlayersStatus,
  updatePlayerStatus,
  fetchPlayersStatus,
  players
});
