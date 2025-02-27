import React from "react";
import { useNavigate } from "react-router-dom";

const HarvardForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        ← Back to List
      </button>
      <h2>Harvard University - Application Form</h2>
      <div className="card p-4">
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Program</label>
            <select className="form-control">
              <option value="Business">Business</option>
              <option value="Law">Law</option>
              <option value="Medicine">Medicine</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default HarvardForm;
