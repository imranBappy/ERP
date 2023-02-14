const express = require('express')
const dotenv = require('dotenv');
const { signupController } = require('./controllers/authController');
const connectDB = require('./config/db');
const app = express();

dotenv.config({ path: './config/.env' })

connectDB()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/', signupController);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
