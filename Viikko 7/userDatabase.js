const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "crud_user",
  password: "0000",
  database: "user",
});

module.exports = connection;
