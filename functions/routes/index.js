const router = require('express').Router()
const pkg = require('../../package.json')

const { CategoryAdminRoute, CategoryRoute } = require('../components/categories')
const { ReviewAdminRoute, ReviewRoute } = require('../components/reviews')
const { StoreAdminRoute, StoreRoute } = require('../components/stores')
const { UserRoute } = require('../components/users')

router.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'Welcome to eCommerce API Restful!',
    name: pkg.name,
    desciption: pkg.description,
    author: pkg.author,
    version: pkg.version
  })
})

router.use('/admin/categories', CategoryAdminRoute)
router.use('/admin/reviews', ReviewAdminRoute)
router.use('/admin/stores', StoreAdminRoute)

router.use('/categories', CategoryRoute)
router.use('/reviews', ReviewRoute)
router.use('/stores', StoreRoute)
router.use('/users', UserRoute)

router.get('*', function (req, res, next) {
  res.status(404).json({ error: 'Page not found!.' })
})

module.exports = router
