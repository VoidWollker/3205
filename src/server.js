const serverRoute = require('./serverRouter')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', serverRoute)

app.listen(5000, () => console.log(`Example app listening on port 5000`))