const bcrypt = require('bcryptjs')
const md5 = require('md5')

const UserModel = require('../model')
const UserDTO = require('../dto')
const { registerValidation } = require('../../../utils/validation')

module.exports = async (req, res, next) => {
  const {
    name,
    username,
    email,
    password,
    password_confirmation,
    phone,
    isNewsletter
  } = req.body

  if (password !== password_confirmation) {
    return res.status(400).json({
      error: true,
      message: 'Password don\'t match!.'
    })
  }

  /* Validate data */
  const { error } = registerValidation(req.body)
  if (error) {
    return res.status(400).json({
      error: true,
      message: error.details[0].message
    })
  }

  /* Checking if the user is already in the database */
  const emailExist = await UserModel.findOne({ email: email.toLowerCase() })

  if (emailExist) {
    return res.status(400).json({
      error: true,
      message: 'Email already exist!'
    })
  }

  /* Hash password */
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newData = new UserModel({
    name,
    username: username.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    gravatar: md5(req.body.email.toLowerCase().trim()),
    phone,
    isNewsletter,
    provider: 'local'
  })

  let result
  try {
    result = await newData.save()

    res.status(201).json({
      error: false,
      data: UserDTO.RefInterface(result)
    })
  } catch (error) {
    next(error)
  }
}
