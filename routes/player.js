import express from 'express';
import * as PlayerController from '../controllers/player';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const players = await PlayerController.getAll();
      return res.json(samples);
    } catch (err) {
      return res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const sample = await SampleController.create(req.body.player);
      return res.json(sample);
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
