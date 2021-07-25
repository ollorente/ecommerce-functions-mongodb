module.exports.Interface = (db) => {
	return {
		id: String(db._id),
		userId: String(db.userId),
		name: String(db.name),
		url: String(db.url),
		ssl: String(db.ssl),
		location: String(db.location),
		location: String(db.location),
		geo: Array(db.geo),
		image: String(db.image),
		logo: String(db.logo),
		schedules: Array(db.schedules),
		views: Number(db.views),
		countReviews: Number(db.countReviews),
		isActive: Boolean(db.isActive),
		isLock: Boolean(db.isLock),
		createdAt: db.createdAt,
		updatedAt: db.updatedAt,
	}
}

module.exports.RefInterface = (db) => {
	return {
		id: String(db._id),
		name: String(db.name),
		url: String(db.url),
		location: String(db.location),
		geo: Array(db.geo),
		image: String(db.image),
		logo: String(db.logo),
		schedules: Array(db.schedules),
		countReviews: Number(db.countReviews),
		isActive: Boolean(db.isActive),
		isLock: Boolean(db.isLock),
	}
}
