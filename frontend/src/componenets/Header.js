import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F30"}} position='sticky'>
            <Toolbar>
                <NavLink to="/" style={{color:"white"}}>
            <Typography sx={{ml:"2rem"}}><AutoStoriesIcon/> </Typography></NavLink>
                <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=> setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
                    
                    <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    <Tab LinkComponent={NavLink} to="/about" label='About us'/>
                </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header