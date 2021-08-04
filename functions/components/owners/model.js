const { Schema, model } = require('mongoose')
const { StoreModel } = require('../stores')

const dbSchema = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    _stores: [
      {
        type: Schema.ObjectId,
        ref: 'Store'
      }
    ],
    _storesCount: {
      type: Number,
      default: 0
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
    await StoreModel.deleteMany({
      _id: {
        $in: this._stores
      }
    })
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = model('Owner', dbSchema)
