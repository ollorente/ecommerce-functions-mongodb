const { ReviewDTO } = require('../index')
const ReviewModel = require('../model')

module.exports = async (req, res, next) => {
  let result
  try {
    result = await ReviewModel.find()

    res.status(200).json({
      error: false,
      data: result > 0 ? result.map(e => ReviewDTO.RefInterface(e)) : []
    })
  } catch (error) {
    next(error)
  }
}
