// Entry point to the backend
const express = require('express')
const connectDB = require('./config/db')


const app = express()

// Connect Database

connectDB()

// init middleware to grant permission accept json data

app.use(express.json({extended:false}))

// Basic get route
app.get('/', (req,res) => res.send("hello"))

// Define Routes

app.use('/api/quotes',require('./Routes/quotes'))

const PORT = process.env.PORT || 5000

app.listen(PORT , () => console.log(`Server started on port ${PORT}`))

