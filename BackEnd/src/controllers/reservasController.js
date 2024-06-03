const Reservas = require('../models/Reservas');

const create = (req, res) => {
    const newReserva = req.body;

    Reservas.create(newReserva, (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'Hubo un error al crear la reserva',
                error: err
            });
        } else {
            res.send({
                success: true,
                message: 'Reserva creada correctamente',
                data: data
            });
        }
    });
};

const getById = (req, res) => {
    const id = req.params.id;

    Reservas.getById(id, (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'Hubo un error al buscar la reserva',
                error: err
            });
        } else {
            res.send({
                success: true,
                data: data
            });
        }
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    Reservas.update(id, newData, (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'Hubo un error al actualizar la reserva',
                error: err
            });
        } else {
            res.send({
                success: true,
                message: 'Reserva actualizada correctamente',
                data: data
            });
        }
    });
};

const deleteReserva = (req, res) => {
    const id = req.params.id;

    Reservas.delete(id, (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'Hubo un error al eliminar la reserva',
                error: err
            });
        } else {
            res.send({
                success: true,
                message: 'Reserva eliminada correctamente',
                data: data
            });
        }
    });
};

module.exports = {
    create,
    getById,
    update,
    delete: deleteReserva
};
