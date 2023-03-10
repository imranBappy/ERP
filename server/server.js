const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandle = require('./middlewares/errorHandle');
const setRoutes = require('./routes');
const setMiddlewares = require('./middlewares');
const Formet = require('./utils/dataFormet');
const app = express();
const cors = require('cors')

dotenv.config({ path: './config/.env' })

// connect Database()
connectDB();


//static file
app.use(express.static(__dirname + '\\public'))
app.use(cors());
//set middlewares
setMiddlewares(app)

// all routes set here
setRoutes(app)

app.get('/', (req, res) => res.send("Hello World"))

// handle Error
app.use(errorHandle)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


