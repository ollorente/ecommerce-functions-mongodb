const router = require('express').Router()

const { Create, Get, List, Remove, Update } = require('./adminControllers')

router
  .route('/')
  .post(Create)
  .get(List)

router
  .route('/:category')
  .get(Get)
  .put(Update)
  .delete(Remove)

module.exports = router
