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

agenciasController.registerPhone = (req, res) => {
    const idAgencia = req.params.id;
    const telefono = req.body.telefono;
  
    Agencias.createPhone(idAgencia, telefono, (err, data) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'Error al crear el teléfono',
          error: err
        });
      } else {
        res.status(201).json({
          success: true,
          message: 'Teléfono creado correctamente',
          data: data
        });
      }
    });
};
  
agenciasController.getPhones = (req, res) => {
    const idAgencia = req.params.id;
  
    Agencias.getPhones(idAgencia, (err, data) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'Error al obtener los teléfonos',
          error: err
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Teléfonos obtenidos correctamente',
          data: data
        });
      }
    });
};

agenciasController.updatePhone = (req, res) => {
    const idAgencia = req.params.id;
    const phoneId = req.params.phoneId;
    const newPhone = req.body.telefono;
  
    Agencias.updatePhone(idAgencia, phoneId, newPhone, (err, data) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'Error al actualizar el teléfono',
          error: err
        });
      } else if (!data) {
        res.status(404).json({
          success: false,
          message: 'Teléfono no encontrado'
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Teléfono actualizado correctamente',
          data: data
        });
      }
    });
};

agenciasController.deletePhone = (req, res) => {
  const idAgencia = req.params.id;
  const phoneId = req.params.phoneId;

  Agencias.deletePhone(idAgencia, phoneId, (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar el teléfono',
        error: err
      });
    } else if (!data) {
      res.status(404).json({
        success: false,
        message: 'Teléfono no encontrado'
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Teléfono eliminado correctamente',
        data: data
      });
    }
  });
};
