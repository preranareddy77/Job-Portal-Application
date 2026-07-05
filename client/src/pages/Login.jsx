import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-page">

            <div className="login-card">

                <h2>Welcome Back</h2>

                <p>Login to continue</p>

                <input
                    type="email"
                    placeholder="Email Address"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button>
                    Login
                </button>

                <div className="signup-link">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;