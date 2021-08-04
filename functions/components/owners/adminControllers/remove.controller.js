const OwnerModel = require('../model')

module.exports = async (req, res, next) => {
  const { owner } = req.params

  const ownerData = await OwnerModel.findOne({ _id: owner })

  if (!ownerData) {
    return res.status(400).json({
      error: true,
      message: 'Owner not found!.'
    })
  }

  let result
  try {
    result = await OwnerModel.deleteOne(
      { _id: ownerData._id },
      (err, store) => {
        if (err) {
          return res.status(400).json({
            error: true,
            message: err
          })
        }

        store.remove()
      }
    )

    res.status(200).json({
      error: false,
      data: result
    })
  } catch (err) {
    next(err)
  }
}
