import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="student-dashboard">

      <h1>Student Dashboard</h1>

      <div className="student-stats">

        <div className="student-card">
          <h2>12</h2>
          <p>Applications Sent</p>
        </div>

        <div className="student-card">
          <h2>4</h2>
          <p>Interviews</p>
        </div>

        <div className="student-card">
          <h2>2</h2>
          <p>Offers Received</p>
        </div>

      </div>

      <div className="application-table">

        <h2>Recent Applications</h2>

        <table>

          <thead>
            <tr>
              <th>Company</th>
              <th>Job Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Google</td>
              <td>Frontend Developer</td>
              <td>Under Review</td>
            </tr>

            <tr>
              <td>Microsoft</td>
              <td>Backend Developer</td>
              <td>Interview Scheduled</td>
            </tr>

            <tr>
              <td>Adobe</td>
              <td>UI Designer</td>
              <td>Selected</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentDashboard;