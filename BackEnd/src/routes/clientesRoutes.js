// /routes/clientesRoutes.js

const clientesController = require('../controllers/clientesController');

module.exports = (app) => { 
    app.post('/api/clientes/create', clientesController.register);
    app.get('/api/clientes/:id', clientesController.getById);
    app.put('/api/clientes/:id', clientesController.update);
    app.delete('/api/clientes/:id', clientesController.delete); 
}
