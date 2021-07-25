const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
	{
		storeId: {
			type: Schema.ObjectId,
			ref: 'Store',
		},
		userId: {
			type: Schema.ObjectId,
			ref: 'User',
		},
		value: {
			type: Number,
			default: 1,
		},
		isDelete: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = model('Review', dbSchema)
