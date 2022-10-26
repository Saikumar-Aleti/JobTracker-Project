const getAllJobs = async (req, res) => {
  res.send("Get All Jobs!");
};
const createJob = async (req, res) => {
  res.send("Create Job!");
};
const updateJob = async (req, res) => {
  res.send("Update Job!");
};
const deleteJob = async (req, res) => {
  res.send("Delete Job");
};
const jobStats = async (req, res) => {
  res.send("Job Stats!");
};

export { getAllJobs, createJob, updateJob, deleteJob, jobStats };
