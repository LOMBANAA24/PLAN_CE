// /routes/agenciasRoutes.js

const agenciasController = require('../controllers/agenciasController');

module.exports = (app) => {
    app.post('/api/agencias/create', agenciasController.register);
    app.get('/api/agencias/:id', agenciasController.getById);
    app.put('/api/agencias/:id', agenciasController.update);
    app.delete('/api/agencias/:id', agenciasController.delete);
}
