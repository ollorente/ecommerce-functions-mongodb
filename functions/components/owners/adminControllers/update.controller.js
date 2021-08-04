const OwnerDTO = require('../dto')
const OwnerModel = require('../model')

module.exports = async (req, res, next) => {
  let result
  try {
    result = await OwnerModel.find({})

    res.status(200).json({
      error: false,
      data:
				result.length > 0 ? result.map((e) => OwnerDTO.RefInterface(e)) : []
    })
  } catch (err) {
    next(err)
  }
}
