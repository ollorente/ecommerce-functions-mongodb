const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserModel = require('../model')
const UserDTO = require('../dto')
const { loginValidation } = require('../../../utils/validation')

module.exports = async (req, res, next) => {
  const { email, password } = req.body

  let token
  try {
    /* Validate data */
    const { error } = loginValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: true,
        message: error.details[0].message
      })
    }

    /* Checking if the user is already in the database */
    const userData = await UserModel.findOne({
      email: email
    })
    if (!userData) {
      return res.status(400).json({
        error: true,
        message: 'Email or password in wrong!'
      })
    }

    /* Password in correct */
    const validPass = await bcrypt.compare(
      password,
      userData.password
    )
    if (!validPass) {
      res.status(400).json({
        error: true,
        message: 'Email or password in wrong!'
      })
    }

    token = JWT.sign(
      {
        _id: userData._id
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1d'
      }
    )

    res.status(200)
      .header('Authorization', token)
      .json({
        error: false,
        jwt: token,
        data: UserDTO.RefInterface(userData)
      })
  } catch (error) {
    next(error)
  }
}
