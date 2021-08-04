const { Schema, model } = require('mongoose')
const { OwnerModel } = require('../owners')

const dbSchema = new Schema(
  {
    name: {
      type: String,
      max: 256,
      min: 3
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      max: 30,
      min: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      max: 255,
      min: 3
    },
    phone: {
      type: String,
      max: 20,
      min: 6
    },
    photoURL: {
      type: String,
      default: ''
    },
    publicId: {
      type: String,
      default: ''
    },
    gravatar: String,
    provider: String,
    isNewsletter: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isLock: {
      type: Boolean,
      default: false
    },
    isDelete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

dbSchema.pre('remove', async function (next) {
  try {
    await OwnerModel.deleteOne({
      userId: this._id
    })
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = model('User', dbSchema)
