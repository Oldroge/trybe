const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'oldroge',
  password: '80638103487125',
  database: 'mvc_example'});

module.exports = connection;
