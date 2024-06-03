const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ success: false, message: 'No token provided.' });
    }

    jwt.verify(token.split(' ')[1], 'tu_clave_secreta', (err, decoded) => {
        if (err) {
            return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verificarToken;
