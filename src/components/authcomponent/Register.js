import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import w3cartlogo from "./../../assets/w3cart.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
          Create your account
        </h3>
        <p className="" style={{ color: "#0d775e", fontWeight: "400" }}>
          Create An Account To Continue!
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
                {showPassword ? <FaEyeSlash style={{color:"#125948"}}/> : <FaEye style={{color:"#125948"}}/>}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <InputGroup.Text
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <FaEyeSlash style={{color:"#125948"}} /> : <FaEye style={{color:"#125948"}} />}
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
            style={{borderRadius:"0px", backgroundColor:"#0d775e"}}
            className="w-100"
            disabled={!termsChecked}
          >
            Register
          </Button>

          <p className="mt-3" style={{ color: "#0d775e" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#125948" }}>
              Log in
            </Link>
          </p>

          <hr className="my-3" />
          <div style={{ display: "grid", justifyContent: "center" }}>
            <p style={{ color: "#0d775e" }}>Or sign in with</p>

            <Row className="justify-content-center">
              <Col xs="auto">
                <Button variant="outline-primary" className="rounded-circle">
                  <FaGoogle />
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-primary" className="rounded-circle">
                  <FaFacebook />
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
