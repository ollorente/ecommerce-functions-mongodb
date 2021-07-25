const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
	{
		userId: {
			type: Schema.ObjectId,
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
		location: {
			type: String,
			default: '',
		},
		geo: {
			type: {
				type: String,
				default: 'Point',
			},
			coordinates: {
				type: [Number],
				index: '2dsphere',
			},
		},
		image: {
			type: String,
			default: '',
		},
		publicId: {
			type: String,
			default: '',
		},
		logo: {
			type: String,
			default: '',
		},
		logoId: {
			type: String,
			default: '',
		},
		schedules: [
			{
				type: Schema.ObjectId,
				ref: 'Schedule',
			},
		],
		views: {
			type: Number,
			default: 0,
		},
		countReviews: {
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

module.exports = model('Store', dbSchema)
