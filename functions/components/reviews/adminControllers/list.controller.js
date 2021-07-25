const { ReviewDTO } = require('../index')
const ReviewModel = require('../model')
const StoreModel = require('../../stores/model')

module.exports = async (req, res, next) => {
	const { store } = req.params

	const storeData = await StoreModel.findOne({
		url: store,
		isDelete: false,
	})

	if (!storeData) return res.status(400).json({
		error: true,
		message: 'Store not exist.'
	})

	let result, count
	try {
		result = await ReviewModel.find({
			storeId: storeData._id,
		}).sort({
			createdAt: -1,
		})

		count = await ReviewModel.countDocuments({
			storeId: storeData._id,
			isDelete: false,
		})

		res.status(200).json({
			error: false,
			data: result > 0 ? result.map((e) => ReviewDTO.RefInterface(e)) : [],
			count,
		})
	} catch (error) {
		next(error)
	}
}
