const fs = require('fs')
const jobController = {}

jobController.getAllJobs = (req, res, next) => {
  console.log("getAllJob");

  const limit = 20
  // const page = req.query.page || 1

  const { page, title, companyName, city, singleSkill } = req.query
  const reqPage = parseInt(page) || 1


  try {
    let rawData = fs.readFileSync('data.json', "utf-8")
    let data = JSON.parse(rawData)
    let companyList = data.companies
    let result = data.jobs


    if (title) {
      result = result.filter(i => i.title === title)
    }

    if (city) {
      result = result.filter(i => i.city === city)
    }

    if (companyName) {
      let queryCompany = companyList.find(i => i.name === companyName)

      result = result.filter(i => i.companyId === queryCompany.id)

    }

    if (singleSkill) {
      result = result.filter(i => i.skills.includes(singleSkill))
    }


    result = result.slice((reqPage - 1) * limit, reqPage * limit)

    return res.status(200).send({ result });

  } catch (error) {
    next(error)
  }


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