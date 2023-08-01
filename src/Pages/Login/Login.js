import React from "react";
import "./login.css";
import { useState } from "react";
import { Button } from '@mui/material';
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (name.length <= 5) {
      alert("Please Enter Full Name");
    } else if (password.length <= 8 || "") {
      alert("Enter Password Full");
    } else {
    }

    console.log("Form submitted");
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="Login-Container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="fName"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>password:</label>
          <input
            className="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
