const {
  Schema,
  model
} = require("mongoose")

const dbSchema = new Schema({
  storeId: {
    type: Schema.ObjectId,
    ref: 'Store'
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  metaTitle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  metaDescription: String,
  metaKeyword: String,
  image: String,
  publicId: String,
  parentId: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  isTop: {
    type: Boolean,
    default: false
  },
  column: {
    type: Number,
    default: 0
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model("Category", dbSchema)
