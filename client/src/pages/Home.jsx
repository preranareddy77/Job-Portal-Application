import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>
            Find Your <span>Dream Job</span>
          </h1>

          <p>
            Connect with top companies, explore thousands of opportunities,
            and build your future with confidence.
          </p>

      <button onClick={() => navigate("/jobs")}>
    Explore Jobs
</button>
        </div>
      </div>

      <section className="featured">
        <h2>Featured Jobs</h2>

        <div className="job-container">

          <div className="job-card">
            <h3>Frontend Developer</h3>
            <h4>Google</h4>
            <p>Hyderabad</p>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Backend Developer</h3>
            <h4>Microsoft</h4>
            <p>Bangalore</p>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <h4>Adobe</h4>
            <p>Pune</p>
            <button>Apply Now</button>
          </div>

        </div>
      </section>

      <section className="stats-section">

        <h2>Our Achievements</h2>

        <div className="stats-container">

          <div className="stat-box">
            <h1>1000+</h1>
            <p>Jobs Posted</p>
          </div>

          <div className="stat-box">
            <h1>500+</h1>
            <p>Companies</p>
          </div>

          <div className="stat-box">
            <h1>10K+</h1>
            <p>Students</p>
          </div>

          <div className="stat-box">
            <h1>95%</h1>
            <p>Placement Rate</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;