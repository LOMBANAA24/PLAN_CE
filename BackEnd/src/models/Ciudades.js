// /models/Ciudades.js

const db = require('../config/config');

const Ciudades = {};

Ciudades.create = (ciudad, result) => {
    const sql = `INSERT INTO Ciudad (Nombre, CodigoPostal, Provincia, NumeroHabitantes) VALUES (?, ?, ?, ?)`;

    db.query(sql, [
        ciudad.Nombre,
        ciudad.CodigoPostal,
        ciudad.Provincia,
        ciudad.NumeroHabitantes
    ], (err, res) => {
        if (err) {
            console.log('Error al crear la ciudad: ', err);
            result(err, null);
        } else {
            console.log('Ciudad creada correctamente');
            result(null, res);
        }
    });
};

Ciudades.getById = (id, result) => {
    const sql = 'SELECT * FROM Ciudad WHERE ID_Ciudad = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar la ciudad: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Ciudad encontrada: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Ciudad no encontrada' }, null);
        }
    });
};

Ciudades.update = (id, newData, result) => {
    const sql = 'UPDATE Ciudad SET ? WHERE ID_Ciudad = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar la ciudad: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna ciudad con ese ID' }, null);
        } else {
            console.log('Ciudad actualizada correctamente');
            result(null, newData);
        }
    });
};

Ciudades.delete = (id, result) => {
    const sql = 'DELETE FROM Ciudad WHERE ID_Ciudad = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar la ciudad: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna ciudad con ese ID' }, null);
        } else {
            console.log('Ciudad eliminada correctamente');
            result(null, res);
        }
    });
};

module.exports = Ciudades;

