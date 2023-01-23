import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { pool } from './db';

// const cors = require('cors');
// const pool = require('./db');
// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const dotenv = require('dotenv');

// grab secret variables from .env
dotenv.config();
const port = process.env.port;

// init express
const app = express();

// routers

// cors for connecting front end
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Servers');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
