const router = require('express').Router()

const { Create, Get, List, Remove, Update } = require('./controllers')
const { ReviewControllers } = require('../reviews')

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

module.exports = router
