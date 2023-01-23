"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();
exports.pool = new Pool({
    user: process.env.db_user,
    password: process.env.db_password,
    host: 'localhost',
    port: process.env.port,
    database: process.env.database,
});
