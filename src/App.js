import Header from "./Header/Header";
import { AppBar, Button, Tab, Tabs, Toolbar, Link, Typography, Box, Container, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import "./App.css";
import Content from "./content/Content";
import Footer from "./footer/footer";
import { margin } from "@mui/system";

function App() {
  return (
    <div>
      <header>
        <Header/>
        <Container>
        <Box width="100%" height="100vh" className="container">
            <video src="/video.mp4" width={"100%"} height="70%" autoPlay loop muted playsInline className="child vid"></video>
            <Box display="flex" width="100%" justifyContent={"center"}>
                <Typography margin="auto" variant="h4" color="black" textAlign={"center"} justifyContent={"center"} className="child typ">Build your softwares Hassle Free and With Top Notch Quality</Typography>
            </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent={"center"} margin="auto" marginTop={-22} className="container">
            <Button variant="outlined" sx={{mr:3}}>Signup with Email</Button>
            <Button variant="contained" sx={{ml:3}}>Signup with Google</Button>
        </Box>
        <Box>
            <Content/>
        </Box>
        </Container>
        <footer>
          <Footer/>
        </footer>
      </header>
    </div>
  );
}

export default App;
