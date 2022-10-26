import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  jobStats,
} from "../controllers/jobsController.js";
import express from "express";
const router = express.Router();
router.route("/").get(getAllJobs).post(createJob);
router.route("/stats").get(jobStats);
router.route("/:id").patch(updateJob).delete(deleteJob);
export default router;
