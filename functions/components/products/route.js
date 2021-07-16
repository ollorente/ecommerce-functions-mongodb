const router = require("express").Router()

const { ProductList, ProductGet } = require("./controllers")

router
    .route("/")
    .get(ProductList)

router
    .route("/:product")
    .get(ProductGet)

module.exports = router
