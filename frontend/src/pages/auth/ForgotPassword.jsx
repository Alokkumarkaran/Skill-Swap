import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main"; // Ensure this is defined in your main file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    // Debugging the server and email values
    console.log("Server URL:", server);
    console.log("Email:", email);

    try {
      const { data } = await axios.post(
        `${server || 'http://localhost:3000'}/api/user/forgot`,
        { email }
      );

      // Check if the response contains a message
      if (data && data.message) {
        toast.success(data.message);
        navigate("/login");
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      // More detailed error logging
      console.error("Error in Forgot Password:", error);

      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form animate-fade-in">
        <h2 className="form-title">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Enter Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button disabled={btnLoading} className="common-btn submit-btn">
            {btnLoading ? "Please Wait..." : "Forgot Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
