import at from './types';

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
