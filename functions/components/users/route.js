const router = require('express').Router()

const verify = require('../../utils/verifyToken')
const {
  Auth,
  Create,
  Get,
  List,
  Profile,
  Remove,
  Update
} = require('./controllers')

router
  .route('/')
  .post(Create)
  .get(verify, List)

router
  .route('/auth')
  .post(Auth)

router
  .route('/profile')
  .get(verify, Profile)

router
  .route('/:user')
  .get(verify, Get)
  .put(verify, Update)
  .delete(verify, Remove)

module.exports = router
