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
            
              color: "orange",
              margin:"2rem",
              fontWeight:"800"
            }}
          >
            COMPETE. ORGANIZE. WIN.
          </Typography>
          <Typography variant="h4" className="first-section-text2" style={{fontSize:"3rem",color:"white"}}>
            {" "}
            YOUR ELITE GAMING PLATFORM TO EXPERIENCE<br></br>
            THE BEST OF ESPORTS
          </Typography>
        </Grid>
      </Grid>
      <DashboardApp />
      <Footer />
    </>
  );
}

export default Home;
