import express from 'express';
import * as PlayerController from '../controllers/player';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const players = await PlayerController.getAll();
      return res.json(players);
    } catch (err) {
      return res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const player = await PlayerController.create(req.body.player);
      return res.json(player);
    } catch (err) {
      res.json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const { _id, ...data } = req.body.player;
      const player = await PlayerController.update(_id, data);
      return res.json(player);
    } catch (err) {
      res.json(err);
    }
  });

router.route('/bulk').post(async (req, res) => {
  try {
    const playersSaved = await PlayerController.createBulk(req.body.players);
    return res.json(playersSaved);
  } catch (err) {
    res.json(err);
  }
});

export default router;
