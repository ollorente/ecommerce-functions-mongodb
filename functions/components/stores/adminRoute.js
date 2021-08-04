const router = require('express').Router()

const { Create, Get, List, Remove, Update } = require('./adminControllers')
const { ReviewAdminControllers } = require('../reviews')

router
  .route('/')
  .post(Create)
  .get(List)

router
  .route('/:store')
  .get(Get)
  .put(Update)
  .delete(Remove)

router
  .route('/:store/reviews')
  .get(ReviewAdminControllers.List)

module.exports = router
