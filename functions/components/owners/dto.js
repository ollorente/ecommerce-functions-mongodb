module.exports.Interface = (db) => {
  return {
    id: String(db._id),
    userId: String(db.userId),
    stores: String(db._stores),
    storesCount: Number(db._storesCount),
    isActive: Boolean(db.isActive),
    isLock: Boolean(db.isLock),
    createdAt: db.createdAt,
    updatedAt: db.updatedAt,
  }
}

module.exports.RefInterface = (db) => {
  return {
    id: String(db._id),
    userId: String(db.userId),
    stores: String(db._stores),
    storesCount: String(db._storesCount),
  }
}
