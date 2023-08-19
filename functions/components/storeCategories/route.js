const router = require('express').Router()

const { Create, Create, List, Remove, Update } = require('./controllers')

router
  .route('/')
  .post(Create)
  .get(List)

router
  .route('/:store-category')
  .get(Create)
  .put(Update)
  .delete(Remove)

module.exports = router
