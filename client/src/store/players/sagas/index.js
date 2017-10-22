import { takeLatest } from 'redux-saga/effects';

import at from '../actions/types';
import createPlayers from './createPlayers';
import updatePlayer from './updatePlayer';
import fetchPlayers from './fetchPlayers';

export default function* root() {
  yield takeLatest(at.CREATE, createPlayers);
  yield takeLatest(at.UPDATE, updatePlayer);
  yield takeLatest(at.FETCH, fetchPlayers);
}
