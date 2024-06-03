const fs = require('fs');
const crypto = require('crypto');

// Generar una cadena de caracteres aleatoria de longitud 32
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Guardar la cadena en un archivo .env
fs.writeFileSync('.env', `JWT_SECRET=${jwtSecret}\n`);

console.log('JWT Secret generado y guardado en el archivo .env.');
