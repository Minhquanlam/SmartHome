const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  socketPath: "/var/run/mysqld/mysqld.sock",
  host: "localhost",
  user: "root",
  password: "",
  database: "SMARTHOME",
  port: 3308
})

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get('/', (req, res) => {
  res.send('Successfully connected to server');
});

app.post('/', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  db.query(req.body.sql, (err, result) => {
    console.log(req.body.sql);
    res.send(result);
  });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})