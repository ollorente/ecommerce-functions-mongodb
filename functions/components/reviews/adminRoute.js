const router = require('express').Router()

const { Create, Get, Remove, Update } = require('./adminControllers')

router
	.route('/')
	.post(Create)

router
	.route('/:review')
	.get(Get)
	.put(Update)
	.delete(Remove)

module.exports = router