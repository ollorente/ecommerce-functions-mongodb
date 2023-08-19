const StoreCategoryModel = require('../model')

module.exports = async (req, res, next) => {
  let result
  try {
    result = await StoreCategoryModel.find()

    res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
