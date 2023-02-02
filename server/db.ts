const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config();

export const pool = new Pool({
  user: process.env.db_user,
  password: process.env.db_password,
  host: 'localhost',
  port: process.env.db_port,
  database: process.env.database,
});
