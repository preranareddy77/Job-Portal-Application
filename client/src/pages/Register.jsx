import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register-page">

            <div className="register-card">

                <h2>Create Account</h2>

                <p>Join the Job Portal</p>

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <select>
                    <option>Student</option>
                    <option>Recruiter</option>
                </select>

                <button>
                    Register
                </button>

                <div className="login-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;