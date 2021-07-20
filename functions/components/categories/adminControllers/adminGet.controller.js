const CategoryModel = require('../model')
const Interface = require('../dto')

module.exports = async (req, res, next) => {
  const { category } = req.params

  let result
  try {
    result = await CategoryModel.findOne({
      metaTitle: category,
    })

    res.status(200).json({
      error: false,
      data: result ? Interface.Interface(result) : null,
    })
  } catch (error) {
    next(error)
  }
}
