const UserModel = require('../model')
const UserDTO = require('../dto')
const paginator = require('../../../utils/paginator')

module.exports = async (req, res, next) => {
  const P = paginator(req.query.limit, req.query.page)

  const userAuth = await UserModel.findOne({
    _id: req.user._id,
    isActive: true,
    isLock: false
  })

  if (!userAuth) {
    return res.status(403).json({
      error: true,
      message: 'Access denied'
    })
  }

  let result, count
  try {
    result = await UserModel.find({
      isActive: true,
      isLock: false
    })
      .limit(P.limit)
      .skip(P.page)
      .sort({
        name: 1
      })

    count = await UserModel.countDocuments({
      isActive: true,
      isLock: false
    })

    res.status(200).json({
      error: false,
      data: result.length > 0 ? result.map((e) => UserDTO.RefInterface(e)) : [],
      count
    })
  } catch (error) {
    next(error)
  }
}
