import "./RecruiterDashboard.css";

function RecruiterDashboard() {
  return (
    <div className="dashboard">

      <h1>Recruiter Dashboard</h1>

      <div className="stats">

        <div className="card">
          <h2>25</h2>
          <p>Total Jobs Posted</p>
        </div>

        <div className="card">
          <h2>132</h2>
          <p>Total Applications</p>
        </div>

        <div className="card">
          <h2>18</h2>
          <p>Open Positions</p>
        </div>

      </div>

      <div className="recent">

        <h2>Recent Job Posts</h2>

        <table>

          <thead>

            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Frontend Developer</td>
              <td>Google</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>Backend Developer</td>
              <td>Microsoft</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>UI Designer</td>
              <td>Adobe</td>
              <td>Closed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecruiterDashboard;