module.exports.Interface = (db) => {
  return {
    id: String(db._id),
    name: db.name ? String(db.name) : '',
    username: db.username ? String(db.username) : '',
    email: db.email ? String(db.email) : '',
    phone: db.phone ? String(db.phone) : '',
    photoURL: db.photoURL ? String(db.photoURL) : '',
    gravatar: db.gravatar ? String(db.gravatar) : '',
    isActive: Boolean(db.isActive),
    isLock: Boolean(db.isLock),
    createdAt: db.createdAt,
    updatedAt: db.updatedAt
  }
}

module.exports.RefInterface = (db) => {
  return {
    id: String(db._id),
    name: db.name ? String(db.name) : '',
    username: db.username ? String(db.username) : '',
    photoURL: db.photoURL ? String(db.photoURL) : '',
    gravatar: db.gravatar ? String(db.gravatar) : '',
    isActive: Boolean(db.isActive),
    isLock: Boolean(db.isLock)
  }
}
