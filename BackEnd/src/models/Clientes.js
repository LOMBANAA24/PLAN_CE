// /models/Clientes.js

const db = require('../config/config');

const Clientes = {};

Clientes.create = async (cliente, result) => {
    const sql = `INSERT INTO Clientes (
                    ID_Cliente,
                    Nombre,
                    Apellido,
                    CorreoElectronico,
                    Contraseña
                ) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [
        cliente.ID_Cliente,
        cliente.Nombre,
        cliente.Apellido,
        cliente.CorreoElectronico,
        cliente.Contraseña
    ], (err, res) => {
        if (err) {
            console.log('Error al crear el cliente: ', err);
            result(err, null);
        } else {
            console.log('Cliente creado correctamente');
            result(null, res);
        }
    });
};

Clientes.getById = (id, result) => {
    const sql = 'SELECT * FROM Clientes WHERE ID_Cliente = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar el cliente: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Cliente encontrado: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Cliente no encontrado' }, null);
        }
    });
};

Clientes.update = (id, newData, result) => {
    const sql = 'UPDATE Clientes SET ? WHERE ID_Cliente = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar el cliente: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún cliente con ese ID' }, null);
        } else {
            console.log('Cliente actualizado correctamente');
            result(null, newData);
        }
    });
};

Clientes.delete = (id, result) => {
    const sql = 'DELETE FROM Clientes WHERE ID_Cliente = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar el cliente: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún cliente con ese ID' }, null);
        } else {
            console.log('Cliente eliminado correctamente');
            result(null, res);
        }
    });
};

module.exports = Clientes;
