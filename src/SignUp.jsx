import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [state,setState] = useState({
        email:'',password:''
    })
    const handleChange  = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = async ()=>{
        try{
            await axios.post('http://localhost:8000/signup',{
                email:state.email,
                password:state.password
            })
            alert("Account Created")
        }    
            catch(err){
                alert("Already have an account")
                console.log("error")
            }
    }
  return (
    <div className="textcenter">
      <Container>
        <Box
          sx={{
            mt: 5,
            backgroundColor: "#e9f0ea",
            p: 2,
            borderRadius: 2,
            width: "25rem",
            textAlign: "center"}}>
          <Typography sx={{ fontWeight: "600" }}>Sign up</Typography>
          <TextField
            sx={{ m: 1, width: "85%" }}
            id="outlined-basic"
            label="Email" name="email" value={state.email}
            variant="outlined" onChange={handleChange}/>{" "}
          <br />
          <TextField
            sx={{ m: 1, width: "85%" }}
            type="password"
            label="Password"
            name="password" value={state.password}
            variant="outlined" onChange={handleChange}
          />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button onClick={handleSubmit} variant="outlined" sx={{ mt: 1.5 }}>
              Create an Account
            </Button>
          </Link>
          <Typography sx={{py:2}}>Already Have and account? <Link to='/login'>Click here To login</Link></Typography>
        </Box>
      </Container>
    </div>
  );
}

export default SignUp;
