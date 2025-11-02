require('dotenv').config()
import express from 'express'
import type { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import StatusCode from './utils/StatusCode'
import { BookRoutes } from './routes/bookRoutes'

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// default route
app.get('/', (_, res: Response) => {
	res.status(StatusCode.OK).json({
		success: true,
		message: 'Welcome to the Library Management API',
		data: null,
	})
})

// routes
app.use('/api/v1/books', BookRoutes)
// app.use('/api/v1/borrow', require('./routes/borrowRoutes'))

// 404 route for unknown endpoints
app.use((req: Request, res: Response) => {
	res.status(StatusCode.NOT_FOUND).json({
		success: false,
		message: 'Route not found',
		error: '404 Not Found',
	})
})

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(StatusCode.BAD_REQUEST).json({
		message: err.message || 'Something went wrong',
		success: false,
		error: err,
	})
})

mongoose
	.connect(process.env.MONGO_URI!)
	.then(() => console.log('mongoDB Connected'))
	.catch((err) => console.log(err))

app.listen(port, () => {
	console.log(`Server running on PORT: ${port}`)
})
