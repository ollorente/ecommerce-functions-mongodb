const bcrypt = require('bcryptjs')
const md5 = require('md5')

const UserModel = require('../model')
const UserDTO = require('../dto')

module.exports = async (req, res, next) => {
  const { user } = req.params
  const update = req.body

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

  const personData = await UserModel.findOne({
    _id: user
  })

  if (!personData) {
    return res.status(500).json({
      error: true,
      message: 'User not found!'
    })
  }

  let result
  try {
    if (userAuth._id.toString() === personData._id.toString()) {
      if (update.password) {
        /* Hash password */
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(
          update.password,
          salt
        )

        update.password = hashedPassword
      }

      if (update.email) {
        update.gravatar = await md5(update.email)
      }

      result = await UserModel.findOneAndUpdate(
        {
          _id: user
        },
        {
          $set: update
        },
        {
          new: true
        }
      )

      res.status(200).json({
        error: false,
        data: UserDTO.Interface(result)
      })
    } else {
      res.status(400).json({
        error: true,
        message: 'Access denied'
      })
    }
  } catch (error) {
    next(error)
  }
}
