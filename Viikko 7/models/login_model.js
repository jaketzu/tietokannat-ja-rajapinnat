const db = require("../userDatabase");

const login = {
  checkPassword: function (username, callback) {
    return db.query(
      "SELECT password FROM user WHERE username = ?",
      [username],
      callback
    );
  },
};

module.exports = login;
