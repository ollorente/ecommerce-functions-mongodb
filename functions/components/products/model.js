const { Schema, model } = require('mongoose')

const dbSchema = new Schema(
  {
    url: {
      type: String,
      required: true
    },
    storeId: {
      type: Schema.ObjectId,
      ref: 'Store'
    },
    categoryId: {
      type: Schema.ObjectId,
      ref: 'Category'
    },
    model: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      default: ''
    },
    upc: {
      type: String,
      default: ''
    },
    ean: {
      type: String,
      default: ''
    },
    jan: {
      type: String,
      default: ''
    },
    isbn: {
      type: String,
      default: ''
    },
    mpn: {
      type: String,
      default: ''
    },
    location: {
      type: String
    },
    quantity: {
      type: Number,
      default: 1
    },
    stockStatusId: {
      type: Number,
      default: 1
    },
    image: {
      type: String,
      default: ''
    },
    publicId: {
      type: String,
      default: ''
    },
    manufacturerId: {
      type: Schema.ObjectId,
      ref: 'Manufacturer'
    },
    shipping: {
      type: Boolean,
      default: true
    },
    price: {
      type: Number,
      default: 0
    },
    points: {
      type: Number,
      default: 0
    },
    taxClassId: {
      type: Schema.ObjectId,
      ref: 'TaxClass'
    },
    dateAvailable: {
      type: Date,
      default: Date.now()
    },
    weight: {
      type: Number,
      default: 0
    },
    weightClassId: {
      type: Schema.ObjectId,
      ref: 'WeightClass'
    },
    length: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    lengthClassId: {
      type: Schema.ObjectId,
      ref: 'LegthClass'
    },
    subtract: {
      type: Boolean,
      default: true
    },
    minimum: {
      type: Number,
      default: 0
    },
    sort_order: {
      type: Number,
      default: 0
    },
    status: {
      type: Boolean,
      default: true
    },
    views: {
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

module.exports = model('Product', dbSchema)
