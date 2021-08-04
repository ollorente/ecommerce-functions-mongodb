const router = require('express').Router()

const { Create, Get, List, Remove, Update } = require('./controllers')
const { ReviewControllers } = require('../reviews')
const { ScheduleControllers } = require('../schedules')

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
  .get(ReviewControllers.List)

router
  .route('/:store/schedules')
  .get(ScheduleControllers.List)

module.exports = router
