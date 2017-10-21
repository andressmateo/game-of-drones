import { all, fork } from 'redux-saga/effects';
import { rootSaga as players } from './players';

export default function* rootSaga() {
  yield all([fork(players)]);
}
