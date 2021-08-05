const UserModel = require('../model')

module.exports = async (req, res, next) => {
  const { user } = req.params
  const userId = req.user._id

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
    if (userId === user) {
      result = await UserModel.deleteOne(
        {
          _id: userId
        },
        (err, owner) => {
          if (err) {
            return res.status(400).json({
              error: true,
              message: err
            })
          }

          owner.remove()
        }
      )

      res.status(200).json({
        error: false,
        data: result
      })
    } else {
      res.status(403).json({
        error: true,
        message: 'Access denied'
      })
    }
  } catch (error) {
    next(error)
  }
}
