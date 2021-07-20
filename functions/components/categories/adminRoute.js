const router = require('express').Router()

const {
  AdminCategoryCreate,
  AdminCategoryGet,
  AdminCategoryList,
  AdminCategoryRemove,
  AdminCategoryUpdate,
} = require('./adminControllers')

router
	.route('/')
	.post(AdminCategoryCreate)
	.get(AdminCategoryList)

router
  .route('/:category')
  .get(AdminCategoryGet)
  .put(AdminCategoryUpdate)
  .delete(AdminCategoryRemove)

module.exports = router
