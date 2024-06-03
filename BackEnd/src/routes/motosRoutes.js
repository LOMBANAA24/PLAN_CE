// /routes/motosRoutes.js

const motosController = require('../controllers/motosController');

module.exports = (app) => {
    app.post('/api/motos/create', motosController.register);
    app.get('/api/motos/:id', motosController.getById);
    app.put('/api/motos/:id', motosController.update);
    app.delete('/api/motos/:id', motosController.delete);
}
