const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
	{
		userId: {
			type: ObjectId,
			ref: 'User',
		},
		name: {
			type: String,
			require: true,
			index: true,
		},
		url: {
			type: String,
			require: true,
			unique: true,
			lowercase: true,
			trim: true,
			index: true,
		},
		ssl: String,
		image: {
			type: String,
			default: '',
		},
		publicId: {
			type: String,
			default: '',
		},
		views: {
			type: Number,
			default: 0,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		isLock: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = model('Store', dbSchema)
