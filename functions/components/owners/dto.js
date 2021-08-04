module.exports.Interface = (db) => {
  return {
    id: String(db._id)
  }
}

module.exports.RefInterface = (db) => {
  return {
    id: String(db._id)
  }
}
