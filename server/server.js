const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/', signupController);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
