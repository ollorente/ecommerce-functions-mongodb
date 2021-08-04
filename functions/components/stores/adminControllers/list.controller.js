const StoreDTO = require('../dto')
const StoreModel = require('../model')
const paginator = require('../../../utils/paginator')

module.exports = async (req, res, next) => {
  const P = paginator(req.query.limit, req.query.page)

  let result, count
  try {
    result = await StoreModel.find({
      isActive: true
    })
      .limit(P.limit)
      .skip(P.page)
      .sort({
        name: -1
      })

    count = await StoreModel.countDocuments({
      isActive: true
    })

    res.status(200).json({
      error: false,
      data: result.length > 0 ? result.map(e => StoreDTO.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
