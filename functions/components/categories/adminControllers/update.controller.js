const CategoryDTO = require('../dto')
const CategoryModel = require('../model')
const sluglify = require('../../../utils/sluglify')

module.exports = async (req, res, next) => {
  const { category } = req.params
  const update = req.body

  const categoryData = await CategoryModel.findOne({
    metaTitle: category,
  })

  if (!categoryData)
    return res.status(400).json({
      error: true,
      mesage: 'Category not exists.',
    })

  let result
  try {
    if (update.name) {
      update.metaTitle = sluglify(update.name)
    }

    result = await CategoryModel.findOneAndUpdate(
      { _id: categoryData._id },
      { $set: update },
      { new: true }
    )

    res.status(200).json({
      error: false,
      data: CategoryDTO.Interface(result),
    })
  } catch (error) {
    next(error)
  }
}
