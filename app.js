const express = require('express')
const parser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(cors())
app.use(parser.json({ extended: true }));
app.use("/user", userRoutes);

app.listen(3001, () => {
    console.log('server started');
})