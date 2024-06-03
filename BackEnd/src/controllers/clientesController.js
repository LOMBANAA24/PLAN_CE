// /controllers/clientesController.js

const Clientes = require('../models/Clientes');

module.exports = {
    register(req, res) {
        const cliente = req.body;
        Clientes.create(cliente, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del cliente',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'El registro se realizó correctamente',
                data: data
            });
        });
    },

    getById(req, res) {
        const clienteId = req.params.id; 
        Clientes.getById(clienteId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar el cliente',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontró ningún cliente con ese ID'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Cliente encontrado',
                data: data
            });
        });
    },
    update(req, res) {
        const clienteId = req.params.id; 
        const newData = req.body; 

        Clientes.update(clienteId, newData, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al actualizar el cliente',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Cliente actualizado correctamente',
                data: data
            });
        });
    },

    delete(req, res) {
        const clienteId = req.params.id; 

        Clientes.delete(clienteId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al eliminar el cliente',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Cliente eliminado correctamente',
                data: data
            });
        });
    }

}
