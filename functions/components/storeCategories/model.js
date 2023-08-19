const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
	{
		storeId: {
			type: Schema.ObjectId,
			ref: 'Store',
		},
		categoryId: {
			type: Schema.ObjectId,
			ref: 'Category',
		},
		_products: [
			{
				type: Schema.ObjectId,
				ref: 'Product',
			},
		],
		_productsCount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = model('StoreCategory', dbSchema)
