import { createAction } from '../../../utils';

export default {
  ...createAction('players', 'CREATE'),
  ...createAction('players', 'UPDATE'),
  CLEAR: 'players/CLEAR'
};
