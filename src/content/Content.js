import React from "react";
import {Box} from "@mui/material";
import ContentItem from "./ContentItem";
const contentArray = [];

const Content = () => {
    return (
        <Box
            bgcolor="#fbf2f2"
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            width="100%"
            height="100%"
            >
                {contentArray.map((cont, index)=>(<ContentItem title={cont.title} description={cont.description} img={cont.img} 
                key={index} swap={index%2 === 0}
                />))}
        </Box>
    )
}

export default Content;