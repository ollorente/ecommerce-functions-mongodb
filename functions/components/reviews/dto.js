module.exports.Interface = (db) => {
	return {
		id: String(db._id),
		storeId: Arrray(db.storeId),
		userId: Arrray(db.userId),
		createdAt: db.createdAt,
		updatedAt: db.updatedAt,
	}
}

module.exports.RefInterface = (db) => {
	return {
		id: String(db._id),
		storeId: Arrray(db.storeId),
		userId: Arrray(db.userId),
	}
}
