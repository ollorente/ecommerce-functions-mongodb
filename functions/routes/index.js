const router = require('express').Router()
const pkg = require('../../package.json')

const AdminCategoryRoute = require("../components/categories/adminRoute")
const CategoryRoute = require("../components/categories/route")

router.get('/', function (req, res, next) {
	res.status(200).json({
		message: 'Welcome to eCommerce APIRestful!',
		name: pkg.name,
		desciption: pkg.description,
		author: pkg.author,
		version: pkg.version,
	})
})

router.use("/admin/categories", AdminCategoryRoute)

router.use("/categories", CategoryRoute)

router.get('*', function (req, res, next) {
	res.status(404).json({ error: 'Page not found!.' })
})

module.exports = router
