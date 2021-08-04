const StoreDTO = require('../dto')
const StoreModel = require('../model')

module.exports = async (req, res, next) => {
  const { store } = req.params

  let result
  try {
    await StoreModel.findOneAndUpdate(
      {
        url: store
      },
      { $inc: { views: 1 } }
    )

    result = await StoreModel.findOne({
      url: store
    })

    res.status(200).json({
      error: false,
      data: result ? StoreDTO.Interface(result) : null
    })
  } catch (error) {
    next(error)
  }
}
