// /models/Motos.js

const db = require('../config/config');

const Motos = {};

Motos.create = (moto, result) => {
    const sql = `INSERT INTO Motocicleta (Matricula, NumeroBastidor, Color, Marca, Modelo, ID_Garaje, FechaEstacionamiento, Foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        moto.Matricula,
        moto.NumeroBastidor,
        moto.Color,
        moto.Marca,
        moto.Modelo,
        moto.ID_Garaje,
        moto.FechaEstacionamiento,
        moto.Foto
    ], (err, res) => {
        if (err) {
            console.log('Error al crear la motocicleta: ', err);
            result(err, null);
        } else {
            console.log('Motocicleta creada correctamente');
            result(null, res);
        }
    });
};

Motos.getById = (id, result) => {
    const sql = 'SELECT * FROM Motocicleta WHERE Matricula = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar la motocicleta: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Motocicleta encontrada: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Motocicleta no encontrada' }, null);
        }
    });
};

Motos.update = (id, newData, result) => {
    const sql = 'UPDATE Motocicleta SET ? WHERE Matricula = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar la motocicleta: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna motocicleta con esa matrícula' }, null);
        } else {
            console.log('Motocicleta actualizada correctamente');
            result(null, newData);
        }
    });
};

Motos.delete = (id, result) => {
    const sql = 'DELETE FROM Motocicleta WHERE Matricula = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar la motocicleta: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna motocicleta con esa matrícula' }, null);
        } else {
            console.log('Motocicleta eliminada correctamente');
            result(null, res);
        }
    });
};

module.exports = Motos;
