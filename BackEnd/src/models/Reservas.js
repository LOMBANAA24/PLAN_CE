// /models/Reservas.js

const db = require('../config/config');

const Reservas = {};

Reservas.create = async (reserva, result) => {
    const sql = `INSERT INTO Reservas (
                    ID_Reserva,
                    Fecha,
                    ID_Cliente,
                    ID_Moto,
                    ID_Agencia,
                    Fecha_Inicio,
                    Fecha_Fin
                ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        reserva.ID_Reserva,
        reserva.Fecha,
        reserva.ID_Cliente,
        reserva.ID_Moto,
        reserva.ID_Agencia,
        reserva.Fecha_Inicio,
        reserva.Fecha_Fin
    ], (err, res) => {
        if (err) {
            console.log('Error al crear la reserva: ', err);
            result(err, null);
        } else {
            console.log('Reserva creada correctamente');
            result(null, res);
        }
    });
};

Reservas.getById = (id, result) => {
    const sql = 'SELECT * FROM Reservas WHERE ID_Reserva = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar la reserva: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Reserva encontrada: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Reserva no encontrada' }, null);
        }
    });
};

Reservas.update = (id, newData, result) => {
    const sql = 'UPDATE Reservas SET ? WHERE ID_Reserva = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar la reserva: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna reserva con ese ID' }, null);
        } else {
            console.log('Reserva actualizada correctamente');
            result(null, newData);
        }
    });
};

Reservas.delete = (id, result) => {
    const sql = 'DELETE FROM Reservas WHERE ID_Reserva = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar la reserva: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ninguna reserva con ese ID' }, null);
        } else {
            console.log('Reserva eliminada correctamente');
            result(null, res);
        }
    });
};

module.exports = Reservas;
