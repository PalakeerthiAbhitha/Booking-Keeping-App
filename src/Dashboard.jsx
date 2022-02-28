import React from 'react'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
function Dashboard() {
const Logout =()=>{
    
}
  return (
    <div className='bgimg'>
        <Box sx={{ flexGrow: 1 }} className="box">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BookKeeping
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
            <Button  onClick={{Logout}}variant="contained" sx={{ m: 2, underline: "none" }}>
              Logout
            </Button>
          </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Dashboard