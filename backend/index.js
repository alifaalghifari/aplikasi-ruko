const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 5500

app.use(cors())
app.use(express.json())

const { uploadRoute, userRoute } = require('./routers')

app.use('/data', uploadRoute)
app.use('/users', userRoute)

app.listen(PORT, () => console.log(`API istana_bangunan running`))