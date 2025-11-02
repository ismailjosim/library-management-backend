import type { Request, Response, NextFunction } from 'express'
import StatusCode from '../utils/StatusCode'
import { BorrowModel } from '../model/borrow.model'
import { BookModel } from '../model/book.model'

const createBorrowBook = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { book: bookId, quantity, dueDate } = req.body

		const book = await BookModel.findById(bookId)
		if (!book) {
			return res.status(StatusCode.NOT_FOUND).json({
				success: false,
				message: 'Book not found!',
			})
		}

		// check book stock
		if (book.copies < quantity) {
			return res.status(StatusCode.BAD_REQUEST).json({
				success: false,
				message: `Only ${book.copies} copies available`,
			})
		}

		book.copies -= quantity
		if (book.copies === 0) book.available = false
		await book.save()

		const result = await BorrowModel.create({
			book: bookId,
			quantity,
			dueDate,
		})

		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Book Borrowed successfully',
			data: result,
		})
	} catch (error) {
		next(error)
	}
}
const borrowedSummary = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const result = await BorrowModel.aggregate([
			{ $group: { _id: '$book', totalQuantity: { $sum: '$quantity' } } },
			{
				$lookup: {
					from: 'books',
					localField: '_id',
					foreignField: '_id',
					as: 'book',
				},
			},
			{
				$unwind: '$book',
			},
			{
				$project: {
					totalQuantity: 1,
					book: { title: '$book.title', isbn: '$book.isbn' },
				},
			},
		])

		return res.status(StatusCode.OK).json({
			success: true,
			message: 'Book Borrowed successfully',
			data: result,
		})
	} catch (error) {
		next(error)
	}
}

export const BorrowController = {
	createBorrowBook,
	borrowedSummary,
}
