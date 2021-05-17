import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (e) {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <form className="dashboardForm">
        <h2>Profile</h2>
        {error && <h3>{error}</h3>}
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary">
          Update Profile
        </Link>
        <div className="w-100 text-center mt-2">
          <button variant="link" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
