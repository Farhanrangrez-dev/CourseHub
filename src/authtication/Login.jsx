import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield, FaUserTie, FaUserGraduate } from "react-icons/fa";

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

  const handleRoleSelect = (role) => {
    let userEmail = "";
    let userPassword = "";

    if (role === "admin") {
      userEmail = "admin@example.com";
      userPassword = "admin123";
    } else if (role === "student") {
      userEmail = "student@example.com";
      userPassword = "student123";
    } else if (role === "counselor") {
      userEmail = "counselor@example.com";
      userPassword = "counselor123";
    }

    setEmail(userEmail);
    setPassword(userPassword);

    localStorage.setItem("login", role);
    setLogin(role);

    console.log("Login state updated:", role);
    console.log("LocalStorage updated:", localStorage.getItem("login"));

    // Delay navigation to ensure state updates
    setTimeout(() => {
      navigate(
        role === "admin"
          ? "/dashboard"
          : role === "student"
          ? "/studentProfile"
          : "/councelor"
      );
    }, 300);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    let role = "";
    if (email === "admin@example.com" && password === "admin123") {
      role = "admin";
    } else if (email === "student@example.com" && password === "student123") {
      role = "student";
    } else if (
      email === "counselor@example.com" &&
      password === "counselor123"
    ) {
      role = "counselor";
    } else {
      alert("Invalid credentials!");
      return;
    }

    setLogin(role);
    localStorage.setItem("login", role);

    console.log("Login state updated:", role);
    console.log("LocalStorage updated:", localStorage.getItem("login"));

    setTimeout(() => {
      navigate(
        role === "admin"
          ? "/dashboard"
          : role === "student"
          ? "/studentProfile"
          : "/counselor"
      );
    }, 300);
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <h1 className="fw-bold text-center">Student RECRUITMENT</h1>
        <h4 className="text-center mb-4">
          {showSignUp ? "Sign Up" : "Welcome!"}
        </h4>

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
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        ) : (
          // Signup Form
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Create Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>
        )}

        {/* Role Selection */}
        <div className="mt-4 text-center">
          <h6>Select Role:</h6>
          <div className="buttons d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleRoleSelect("admin")}
            >
              <FaUserShield size={20} className="me-2" /> Admin
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleRoleSelect("student")}
            >
              <FaUserGraduate size={20} className="me-2" /> Student
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => handleRoleSelect("counselor")}
            >
              <FaUserTie size={20} className="me-2" /> Counselor
            </button>
          </div>
        </div>

        {/* Toggle between Login & Signup */}
        <div className="mt-4 text-center">
          <p>
            {showSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={toggleForm}
              style={{ cursor: "pointer" }}
            >
              {showSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-secondary">
            Forgot Password?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
