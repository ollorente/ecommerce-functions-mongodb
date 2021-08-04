const { ReviewDTO } = require('../index')
const ReviewModel = require('../model')

module.exports = async (req, res, next) => {
  const { review } = req.params

  let result
  try {
    result = await ReviewModel.findOne({
      _id: review
    })

    res.status(200).json({
      error: false,
      data: result ? ReviewDTO.Interface(result) : null
    })
  } catch (error) {
    next(error)
  }
}
