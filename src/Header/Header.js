import React from "react";  
import { AppBar, Button, Tab, Tabs, Toolbar, Link, Typography } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import {Box} from "@mui/system";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
    return(<AppBar sx={{bgcolor:"transparent", boxShadow:"0", marginBottom:"5"}}>   
        <Toolbar>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center", }}>
                <ApiIcon sx={{color:"black"}}/>
                <Box>
                    <Tabs component={Link} sx={{textDecoration:"none"}}>
                        {links.map((link, index)=><Tab key={index} label={link}/>)}
                        <Tab sx={{fontWeight:"bold", textDecoration:"none", ":hover":{
                            textDecoration:"underline", textUnderlineOffset: "5px"
                        },
                        }}/>
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft={"auto"}>
                    <Button sx={{mr:2}} variant="contained">Talk to Us</Button>
                    <Button sx={{ml:2}} variant="contained">Try for Free</Button>
                </Box>
            </Box>
        </Toolbar>  
        
        </AppBar>)
};

export default Header;