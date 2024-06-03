// /controllers/agenciasController.js

const Agencias = require('../models/Agencias');

const agenciasController = {};

agenciasController.register = (req, res) => {
    const agencia = req.body;

    Agencias.create(agencia, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al crear la agencia',
                error: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Agencia creada correctamente',
                data: data
            });
        }
    });
};

agenciasController.getById = (req, res) => {
    const id = req.params.id;

    Agencias.getById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener la agencia',
                error: err
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: 'Agencia no encontrada'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Agencia obtenida correctamente',
                data: data
            });
        }
    });
};

agenciasController.update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    Agencias.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar la agencia',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Agencia actualizada correctamente',
                data: data
            });
        }
    });
};

agenciasController.delete = (req, res) => {
    const id = req.params.id;

    Agencias.delete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al eliminar la agencia',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Agencia eliminada correctamente',
                data: data
            });
        }
    });
};

module.exports = agenciasController;
