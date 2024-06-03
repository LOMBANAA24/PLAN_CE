// /controllers/garajesController.js

const Garajes = require('../models/Garajes');

const garajesController = {};

garajesController.register = (req, res) => {
    const garaje = req.body;

    Garajes.create(garaje, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al crear el garaje',
                error: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Garaje creado correctamente',
                data: data
            });
        }
    });
};

garajesController.getById = (req, res) => {
    const id = req.params.id;

    Garajes.getById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener el garaje',
                error: err
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: 'Garaje no encontrado'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Garaje obtenido correctamente',
                data: data
            });
        }
    });
};

garajesController.update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    Garajes.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar el garaje',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Garaje actualizado correctamente',
                data: data
            });
        }
    });
};

garajesController.delete = (req, res) => {
    const id = req.params.id;

    Garajes.delete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al eliminar el garaje',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Garaje eliminado correctamente',
                data: data
            });
        }
    });
};

module.exports = garajesController;
