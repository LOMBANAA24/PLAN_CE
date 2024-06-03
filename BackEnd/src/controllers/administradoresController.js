const Administradores = require('../models/Administradores');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function generarHash(contrasena) {
    return crypto.createHash('sha256').update(contrasena).digest('hex');
}

const administradoresController = {};

administradoresController.register = (req, res) => {
    const admin = req.body;

    if (!admin.Contrasena) {
        return res.status(400).json({
            success: false,
            message: 'La contraseña es requerida'
        });
    }

    // Genera el hash de la contraseña antes de guardarla
    admin.ContrasenaHash = generarHash(admin.Contrasena);
    delete admin.Contrasena;

    Administradores.create(admin, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al crear el administrador',
                error: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Administrador creado correctamente',
                data: data
            });
        }
    });
};

administradoresController.getById = (req, res) => {
    const id = req.params.id;

    Administradores.getById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener el administrador',
                error: err
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: 'Administrador no encontrado'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Administrador obtenido correctamente',
                data: data
            });
        }
    });
};

administradoresController.update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    // Si hay una contraseña nueva, generar su hash
    if (newData.Contrasena) {
        newData.ContrasenaHash = generarHash(newData.Contrasena);
        delete newData.Contrasena;
    }

    Administradores.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar el administrador',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Administrador actualizado correctamente',
                data: data
            });
        }
    });
};

administradoresController.delete = (req, res) => {
    const id = req.params.id;

    Administradores.delete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al eliminar el administrador',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Administrador eliminado correctamente',
                data: data
            });
        }
    });
};

administradoresController.login = (req, res) => {
    const { CorreoElectronico, Contrasena } = req.body;

    Administradores.authenticate(CorreoElectronico, Contrasena, (err, data) => {
        if (err) {
            res.status(401).json({
                success: false,
                message: err.message
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Autenticación exitosa',
                data: data
            });
        }
    });
};

module.exports = administradoresController;
