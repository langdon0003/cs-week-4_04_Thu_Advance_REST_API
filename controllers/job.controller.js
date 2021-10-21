const jobController = {}

jobController.getAllJobs = (req, res, next) => {
  console.log("getAllJob");
    return res.status(200).send("getAllJob");

}

jobController.createJob = (req, res, next) => {
  console.log("createJob");
    return res.status(200).send("createJob");

}
jobController.deleteJobById = (req, res, next) => {
  console.log("deleteJobById");
    return res.status(200).send("deleteJobById");

}
jobController.updateJobById = (req, res, next) => {
  console.log("updateJobById");
    return res.status(200).send("updateJobById");

}

module.exports = jobController