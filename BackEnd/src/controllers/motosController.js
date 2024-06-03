// /controllers/motosController.js

const Motos = require('../models/Motos');

const motosController = {};

motosController.register = (req, res) => {
    const moto = req.body;

    Motos.create(moto, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al crear la moto',
                error: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Moto creada correctamente',
                data: data
            });
        }
    });
};

motosController.getById = (req, res) => {
    const id = req.params.id;

    Motos.getById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener la moto',
                error: err
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: 'Moto no encontrada'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Moto obtenida correctamente',
                data: data
            });
        }
    });
};

motosController.update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    Motos.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar la moto',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Moto actualizada correctamente',
                data: data
            });
        }
    });
};

motosController.delete = (req, res) => {
    const id = req.params.id;

    Motos.delete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al eliminar la moto',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Moto eliminada correctamente',
                data: data
            });
        }
    });
};

module.exports = motosController;
