const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')


//load env vars
dotenv.config({path: './config/config.env'})
const PORT = process.env.PORT || 5100

const app = express()

// Connect to database
connectDB()

// Body parser
app.use(express.json())

// Enable cors
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/stores', require('./routes/stores'))

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)