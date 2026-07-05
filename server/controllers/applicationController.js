const Application = require("../models/Application");

// Apply for a Job
const applyJob = async (req, res) => {
    try {

        const application = await Application.create(req.body);

        res.status(201).json(application);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Applications
const getApplications = async (req, res) => {

    try {

        const applications = await Application.find()
            .populate("job")
            .populate("applicant");

        res.json(applications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    applyJob,
    getApplications
};