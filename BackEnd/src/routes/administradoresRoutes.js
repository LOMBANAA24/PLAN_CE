// /routes/administradoresRoutes.js

const administradoresController = require('../controllers/administradoresController');
const verificarToken = require('../middleware/verificarToken');

module.exports = (app) => {
    app.post('/api/administradores/create', administradoresController.register);
    app.post('/api/administradores/login', administradoresController.login);
    app.get('/api/administradores/:id', verificarToken, administradoresController.getById);
    app.put('/api/administradores/:id', verificarToken, administradoresController.update);
    app.delete('/api/administradores/:id', verificarToken, administradoresController.delete);
};
