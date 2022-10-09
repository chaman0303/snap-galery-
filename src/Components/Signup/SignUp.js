import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState ,useEffect} from "react";
import { cityOptions } from "./CityOptions";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    tncAgree : false
  });

  useEffect(()=> {

  },[formData])
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [gender, setgender] = useState("");
  // const [city, setCity] = useState("");
  // const[email,setEmail] = useState()
  // const[email,setEmail] = useState()

  return (
    <Form style={{ width: "500px", margin: "20px auto", textAlign: "initial" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
         <Form.Control.Feedback style={{display:'block'}}>Looks good!</Form.Control.Feedback>
         <Form.Control.Feedback style={{display:'block'}} type='invalid'>Looks good!</Form.Control.Feedback>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value})}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value})}
        />
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
            onClick={() => setFormData({...formData,gender:gender})}
          />
        ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFormData({...formData,city:e.target.value})}
        >
          {cityOptions.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="You Agree T&C" onClick={(e)=>  setFormData({...formData,tncAgree:e.target.checked})} />
      </Form.Group>
      <Button variant="dark" type="submit" style={{width:'100%'}}>
        SignUp
      </Button>
    </Form>
  );
}

export default SignUp;
