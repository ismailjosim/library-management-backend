require('dotenv').config()
import express, { Request } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1/books')
app.use('/api/v1/borrow')
app.use((err: any, req: Request) => {})

mongoose
	.connect(process.env.MONGO_URI!)
	.then(() => console.log('mongoDB Connected'))
	.catch((err) => console.log(err))

app.listen(port, () => {
	console.log(`Server running on PORT: ${port}`)
})
