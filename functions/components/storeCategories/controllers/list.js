const StoreCategoryDTO = require('../dto')
const StoreCategoryModel = require('../model')
const paginator = require('../../../utils/paginator')

module.exports = async (req, res, next) => {
	const { storeId } = req.params
	const P = paginator(req.query.limit, req.query.page)

	const storeData = await StoreModel.findOne({ url: storeId })

	if (!storeData)
		return res.status(400).json({
			error: true,
			message: `Store not found.`,
		})

	let result
	try {
		result = await StoreCategoryModel.find({
			_id: storeData._id,
		})
			.populate({
				path: 'categoryId',
			})
			.limit(P.limit)
			.skip(P.page)
			.sort({
				name: 1,
			})

		res.status(200).json({
			error: false,
			data:
				result.length > 0
					? result.map((e) => StoreCategoryDTO.RefInterface(e))
					: [],
		})
	} catch (err) {
		next(err)
	}
}
