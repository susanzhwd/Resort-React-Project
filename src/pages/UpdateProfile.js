import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <form className="updateProfileForm" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Update Profile</h2>
        {error && <h3>{error}</h3>}

        <p className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
            className="form-control"
          />
        </p>
        <p className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
            className="form-control"
          />
        </p>
        <p className="form-group">
          <label htmlFor="password-confirm">Password Confirmation</label>
          <input
            id="password-confirm"
            type="password"
            ref={passwordConfirmRef}
            placeholder="Leave blank to keep the same"
            className="form-control"
          />
        </p>
        <button disabled={loading} className="w-100" type="submit">
          Update
        </button>
        <div className="btn btn-primary">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;
