module.exports.Interface = (db) => {
  return {
    id: String(db._id),
    storeId: Array(db.storeId),
    userId: Array(db.userId),
    createdAt: db.createdAt,
    updatedAt: db.updatedAt
  }
}

module.exports.RefInterface = (db) => {
  return {
    id: String(db._id),
    storeId: Array(db.storeId),
    userId: Array(db.userId)
  }
}
