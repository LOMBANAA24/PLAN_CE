// /controllers/reservasController.js

const Reservas = require('../models/Reservas');

module.exports = {
    create(req, res) {
        const reserva = req.body;
        Reservas.create(reserva, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al crear la reserva',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'La reserva se realizó correctamente',
                data: data
            });
        });
    },

    getById(req, res) {
        const reservaId = req.params.id; 
        Reservas.getById(reservaId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar la reserva',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontró ninguna reserva con ese ID'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Reserva encontrada',
                data: data
            });
        });
    },
    update(req, res) {
        const reservaId = req.params.id; 
        const newData = req.body; 

        Reservas.update(reservaId, newData, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al actualizar la reserva',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Reserva actualizada correctamente',
                data: data
            });
        });
    },

    delete(req, res) {
        const reservaId = req.params.id; 

        Reservas.delete(reservaId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al eliminar la reserva',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Reserva eliminada correctamente',
                data: data
            });
        });
    }

}
