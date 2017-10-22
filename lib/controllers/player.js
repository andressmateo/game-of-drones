import Player from '../database/player.model';
import * as errorCodes from './errorCodes';

export const getAll = () => {
  return Player.find();
};

export const count = () => {
  return Player.count();
};

export const create = async ({ name }) => {
  if (!name) {
    return Promise.reject({
      [errorCodes.PLAYER_REQUIRED_DATA_MISSING]: 'name is required'
    });
  }
  const newPlayer = await new Player({ name }).save();
  return newPlayer;
};

export const update = async (id, newData) => {
  const playerUpdated = await Player.findByIdAndUpdate(id, newData, {
    new: true
  });
  if (!playerUpdated) {
    return Promise.reject({
      [errorCodes.PLAYER_NOT_FOUND]: 'Tried to update an non-existent player'
    });
  }
  return playerUpdated;
};

export const createBulk = players => {
  const newPlayers = players.map(({ name }) => Player.create({ name }));
  return Promise.all([...newPlayers]);
};
