var express = require('express');
var router = express.Router();


const jobApi = require("./job.api")
router.use("/jobs", jobApi)

module.exports = router;
