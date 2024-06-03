// /models/Garajes.js

const db = require('../config/config');

const Garajes = {};

Garajes.create = (garaje, result) => {
    const sql = `INSERT INTO Garaje (Nombre, Calle, Numero, ID_Ciudad) VALUES (?, ?, ?, ?)`;

    db.query(sql, [
        garaje.Nombre,
        garaje.Calle,
        garaje.Numero,
        garaje.ID_Ciudad
    ], (err, res) => {
        if (err) {
            console.log('Error al crear el garaje: ', err);
            result(err, null);
        } else {
            console.log('Garaje creado correctamente');
            result(null, res);
        }
    });
};

Garajes.getById = (id, result) => {
    const sql = 'SELECT * FROM Garaje WHERE ID_Garaje = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar el garaje: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Garaje encontrado: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Garaje no encontrado' }, null);
        }
    });
};

Garajes.update = (id, newData, result) => {
    const sql = 'UPDATE Garaje SET ? WHERE ID_Garaje = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar el garaje: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún garaje con ese ID' }, null);
        } else {
            console.log('Garaje actualizado correctamente');
            result(null, newData);
        }
    });
};

Garajes.delete = (id, result) => {
    const sql = 'DELETE FROM Garaje WHERE ID_Garaje = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar el garaje: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún garaje con ese ID' }, null);
        } else {
            console.log('Garaje eliminado correctamente');
            result(null, res);
        }
    });
};

module.exports = Garajes;
