import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { cityOptions } from "./CityOptions";
const SignupWithValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    gender: "",
    city: "",
    tncAgree: false,
  });
  const [formDataErrors, setFormDataErrors] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    gender: "",
    city: "",
    tncAgree: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const Validate = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    let { name, email, password, cPassword, gender, city, tncAgree } = formData;
    if (name === "") {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        name: "enter valid name",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({ ...formDataErrors, name: "" }));
    }
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
    if (cPassword === "" || cPassword !== password) {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        cPassword: "password and cipassword does not match",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        cPassword: "",
      }));
    }
    if (gender === "") {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        gender: "Please Select valid gender",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        gender: "",
      }));
    }
    if (city === "") {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        city: "Please Select valid city",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({ ...formDataErrors, city: "" }));
    }
    if (!tncAgree) {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        tncAgree: "Please checked term and condition",
      }));
    } else {
      setFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        tncAgree: "",
      }));
    }
  };

  return (
    <Form style={{ width: "400px", margin: "20px auto", textAlign: "initial" }}>
          <h1 className="display-4" style={{textAlign:"center"}}>Signup</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.name ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.name ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.name}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="confirm Password"
          value={formData.cPassword}
          onChange={(e) =>
            setFormData({ ...formData, cPassword: e.target.value })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.cPassword
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.cPassword
                  ? { display: "block" }
                  : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.cPassword}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <br />
        {["male", "female", "others"].map((gender, index) => (
          <Form.Check
            inline
            label={gender}
            name="gender"
            type="radio"
            id={`inlne-${index}`}
            onClick={() => setFormData({ ...formData, gender: gender })}
          />
        ))}
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.gender
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.gender
                  ? { display: "block" }
                  : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.gender}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        >
          {cityOptions.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </Form.Select>
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.city ? { display: "none" } : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.city ? { display: "block" } : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.city}
            </Form.Control.Feedback>
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="You Agree T&C"
          onClick={(e) =>
            setFormData({ ...formData, tncAgree: e.target.checked })
          }
        />
        {formSubmitted && (
          <>
            <Form.Control.Feedback
              style={
                formDataErrors.tncAgree
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback
              style={
                formDataErrors.tncAgree
                  ? { display: "block" }
                  : { display: "none" }
              }
              type="invalid"
            >
              {formDataErrors.tncAgree}
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
        SignUp
      </Button>
    </Form>
  );
};

export default SignupWithValidation;
