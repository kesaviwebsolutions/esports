import "./App.css";
import * as React from "react";
import Navbar from "./component/page/Navbar";
import Home from "./component/page/Home";
import Signup from "./component/page/Signup";
import { theme } from './Theme'; 
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <>
      <Navbar />
      <Home />

  
      <Router>
      <ThemeProvider theme={theme}> 
          <Routes>
            <Route path={Home} element={<Home />} />
            <Route path={Signup} element={<Signup />} />
          </Routes>
      </ThemeProvider>
  </Router>
    </>
  );
}

export default App;
