import React, { useState } from "react";
import "./auth.css";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    if (!params.token) {
      toast.error("Invalid or missing token.");
      return setBtnLoading(false);
    }

    try {
      const { data } = await axios.post(
        `${server}/api/user/reset?token=${params.token}`,
        { password }
      );

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred, please try again.");
      setBtnLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form animate-fade-in">
        <h2 className="form-title">Reset Password</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Enter New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" disabled={btnLoading} className="common-btn submit-btn">
            {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
