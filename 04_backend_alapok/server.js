const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/megye', (req, res) => {

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'varos141',
});

connection.connect();

connection.query('SELECT * from megye', (err, rows, fields) => {
  if (err) throw err;

  console.log(rows);
  res.send(rows)
});

connection.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});