import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gamesWon: {
    type: Number,
    default: 0
  },
  gamesLost: {
    type: Number,
    default: 0
  }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
