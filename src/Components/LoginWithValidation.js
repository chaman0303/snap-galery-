import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const LoginWithValidation = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDataErrors, setFormDataErrors] = useState({
    email: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const Validate = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    let { email, password } = formData;

    if (email === "" || email.startsWith("@") || !email.includes("@")) {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        email: "enter valid email",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({ ...formDataErrors, email: "" }));
    }
    if (password === "" || password.length < 8) {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        password: "enter valid password (must be 8 characters)",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        password: "",
      }));
    }
  };

  return (
    <Form style={{ width: "400px", margin: "20px auto", textAlign: "initial" }}>
      <h1 className="display-4" style={{ textAlign: "center" }}>
        Login
      </h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.email
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.email
                  ? { display: "block" }
                  : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.email}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.password
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.password
                  ? { display: "block" }
                  : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.password}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>

      <Button
        variant="dark"
        type="submit"
        style={{ width: "100%" }}
        onClick={(e) => Validate(e)}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginWithValidation;
