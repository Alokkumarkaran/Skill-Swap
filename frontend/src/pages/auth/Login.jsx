import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  return (
    <div className="auth-page">
      <div className="auth-form animate-fade-in">
        <h2 className="form-title">Login</h2>
        <form onSubmit={submitHandler} className="form-content">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button
            disabled={btnLoading}
            type="submit"
            className="common-btn submit-btn"
          >
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
        <div className="auth-links">
          <p>
            Don't have an account? <Link to="/register" className="link">Register</Link>
          </p>
          <p>
            <Link to="/forgot" className="link">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
