const router = require("express").Router();
const axios = require("axios")

router.route('/')
.get((req, res) => {
    res.status(200).send();
})

module.exports = router