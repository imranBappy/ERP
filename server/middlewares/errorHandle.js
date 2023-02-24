const errorHandle = (err, req, res, next) => {
    console.log(`Error: ${err.message}`);
    res.status(err.status).json({ message: err.message })
}

module.exports = errorHandle;