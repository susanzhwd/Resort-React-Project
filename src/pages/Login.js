import React, { useRef, useState } from "react";

// import { Form, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      setError("failed to log in");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="signinForm">
        <h2>Log In</h2>

        {error && <h6>{error}</h6>}
        <p className="form-group">
          <label htmlFor="Eamil">Email</label>
          <input
            id="Email"
            name="Email"
            type="text"
            ref={emailRef}
            value="123@gmail.com"
            className="form-control"
          />
        </p>
        <p className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
            value="123456"
            className="form-control"
          />
        </p>

        <p>
          <button type="submit" className="submit" disabled={loading}>
            Log In
          </button>
        </p>
        <div className="login">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <br />
        <hr />
        <p className="login">
          Need an account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </form>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button type="submit" className="w-100">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div> */}
    </>
  );
};

export default Login;
