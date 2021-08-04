const CategoryModel = require('../model')

module.exports = async (req, res, next) => {
  const { category } = req.params

  const categoryData = await CategoryModel.findOne({
    metaTitle: category
  })

  if (!categoryData) {
    return res.status(400).json({
      error: true,
      mesage: 'Category not exists.'
    })
  }

  let result
  try {
    result = await CategoryModel.findOneAndUpdate(
      { _id: categoryData._id },
      { $set: { isDelete: true } },
      { new: true }
    )

    res.status(200).json({
      error: false,
      data: result
    })
  } catch (error) {
    next(error)
  }
}
