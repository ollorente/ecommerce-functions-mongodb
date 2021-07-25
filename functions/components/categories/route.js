const router = require("express").Router()

const { Get, List, ProductsList } = require("./controllers")

router
    .route("/")
    .get(List)

router
    .route("/:category")
    .get(Get)

router
    .route("/:category/products")
    .get(ProductsList)

module.exports = router
