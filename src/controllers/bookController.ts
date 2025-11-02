import type { Request, Response, NextFunction } from 'express'
import { BookModel, IBook } from '../model/book.model'
import StatusCode from '../utils/StatusCode'
const createBook = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const bookData: IBook = req.body
		const isBookExist = await BookModel.findOne({ title: bookData?.title })
		if (isBookExist) {
			return res
				.status(StatusCode.BAD_REQUEST)
				.json({ message: 'Book with this title already exists' })
		}
		const newBook = await BookModel.create(bookData)

		return res.status(201).json({
			success: true,
			message: 'Book created successfully',
			data: newBook,
		})
	} catch (error) {
		next(error)
	}
}

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const books = await BookModel.find()
		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Books retrieved successfully',
			data: books,
		})
	} catch (error) {
		next(error)
	}
}

const getSingleBookByID = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { id } = req.params
		const book = await BookModel.findById(id)

		if (!book) {
			return res
				.status(StatusCode.NOT_FOUND)
				.json({ message: 'Book not found' })
		}

		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Book created successfully',
			data: book,
		})
	} catch (error) {
		next(error)
	}
}
const updateBookByID = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { id } = req.params

		const book = await BookModel.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		})

		if (!book) {
			return res.status(StatusCode.NOT_FOUND).json({
				success: false,
				message: 'Book not found',
				data: null,
			})
		}

		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Book updated successfully',
			data: book,
		})
	} catch (error) {
		next(error)
	}
}
const deleteBookByID = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { id } = req.params

		const book = await BookModel.findByIdAndDelete(id)

		if (!book) {
			return res.status(StatusCode.NOT_FOUND).json({
				success: false,
				message: 'Book not found',
				data: null,
			})
		}

		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Book deleted successfully',
			data: null,
		})
	} catch (error) {
		next(error)
	}
}

export const BookController = {
	createBook,
	getAllBooks,
	getSingleBookByID,
	updateBookByID,
	deleteBookByID,
}
