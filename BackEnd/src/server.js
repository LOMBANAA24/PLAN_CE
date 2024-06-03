const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/**
* Importar rutas
*/
const administradoresRoutes = require('./routes/administradoresRoutes');
const agenciasRoutes = require('./routes/agenciasRoutes');
const ciudadesRoutes = require('./routes/ciudadesRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const garajesRoutes = require('./routes/garajesRoutes');
const motosRoutes = require('./routes/motosRoutes');
const reservasRoutes = require('./routes/reservasRoutes'); 

const port = process.env.PORT || 3000; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

/**
* LLamando las rutas
*/
administradoresRoutes(app);
agenciasRoutes(app);
ciudadesRoutes(app);
clientesRoutes(app);
garajesRoutes(app);
motosRoutes(app); 
reservasRoutes(app); 

// Dirección IP V4 de la máquina, consulta con ipconfig 
// Mi IP: 192.168.1.43
server.listen(port, 'localhost', function() {
    console.log('Aplicación de NodeJS ' + process.pid + ' inició en el puerto ' + port);
   });
   

app.get('/', (req, res) => { 
 res.send('Ruta raíz del Backend');
});

// Manejador de errores 
app.use((err, req, res, next) => { 
 console.log(err);
 res.status(err.status || 500).send(err.stack);
});
