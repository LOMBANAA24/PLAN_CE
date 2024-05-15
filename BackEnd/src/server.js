// /backend/server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const adminRoutes = require("./routes/admin.routes");

// Parsear solicitudes de tipo application/json
app.use(bodyParser.json());

// Parsear solicitudes de tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sincronizar la base de datos
db.sequelize.sync();

// Rutas
app.use("/api/admin", adminRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}.`);
});
