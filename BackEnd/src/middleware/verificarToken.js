const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ success: false, message: 'No se proporcionó ningún token.' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'tu_clave_secreta');
        req.userId = decoded.id;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expirado.' });
        }
        return res.status(500).json({ success: false, message: 'Error al autenticar el token.' });
    }
}

module.exports = verificarToken;
