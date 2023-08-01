import React, { useState} from "react";
import "./register.css";
import { Button } from '@mui/material';
const Register = () => {
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (name.length <= 5 || "") {
      alert("Please Enter Full Name");
    } else if (lname ==="") {
      alert("Enter Last name ");
    } else if(password !==cpassword){
alert("Enter Password did't match")
    }
    

    console.log("Form submitted");
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="Register-Container">
      <div className="Heading">
        <h2>Register</h2>
        <img src="" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="fname"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>



        <div className="form-group">
          <label>Last Name:</label>
          <input
            className="lname"
            type="text"
            id="lname"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
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
          />
        </div>



        <div className="form-group">
          <label>Password:</label>
          <input
            className="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            className="cpassword"
            type="password"
            id="password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
    

      </form>
    </div>
  );
};

export default Register;
