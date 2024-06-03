// /controllers/ciudadesController.js

const Ciudades = require('../models/Ciudades');

const ciudadesController = {};

ciudadesController.register = (req, res) => {
    const ciudad = req.body;

    Ciudades.create(ciudad, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al crear la ciudad',
                error: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Ciudad creada correctamente',
                data: data
            });
        }
    });
};

ciudadesController.getById = (req, res) => {
    const id = req.params.id;

    Ciudades.getById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al obtener la ciudad',
                error: err
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: 'Ciudad no encontrada'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Ciudad obtenida correctamente',
                data: data
            });
        }
    });
};

ciudadesController.update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    Ciudades.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar la ciudad',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Ciudad actualizada correctamente',
                data: data
            });
        }
    });
};

ciudadesController.delete = (req, res) => {
    const id = req.params.id;

    Ciudades.delete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error al eliminar la ciudad',
                error: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Ciudad eliminada correctamente',
                data: data
            });
        }
    });
};

module.exports = ciudadesController;
