const jwt = require('jsonwebtoken');
const isAuthenticated = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) return res.json({
            isAuthintication: false,
            message: 'User Unauthorized',
            error: true
        })
        const decode = jwt.verify(authorization, process.env.JWT_SECRET);
        req.user = decode._id;
        next();
    } catch (error) {
        error.status = 401;
        next(error)
    }
}
module.exports = isAuthenticated;