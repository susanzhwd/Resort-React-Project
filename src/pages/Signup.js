import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("failed to create an account");
    }
    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="signupForm">
        <h2>Sign Up</h2>
        {error && <h6>{error}</h6>}

        <p className="form-group">
          <label htmlFor="Eamil">Email</label>
          <input
            className="form-control"
            id="Email"
            name="Email"
            type="text"
            ref={emailRef}
            autoFocus
          />
        </p>
        <p className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
            className="form-control"
          />
          {/* <span>Enter a password longer than 8 characters</span> */}
        </p>
        <p className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            ref={passwordConfirmRef}
            className="form-control"
          />
          {/* <span>Your passwords do not match</span> */}
        </p>
        <p>
          <button type="submit" className="submit" disabled={loading}>
            Create My Account
          </button>
        </p>
        <hr />
        <p className="login">
          Already have an account?
          <Link to="/login"> Log in</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
