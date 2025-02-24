import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({
  login,
  setLogin,
  handleAdmin,
  handleStudent,
  handleCounselor,
}) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <main className="justify-content-center align-items-center" >
      <div className="login-container border rounded shadow " >
        <h1 className="fw-bold text-center ">Student RECRUITMENT</h1>
        <h4 className="text-center mb-4">{showSignUp ? "Sign Up" : "Welcome!"}</h4>

        {!showSignUp ? (
          // Login Form
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        ) : (
          // Signup Form
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Create Password" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Comfirm  Password" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        )}

        {/* Role Selection */}
        <div className="mt-4 text-center">
          <h6>Select Role:</h6>
          <div className="buttons d-flex justify-content-center gap-3">
            <button className="btn btn-outline-primary" onClick={handleAdmin}>
              <FaUserShield size={20} className="me-2" /> Admin
            </button>
            <button className="btn btn-outline-success" onClick={handleStudent}>
              <FaUserGraduate size={20} className="me-2" /> Student
            </button>
            <button className="btn btn-outline-warning" onClick={handleCounselor}>
              <FaUserTie size={20} className="me-2" /> Counselor
            </button>
          </div>
        </div>

        {/* Toggle between Login & Signup */}
        <div className="mt-4 text-center">
          <p>
            {showSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span className="text-primary cursor-pointer" onClick={toggleForm} style={{ cursor: "pointer" }}>
              {showSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-secondary">Forgot Password?</Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
