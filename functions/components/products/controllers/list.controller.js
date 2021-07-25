const ProductDTO = require("../dto")
const ProductModel = require("../model")
const paginator = require("../../../utils/paginator")

module.exports = async (req, res, next) => {
  const P = paginator(req.query.limit, req.query.page)

  let result, count
  try {
    result = await ProductModel.find({
        isActive: true,
        isDelete: false,
      })
      .limit(P.limit)
      .skip(P.page)
      .sort({
        sortOrder: 1
      })

    count = await ProductModel.countDocuments({
      isActive: true,
      isDelete: false,
    })

    res.status(200).json({
      error: false,
      data: result.length > 0 ? result.map(e => ProductDTO.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
