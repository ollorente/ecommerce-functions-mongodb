require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const multer = require('multer')
const serverless = require('serverless-http')
const mongoose = require('mongoose')

const app = express()

mongoose
  .connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`>>> [DB] is connected... <<<`))
  .catch((error) => console.log(`<<< [ERROR]: ${error} >>>`))

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(cookieParser())
app.use(
  multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/jpg|jpeg|png|gif$i/)) {
        cb(new Error('<<< File not supported!. >>>'), false)
      }
      cb(null, true)
    },
    dest: path.join(__dirname, '/public/temp'),
    limits: {
      fileSize: 1024 * 1024 * 2,
    },
  }).single('image')
)

app.use('/.netlify/functions/app', require('./routes'))

module.exports.handler = serverless(app)
