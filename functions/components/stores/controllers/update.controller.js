const StoreDTO = require('../dto')
const StoreModel = require('../model')

module.exports = async (req, res, next) => {
	const { store } = req.params
	const update = req.body

	const storeData = await StoreModel.findOne({
		url: store,
		isDelete: false,
	})

	if (!storeData)
		return res.status(400).json({
			error: true,
			mesage: 'Store not exist.',
		})

	let result
	try {
		result = await StoreModel.findOneAndUpdate(
			{ _id: storeData._id },
			{ $set: update },
			{ new: true }
		)

		res.status(200).json({
			error: false,
			data: StoreDTO.Interface(result),
		})
	} catch (error) {
		next(error)
	}
}
