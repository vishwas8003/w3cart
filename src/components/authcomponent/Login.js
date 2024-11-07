import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import w3cartlogo from "./../../assets/w3cart.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className=""
        style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}
      >
        <img src={w3cartlogo} alt="Logo" style={{ width: "100px" }} />
        <h3 className="mt-3" style={{ fontWeight: "revert" }}>
          Welcome Back!
        </h3>
        <p className="" style={{ color: "#0d775e", fontWeight: "400" }}>
          Welcome Back You've Been Missed
        </p>

        <Form style={{ textAlign: "left" }}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label style={{}}>Username</Form.Label>
            <Form.Control type="text" placeholder="Type Username Here" />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <InputGroup.Text
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? (
                  <FaEyeSlash style={{ color: "#125948" }} />
                ) : (
                  <FaEye style={{ color: "#125948" }} />
                )}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formTerms" className="mb-3">
            <Form.Check
              type="checkbox"
              label="I agree to all Terms, Privacy Policy and fees"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
          </Form.Group>

          <Button
            // variant="success"
            // type="submit"
            style={{ borderRadius: "0px", backgroundColor: "#0d775e" }}
            className="w-100"
            disabled={!termsChecked}
          >
            Login
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#125948" }}>Forgot password?</span>
            <span style={{ color: "#125948" }}>Reset here</span>
          </div>

          {/* <p className="mt-3" style={{ color: "#0d775e" }}>
            Don't have an account?
          </p> */}

          <hr className="my-3" />
          <div style={{ display: "grid", justifyContent: "center" }}>
            <p>Don't have an account?</p>
          </div>
          <Button
            variant="outline-success"
            style={{ borderRadius: "0px" }}
            className="w-100"
            disabled={!termsChecked}
            href="register"
          >
            {/* <Link to="/register">Register Now</Link> */}
            Register Now
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
