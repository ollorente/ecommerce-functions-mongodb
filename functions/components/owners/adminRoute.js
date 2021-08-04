const router = require('express').Router()

const verify = require('../../utils/verifyToken')
const { Create, Get, List, Remove, Update } = require('./adminControllers')

router
  .route('/')
  .post(Create)
  .get(List)

router
  .route('/:owner')
  .get(Get)
  .put(Update)
  .delete(Remove)

module.exports = router
