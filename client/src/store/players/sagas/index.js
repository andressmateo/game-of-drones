import { takeLatest } from 'redux-saga/effects';

import at from '../actions/types';
import createPlayers from './createPlayers';

export default function* root() {
  yield takeLatest(at.CREATE, createPlayers);
}
