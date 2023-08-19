const StoreCategoryModel = require('../model')

module.exports = async (req, res, next) => {
  const { storeId } = req.params
  const { categoryId } = req.body

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
      metaTitle: categoryId,
    })

    res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
