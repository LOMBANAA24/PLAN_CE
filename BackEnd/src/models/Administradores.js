const db = require('../config/config');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Administradores = {};

function generarHash(contrasena) {
    return crypto.createHash('sha256').update(contrasena).digest('hex');
}

Administradores.create = (admin, result) => {
    const sql = `INSERT INTO Administrador (Nombre, Apellido, CorreoElectronico, ContrasenaHash) VALUES (?, ?, ?, ?)`;

    db.query(sql, [
        admin.Nombre,
        admin.Apellido,
        admin.CorreoElectronico,
        admin.ContrasenaHash
    ], (err, res) => {
        if (err) {
            console.log('Error al crear el administrador: ', err);
            result(err, null);
        } else {
            console.log('Administrador creado correctamente');
            result(null, res);
        }
    });
};

Administradores.getById = (id, result) => {
    const sql = 'SELECT * FROM Administrador WHERE ID_Admin = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar el administrador: ', err);
            result(err, null);
        } else if (res.length) {
            console.log('Administrador encontrado: ', res[0]);
            result(null, res[0]);
        } else {
            result({ message: 'Administrador no encontrado' }, null);
        }
    });
};

Administradores.update = (id, newData, result) => {
    const sql = 'UPDATE Administrador SET ? WHERE ID_Admin = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar el administrador: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún administrador con ese ID' }, null);
        } else {
            console.log('Administrador actualizado correctamente');
            result(null, newData);
        }
    });
};

Administradores.delete = (id, result) => {
    const sql = 'DELETE FROM Administrador WHERE ID_Admin = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar el administrador: ', err);
            result(err, null);
        } else if (res.affectedRows === 0) {
            result({ message: 'No se encontró ningún administrador con ese ID' }, null);
        } else {
            console.log('Administrador eliminado correctamente');
            result(null, res);
        }
    });
};

Administradores.authenticate = (email, password, result) => {
    const sql = 'SELECT * FROM Administrador WHERE CorreoElectronico = ?';
    db.query(sql, [email], (err, res) => {
        if (err) {
            console.log('Error al autenticar el administrador: ', err);
            result(err, null);
        } else if (res.length) {
            const admin = res[0];
            const hashedPassword = generarHash(password);

            if (admin.ContrasenaHash === hashedPassword) {
                console.log('Autenticación exitosa: ', admin);

                // Generar un token para el administrador
                const token = jwt.sign({ id: admin.ID_Admin }, 'tu_clave_secreta', { expiresIn: '1h' });

                result(null, { ...admin, token });
            } else {
                result({ message: 'Autenticación fallida: contraseña incorrecta' }, null);
            }
        } else {
            result({ message: 'Autenticación fallida: usuario no encontrado' }, null);
        }
    });
};

module.exports = Administradores;
