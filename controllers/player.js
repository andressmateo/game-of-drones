import Player from '../database/player.model';

export const getAll = () => {
  return Player.find();
};

export const count = () => {
  return Player.count();
};

export const create = ({ name }) => {
  console.log(name);
  const newPlayer = new Player({ name });
  return newPlayer.save();
};

export const update = (id, newData) => {
  return Player.findByIdAndUpdate(id, newData, { new: true });
};

export const createBulk = players => {
  const newPlayers = players.map(({ name }) => Player.create({ name }));
  return Promise.all([...newPlayers]);
};
