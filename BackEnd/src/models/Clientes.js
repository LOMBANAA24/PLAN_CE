// /models/Clientes.js

const db = require('../config/config');

const Clientes = {};

Clientes.create = async (cliente, result) => {
    const sql = `INSERT INTO Cliente (
                    DNI,
                    Nombre,
                    Apellido1,
                    Apellido2,
                    Direccion,
                    ID_Ciudad,
                    Telefono,
                    CorreoElectronico,
                    Genero,
                    Foto
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        cliente.DNI,
        cliente.Nombre,
        cliente.Apellido1,
        cliente.Apellido2,
        cliente.Direccion,
        cliente.ID_Ciudad,
        cliente.Telefono,
        cliente.CorreoElectronico,
        cliente.Genero,
        cliente.Foto
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
    const sql = 'SELECT * FROM Cliente WHERE CodigoCliente = ?'; // Cambiado ID_Cliente a CodigoCliente
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
    const sql = 'UPDATE Cliente SET ? WHERE CodigoCliente = ?'; // Cambiado ID_Cliente a CodigoCliente
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
    const sql = 'DELETE FROM Cliente WHERE CodigoCliente = ?'; // Cambiado ID_Cliente a CodigoCliente
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
