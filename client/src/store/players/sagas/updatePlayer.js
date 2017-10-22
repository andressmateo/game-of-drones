import { call, put } from 'redux-saga/effects';

import { apiPlayers } from '../../../api';
import * as actions from '../actions';

export default function* updatePlayer({ payload }) {
  yield put(actions.updateRequest());
  try {
    const response = yield call(apiPlayers.updatePlayer, {
      player: payload
    });
    yield put(actions.updateSuccess(response.data));
  } catch (error) {
    yield put(actions.updateFailure({ error: error.toString() }));
  }
}
