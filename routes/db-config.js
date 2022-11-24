// database config
const sql = require("mysql2");
const dotenv = require("dotenv").config();
const db = sql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

module.exports = db;
