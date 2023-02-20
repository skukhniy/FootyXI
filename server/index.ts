import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { pool } from './db';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

// init express
const app = express();

// cors for connecting front end / express.json=
app.use(cors());
app.use(express.json());

// grab secret variables from .env
dotenv.config();
const port = process.env.port;

// router variables
const playersRouter = require('./routes/players');
const squadsRouter = require('./routes/squads');

// init routers
app.use('/players', playersRouter);
app.use('/squads', squadsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Servers');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
