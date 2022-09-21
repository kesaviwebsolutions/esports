import React from "react";
import "../page/Home.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

import { Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import DashboardApp from "./DashboardApp";
import "../../App.css";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ textAlign: "center" }}
        className="first-section"
      >
        <Grid item xs={12}>
          <Typography
            className="first-section-text1"
            variant="h1"
            style={{
              fontSize: "7rem",
            
              color: "#6241E7",
              margin:"2rem",
              fontWeight:"800"
            }}
          >
        BRAVO! – ESPORTS FANTASY PLATFORM
          </Typography>
          <Typography variant="h4" className="first-section-text2" style={{fontSize:"3rem",color:"white"}}>
            {" "}
            PLAY BIG – WIN BIG
          </Typography>
        </Grid>
      </Grid>
      <DashboardApp />
      <Footer />
    </>
  );
}

export default Home;
