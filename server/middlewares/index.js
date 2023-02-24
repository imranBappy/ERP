const morgan = require("morgan")
const express = require('express')
const middlewares = [
    express.json(),
    morgan('dev')
]

const setMiddlewares = (app) => {
    middlewares.forEach(middleware => {
        app.use(middleware)
    })
}

module.exports = setMiddlewares;