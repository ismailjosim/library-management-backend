import mongoose, { ObjectId, Schema, Types } from 'mongoose'

export interface IBorrow {
	book: Types.ObjectId
	quantity: number
	dueDate: Date
}

const borrowSchema = new Schema<IBorrow>(
	{
		book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
		quantity: { type: Number, required: true, min: 1 },
		dueDate: { type: Date, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	},
)

export const BorrowModel = mongoose.model('Borrows', borrowSchema)
