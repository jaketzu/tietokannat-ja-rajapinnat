const db = require('../opintorekisteriDatabase');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },

  getById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },

  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },

  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Koodi=?,Laajuus=?,Nimi=? where id_opintojakso=?',
      [opintojakso.Koodi, opintojakso.Laajuus, opintojakso.Nimi, id],
      callback
    );
  }
};

module.exports = opintojakso;
