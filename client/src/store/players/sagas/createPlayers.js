import { call, put } from 'redux-saga/effects';

import { apiPlayers } from '../../../api';
import * as actions from '../actions';

export default function* createPlayer({ payload }) {
  yield put(actions.createRequest());
  try {
    const response = yield call(apiPlayers.createPlayers, {
      players: payload
    });
    yield put(actions.createSuccess(response.data));
  } catch (error) {
    yield put(actions.createFailure({ error: error.toString() }));
  }
}
