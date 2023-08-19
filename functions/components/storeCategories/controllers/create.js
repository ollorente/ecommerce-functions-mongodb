const StoreCategoryDTO = require('../dto')
const StoreCategoryModel = require('../model')
const { CategoryModel } = require('../../categories')
const { StoreModel } = require('../../stores')

module.exports = async (req, res, next) => {
	const { storeId } = req.params
	const { categoryId } = req.body

	const storeData = await StoreModel.findOne({ url: storeId })

	if (!storeData)
		return res.status(400).json({
			error: true,
			message: `Store not found.`,
		})

	const categoryData = await CategoryModel.findOne({ metaTitle: categoryId })

	if (!categoryData)
		return res.status(400).json({
			error: true,
			message: `category not found.`,
		})

	const newData = new StoreCategoryModel({
		storeId: storeData._id,
		categoryId: categoryData._id,
	})

	let result
	try {
		result = await newData.save()

		res.status(201).json({
			error: false,
			data: StoreCategoryDTO.Interface(result),
		})
	} catch (err) {
		next(err)
	}
}
