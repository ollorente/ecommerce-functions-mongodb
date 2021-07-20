module.exports.Interface = db => {
    return {
        id: db._id,
        storeId: db.storeId,
        name: db.name,
        description: db.description,
        metaTitle: db.metaTitle,
        metaDescription: db.metaDescription,
        metaKeyword: db.metaKeyword,
        image: db.image,
        isTop: db.isTop,
        column: db.column,
        sortOrder: db.sortOrder,
        isActive: db.isActive,
    }
}

module.exports.RefInterface = db => {
    return {
        id: db._id,
        storeId: db.storeId,
        name: db.name,
        metaTitle: db.metaTitle,
        image: db.image,
        isTop: db.isTop,
        sortOrder: db.sortOrder,
        isActive: db.isActive,
    }
}