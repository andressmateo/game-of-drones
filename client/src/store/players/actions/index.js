import at from './types';

// Actions for create a player
export const create = players => ({ type: at.CREATE, payload: players });
export const createRequest = () => ({ type: at.CREATE_REQUEST });
export const createSuccess = players => ({
  type: at.CREATE_SUCCESS,
  payload: players
});
export const createFailure = error => ({
  type: at.CREATE_FAILURE,
  payload: { error }
});

// Actions for update a player
export const update = player => ({ type: at.UPDATE, payload: player });
export const updateRequest = () => ({ type: at.UPDATE_REQUEST });
export const updateSuccess = player => ({
  type: at.UPDATE_SUCCESS,
  payload: player
});
export const updateFailure = error => ({
  type: at.UPDATE_FAILURE,
  payload: { error }
});

// Actions for fetch all players
export const fetch = player => ({ type: at.FETCH });
export const fetchRequest = () => ({ type: at.FETCH_REQUEST });
export const fetchSuccess = players => ({
  type: at.FETCH_SUCCESS,
  payload: players
});
export const fetchFailure = error => ({
  type: at.FETCH_FAILURE,
  payload: { error }
});

//Clear State
export const clear = () => ({ type: at.CLEAR });
