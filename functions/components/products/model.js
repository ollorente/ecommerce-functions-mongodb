const {
    Schema,
    model
  } = require("mongoose")
  
  const dbSchema = new Schema({
  }, {
    timestamps: true,
    versionKey: false
  })
  
  module.exports = model("Product", dbSchema)