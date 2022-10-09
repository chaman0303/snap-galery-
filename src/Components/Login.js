import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('')

  const handleChangeEmail = (e) =>{
    const exp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    if(e.target.value === '' || exp.test(e.target.value)){
      setEmail(e.target.value)
      // setErr('')
    } 

  }

  return (
    
    
    <Form style={{ width: "400px", margin: "20px auto", textAlign: "initial" }}>
    <h1 className="display-4" style={{textAlign:"center"}}>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e)=> handleChangeEmail(e)}
        />
       
      </Form.Group>
      <span style={{color: 'red'}}>{err}</span>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
   
  );
};

export default Login;
