import { Box, createTheme, ThemeProvider } from "@mui/material";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ComputersCanvas from "./components/canvas/ComputersCanvas";
import StarsCanvas from "./components/canvas/StarsCanvas";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      color: "white",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh">
        <Navbar />
        <Intro />
        <ComputersCanvas />
        <Overview />
        <Experience />
        <Technologies />
        <Projects />
        <Box position="relative" height="100%">
          <Box position="absolute" height="100%" width="100%" zIndex={-1000}>
            <StarsCanvas />
          </Box>
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
