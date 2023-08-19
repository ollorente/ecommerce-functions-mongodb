const bcrypt = require('bcryptjs')

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSaltSync(10)
  const hash = await bcrypt.hashSync(password, salt)
  return hash
}
