const router = require("express").Router()

const { Get, List } = require("./controllers")

router
    .route("/")
    .get(List)

router
    .route("/:product")
    .get(Get)

module.exports = router
