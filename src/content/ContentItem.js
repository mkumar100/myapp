import React from "react";
import {Box, Typography } from "@mui/material";

const ContentItem = (title, description, img, swap) => {
    return <Box bgcolor={!swap && "fff"} display="flex" padding={10} justifyContent="space-between" alignItems="center">
        { swap ? <>
        <Box>
            <Typography color="#734950" padding={3} variant="h3">
                {title}
            </Typography>
            <Typography variant="caption" padding={3}>
                {description}
            </Typography>
        </Box>

        <img src={img} alt={title} loading="lazy" width="50%" style={{boxShadow:"10px 10px 20px #ccc", marginLeft:"10%", 
    borderRadius:20,}} height="300px"/></> : <></>}
    </Box>;
}

export default ContentItem;