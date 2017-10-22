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
