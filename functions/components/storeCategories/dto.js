const { CategoryDTO } = require('../categories')
const { ProductDTO } = require('../products')
const { StoreDTO } = require('../stores')

module.exports.Interface = (db) => {
	return {
		id: String(db._id),
		storeId: StoreDTO.Interface(db.storeId),
		categoryId: CategoryDTO.Interface(db.categoryId),
		products:
			db._products.length > 0
				? db._products.map((e) => ProductDTO.RefInterface(e))
				: [],
		productsCount: Number(db._productsCount),
		createdAt: db.createdAt,
		updatedAt: db.updatedAt,
	}
}

module.exports.RefInterface = (db) => {
	return {
		id: String(db._id),
		storeId: StoreDTO.RefInterface(db.storeId),
		categoryId: CategoryDTO.RefInterface(db.categoryId),
	}
}
