const routes = [
    { path: '/auth', router: require('./authRoutes.js') },
]


const setRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router)
    })
}

module.exports = setRoutes;