import 'babel-polyfill';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

dotenv.config();

let {
  PORT,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  DB_USER,
  DB_PASSWORD
} = process.env;

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
  { useMongoClient: true }
);

mongoose.connection
  .once('open', () => {
    console.log('mongodb connection open');
  })
  .on('error', err => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);
const dir = __dirname;

app.use(
  express.static(path.join(dir.substring(0, dir.length - 4), 'client/build'))
);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(dir.substring(0, dir.length - 4) + '/client/build/index.html')
  );
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Game of drones is listening on ${port} :)`);
