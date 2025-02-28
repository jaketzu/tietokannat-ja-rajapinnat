const db = require('../opintorekisteriDatabase');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },

  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },

  add: function(input, callback) {
    return db.query(
      'CALL LisaaSuoritus(?,?,?,?)',
      [input.Etunimi, input.Sukunimi, input.Koodi, input.Arvosana],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from Arviointi where idArviointi=?', [id], callback);
  },

  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Paivamaara=?,Arvosana=?,idOpiskelija=?,idOpintojakso=? where idArviointi=?',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};

module.exports = arviointi;
