import express from 'express';

import playerRoutes from './player';

const router = express.Router();

router.use('/player', playerRoutes);

export default router;
