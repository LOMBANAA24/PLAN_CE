// /routes/ciudadesRoutes.js

const ciudadesController = require('../controllers/ciudadesController');

module.exports = (app) => {
    app.post('/api/ciudades/create', ciudadesController.register);
    app.get('/api/ciudades/:id', ciudadesController.getById);
    app.put('/api/ciudades/:id', ciudadesController.update);
    app.delete('/api/ciudades/:id', ciudadesController.delete);
}
