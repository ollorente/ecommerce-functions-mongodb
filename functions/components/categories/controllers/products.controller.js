const CategoryDTO = require('../dto')
const CategoryModel = require('../model')
const { ProductModel } = require('../../products')
const { StoreModel } = require('../../stores')
const paginator = require('../../../utils/paginator')

module.exports = async (req, res, next) => {
  const { category } = req.params
  const P = paginator(req.query.limit, req.query.page)

  const categoryData = await CategoryModel.findOne({
    metaTitle: category
  })

  if (!categoryData) {
    return res.status(400).json({
      error: true,
      message: 'Category not found'
    })
  }

  let result, count
  try {
    result = await ProductModel.find({
      categoryId: categoryData._id,
      isActive: true,
      isDelete: false
    })
      .limit(P.limit)
      .skip(P.page)
      .sort({
        sortOrder: 1
      })

    count = await ProductModel.countDocuments({
      categoryId: categoryData._id,
      isActive: true,
      isDelete: false
    })

    res.status(200).json({
      error: false,
      data:
        result.length > 0 ? result.map((e) => CategoryDTO.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
