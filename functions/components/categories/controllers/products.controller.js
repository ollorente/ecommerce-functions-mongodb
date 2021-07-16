const CategoryModel = require("../model")
const ProductModel = require("../../products/model")
const Interface = require("../dto")
const paginator = require("../../../utils/paginator")

module.exports = async (req, res, next) => {
  const {
    category
  } = req.params
  const P = paginator(req.query.limit, req.query.page)

  const categoryData = await CategoryModel.findOne({
    _id: category
  })

  if (!categoryData) return res.status(400).json({
    error: true,
    message: 'Category not found'
  })

  let result, count
  try {
    result = await ProductModel.find({
        isActive: true
      })
      .limit(P.limit)
      .skip(P.page)
      .sort({
        sortOrder: 1
      })

    count = await ProductModel.countDocuments({
      isActive: true
    })

    res.status(200).json({
      error: false,
      data: result.length > 0 ? result.map(e => Interface.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
