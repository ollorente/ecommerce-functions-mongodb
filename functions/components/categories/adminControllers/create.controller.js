const CategoryModel = require('../model')
const sluglify = require('../../../utils/sluglify')

module.exports = async (req, res, next) => {
  const {
    name,
    description,
    metaTitle,
    metaDescription,
    metaKeyword,
    parentId,
    isTop,
    column,
    sortOrder,
    isActive
  } = req.body

  const MetaTitle = metaTitle || sluglify(name)
  const metaTitleData = await CategoryModel.findOne({ metaTitle: MetaTitle })

  if (metaTitleData) {
    return res.status(400).json({
      error: true,
      message: 'Meta Title exists.'
    })
  }

  const newData = new CategoryModel({
    name,
    description,
    metaTitle: sluglify(name),
    metaDescription,
    metaKeyword,
    parentId,
    isTop,
    column,
    sortOrder,
    isActive
  })

  let result
  try {
    result = await newData.save()

    res.status(201).json({
      error: false,
      data: result
    })
  } catch (error) {
    next(error)
  }
}
