const StoreModel = require('../model')

module.exports = async (req, res, next) => {
  const { store } = req.params

  const storeData = await StoreModel.findOne({
    url: store
  })

  if (!storeData) {
    return res.status(400).json({
      error: true,
      mesage: 'Store not exist.'
    })
  }

  let result
  try {
    result = await StoreModel.deleteOne({
      _id: storeData._id
    })

    res.status(200).json({
      error: false,
      data: result
    })
  } catch (error) {
    next(error)
  }
}
