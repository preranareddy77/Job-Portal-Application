import "./Jobs.css";

function Jobs() {

    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            location: "Hyderabad",
            salary: "12 LPA",
            experience: "0-2 Years"
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Microsoft",
            location: "Bangalore",
            salary: "15 LPA",
            experience: "1-3 Years"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Adobe",
            location: "Pune",
            salary: "10 LPA",
            experience: "Freshers"
        },
        {
            id: 4,
            title: "Software Engineer",
            company: "Amazon",
            location: "Chennai",
            salary: "18 LPA",
            experience: "2+ Years"
        }
    ];

    return (

        <div className="jobs-page">

            <h1 className="jobs-title">
                Available Jobs
            </h1>

            <div className="jobs-grid">

                {jobs.map((job) => (

                    <div className="job-card" key={job.id}>

                        <p className="company">
                            {job.company}
                        </p>

                        <h2 className="job-title">
                            {job.title}
                        </h2>

                        <div className="details">

                            <p><strong>Location:</strong> {job.location}</p>

                            <p><strong>Salary:</strong> {job.salary}</p>

                            <p><strong>Experience:</strong> {job.experience}</p>

                        </div>

                        <button className="apply-btn">
                            Apply Now
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Jobs;