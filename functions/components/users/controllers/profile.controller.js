const UserModel = require('../model')
const UserDTO = require('../dto')

module.exports = async (req, res, next) => {
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

  let result
  try {
    result = await await UserModel.findOne({
      _id: userAuth._id
    })

    res.status(200).json({
      error: false,
      data: UserDTO.Interface(result)
    })
  } catch (error) {
    next(error)
  }
}
