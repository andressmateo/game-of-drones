import { call, put } from 'redux-saga/effects';

import { apiPlayers } from '../../../api';
import * as actions from '../actions';

export default function* fetchPlayers() {
  yield put(actions.fetchRequest());
  try {
    const response = yield call(apiPlayers.getAllPlayers);
    yield put(actions.fetchSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchFailure({ error: error.toString() }));
  }
}
