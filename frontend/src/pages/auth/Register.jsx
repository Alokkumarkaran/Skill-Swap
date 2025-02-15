import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user"); // Default role is user

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, role, navigate);
  };

  return (
    <div className="auth-page">
      <div className="auth-form animate-fade-in">
        <h2 className="form-title">Register</h2>
        <form onSubmit={submitHandler} className="form-content">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>

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

        
          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)} // Set selected role value
              required
              className="form-input"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={btnLoading}
            className="common-btn submit-btn"
          >
            {btnLoading ? "Please Wait..." : "Register"}
          </button>
        </form>
        <div className="auth-links">
          <p>
            Have an account? <Link to="/login" className="link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
