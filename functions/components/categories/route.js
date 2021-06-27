const router = require("express").Router()

const { CategoryList, CategoryGet } = require("./controllers")

router
    .route("/")
    .get(CategoryList)

router
    .route("/:category")
    .get(CategoryGet)

module.exports = router
