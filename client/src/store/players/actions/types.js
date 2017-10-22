import { createAction } from '../../../utils';

export default {
  ...createAction('players', 'CREATE'),
  ...createAction('players', 'UPDATE'),
  ...createAction('players', 'FETCH'),
  CLEAR: 'players/CLEAR'
};
