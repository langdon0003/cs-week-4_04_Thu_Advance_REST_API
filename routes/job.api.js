var express = require('express');
var router = express.Router();
const { getAllJobs,
  createJob,
  deleteJobById,
  updateJobById } = require("../controllers/job.controller")

router.get("/", getAllJobs)
router.post("/", createJob)
router.put("/:id", updateJobById)
router.delete("/:id", deleteJobById)

module.exports = router