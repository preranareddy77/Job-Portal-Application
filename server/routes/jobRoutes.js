const express = require("express");
const router = express.Router();

const {
    createJob,
    getJobs
} = require("../controllers/jobController");

// Create a Job
router.post("/", createJob);

// Get All Jobs
router.get("/", getJobs);

module.exports = router;