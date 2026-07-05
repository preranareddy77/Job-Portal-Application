import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Job Portal
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link className="register-btn" to="/register">
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;