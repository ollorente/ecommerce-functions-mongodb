const CategoryDTO = require('../dto')
const CategoryModel = require('../model')

module.exports = async (req, res, next) => {
  const { category } = req.params

  let result
  try {
    result = await CategoryModel.findOne({
      metaTitle: category,
      isDelete: false,
    })

    res.status(200).json({
      error: false,
      data: result ? CategoryDTO.Interface(result) : null,
    })
  } catch (error) {
    next(error)
  }
}
