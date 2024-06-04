// /routes/agenciasRoutes.js

const agenciasController = require('../controllers/agenciasController');

module.exports = (app) => {
    app.post('/api/agencias/create', agenciasController.register);
    app.get('/api/agencias/:id', agenciasController.getById);
    app.put('/api/agencias/:id', agenciasController.update);
    app.delete('/api/agencias/:id', agenciasController.delete);

  // Agency phones endpoints
  app.post('/api/agencias/:id/phones', agenciasController.registerPhone);
  app.get('/api/agencias/:id/phones', agenciasController.getPhones);
  app.put('/api/agencias/:id/phones/:phoneId', agenciasController.updatePhone); // New endpoint for updating phone
  app.delete('/api/agencias/:id/phones/:phoneId', agenciasController.deletePhone); // Fixed to include phoneId for deleting a specific phone
};