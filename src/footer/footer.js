import React from "react";
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return <Box display="flex" flexDirection="column">
        <Typography variant="h3" paddingTop={10} textAlign="center">Ready for any Team Size</Typography>
        <Typography variant="div" textAlign="center" padding={4}>Optimized for Any Team Size</Typography>
        <Box display="flex" margin="auto"></Box>
    </Box>
};

export default Footer;