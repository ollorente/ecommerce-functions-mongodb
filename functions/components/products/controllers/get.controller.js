const ProductDTO = require('../dto')
const ProductModel = require('../model')

module.exports = async (req, res, next) => {
  const {
    product
  } = req.params

  let result
  try {
    result = await ProductModel.findOne({
      _id: product,
      isDelete: false
    })

    res.status(200).json({
      error: false,
      data: result ? ProductDTO.Interface(result) : null
    })
  } catch (error) {
    next(error)
  }
}
