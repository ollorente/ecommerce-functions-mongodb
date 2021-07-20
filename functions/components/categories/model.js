const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    metaTitle: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    metaDescription: {
      type: String,
      default: '',
    },
    metaKeyword: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    publicId: {
      type: String,
      default: '',
    },
    parentId: {
      type: Schema.ObjectId,
      ref: 'Category',
    },
    isTop: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 0,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model('Category', dbSchema)
