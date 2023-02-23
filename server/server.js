const express = require('express')
const dotenv = require('dotenv');
const { signupController } = require('./controllers/authController');
const connectDB = require('./config/db');
const errorHandle = require('./middlewares/errorHandle');
const setRoutes = require('./routes');
const setMiddlewares = require('./middlewares');
const app = express();

dotenv.config({ path: './config/.env' })

// connect Database()
connectDB()

//set middlewares
setMiddlewares(app)

// all routes set here
setRoutes(app)




// handle Error
app.use(errorHandle)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


