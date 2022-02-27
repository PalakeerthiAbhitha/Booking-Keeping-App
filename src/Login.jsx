import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function Login() {
  return (
      <div className="textcenter">
    <Container sx={{textAlign:'center'}}>
      <Box sx={{ mt:5,backgroundColor: "#e9f0ea",p:2,borderRadius:2, width:'25rem',textAlign:'center'}}>
      <Typography sx={{fontWeight:'600'}}>Admin Login</Typography>
        <TextField
          sx={{ m: 1,width:'85%' }}
          id="outlined-basic"
          label="User Name"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          sx={{ m: 1,width:'85%' }}
          type="password"
          label="Password"
          variant="outlined"
        />
        <Link to="/books">
        <Button variant="outlined" sx={{mt:1.5}}>Login</Button>
        </Link>
      </Box>
      <br />
      <Link to="/">Back to Home</Link> <br />
      <br />
    </Container>
    </div>
  );
}

export default Login;