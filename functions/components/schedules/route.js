const router = require('express').Router()

const { Create, Get, List, Update, Remove } = require('./controllers')

router
  .route('/')
  .post(Create)
  .get(List)

router
  .route('/:schedule')
  .get(Get)
  .put(Update)
  .delete(Remove)

module.exports = router
