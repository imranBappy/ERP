

const routes = [
    { path: '/auth', router: require('./authRoutes.js') },
    { path: '/admission', router: require('./admissionRoutes.js') },
    { path: '/department', router: require('./departmentRoutes.js') },
    { path: '/payment', router: require('./paymentRoutes.js') },
    { path: '/notice', router: require('./noticeRoutes') },
    { path: '/admin', router: require('./adminRoutes.js') },
    { path: '/teacher', router: require('./teacherRoutes.js') },
    { path: '/student', router: require('./studentRoutes.js') }
]


const setRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router)
    })
}

module.exports = setRoutes;