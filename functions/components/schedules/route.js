const router = require('express').Router()

router
	.route('/')
	.post()
	.get()

router
	.route('/:schedule')
	.get()
	.put()
	.delete()

modules.exports = router