module.exports.Interface = (db) => {
	return {
		id: String(db._id),
		storeId: Array(db.storeId),
		day: String(db.day),
		open: String(db.open),
		close: String(db.close),
		isActive: Boolean(db.isActive),
		isLock: Boolean(db.isLock),
		createdAt: db.createdAt,
		updatedAt: db.updatedAt,
	}
}

module.exports.RefInterface = (db) => {
	return {
		id: String(db._id),
		storeId: Arrray(db.storeId),
		day: String(db.day),
		open: String(db.open),
		close: String(db.close),
	}
}
