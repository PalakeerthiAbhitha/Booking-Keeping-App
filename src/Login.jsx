import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate()
    const [state,setState] = useState({
        email:'',password:''
    })
    const handleChange  = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = async()=>{
      try{
        await axios.post('https://bookkeeping-frontend.herokuapp.com/signin',{
            email:state.email,
            password:state.password
        })
        navigate('/books')
    }    
        catch(err){
            alert("Email or Password may wrong")
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
          <Typography sx={{ fontWeight: "600" }}>Login </Typography>
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
            <Button onClick={handleSubmit} variant="outlined" sx={{ mt: 1.5 }}>
Login </Button>
          <Typography sx={{p:1}}> <Link to='/'>Click here To SignUp</Link></Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
