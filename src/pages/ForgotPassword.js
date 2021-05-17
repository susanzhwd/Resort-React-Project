import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <form className="resetPasswordForm" onSubmit={handleSubmit}>
        <h2>Password Reset</h2>
        {error && <h3>{error}</h3>}
        {message && <h3>{message}</h3>}

        <p className="form-group">
          <label htmlFor="reset">Email</label>
          <input
            id="reset"
            type="text"
            ref={emailRef}
            required
            className="form-control"
            autoFocus
          />
        </p>

        <button disabled={loading} className="submit" type="submit">
          Reset Password
        </button>
        <div className="login">
          <Link to="/login">Log in</Link>
        </div>
        <div className="login">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
