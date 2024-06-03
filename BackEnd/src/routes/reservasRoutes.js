// /routes/reservasRoutes.js

const reservasController = require('../controllers/reservasController');

module.exports = (app) => { 
    app.post('/api/reservas/create', reservasController.create);
    app.get('/api/reservas/:id', reservasController.getById);
    app.put('/api/reservas/:id', reservasController.update);
    app.delete('/api/reservas/:id', reservasController.delete); 
}
