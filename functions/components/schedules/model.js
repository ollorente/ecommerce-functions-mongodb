const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
  {
    storeId: {
      type: Schema.ObjectId,
      ref: 'Store'
    },
    day: {
      type: String,
      enum: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
      default: 'Lun'
    },
    open: {
      type: String,
      default: '00:00:00'
    },
    close: {
      type: String,
      default: '23:59:59'
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

module.exports = model('Schedule', dbSchema)
