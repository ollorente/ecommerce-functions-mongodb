module.exports.Interface = db => {
	return {
		id: String(db._id),
		name: String(db.name),
		description: String(db.description),
		metaTitle: String(db.metaTitle),
		metaDescription: String(db.metaDescription),
		metaKeyword: String(db.metaKeyword),
		image: String(db.image),
		isTop: Boolean(db.isTop),
		column: Number(db.column),
		sortOrder: Number(db.sortOrder),
		isActive: Boolean(db.isActive),
		createdAt: db.createdAt,
		updatedAt: db.updatedAt,
	}
}

module.exports.RefInterface = db => {
	return {
		id: String(db._id),
		name: String(db.name),
		metaTitle: String(db.metaTitle),
		image: String(db.image),
		sortOrder: Number(db.sortOrder),
		isActive: Boolean(db.isActive),
	}
}