// /routes/garajesRoutes.js

const garajesController = require('../controllers/garajesController');

module.exports = (app) => {
    app.post('/api/garajes/create', garajesController.register);
    app.get('/api/garajes/:id', garajesController.getById);
    app.put('/api/garajes/:id', garajesController.update);
    app.delete('/api/garajes/:id', garajesController.delete);
}
