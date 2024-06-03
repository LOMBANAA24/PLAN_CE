// /models/Agencias.js

const db = require('../config/config');

const Agencias = {};

Agencias.create = (agencia, result) => {
    const sql = `INSERT INTO Agencia (Nombre, Calle, Numero, ID_Ciudad) VALUES (?, ?, ?, ?)`;

    db.query(sql, [
        agencia.Nombre,
        agencia.Calle,
        agencia.Numero,
        agencia.ID_Ciudad
    ], (err, res) => {
        if (err) {
            console.log('Error al crear la agencia: ', err);
            result(err, null);
        } else {
            console.log('Agencia creada correctamente');
            result(null, res);
        }
    });
};

Agencias.getById = (id, result) => {
    const sql = 'SELECT * FROM Agencia WHERE ID_Agencia = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar la agencia: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Agencia encontrada: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Agencia no encontrada' }, null);
        }
    });
};

Agencias.update = (id, newData, result) => {
    const sql = 'UPDATE Agencia SET ? WHERE ID_Agencia = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar la agencia: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna agencia con ese ID' }, null);
        } else {
            console.log('Agencia actualizada correctamente');
            result(null, newData);
        }
    });
};

Agencias.delete = (id, result) => {
    const sql = 'DELETE FROM Agencia WHERE ID_Agencia = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar la agencia: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna agencia con ese ID' }, null);
        } else {
            console.log('Agencia eliminada correctamente');
            result(null, res);
        }
    });
};

module.exports = Agencias;
