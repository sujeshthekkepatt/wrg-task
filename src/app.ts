import express from 'express';
import cors from 'cors';
import {json} from 'body-parser';

import './env';
import {expressLogger} from './logging';
import {dbUtil} from './db';
import * as routes from './routes';

const logger = console;

const app = express();

app.use(json());
app.use(cors());

app.use(expressLogger);

app.set('onListening', () => {
  logger.info(`Listening at PORT: ${process.env.PORT}`);
});

app.use(express.static('public'));

app.use('/user', routes.userRouter);

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/test-con', async (req, res, next) => {
  try {
    const data = await dbUtil.testCon();

    return res.send(data);
  } catch (err) {
    return next(err);
  }
});

export default app;
