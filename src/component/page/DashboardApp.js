// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Box, Button, Link } from "@mui/material";
// components

import * as React from "react";

import freefire from "../img/Free-Fire.jpg";
import calender from "../img/calender.jpg";

import Card from "@mui/material/Button";
import "../page/DashboardApp.css";
import "../../App.css";
import logo from "../img/logo.png";
import Image22 from "../img/image4.png";
import hand from "../img/image5.jpg";

// sections

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <>
      <Grid
        maxWidth="xl"
        style={{
          backgroundColor: "black",
          width: "90%",
          margin: "0.5rem auto",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: "2rem auto" }}>
            <Typography variant="h3" className="text1">
              {" "}
              FEATURED TOURNAMENTS
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: "0 auto" }}>
            <Grid container>
            <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              backgroundColor: "black",
             
             padding:"1rem"
           
            }}
          ><Box style={{ border: "0.1rem solid purple", borderRadius: "10px",}}>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <img src={freefire} alt=" " style={{ width: "100%" }} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ padding: "1rem " }}
              >
                <Typography
                  variant="button"
                  sx={{
                    borderRadius: "5px",

                    padding: "0.3rem",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "1rem",
                  }}
                >
                  Free-Fire
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    color: "black",
                    backgroundColor: "#F9B45F",
                    float: "right",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "5px",
                    fontSize: "1.5rem",
                    marginTop: "1rem 0rem",
                  }}
                >
                  Featured
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "2rem",
                    color: "white",
                    marginBottom: "1rem",
                    fontStyle: "italic",
                    fontSize: "1.4rem",
                  }}
                >
                  Free-Fire Seasons Daily Tournament2
                </Typography>
                <Box>
                <Typography
                  variant="span"
                  sx={{ marginBottom: "1rem" }}
                >
                  <img
                    src={calender}
                    alt=""
                    style={{ marginRight: "0.2rem" }}
                  />  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      color: "white",
                 
                      fontSize: "2rem",
                    }}
                  >
                    Registration Starts 16th Sep 2022
                  </Typography>
                  </Box>
                <Typography
                  variant="span"
                  sx={{
                    color: "white",
                    fontSize: "2rem",
                    justifyContent: "space-between",
                    marginTop: "4rem",
                  }}
                >
                  Tournament By
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "white", fontSize: "2rem" }}
                >
                  Hala Yalla
                </Typography>
                <Box sx={{ marginTop: "1rem" }}>
                  <Typography
                    variant="button"
                    sx={{
                      color: "black",
                      backgroundColor: "#F9B45F",
                      padding: "0.2rem 0.5rem",
                      border: "none",
                      borderRadius: "5px",
                      float: "right",
                      cursor: "pointer",
                      fontSize: "2rem",
                    }}
                  >
                    Registration Open
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Grid>
          <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "black",
           
           padding:"1rem"
         
          }}
        ><Box style={{ border: "0.1rem solid purple", borderRadius: "10px",}}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <img src={freefire} alt=" " style={{ width: "100%" }} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ padding: "1rem " }}
            >
              <Typography
                variant="button"
                sx={{
                  borderRadius: "5px",

                  padding: "0.3rem",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Free-Fire
              </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "black",
                  backgroundColor: "#F9B45F",
                  float: "right",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  marginTop: "1rem 0rem",
                }}
              >
                Featured
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "2rem",
                  color: "white",
                  marginBottom: "1rem",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                }}
              >
                Free-Fire Seasons Daily Tournament2
              </Typography>
              <Box>
              <Typography
                variant="span"
                sx={{ marginBottom: "1rem" }}
              >
                <img
                  src={calender}
                  alt=""
                  style={{ marginRight: "0.2rem" }}
                />  </Typography>
                <Typography
                  variant="span"
                  sx={{
                    color: "white",
               
                    fontSize: "2rem",
                  }}
                >
                  Registration Starts 16th Sep 2022
                </Typography>
                </Box>
              <Typography
                variant="span"
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  justifyContent: "space-between",
                  marginTop: "4rem",
                }}
              >
                Tournament By
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "white", fontSize: "2rem" }}
              >
                Hala Yalla
              </Typography>
              <Box sx={{ marginTop: "1rem" }}>
                <Typography
                  variant="button"
                  sx={{
                    color: "black",
                    backgroundColor: "#F9B45F",
                    padding: "0.2rem 0.5rem",
                    border: "none",
                    borderRadius: "5px",
                    float: "right",
                    cursor: "pointer",
                    fontSize: "2rem",
                  }}
                >
                  Registration Open
                </Typography>
              </Box>
            </Grid>
          </Grid>
          </Box>
        </Grid>
        <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{
          backgroundColor: "black",
         
         padding:"1rem"
       
        }}
      ><Box style={{ border: "0.1rem solid purple", borderRadius: "10px",}}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <img src={freefire} alt=" " style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ padding: "1rem " }}
          >
            <Typography
              variant="button"
              sx={{
                borderRadius: "5px",

                padding: "0.3rem",
                cursor: "pointer",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Free-Fire
            </Typography>
            <Typography
              variant="span"
              sx={{
                color: "black",
                backgroundColor: "#F9B45F",
                float: "right",
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
                fontSize: "1.5rem",
                marginTop: "1rem 0rem",
              }}
            >
              Featured
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: "2rem",
                color: "white",
                marginBottom: "1rem",
                fontStyle: "italic",
                fontSize: "1.4rem",
              }}
            >
              Free-Fire Seasons Daily Tournament2
            </Typography>
            <Box>
            <Typography
              variant="span"
              sx={{ marginBottom: "1rem" }}
            >
              <img
                src={calender}
                alt=""
                style={{ marginRight: "0.2rem" }}
              />  </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "white",
             
                  fontSize: "2rem",
                }}
              >
                Registration Starts 16th Sep 2022
              </Typography>
              </Box>
            <Typography
              variant="span"
              sx={{
                color: "white",
                fontSize: "2rem",
                justifyContent: "space-between",
                marginTop: "4rem",
              }}
            >
              Tournament By
            </Typography>
            <Typography
              variant="span"
              sx={{ color: "white", fontSize: "2rem" }}
            >
              Hala Yalla
            </Typography>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                variant="button"
                sx={{
                  color: "black",
                  backgroundColor: "#F9B45F",
                  padding: "0.2rem 0.5rem",
                  border: "none",
                  borderRadius: "5px",
                  float: "right",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              >
                Registration Open
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>

      {/* // .key...................................................................................... */}

      <Grid
        maxWidth="xl"
        style={{
          backgroundColor: "black",
          width: "90%",
          margin: "0.5rem auto",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: "2rem auto" }}>
            <Typography variant="h3" className="text1">
              {" "}
              COMMUNITY TOURNAMENTS
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: "0 auto" }}>
            <Grid container>
            <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              backgroundColor: "black",
             
             padding:"1rem"
           
            }}
          ><Box style={{  borderRadius: "10px",}}>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <img src={freefire} alt=" " style={{ width: "100%" }} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ padding: "1rem " }}
              >
                <Typography
                  variant="button"
                  sx={{
                    borderRadius: "5px",

                    padding: "0.3rem",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "1rem",
                  }}
                >
                  Free-Fire
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    color: "black",
                    backgroundColor: "#F9B45F",
                    float: "right",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "5px",
                    fontSize: "1.5rem",
                    marginTop: "1rem 0rem",
                  }}
                >
                  Featured
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "2rem",
                    color: "white",
                    marginBottom: "1rem",
                    fontStyle: "italic",
                    fontSize: "1.4rem",
                  }}
                >
                  Free-Fire Seasons Daily Tournament2
                </Typography>
                <Typography
                  variant="span"
                  sx={{ display: "flex", marginBottom: "1rem" }}
                >
                  <img
                    src={calender}
                    alt=""
                    style={{ marginRight: "0.2rem" }}
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "white",
                      display: "flex",
                      fontSize: "2rem",
                    }}
                  >
                    Registration Starts 16th Sep 2022
                  </Typography>
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    color: "white",
                    fontSize: "2rem",
                    justifyContent: "space-between",
                    marginTop: "4rem",
                  }}
                >
                  Tournament By
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: "white", fontSize: "2rem" }}
                >
                  Hala Yalla
                </Typography>
                <Box sx={{ marginTop: "1rem" }}>
                  <Typography
                    variant="button"
                    sx={{
                      color: "black",
                      backgroundColor: "#F9B45F",
                      padding: "0.2rem 0.5rem",
                      border: "none",
                      borderRadius: "5px",
                      float: "right",
                      cursor: "pointer",
                      fontSize: "2rem",
                    }}
                  >
                    Registration Open
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Grid>
          <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "black",
           
           padding:"1rem"
         
          }}
        ><Box style={{  borderRadius: "10px",}}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <img src={freefire} alt=" " style={{ width: "100%" }} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ padding: "1rem " }}
            >
              <Typography
                variant="button"
                sx={{
                  borderRadius: "5px",

                  padding: "0.3rem",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Free-Fire
              </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "black",
                  backgroundColor: "#F9B45F",
                  float: "right",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "5px",
                  fontSize: "1.5rem",
                  marginTop: "1rem 0rem",
                }}
              >
                Featured
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "2rem",
                  color: "white",
                  marginBottom: "1rem",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                }}
              >
                Free-Fire Seasons Daily Tournament2
              </Typography>
              <Typography
                variant="span"
                sx={{ display: "flex", marginBottom: "1rem" }}
              >
                <img
                  src={calender}
                  alt=""
                  style={{ marginRight: "0.2rem" }}
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "white",
                    display: "flex",
                    fontSize: "2rem",
                  }}
                >
                  Registration Starts 16th Sep 2022
                </Typography>
              </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  justifyContent: "space-between",
                  marginTop: "4rem",
                }}
              >
                Tournament By
              </Typography>
              <Typography
                variant="span"
                sx={{ color: "white", fontSize: "2rem" }}
              >
                Hala Yalla
              </Typography>
              <Box sx={{ marginTop: "1rem" }}>
                <Typography
                  variant="button"
                  sx={{
                    color: "black",
                    backgroundColor: "#F9B45F",
                    padding: "0.2rem 0.5rem",
                    border: "none",
                    borderRadius: "5px",
                    float: "right",
                    cursor: "pointer",
                    fontSize: "2rem",
                  }}
                >
                  Registration Open
                </Typography>
              </Box>
            </Grid>
          </Grid>
          </Box>
        </Grid>
        <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{
          backgroundColor: "black",
         
         padding:"1rem"
       
        }}
      ><Box style={{  borderRadius: "10px",}}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <img src={freefire} alt=" " style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ padding: "1rem " }}
          >
            <Typography
              variant="button"
              sx={{
                borderRadius: "5px",

                padding: "0.3rem",
                cursor: "pointer",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Free-Fire
            </Typography>
            <Typography
              variant="span"
              sx={{
                color: "black",
                backgroundColor: "#F9B45F",
                float: "right",
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
                fontSize: "1.5rem",
                marginTop: "1rem 0rem",
              }}
            >
              Featured
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: "2rem",
                color: "white",
                marginBottom: "1rem",
                fontStyle: "italic",
                fontSize: "1.4rem",
              }}
            >
              Free-Fire Seasons Daily Tournament2
            </Typography>
            <Typography
              variant="span"
              sx={{ display: "flex", marginBottom: "1rem" }}
            >
              <img
                src={calender}
                alt=""
                style={{ marginRight: "0.2rem" }}
              />
              <Typography
                variant="span"
                sx={{
                  color: "white",
                  display: "flex",
                  fontSize: "2rem",
                }}
              >
                Registration Starts 16th Sep 2022
              </Typography>
            </Typography>
            <Typography
              variant="span"
              sx={{
                color: "white",
                fontSize: "2rem",
                justifyContent: "space-between",
                marginTop: "4rem",
              }}
            >
              Tournament By
            </Typography>
            <Typography
              variant="span"
              sx={{ color: "white", fontSize: "2rem" }}
            >
              Hala Yalla
            </Typography>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                variant="button"
                sx={{
                  color: "black",
                  backgroundColor: "#F9B45F",
                  padding: "0.2rem 0.5rem",
                  border: "none",
                  borderRadius: "5px",
                  float: "right",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              >
                Registration Open
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* ................................................................................ */}

      <Grid
        maxWidth="xl"
        className="fourth-section"
        style={{ backgroundColor: "" }}
      >
        <Grid
          container
          style={{ width: "90%", margin: "2rem auto", padding: "2rem auto" }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box style={{ padding: "2rem", marginLeft: "2rem" }}>
              <Grid container>
                <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
                  <Typography variant="span">
                    <img src={logo} alt="/" style={{ width: "10rem" }} />
                  </Typography>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={6} xs={12}>
                  <Typography
                    variant="h4"
                    style={{ fontSize: "3rem", color: "white", margin: "1rem" }}
                  >
                    FOLLOW BRAVO GAMES FOR UPDATES ON EXCLUSIVE TOURNAMENTS AND
                    PRIZES
                  </Typography>
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
                  <Button
                    variant="Button"
                    style={{
                      backgroundColor: "white",
                      color: "purple",
                      fontSize: "2rem",
                      padding: "1rem 2rem",
                      borderRadius: "1rem",
                      verticalAlign: "middle",
                      margin: "1rem",
                    }}
                  >
                    BRAVO GAMES
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* .................................................................................................... */}

      <Grid
        maxWidth="xl"
        className="fifth-section"
        style={{ backgroundColor: "" }}
      >
        <Grid
          container
          style={{ width: "90%", margin: "2rem auto", padding: "2rem auto" }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box style={{ padding: "2rem", marginLeft: "2rem" }}>
              <Typography style={{ fontSize: "4rem", color: "purple" }}>
                #Game For Good
              </Typography>
              <Typography style={{ color: "white", fontSize: "1.5rem" }}>
                Win in our tournaments or be part of play as you go to earn
                money.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            style={{ width: "90%", margin: "2rem auto", padding: "2rem auto" }}
          >
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                style={{
                  boxShadow: "0 -1.5px 0px 1px #e7724b70",
                  padding: "3rem",
                  borderRadius: "4.1rem",
                  margin: "1rem",
                }}
              >
                <Typography>
                  <svg
                    width="49px"
                    height="49px"
                    viewBox="0 0 49 49"
                    version="1.1"
                  >
                    <title>B204529C-82C8-416D-BAA0-183580F0ED59@3x</title>
                    <g
                      id="Pages"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="gameforgood_Home"
                        transform="translate(-317.000000, -680.000000)"
                        fill="#BD5E3D"
                        fill-rule="nonzero"
                      >
                        <path
                          d="M364.564453,683.536557 L358.276459,683.536557 C358.299263,682.840087 358.311974,682.139505 358.311974,681.435558 C358.311974,680.642636 357.668968,680 356.876427,680 L326.123947,680 C325.331032,680 324.6884,680.642636 324.6884,681.435558 C324.6884,682.139505 324.700737,682.840087 324.723541,683.536557 L318.435547,683.536557 C317.642632,683.536557 317,684.179193 317,684.972114 C317,691.40446 318.68116,697.473057 321.733566,702.060486 C324.750832,706.595578 328.769989,709.196779 333.111397,709.449871 C334.095718,710.520931 335.13649,711.394229 336.220253,712.060418 L336.220253,718.440799 L333.811974,718.440799 C330.900505,718.440799 328.532227,720.80947 328.532227,723.720587 L328.532227,726.128884 L328.430168,726.128884 C327.637253,726.128884 326.994621,726.771895 326.994621,727.564442 C326.994621,728.357364 327.637253,729 328.430168,729 L354.569832,729 C355.362747,729 356.005379,728.357364 356.005379,727.564442 C356.005379,726.771895 355.362747,726.128884 354.569832,726.128884 L354.467773,726.128884 L354.467773,723.720587 C354.467773,720.80947 352.099121,718.440799 349.188026,718.440799 L346.779747,718.440799 L346.779747,712.060418 C347.86351,711.394229 348.903908,710.520931 349.888229,709.449871 C354.230011,709.196779 358.248795,706.595578 361.266434,702.060486 C364.31884,697.473057 366,691.40446 366,684.972114 C366,684.179193 365.356995,683.536557 364.564453,683.536557 Z M324.123901,700.470157 C321.606087,696.686117 320.126801,691.737554 319.901375,686.407672 L324.883919,686.407672 C325.401688,692.959648 326.939667,699.015534 329.34346,703.823157 C329.726273,704.588788 330.126656,705.3118 330.541992,705.993317 C328.154274,705.091607 325.944504,703.206689 324.123901,700.470157 Z M358.876099,700.470157 C357.055496,703.206689 354.845726,705.091607 352.458008,705.993317 C352.873718,705.3118 353.273727,704.588788 353.65654,703.823157 C356.060333,699.015534 357.597939,692.959648 358.116081,686.407672 L363.098625,686.407672 C362.873199,691.737554 361.393913,696.686117 358.876099,700.470157 Z"
                          id="Tournament"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Typography>
                <Typography
                  style={{
                    fontSize: "2.6rem",
                    color: "#e7724b",
                    marginTop: "2rem",
                  }}
                >
                  Tournaments
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "1rem",
                    color: "rgb(149 149 149)",
                    marginBottom: "3rem",
                  }}
                >
                  Compete in any of our weekly tournaments. If you win, you can
                  donate a portion of your prize to a charity of your choice .
                </Typography>
                <Typography
                  variant="button"
                  className="button123"
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "2rem",
                    color: "white",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  Get Started
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                style={{
                  boxShadow: "0 -1.5px 0px 1px #1cd0dd",
                  padding: "3rem",
                  borderRadius: "4.1rem",
                  margin: "1rem",
                }}
              >
                <Typography>
                  <svg
                    width="51px"
                    height="57px"
                    viewBox="0 0 51 57"
                    version="1.1"
                  >
                    <title>F359BA74-CF33-40BB-B22F-0F591B9641FE@3x</title>
                    <g
                      id="Pages"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="gameforgood_Home"
                        transform="translate(-694.000000, -673.000000)"
                        fill="#179AA4"
                      >
                        <g
                          id="PAYG"
                          transform="translate(694.000000, 673.000000)"
                        >
                          <g
                            id="Group-4"
                            transform="translate(-0.000000, 6.168292)"
                          >
                            <path
                              d="M25.3791077,48.3272381 C12.7255886,48.3272381 2.43107329,38.0327228 2.43107329,25.3791077 C2.43107329,12.7255886 12.7255886,2.43116926 25.3791077,2.43116926 C38.0326269,2.43116926 48.3271422,12.7255886 48.3271422,25.3791077 C48.3271422,38.0327228 38.0326269,48.3272381 25.3791077,48.3272381 Z M25.3791077,3.33955086e-13 C11.384962,3.33955086e-13 4.47641924e-13,11.384962 4.47641924e-13,25.3791077 C4.47641924e-13,39.3733494 11.384962,50.7583114 25.3791077,50.7583114 C39.3732535,50.7583114 50.7582155,39.3733494 50.7582155,25.3791077 C50.7582155,11.384962 39.3732535,3.33955086e-13 25.3791077,3.33955086e-13 L25.3791077,3.33955086e-13 Z"
                              id="Fill-1"
                            ></path>
                            <path
                              d="M35.0478373,15.9644926 L28.5246381,24.4995914 C28.742094,25.7530821 28.3415375,27.0445748 27.4295851,27.9566231 C26.6623475,28.7239567 25.6542385,29.1076235 24.6462254,29.1076235 C23.6382124,29.1076235 22.6301034,28.7239567 21.8627698,27.9566231 C20.3278148,26.42186 20.3278148,23.9244751 21.8627698,22.3897119 C22.7428619,21.5095238 23.9966405,21.1037852 25.2188467,21.2817997 L33.8595067,14.7681969 C34.1993176,14.512355 34.6757823,14.5465184 34.975384,14.8480395 C35.2749857,15.1497524 35.3059823,15.626505 35.0478373,15.9644926 Z M25.3791077,6.54277606 C14.9150228,6.54277606 6.40180394,15.055899 6.40180394,25.5198879 C6.40180394,35.9838769 14.9150228,44.4969998 25.3791077,44.4969998 C35.8430967,44.4969998 44.3563155,35.9838769 44.3563155,25.5198879 C44.3563155,15.055899 35.8430967,6.54277606 25.3791077,6.54277606 L25.3791077,6.54277606 Z"
                              id="Fill-2"
                            ></path>
                          </g>
                          <rect
                            id="Rectangle"
                            x="17.2276386"
                            y="4.97379915e-14"
                            width="14.6434928"
                            height="8.61381931"
                            rx="2"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Typography>
                <Typography
                  style={{
                    fontSize: "2.6rem",
                    color: "#1cd0dd",
                    marginTop: "2rem",
                  }}
                >
                  Play As You Go
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "1rem",
                    color: "rgb(149 149 149)",
                    marginBottom: "3rem",
                  }}
                >
                  Compete anywhere anytime against random players. If you lose
                  the match, you can pledge to donate to a charity of your
                  choice .
                </Typography>
                <Typography
                  variant="button"
                  className="button123"
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "2rem",
                    color: "white",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  Get Started
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box
                style={{
                  boxShadow: "0 -1.5px 0px 1px #f9d151",
                  padding: "3rem",
                  borderRadius: "4.1rem",
                  margin: "1rem",
                }}
              >
                <Typography>
                  <svg
                    width="82px"
                    height="65px"
                    viewBox="0 0 82 65"
                    version="1.1"
                  >
                    <title>AD2F2C13-86A9-419B-B49B-73C47A62486B@3x</title>
                    <g
                      id="Pages"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="gameforgood_Home"
                        transform="translate(-1073.000000, -667.000000)"
                        fill="#CCA93A"
                      >
                        <g
                          id="Challenge"
                          transform="translate(1073.000000, 667.000000)"
                        >
                          <path
                            d="M34.6048609,27.8571429 L29.0525296,27.8571429 L29.0525296,28.763673 C29.0525296,30.7843371 27.2552715,32.4282698 25.0461451,32.4282698 C24.73548,32.4282698 24.4333786,32.3946709 24.1428571,32.3331878 C24.4346174,32.440389 24.7526613,32.5 25.0857861,32.5 L34.6048609,32.5 C36.0043082,32.5 37.1428571,31.4585816 37.1428571,30.1785714 C37.1428571,28.898512 36.0043082,27.8571429 34.6048609,27.8571429"
                            id="Fill-3"
                          ></path>
                          <path
                            d="M34.559278,40.8571429 L24.8692386,40.8571429 C23.444657,40.8571429 22.2857143,41.8986327 22.2857143,43.1785714 C22.2857143,44.4585102 23.444657,45.5 24.8692386,45.5 L34.559278,45.5 C35.9838596,45.5 37.1428571,44.4585102 37.1428571,43.1785714 C37.1428571,41.8986327 35.9838596,40.8571429 34.559278,40.8571429"
                            id="Fill-4"
                          ></path>
                          <path
                            d="M34.559278,34.3571429 L24.8692386,34.3571429 C23.444657,34.3571429 22.2857143,35.3986327 22.2857143,36.6785714 C22.2857143,37.9585102 23.444657,39 24.8692386,39 L34.559278,39 C35.9838596,39 37.1428571,37.9585102 37.1428571,36.6785714 C37.1428571,35.3986327 35.9838596,34.3571429 34.559278,34.3571429"
                            id="Fill-5"
                          ></path>
                          <path
                            d="M22.9797941,39.5977129 C21.9377125,38.8539288 21.2566184,37.6373727 21.2566184,36.2648619 C21.2566184,34.8918059 21.9377671,33.6752498 22.9798488,32.932011 C21.9377671,32.1881178 21.2566184,30.9717799 21.2566184,29.5988874 C21.2566184,29.3343642 21.2824695,29.0707134 21.3328056,28.8126247 C21.2832893,28.5600979 21.2566184,28.2996099 21.2566184,28.0327964 L21.2566184,27.9018708 C21.1751844,28.0619698 21.0898153,28.2227231 21.000074,28.3837491 C19.092934,31.8059741 16.1895667,33.614722 12.6039029,33.614722 C12.1813207,33.614722 11.8387515,33.2733665 11.8387515,32.8513071 C11.8387515,32.4297931 12.1813207,32.0880559 12.6039029,32.0880559 C15.6303503,32.0880559 17.9983301,30.6044683 19.6420941,27.6785174 C20.9166725,25.4097031 21.2608813,23.0896855 21.2642152,23.0665104 C21.3211643,22.669971 21.6755934,22.3844538 22.0760956,22.4129183 C22.4765431,22.4413827 22.7869213,22.7734137 22.7869213,23.1739883 L22.7869213,28.0327964 C22.7869213,29.4274462 23.924155,30.5621533 25.3220321,30.5621533 C26.7199092,30.5621533 27.8571429,29.4274462 27.8571429,28.0327964 L27.8571429,18.3150712 C27.8571429,16.9204213 26.7199092,15.7857143 25.3220321,15.7857143 L17.2320856,15.7857143 C15.1831192,15.7857143 13.1965674,16.5168476 11.6383911,17.8443169 C10.0802148,19.1718952 9.04534742,21.0149422 8.72442103,23.0340108 L8.61046811,23.7508027 C8.5514968,24.1216042 8.23106229,24.3946341 7.85477173,24.3946341 L-3.26849658e-13,24.3946341 L-3.26849658e-13,39.958699 L7.93522194,39.958699 C8.29517105,39.958699 8.60647839,40.20899 8.68293889,40.5596156 C8.98681333,41.9544835 9.76748644,43.2157538 10.8812191,44.1111303 C11.9949517,45.0070521 13.3960533,45.5 14.826504,45.5 L22.1680231,45.5 C21.5985864,44.7965678 21.2566184,43.9028272 21.2566184,42.9305639 C21.2566184,41.5575078 21.9377125,40.341497 22.9797941,39.5977129"
                            id="Fill-6"
                          ></path>
                          <path
                            d="M73.8595672,24.3946341 C73.4830085,24.3946341 73.1627424,24.1216042 73.1037172,23.7508027 L72.9900392,23.0339562 C72.6686799,21.0149422 71.6341001,19.1718952 70.0759451,17.8443169 C68.5177902,16.5168476 66.5311564,15.7857143 64.4822182,15.7857143 L56.3924921,15.7857143 C54.9944702,15.7857143 53.8571429,16.9204213 53.8571429,18.3150712 L53.8571429,28.0327964 C53.8571429,29.4274462 54.9944702,30.5621533 56.3924921,30.5621533 C57.7905139,30.5621533 58.9272948,29.4274462 58.9272948,28.0327964 L58.9272948,23.1739883 C58.9272948,22.7730865 59.2382699,22.4404557 59.6388759,22.4124275 C60.0400284,22.3848355 60.3941793,22.6703527 60.4504718,23.0673284 C60.4532045,23.0896855 60.7975179,25.4097031 62.0720241,27.6785174 C63.7159842,30.6044683 66.0840954,32.0880559 69.1102279,32.0880559 C69.5326951,32.0880559 69.8753689,32.4297931 69.8753689,32.8513071 C69.8753689,33.2733665 69.5326951,33.614722 69.1102279,33.614722 C65.5244495,33.614722 62.6212861,31.8059741 60.7144455,28.3837491 C60.6242681,28.2227231 60.5390096,28.0619698 60.4575767,27.9018708 L60.4575767,28.0327964 C60.4575767,28.2995554 60.4313433,28.5600979 60.3816092,28.8126247 C60.4318898,29.0706589 60.4575767,29.3342551 60.4575767,29.5988874 C60.4575767,30.9717799 59.7766013,32.1881178 58.73437,32.932011 C59.7766013,33.6752498 60.4575767,34.8918059 60.4575767,36.2648619 C60.4575767,37.6373727 59.7766013,38.8539288 58.73437,39.5977129 C59.7766013,40.341497 60.4575767,41.5575078 60.4575767,42.9305639 C60.4575767,43.9028272 60.1159959,44.7965678 59.5465124,45.5 L66.88804,45.5 C68.318307,45.5 69.7190615,45.0070521 70.8328882,44.1111303 C71.9467148,43.2157538 72.7271586,41.9544835 73.0310288,40.5601609 C73.1075429,40.20899 73.4190646,39.958699 73.7786809,39.958699 L81.7142857,39.958699 L81.7142857,24.3946341 L73.8595672,24.3946341"
                            id="Fill-7"
                          ></path>
                          <path
                            d="M56.8451019,40.8571429 L47.1548981,40.8571429 C45.7304809,40.8571429 44.5714286,41.8986327 44.5714286,43.1785714 C44.5714286,44.4585102 45.7304809,45.5 47.1548981,45.5 L56.8451019,45.5 C58.2695191,45.5 59.4285714,44.4585102 59.4285714,43.1785714 C59.4285714,41.8986327 58.2695191,40.8571429 56.8451019,40.8571429"
                            id="Fill-8"
                          ></path>
                          <path
                            d="M47.1930155,25.0714286 L52.9285714,25.0714286 L52.9285714,20.4285714 L47.1930155,20.4285714 C45.747582,20.4285714 44.5714286,21.4699296 44.5714286,22.7499754 C44.5714286,24.0300212 45.747582,25.0714286 47.1930155,25.0714286"
                            id="Fill-9"
                          ></path>
                          <path
                            d="M47.109275,32.5 L56.6283536,32.5 C56.9617422,32.5 57.2795116,32.440389 57.5714286,32.3331878 C57.2805888,32.3946709 56.9789771,32.4282698 56.6682094,32.4282698 C54.4589042,32.4282698 52.6616221,30.7843371 52.6616221,28.763673 L52.6616221,27.8571429 L47.109275,27.8571429 C45.7100125,27.8571429 44.5714286,28.898512 44.5714286,30.1785714 C44.5714286,31.4585816 45.7100125,32.5 47.109275,32.5"
                            id="Fill-10"
                          ></path>
                          <path
                            d="M47.1548981,39 L56.8451019,39 C58.2695191,39 59.4285714,37.9585102 59.4285714,36.6785714 C59.4285714,35.3986327 58.2695191,34.3571429 56.8451019,34.3571429 L47.1548981,34.3571429 C45.7304809,34.3571429 44.5714286,35.3986327 44.5714286,36.6785714 C44.5714286,37.9585102 45.7304809,39 47.1548981,39"
                            id="Fill-11"
                          ></path>
                          <path
                            d="M34.5211589,20.4285714 L28.7857143,20.4285714 L28.7857143,25.0714286 L34.5211589,25.0714286 C35.9667594,25.0714286 37.1428571,24.0300212 37.1428571,22.7499754 C37.1428571,21.4699296 35.9667594,20.4285714 34.5211589,20.4285714"
                            id="Fill-12"
                          ></path>
                          <path
                            d="M40.8571429,8.8817842e-16 C40.3443061,8.8817842e-16 39.9285714,0.344656355 39.9285714,0.769813172 L39.9285714,12.2301868 C39.9285714,12.6553436 40.3443061,13 40.8571429,13 C41.3698469,13 41.7857143,12.6553436 41.7857143,12.2301868 L41.7857143,0.769813172 C41.7857143,0.344656355 41.3698469,8.8817842e-16 40.8571429,8.8817842e-16"
                            id="Fill-13"
                          ></path>
                          <path
                            d="M34.8480673,14.5035456 C34.9895753,14.7322537 35.2289526,14.8571429 35.4734669,14.8571429 C35.6101556,14.8571429 35.748433,14.8181218 35.8721466,14.736413 C36.2171252,14.5084711 36.3180132,14.0346913 36.0974366,13.6781388 L30.1519302,4.06791209 C29.9314066,3.71141427 29.4728826,3.60704808 29.1279039,3.83504469 C28.7828723,4.06298657 28.6819843,4.53676637 28.902561,4.89331892 L34.8480673,14.5035456"
                            id="Fill-14"
                          ></path>
                          <path
                            d="M40.8571429,52 C40.3443061,52 39.9285714,52.3447678 39.9285714,52.7698164 L39.9285714,64.2301836 C39.9285714,64.6557821 40.3443061,65 40.8571429,65 C41.3698469,65 41.7857143,64.6557821 41.7857143,64.2301836 L41.7857143,52.7698164 C41.7857143,52.3447678 41.3698469,52 40.8571429,52"
                            id="Fill-15"
                          ></path>
                          <path
                            d="M35.8721466,50.2634721 C35.5271679,50.0358031 35.068644,50.1397866 34.8480673,50.4966139 L28.902561,60.1068707 C28.6819843,60.4631507 28.7828723,60.9370962 29.1279039,61.1653124 C29.2516175,61.2468573 29.389842,61.2857143 29.5265836,61.2857143 C29.7710979,61.2857143 30.0104752,61.1609342 30.1519302,60.9321707 L36.0974366,51.3219138 C36.3180132,50.9656338 36.2171252,50.4916883 35.8721466,50.2634721"
                            id="Fill-16"
                          ></path>
                          <path
                            d="M45.8420446,14.7364124 C45.9659665,14.8181216 46.1041871,14.8571429 46.240819,14.8571429 C46.4854853,14.8571429 46.7248558,14.732253 46.8662539,14.5035437 L52.8118574,4.89326605 C53.0321631,4.53671161 52.9315427,4.0629293 52.586256,3.83498621 C52.2414989,3.60715257 51.782882,3.7113004 51.5625764,4.06785484 L45.6169728,13.6781325 C45.3961376,14.034687 45.4972875,14.5084693 45.8420446,14.7364124"
                            id="Fill-17"
                          ></path>
                          <path
                            d="M46.8662539,50.4966139 C46.6459483,50.1397866 46.1873313,50.0358031 45.8420446,50.2634721 C45.4972875,50.4916883 45.3961376,50.9656338 45.6169728,51.3219138 L51.5625764,60.9321707 C51.7039744,61.1609342 51.9433449,61.2857143 52.1874817,61.2857143 C52.3241135,61.2857143 52.4628637,61.2468573 52.586256,61.1653124 C52.9315427,60.9370962 53.0321631,60.4631507 52.8118574,60.1068707 L46.8662539,50.4966139"
                            id="Fill-18"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img
                    src={Image22}
                    alt="/"
                    style={{ float: "right", width: "8rem" }}
                  />
                </Typography>
                <Typography
                  style={{
                    fontSize: "2.6rem",
                    color: "#f9d151",
                    marginTop: "2rem",
                  }}
                >
                  Challenge
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.6rem",
                    marginTop: "1rem",
                    color: "rgb(149 149 149)",
                    marginBottom: "6.5rem",
                  }}
                >
                  Click "Challenge" on any player's profile. If you lose the
                  match, you can pledge to donate to a charity of your choice
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* ................................................................................................................ */}
      <Grid maxWidth="xl" className="sixth-section" style={{}}>
        <Grid
          container
          style={{
            width: "90%",
            margin: "2rem auto",
            padding: "2rem auto",
            backgroundColor: "#303550",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <img src={hand} alt="/" style={{ width: "100%" }} />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Box
              style={{
                fontSize: "2rem",
                color: "white",
                textAlign: "center",
                marginTop: "4rem",
              }}
            >
              INVITE FRIENDS AND WIN REWARDS. JOIN BRAVO GAMES TODAY
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Button
              style={{
                backgroundColor: "purple",
                color: "white",
                borderRadius: "10px",
                padding: "1rem 4rem",
                fontSize: "2rem",
                textAlign: "center",
                marginTop: "4rem",
              }}
            >
              {" "}
              <Link href="/signup"> Sign up</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* ........................................................................................................................ */}

      <Grid maxWidth="xl" className="seventh-section" style={{}}>
        <Grid
          container
          style={{
            width: "90%",
            margin: "2rem auto",
            padding: "2rem auto",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box
              style={{ color: "white", marginTop: "4rem", fontWeight: "800" }}
            >
              {" "}
              <Typography variant="h2"> OUR ESPORTS TRACK RECORD </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            width: "90%",
            margin: "2rem auto",
            padding: "2rem auto",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <Grid item xl={1} lg={1} md={1} sm={6} xs={12}></Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
              }}
            >
              <span>
                <svg
                  width="43px"
                  height="31px"
                  viewBox="0 0 43 31"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>C3895AC1-40B1-4834-82A9-25DD19FD1AA1@3x</title>
                  <desc>Created with sketchtool.</desc>
                  <defs>
                    <linearGradient
                      x1="14.3512173%"
                      y1="41.2001182%"
                      x2="50%"
                      y2="75.98702%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Web2020"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Default_v8"
                      transform="translate(-391.000000, -1840.000000)"
                      fill="url(#linearGradient-1)"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-24"
                        transform="translate(376.000000, 1832.000000)"
                      >
                        <path
                          d="M29.6164999,19.3518375 C29.6164999,19.8325919 29.2294604,20.2222437 28.7519291,20.2222437 L26.6815705,20.2222437 L26.6815705,22.3065764 C26.6815705,22.7873308 26.294531,23.1769826 25.8169997,23.1769826 C25.3394685,23.1769826 24.952429,22.7873308 24.952429,22.3065764 L24.952429,20.2222437 L22.8820703,20.2222437 C22.4045391,20.2222437 22.0174996,19.8325919 22.0174996,19.3518375 C22.0174996,18.8710832 22.4045391,18.4814313 22.8820703,18.4814313 L24.952429,18.4814313 L24.952429,16.3970986 C24.952429,15.9163443 25.3394685,15.5266925 25.8169997,15.5266925 C26.294531,15.5266925 26.6815705,15.9163443 26.6815705,16.3970986 L26.6815705,18.4814313 L28.7519291,18.4814313 C29.2294604,18.4814313 29.6164999,18.8711799 29.6164999,19.3518375 Z M34.8646363,18.4816248 L34.5274537,18.4816248 C34.0499225,18.4816248 33.662883,18.8712766 33.662883,19.3520309 C33.662883,19.8327853 34.0499225,20.2224371 34.5274537,20.2224371 L34.8646363,20.2224371 C35.3421675,20.2224371 35.729207,19.8327853 35.729207,19.3520309 C35.729207,18.8712766 35.3421675,18.4816248 34.8646363,18.4816248 Z M49.5779009,28.2377176 C49.4481192,27.7751451 48.9708762,27.505706 48.5109246,27.6366538 C48.0514533,27.7673114 47.7842049,28.2481625 47.9138905,28.7108317 C48.3183174,30.1526112 49.540148,32.217118 50.5488138,33.6683752 C50.7170209,33.9104449 50.985326,34.039942 51.257954,34.039942 C51.4290429,34.039942 51.6019571,33.9888781 51.7527766,33.8825919 C52.1440429,33.6069632 52.2392417,33.0643133 51.9655571,32.6705029 C50.8179835,31.0192456 49.8584061,29.237911 49.5779009,28.2377176 Z M24.4891152,27.6366538 C24.0293557,27.5055126 23.5518244,27.7752418 23.4221388,28.2378143 C23.1419218,29.2373308 22.1824405,31.0187621 21.0346748,32.6705996 C20.7609901,33.0644101 20.856285,33.6071567 21.2475513,33.8826886 C21.3984669,33.9889749 21.571189,34.039942 21.742374,34.039942 C22.0150019,34.039942 22.2834031,33.9103482 22.4516101,33.6682785 C23.460276,32.2165377 24.6821066,30.1518375 25.0862453,28.710735 C25.216027,28.2482592 24.9486825,27.7673114 24.4891152,27.6366538 Z M38.4728742,18.4816248 L38.1354995,18.4816248 C37.6579683,18.4816248 37.2709288,18.8712766 37.2709288,19.3520309 C37.2709288,19.8327853 37.6579683,20.2224371 38.1354995,20.2224371 L38.4728742,20.2224371 C38.9504054,20.2224371 39.3374449,19.8327853 39.3374449,19.3520309 C39.3374449,18.8712766 38.9504054,18.4816248 38.4728742,18.4816248 Z M47.2339536,23.1259188 C45.1668611,23.1259188 43.485271,21.432882 43.485271,19.3519342 C43.485271,17.2709865 45.1669571,15.5780464 47.2339536,15.5780464 C49.3009501,15.5780464 50.9825402,17.2710832 50.9825402,19.3519342 C50.9825402,21.432882 49.3009501,23.1259188 47.2339536,23.1259188 Z M49.2533987,19.3518375 C49.2533987,18.2307544 48.3474246,17.3187621 47.2339536,17.3187621 C46.1202905,17.3187621 45.2144125,18.2308511 45.2144125,19.3518375 C45.2144125,20.4730174 46.1203865,21.3850097 47.2339536,21.3850097 C48.3474246,21.3851064 49.2533987,20.4730174 49.2533987,19.3518375 Z M34.8734741,29.5823017 C30.2236207,29.6014507 30.1443683,29.7302708 28.1131074,33.0290135 C25.8336187,36.7310445 24.2061123,39 19.6650026,39 C18.2953305,39 17.0588983,38.446325 16.1832803,37.4410058 C15.2655865,36.387234 14.8516492,34.9245648 15.0477146,33.4283366 L16.9141307,19.1811412 C17.9874472,10.9878143 21.9632237,9.26731141 26.3346855,9.03665377 C26.3243106,8.9827853 26.3189311,8.92727273 26.3189311,8.87040619 C26.3189311,8.38965184 26.7059706,8 27.1835018,8 L29.7009396,8 C30.1784708,8 30.5655103,8.38965184 30.5655103,8.87040619 C30.5655103,8.91682785 30.5618599,8.96247582 30.5549434,9.00696325 L42.4452885,9.00696325 C42.4382759,8.96247582 42.4347215,8.91682785 42.4347215,8.87040619 C42.4347215,8.38965184 42.821761,8 43.2992922,8 L45.816634,8 C46.2941652,8 46.6812047,8.38965184 46.6812047,8.87040619 C46.6812047,8.92727273 46.6757291,8.9827853 46.6654503,9.03665377 C51.0370081,9.26731141 55.0127846,10.9878143 56.085909,19.1810445 L57.9523251,33.4282398 C58.1482945,34.9246615 57.7343572,36.387234 56.8166634,37.4409091 C55.9411415,38.446325 54.7047093,39 53.3350371,39 C48.7939274,39 47.166325,36.7309478 44.8869323,33.0289168 C42.8571124,29.7324952 42.7779561,29.6038685 38.1891989,29.5823985 L34.8734741,29.5823017 Z M38.1971722,27.8416828 C43.4344535,27.8661509 44.0384042,28.3470986 46.3565104,32.1117021 C48.5542492,35.6810445 49.6799203,37.2591876 53.3350371,37.2591876 C54.1993196,37.2591876 54.9741671,36.9161509 55.5165412,36.2934236 C56.114632,35.6065764 56.3709292,34.6699226 56.2380735,33.6559961 L54.3716574,19.4088008 C53.9003703,15.8105416 52.8277262,13.4312379 51.0923406,12.1350097 C49.4560925,10.912766 47.3268469,10.7479691 45.4597584,10.7479691 L27.5402813,10.7479691 C25.6732889,10.7479691 23.5440433,10.912766 21.9077952,12.1350097 C20.1726017,13.4312379 19.0999576,15.8105416 18.6285745,19.4088008 L16.7620623,33.6558994 C16.6292066,34.6698259 16.8854077,35.6065764 17.4834986,36.2933269 C18.0258726,36.9161509 18.800624,37.2591876 19.6650026,37.2591876 C23.3200234,37.2591876 24.4456945,35.6811412 26.6434333,32.1117021 C28.9631726,28.3444874 29.5707737,27.8633462 34.8663654,27.8414894 L38.1971722,27.8416828 Z"
                          id="Player"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br /> <br />
              <br />
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontStyle: "italic",
                }}
              >
                + 12,000
              </span>
              <br />
              <span style={{ color: "#dfdfdf", fontSize: "1.8rem" }}>
                GAMES
              </span>
            </Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
              }}
            >
              <span>
                <svg
                  width="30px"
                  height="36px"
                  viewBox="0 0 30 36"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>614458D7-AE7E-4E2B-A043-EEB369B58D65@3x</title>
                  <desc>Created with sketchtool.</desc>
                  <defs>
                    <linearGradient
                      x1="26.4662333%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Web2020"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Default_v8"
                      transform="translate(-581.000000, -1836.000000)"
                      fill-rule="nonzero"
                      stroke="url(#linearGradient-1)"
                      stroke-width="2.4"
                    >
                      <g
                        id="Group-24"
                        transform="translate(376.000000, 1832.000000)"
                      >
                        <path
                          d="M213.517001,12.3246798 C213.517001,8.83558325 216.418483,6 219.988666,6 C223.558849,6 226.460331,8.83558325 226.460331,12.3246798 C226.460331,15.6919349 223.751526,18.4499827 220.362685,18.6382831 C220.238012,18.6382831 220.113339,18.6382831 219.988666,18.6382831 C219.863993,18.6382831 219.73932,18.6382831 219.614647,18.6382831 C216.225806,18.4499827 213.517001,15.6919349 213.517001,12.3246798 Z M228.783784,38 L211.216216,38 C208.892764,38 207,36.150225 207,33.8795431 L207,33.1263413 C207,26.2478366 212.621622,20.6209761 219.614647,20.4215992 C219.73932,20.4326757 219.875327,20.4326757 220,20.4326757 C220.124673,20.4326757 220.26068,20.4326757 220.385353,20.4215992 C227.378378,20.6209761 233,26.2478366 233,33.1263413 L233,33.8795431 C233,36.150225 231.107236,38 228.783784,38 Z"
                          id="Team-Copy"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br /> <br />
              <br />
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontStyle: "italic",
                }}
              >
                + 447,799
              </span>
              <br />
              <span style={{ color: "#dfdfdf", fontSize: "1.8rem" }}>
                PLAYERS
              </span>
            </Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
              }}
            >
              <span>
                <svg
                  width="51px"
                  height="32px"
                  viewBox="0 0 51 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>0879127A-CA3D-4702-A171-5165B911DF25@3x</title>
                  <desc>Created with sketchtool.</desc>
                  <defs>
                    <linearGradient
                      x1="14.3512173%"
                      y1="43.3342355%"
                      x2="50%"
                      y2="69.6847366%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Web2020"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Default_v8"
                      transform="translate(-761.000000, -1838.000000)"
                      fill="url(#linearGradient-1)"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-24"
                        transform="translate(376.000000, 1832.000000)"
                      >
                        <path
                          d="M429.107835,20.0803989 C430.601306,19.0433157 431.590226,17.3181677 431.590226,15.3736366 C431.590226,12.1925834 428.986743,9.61981926 425.767709,9.61981926 C422.548674,9.61981926 419.945192,12.1925834 419.945192,15.3736366 C419.945192,17.3181677 420.924021,19.0433157 422.427582,20.0803989 C421.146023,20.5191648 419.975465,21.1972577 418.986545,22.0747897 C417.624258,20.928015 416.019786,20.050483 414.263949,19.5319414 C416.393154,18.2555313 417.826078,15.9320661 417.826078,13.2894983 C417.826078,9.26082892 414.526316,6 410.449545,6 C406.372774,6 403.073011,9.27080087 403.073011,13.2894983 C403.073011,15.9320661 404.495845,18.2555313 406.63514,19.5319414 C404.899486,20.050483 403.315196,20.918043 401.963,22.0448738 C400.97408,21.1872858 399.823704,20.5191648 398.562327,20.0903708 C400.055797,19.0532876 401.044717,17.3281396 401.044717,15.3836086 C401.044717,12.2025553 398.441235,9.62979121 395.2222,9.62979121 C392.003166,9.62979121 389.399683,12.2025553 389.399683,15.3836086 C389.399683,17.3281396 390.378512,19.0532876 391.882074,20.0903708 C387.87594,21.4565285 385,25.2159551 385,29.6335307 L385,30.2916797 C385,30.3116236 385.020182,30.3315675 385.040364,30.3315675 L397.381678,30.3315675 C397.311041,30.8800249 397.270677,31.4484263 397.270677,32.0168277 L397.270677,32.6949205 C397.270677,35.626675 399.672339,38 402.639098,38 L418.280174,38 C421.246933,38 423.648595,35.626675 423.648595,32.6949205 L423.648595,32.0168277 C423.648595,31.4484263 423.608231,30.8800249 423.537594,30.3315675 L435.959636,30.3315675 C435.979818,30.3315675 436,30.3116236 436,30.2916797 L436,29.6335307 C435.979818,25.2059832 433.113969,21.4465566 429.107835,20.0803989 Z M421.559755,15.3636647 C421.559755,13.0701153 423.446775,11.2053599 425.767709,11.2053599 C428.088643,11.2053599 429.975663,13.0701153 429.975663,15.3636647 C429.975663,17.6272982 428.129007,19.4721097 425.848437,19.5219695 C425.818164,19.5219695 425.797982,19.5219695 425.767709,19.5219695 C425.737436,19.5219695 425.717254,19.5219695 425.686981,19.5219695 C423.39632,19.4820816 421.559755,17.6372702 421.559755,15.3636647 Z M404.667392,13.2894983 C404.667392,10.1483328 407.250693,7.59551262 410.429363,7.59551262 C413.608033,7.59551262 416.191334,10.1483328 416.191334,13.2894983 C416.191334,16.3209723 413.779581,18.8039888 410.762366,18.973512 C410.651365,18.973512 410.540364,18.973512 410.429363,18.973512 C410.318362,18.973512 410.207361,18.973512 410.096359,18.973512 C407.079145,18.8039888 404.667392,16.3209723 404.667392,13.2894983 Z M390.983973,15.3636647 C390.983973,13.0701153 392.870993,11.2053599 395.191927,11.2053599 C397.512861,11.2053599 399.399881,13.0701153 399.399881,15.3636647 C399.399881,17.6272982 397.553225,19.4721097 395.272655,19.5219695 C395.242382,19.5219695 395.2222,19.5219695 395.191927,19.5219695 C395.161654,19.5219695 395.141472,19.5219695 395.111199,19.5219695 C392.830629,19.4820816 390.983973,17.6372702 390.983973,15.3636647 Z M397.664226,28.7260829 L386.634745,28.7260829 C387.088841,24.4780305 390.721607,21.1473979 395.131381,21.1174821 C395.151563,21.1174821 395.171745,21.1174821 395.191927,21.1174821 C395.212109,21.1174821 395.232291,21.1174821 395.252473,21.1174821 C397.351405,21.127454 399.268698,21.8952945 400.752078,23.1417887 C399.298971,24.6974135 398.219232,26.6120287 397.664226,28.7260829 Z M418.259992,36.4044874 L402.618916,36.4044874 C400.550257,36.4044874 398.865057,34.7391711 398.865057,32.6949205 L398.865057,32.0168277 C398.865057,25.8242443 403.870202,20.7584917 410.096359,20.5789966 C410.207361,20.5889685 410.328453,20.5889685 410.439454,20.5889685 C410.550455,20.5889685 410.671547,20.5889685 410.782548,20.5789966 C417.008706,20.7584917 422.01385,25.8242443 422.01385,32.0168277 L422.01385,32.6949205 C422.01385,34.7391711 420.328651,36.4044874 418.259992,36.4044874 Z M423.214681,28.7260829 C422.659676,26.6220006 421.600119,24.7373013 420.157103,23.1816765 C421.650574,21.9052664 423.588049,21.137426 425.707163,21.1174821 C425.727345,21.1174821 425.747527,21.1174821 425.767709,21.1174821 C425.787891,21.1174821 425.808073,21.1174821 425.828255,21.1174821 C430.238029,21.1473979 433.870795,24.4780305 434.324891,28.7260829 L423.214681,28.7260829 Z"
                          id="Team"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br /> <br />
              <br />
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontStyle: "italic",
                }}
              >
                + 151,904
              </span>
              <br />
              <span style={{ color: "#dfdfdf", fontSize: "1.8rem" }}>
                TEAMS
              </span>
            </Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
              }}
            >
              <span>
                <svg
                  width="30px"
                  height="35px"
                  viewBox="0 0 30 35"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>B5999D45-A1DC-467C-9AF5-EA0EB39EAF0F@3x</title>
                  <desc>Created with sketchtool.</desc>
                  <defs>
                    <linearGradient
                      x1="23.8090576%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Web2020"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Default_v8"
                      transform="translate(-949.000000, -1837.000000)"
                      fill="url(#linearGradient-1)"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-24"
                        transform="translate(376.000000, 1832.000000)"
                      >
                        <path
                          d="M602.400253,8.37518237 C601.916824,7.80725158 601.21183,7.48165524 600.466055,7.48165524 L598.018252,7.48165524 L598.018252,6.71671234 C598.018252,5.77013822 597.247296,5 596.29987,5 L579.700268,5 C578.752704,5 577.981954,5.77013822 577.981954,6.71664398 L577.981954,7.48158688 L575.533877,7.48158688 C574.788102,7.48158688 574.08304,7.80725158 573.599679,8.37511401 C573.121244,8.93709753 572.914461,9.67524351 573.032496,10.4001961 C573.6757,14.3513757 576.164696,17.8420173 579.697189,19.7566987 C580.019954,20.5319639 580.385486,21.2662818 580.792552,21.9504237 C582.092783,24.136219 583.709211,25.6468274 585.488424,26.3773855 C585.668726,28.1987562 584.455601,29.9242186 582.628627,30.335401 C582.624727,30.3362897 582.62199,30.3376569 582.618158,30.3385456 C582.26159,30.4236532 581.996166,30.7433022 581.996166,31.1255686 L581.996166,34.8417966 L580.491751,34.8417966 C579.150465,34.8417966 578.059275,35.9319256 578.059275,37.2719087 L578.059275,39.1899398 C578.059275,39.6373528 578.422275,40 578.870123,40 L597.207404,40 C597.655252,40 598.018252,39.6373528 598.018252,39.1899398 L598.018252,37.2719087 C598.018252,35.9319256 596.927062,34.8417966 595.585776,34.8417966 L594.081225,34.8417966 L594.081225,31.125637 C594.081225,30.7426186 593.814842,30.4224911 593.457316,30.3381354 C593.453963,30.3373151 593.450747,30.3362214 593.447395,30.335401 C591.606598,29.9214842 590.391215,28.1786586 590.590472,26.3436159 C592.33862,25.6012316 593.926719,24.10409 595.20779,21.9505605 C595.614857,21.2663501 595.98032,20.5319639 596.303154,19.756562 C599.835441,17.8418122 602.3243,14.351239 602.967505,10.4001961 C603.08554,9.67524351 602.878756,8.93716589 602.400253,8.37518237 Z M574.633117,10.1400882 C574.590966,9.88121071 574.662608,9.62711841 574.834905,9.42463755 C575.009733,9.21928558 575.264415,9.10157051 575.533808,9.10157051 L577.981885,9.10157051 L577.981885,10.5919445 C577.981885,12.9288827 578.280428,15.1925394 578.846243,17.2626704 C576.622671,15.5072666 575.091708,12.9572519 574.633117,10.1400882 Z M596.396624,37.2720455 L596.396624,38.3800164 L579.680903,38.3800164 L579.680903,37.2720455 C579.680903,36.8253844 580.044656,36.4619853 580.491751,36.4619853 L595.585776,36.4619853 C596.032871,36.4619853 596.396624,36.8253844 596.396624,37.2720455 Z M592.459528,31.9356971 L592.459528,34.8418649 L583.617999,34.8418649 L583.617999,31.9356971 L592.459528,31.9356971 Z M586.292019,29.6006047 C586.832379,28.7571167 587.116005,27.7988531 587.128732,26.82015 C587.416737,26.85932 587.707411,26.8803064 588.000548,26.8803064 C588.319481,26.8803064 588.635473,26.8558337 588.948385,26.809486 C588.96686,28.1246545 589.479234,29.3695495 590.340785,30.3155768 L585.744474,30.3155768 C585.944894,30.0952541 586.128138,29.8563376 586.292019,29.6006047 Z M593.813611,21.1227268 C592.226675,23.7907984 590.162125,25.2601861 588.000411,25.2601861 C585.838354,25.2601861 583.773668,23.7908668 582.186527,21.1228635 C580.520901,18.3227897 579.603582,14.582841 579.603582,10.5921496 L579.603582,6.71664398 C579.603582,6.66332356 579.646964,6.62005199 579.700199,6.62005199 L596.299733,6.62005199 C596.353105,6.62005199 596.396487,6.66339192 596.396487,6.71664398 L596.396487,10.5920129 C596.396487,14.5827726 595.479168,18.3227213 593.813611,21.1227268 Z M601.366884,10.1400882 C600.908293,12.9570468 599.377466,15.5069932 597.153963,17.2625337 C597.719709,15.1924027 598.018252,12.9288827 598.018252,10.5920129 L598.018252,9.10163887 L600.466055,9.10163887 C600.735517,9.10163887 600.990199,9.2194223 601.164959,9.42470591 C601.337255,9.62711841 601.408966,9.88121071 601.366884,10.1400882 Z"
                          id="Tournament-Copy"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br /> <br />
              <br />
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontStyle: "italic",
                }}
              >
                + 103
              </span>
              <br />
              <span style={{ color: "#dfdfdf", fontSize: "1.8rem" }}>
                CHAMPIONS
              </span>
            </Box>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
              }}
            >
              <span>
                <svg
                  width="29px"
                  height="37px"
                  viewBox="0 0 29 37"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5E69B2A5-0494-4BF5-9F5C-365583D1E285@3x</title>
                  <desc>Created with sketchtool.</desc>
                  <defs>
                    <linearGradient
                      x1="14.3512173%"
                      y1="33.3271872%"
                      x2="50%"
                      y2="99.2366524%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient
                      x1="28.1003461%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-2"
                    >
                      <stop stop-color="#05F386" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Web2020"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Default_v8"
                      transform="translate(-1140.000000, -1836.000000)"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-24"
                        transform="translate(376.000000, 1832.000000)"
                      >
                        <g
                          id="Group-19-Copy"
                          transform="translate(764.000000, 4.000000)"
                        >
                          <path
                            d="M24.0285714,13.5665287 C24.0285714,8.35282984 19.7540981,4.11111111 14.5001391,4.11111111 C9.24590188,4.11111111 4.97142857,8.35282984 4.97142857,13.5665287 C4.97142857,18.7805035 9.24590188,23.0222222 14.5001391,23.0222222 C19.7540981,23.0222222 24.0285714,18.7805035 24.0285714,13.5665287 Z M14.5001391,21.9624825 C9.83492824,21.9624825 6.03935165,18.1959908 6.03935165,13.5665287 C6.03935165,8.93734258 9.83492824,5.17085087 14.5001391,5.17085087 C19.1653499,5.17085087 22.9606484,8.93734258 22.9606484,13.5665287 C22.9606484,18.1959908 19.1653499,21.9624825 14.5001391,21.9624825 Z"
                            id="Shape"
                            fill="url(#linearGradient-1)"
                          ></path>
                          <path
                            d="M28.8889283,31.7327823 L23.8117509,22.8107779 L24.701237,22.5251021 C25.7729069,22.1812749 26.4802091,21.1554392 26.4215493,20.0305203 L26.3541469,18.7384866 C26.3335595,18.3475173 26.479081,17.9630406 26.7534849,17.6838575 L27.6601741,16.7616216 C28.4492616,15.9585113 28.5992954,14.7212417 28.0251059,13.7524282 L27.3654649,12.6399299 C27.1657959,12.30316 27.1164426,11.894971 27.229532,11.5200921 L27.6040525,10.2816934 C27.9300657,9.20363426 27.4884249,8.0383481 26.5304084,7.44780095 L25.4296905,6.76917984 C25.0966268,6.56395622 24.8631155,6.22577486 24.7895087,5.84101586 L24.5461268,4.57043618 C24.334331,3.46414826 23.4022601,2.63760807 22.2795449,2.56026111 L20.9898747,2.47162254 C20.5995612,2.44480514 20.2360394,2.25369597 19.9923755,1.94741316 L19.1866489,0.935409502 C18.4855512,0.0546699615 17.2762563,-0.243426498 16.246607,0.210210841 L15.0635398,0.731597375 C15.0635398,0.731597375 15.0635398,0.731597375 15.0632578,0.731597375 C14.7053764,0.889396561 14.2947576,0.889396561 13.9365942,0.731597375 L12.753527,0.210210841 C11.7235957,-0.243426498 10.5145829,0.0546699615 9.81320305,0.935691845 L9.00775846,1.94741316 C8.76409456,2.25369597 8.40057284,2.44480514 8.01025936,2.47162254 L6.72058919,2.56026111 C5.59787384,2.63760807 4.66580301,3.46414826 4.45400717,4.57043618 L4.21062526,5.84101586 C4.13673648,6.22549258 3.90350723,6.56395622 3.57044351,6.76917984 L2.46972563,7.44751868 C1.51170911,8.03806583 1.07006824,9.20363426 1.3960816,10.2816934 L1.77031997,11.5200921 C1.88369141,11.894971 1.83433817,12.3028777 1.63466914,12.6396476 L0.975028056,13.7524282 C0.400838572,14.7209594 0.550872367,15.9585113 1.33995992,16.7613393 L2.24664912,17.6838575 C2.52077095,17.9630406 2.66657452,18.3472351 2.64598719,18.7382044 L2.57858478,20.0305203 C2.51992495,21.155157 3.22722712,22.1809927 4.29861501,22.5251021 L5.18838311,22.8104956 L0.111205646,31.7327823 C-0.0422123329,32.0023677 -0.0365719647,32.3337742 0.126152676,32.5979961 C0.288877281,32.8622179 0.583586502,33.0169118 0.891832607,32.9999746 L5.13536365,32.780072 L7.11090267,36.5460804 C7.25501402,36.8204646 7.53703244,36.9946365 7.84697069,37 C7.85176498,37 7.85655928,37 7.86135364,37 C8.16565145,37 8.44710586,36.8368374 8.59798573,36.5714863 L13.764845,27.4914004 C14.0039966,27.5656423 14.2518908,27.6043157 14.500067,27.6043157 C14.7482432,27.6043157 14.9958554,27.5656423 15.235289,27.4914004 L20.4021483,36.5714863 C20.5530282,36.8368374 20.8342005,37 21.1384983,37 C21.1432927,37 21.148369,37 21.1531634,37 C21.4631016,36.9946365 21.74512,36.8207469 21.8892314,36.5460804 L23.8644883,32.780072 L28.1083014,32.9999746 C28.4190856,33.0163473 28.7112568,32.8619356 28.8736994,32.5979961 C29.036424,32.3337742 29.0423464,32.0023677 28.8889283,31.7327823 Z M7.86981416,35.6611065 L6.0705367,32.2313035 L7.13290007,30.3648132 C7.28095972,30.1045433 7.19043183,29.7737014 6.93041089,29.6255001 C6.67095395,29.477581 6.3401463,29.5681955 6.19208665,29.8281831 L5.12972328,31.6949557 L1.26494298,31.8953804 L6.14442556,23.3208729 C6.23636353,23.4239081 6.31420061,23.5404932 6.37286044,23.6680875 L6.91320771,24.8438183 C7.19353405,25.4538433 7.69891104,25.9060692 8.295944,26.1304885 L7.44988876,27.6175833 C7.30182912,27.8775708 7.39263901,28.208695 7.65237802,28.3568964 C7.73698347,28.4048854 7.82920351,28.4277507 7.92001347,28.4277507 C8.10811977,28.4277507 8.2911497,28.3295144 8.39098418,28.1539311 L9.46237214,26.2713503 C9.50636701,26.2659869 9.55036189,26.2600588 9.59435676,26.2521548 L10.8679519,26.0294292 C11.252907,25.9619623 11.6516811,26.060481 11.9616193,26.2992969 L12.8203654,26.961263 L7.86981416,35.6611065 Z M15.203985,26.3292194 C15.2020108,26.3303486 15.2003187,26.3309131 15.1986266,26.3320423 C15.1958064,26.3337361 15.1929862,26.3357121 15.1901661,26.3374058 C14.7629082,26.580456 14.2372259,26.580456 13.809968,26.3374058 C13.8071478,26.3357121 13.8046096,26.3337361 13.8015074,26.3320423 C13.7998153,26.3309131 13.7981232,26.3303486 13.7964311,26.3292194 C13.7451037,26.2992969 13.6949044,26.267116 13.6469614,26.2301362 L12.6226705,25.4405758 C12.186388,25.1040882 11.650835,24.9245528 11.1065395,24.9245528 C10.9649662,24.9245528 10.822829,24.9369735 10.6815377,24.9615325 L9.40794261,25.184258 C9.32587523,25.1986547 9.24380786,25.2051473 9.16258655,25.2048651 C9.15581811,25.2045828 9.14933167,25.2043005 9.1428453,25.2043005 C8.61406076,25.194985 8.1244768,24.8853147 7.89716993,24.3904633 L7.35682272,23.2150148 C7.12584963,22.7122592 6.73243393,22.3037881 6.24820833,22.0508578 C6.24708026,22.0502931 6.24623419,22.0494463 6.24510611,22.0488817 C6.24200389,22.047188 6.23890167,22.0457765 6.23608152,22.0443651 C6.22451879,22.0384371 6.21295605,22.032509 6.20139324,22.0268633 C6.19857309,22.0254518 6.19631695,22.0243226 6.19349673,22.0231935 C6.08632973,21.9704056 5.97521451,21.9249571 5.860433,21.8879773 L4.62942266,21.493056 C4.02562119,21.299124 3.62684719,20.7209975 3.66012533,20.0872602 L3.72752774,18.7949443 C3.7636261,18.1010797 3.50529724,17.4190711 3.0185335,16.9239374 L2.11212629,16.0014191 C1.66738327,15.548911 1.58277775,14.8516589 1.90625288,14.3057133 L2.56589389,13.1929327 C2.92010902,12.5953284 3.00809876,11.8712589 2.80701965,11.2061875 L2.4324992,9.96778875 C2.2486232,9.3603043 2.49764547,8.70341937 3.03771075,8.37088377 L4.13842855,7.69226259 C4.72953914,7.32782843 5.14354224,6.72768344 5.27411671,6.04511033 L5.51749861,4.77453058 C5.63679242,4.15123798 6.16219267,3.6854623 6.79475998,3.64170759 L8.08443015,3.5530691 C8.77678537,3.50536232 9.42204349,3.16633407 9.85465977,2.62292908 L10.6601044,1.61120776 C11.0554941,1.1146626 11.7368506,0.946701035 12.3172445,1.20245428 L13.5000297,1.72355848 C14.1354172,2.00358848 14.8644348,2.00358848 15.4995403,1.72355848 L16.6826075,1.20245428 C17.2632834,0.946701035 17.9443579,1.1146626 18.3394656,1.61120776 L19.1451923,2.62321135 C19.5775265,3.16661634 20.2230666,3.50536232 20.9154218,3.5530691 L22.205092,3.64198993 C22.8376593,3.6854623 23.3630596,4.15123798 23.4823534,4.77453058 L23.7257353,6.0453926 C23.8565918,6.72768344 24.2705948,7.3281107 24.8614234,7.69226259 L25.9621412,8.37088377 C26.5022065,8.70370164 26.7512288,9.3603043 26.5673528,9.96778875 L26.1928323,11.2064699 C25.9917532,11.8712589 26.079743,12.5953284 26.4339581,13.193215 L27.0935992,14.3057133 C27.4170742,14.8516589 27.3327508,15.548911 26.8877257,16.0014191 L25.9813186,16.9239374 C25.4945548,17.4190711 25.2362259,18.1010797 25.2723242,18.7952266 L25.3397267,20.0872602 C25.3730048,20.7209975 24.9742308,21.299124 24.3704294,21.493056 L23.139419,21.8879773 C23.0246375,21.9249571 22.9135223,21.9704056 22.8063553,22.0229112 C22.803535,22.0243226 22.8009969,22.0254518 22.7984587,22.0265809 C22.786896,22.032509 22.7750512,22.0384371 22.7634885,22.0443651 C22.7606682,22.0460588 22.7575661,22.047188 22.7547459,22.0488817 C22.7536178,22.0494463 22.7527718,22.0500109 22.7519257,22.0505754 C22.2674181,22.3035057 21.8740024,22.7122592 21.6430293,23.2150148 L21.1026821,24.3907456 C20.8756573,24.8850324 20.3866373,25.1947027 19.8581348,25.2043005 C19.8505203,25.2043005 19.8426238,25.2045828 19.8350093,25.2051473 C19.7543521,25.2051473 19.6731308,25.1986547 19.5916274,25.184258 L18.3183142,24.9615325 C17.6344196,24.8418423 16.9268354,25.0165788 16.3768996,25.4405758 L15.3528907,26.2301362 C15.3052296,26.267116 15.2550303,26.2992969 15.203985,26.3292194 Z M23.8704107,31.6949557 L22.7993048,29.8129395 C22.6512452,29.5526697 22.3204375,29.4620551 22.0609806,29.6102565 C21.8009596,29.7584579 21.7104318,30.0892998 21.8584914,30.3495696 L22.9293153,32.2313035 L21.1303198,35.6611065 L16.1797687,26.961263 L17.0382327,26.2992969 C17.3481709,26.060481 17.746945,25.9619623 18.1321822,26.0294292 L19.4054952,26.2521548 C19.4494901,26.2600588 19.493767,26.2659869 19.5377619,26.2713503 L20.6085858,28.1533665 C20.7084203,28.3286675 20.8914503,28.4271862 21.0795565,28.4271862 C21.1703665,28.4271862 21.2625864,28.4043209 21.347192,28.3560495 C21.606931,28.2078482 21.6974589,27.8770062 21.5496812,27.6167364 L20.703908,26.1304885 C21.3009409,25.905787 21.8063179,25.4538433 22.0866443,24.8438183 L22.6269916,23.6680875 C22.6856514,23.5404932 22.7634885,23.4239081 22.8554264,23.3208729 L27.734909,31.8953804 L23.8704107,31.6949557 Z"
                            id="Shape"
                            fill="url(#linearGradient-2)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br /> <br />
              <br />
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontStyle: "italic",
                }}
              >
                + 10,000,000SAR
              </span>
              <br />
              <span style={{ color: "#dfdfdf", fontSize: "1.8rem" }}>
                WORTH OF PRIZES
              </span>
            </Box>
          </Grid>
          <Grid item xl={1} lg={1} md={1} sm={6} xs={12}></Grid>
        </Grid>
      </Grid>
      {/* .................................................................................................................. */}

      <Grid maxWidth="xl" className="seventh-section" style={{}}>
        <Grid
          container
          style={{
            width: "90%",
            margin: "2rem auto",
            padding: "2rem auto",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h2" style={{ color: "white" }}>
              BRAVO GAMES FEATURES
            </Typography>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
                textAlign: "center",
              }}
            >
              <span>
                <svg
                  width="54"
                  height="37"
                  viewBox="0 0 54 37"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Profile@3x</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="14.3512173%"
                      y1="42.2087124%"
                      x2="50%"
                      y2="73.0085304%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#737680" offset="0%"></stop>
                      <stop stop-color="#2C2F39" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-387.000000, -1898.000000)"
                      fill="url(#linearGradient-1)"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M413.544511,1898.92659 C428.181646,1898.92659 440.025842,1910.77284 440.025842,1925.4079 C440.028726,1928.4394 439.509444,1931.44875 438.490741,1934.30397 L438.490741,1934.30397 L438.295234,1934.85429 L388.793789,1934.85429 L388.598282,1934.30397 C387.579579,1931.44875 387.060297,1928.4394 387.063181,1925.4079 C387.063181,1910.77077 398.909445,1898.92659 413.544511,1898.92659 Z M413.544511,1901.32617 C400.448176,1901.32617 389.851444,1911.92486 389.851444,1925.01922 C389.848792,1927.54688 390.251377,1930.05864 391.044008,1932.45884 L391.044008,1932.45884 L436.045015,1932.45884 C436.837646,1930.05864 437.240329,1927.54688 437.237579,1925.01922 C437.237579,1911.92289 426.640847,1901.32617 413.544511,1901.32617 Z M421.238576,1916.5439 L422.409546,1917.71384 L416.910535,1923.21285 C417.78597,1924.55399 417.785246,1926.28603 416.90857,1927.62634 C415.688981,1929.49099 413.188772,1930.0139 411.324115,1928.79431 C409.459458,1927.57472 408.936555,1925.07451 410.156144,1923.20985 C411.375733,1921.34519 413.875942,1920.82229 415.740599,1922.04188 L415.740599,1922.04188 L421.238576,1916.5439 Z M434.834043,1924.58036 L434.834043,1926.23545 L429.511919,1926.23545 L429.511919,1924.58036 L434.834043,1924.58036 Z M397.577104,1924.58036 L397.577104,1926.23545 L392.25498,1926.23545 L392.25498,1924.58036 L397.577104,1924.58036 Z M428.013548,1909.77136 L429.183857,1910.94166 L425.420583,1914.70494 L424.250274,1913.53463 L428.013548,1909.77136 Z M399.075265,1909.7701 L402.838539,1913.53337 L401.66823,1914.70368 L397.904956,1910.94041 L399.075265,1909.7701 Z M414.372053,1904.11837 L414.372053,1909.4405 L412.71697,1909.4405 L412.71697,1904.11837 L414.372053,1904.11837 Z"
                        id="Profile"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br />
              <span style={{ color: "white", fontSize: "2rem" }}>PROFILE</span>
              <br />
              <br />
              <span style={{ color: "#d5d5d5", fontSize: "1.7rem" }}>
                Manage all features on your profile, add a game ID or proudly
                showcase your best gaming achievements & performances.
              </span>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
                textAlign: "center",
              }}
            >
              <span>
                <svg
                  width="40"
                  height="47"
                  viewBox="0 0 40 47"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Profile@3x</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="24.2073194%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-2"
                    >
                      <stop stop-color="#737680" offset="0%"></stop>
                      <stop stop-color="#2C2F39" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-677.000000, -1895.000000)"
                      fill="url(#linearGradient-2)"
                      fill-rule="nonzero"
                    >
                      <path
                        fill="inherit"
                        d="M689.517378,1920.55056 C690.09827,1920.14108 690.898187,1920.28392 691.307669,1920.86482 C691.71715,1921.44571 691.574308,1922.24563 690.993416,1922.65511 C690.831528,1922.75986 687.041444,1925.4072 682.299078,1926.62612 C680.08026,1927.41652 679.832667,1929.7877 679.766007,1931.9589 C679.766007,1932.04461 679.756484,1932.12079 679.756484,1932.19698 C679.737438,1933.05403 679.804098,1934.3777 679.956463,1935.13953 C681.508684,1936.01563 687.593768,1939.05341 696.754724,1939.05341 C705.953771,1939.05341 712.000764,1936.02515 713.543461,1935.14905 C713.695827,1934.38722 713.752964,1933.06355 713.743441,1932.2065 C713.733918,1932.13032 713.733918,1932.05413 713.733918,1931.96843 C713.667258,1929.79722 713.419665,1927.42604 711.200847,1926.63565 C706.458481,1925.41673 702.668397,1922.7789 702.506509,1922.66463 C701.925617,1922.25515 701.782775,1921.45523 702.192253,1920.87434 C702.601737,1920.29345 703.401655,1920.1506 703.982547,1920.56009 C704.020638,1920.58865 707.591697,1923.06459 711.88649,1924.15971 C711.915059,1924.16924 711.95315,1924.17876 711.981718,1924.18828 C716.114624,1925.59766 716.23842,1930.00673 716.295557,1931.89225 C716.295557,1931.97795 716.30508,1932.05413 716.30508,1932.13032 L716.30508,1932.13032 L716.30508,1932.15888 C716.314603,1932.65407 716.324126,1935.19666 715.847985,1936.4632 C715.752756,1936.71079 715.571823,1936.9203 715.352798,1937.06314 C715.067113,1937.24407 708.220203,1941.61505 696.764247,1941.61505 C685.30829,1941.61505 678.46138,1937.25359 678.175695,1937.06314 C677.947148,1936.9203 677.775737,1936.71079 677.680509,1936.4632 C677.175799,1935.18714 677.185322,1932.64455 677.194845,1932.14936 L677.194845,1932.14936 L677.194845,1932.12079 C677.204367,1932.04461 677.204367,1931.96843 677.204367,1931.88272 C677.261504,1930.00673 677.385301,1925.59766 681.518206,1924.17876 C681.546775,1924.16924 681.575343,1924.15971 681.613435,1924.15019 C685.927274,1923.05507 689.479287,1920.57913 689.517378,1920.55056 Z M696.849952,1895.62933 C698.773562,1895.66743 700.497193,1896.12452 701.973231,1896.97205 C703.953978,1898.10527 706.35373,1900.53359 706.5918,1905.60925 C706.65846,1906.28537 707.267921,1913.37035 703.601634,1917.50326 C701.93514,1919.37926 699.678231,1920.36011 696.888043,1920.40772 L696.888043,1920.40772 L696.583313,1920.40772 C693.793126,1920.36011 691.536217,1919.37926 689.879245,1917.50326 C686.212958,1913.37035 686.822419,1906.28537 686.889079,1905.60925 C687.127149,1900.4955 689.564992,1898.06718 691.564785,1896.93396 C693.555055,1895.80074 695.631031,1895.62933 696.688064,1895.62933 L696.688064,1895.62933 Z M696.792815,1898.21002 L696.678541,1898.21002 C694.602566,1898.21002 689.755449,1898.94328 689.441196,1905.77114 C689.441196,1905.79019 689.431673,1905.81875 689.431673,1905.84732 C689.42215,1905.90446 688.774598,1912.40855 691.793333,1915.79867 C692.983686,1917.15091 694.593043,1917.81751 696.688064,1917.83656 L696.688064,1917.83656 L696.783292,1917.83656 C698.887836,1917.81751 700.487671,1917.15091 701.687546,1915.79867 C704.715804,1912.3895 704.049207,1905.91398 704.039684,1905.84732 C704.030161,1905.82828 704.030161,1905.79971 704.030161,1905.77114 C703.734953,1899.31467 699.363977,1898.26716 696.792815,1898.21002 L696.792815,1898.21002 Z"
                        id="Avatars"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br />
              <span style={{ color: "white", fontSize: "2rem" }}>AVATARS</span>
              <br />
              <br />
              <span style={{ color: "#d5d5d5", fontSize: "1.7rem" }}>
                Design and equip your unique avatar for free, or buy coins and
                get a variety of new ones.
              </span>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            {" "}
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
                textAlign: "center",
              }}
            >
              <span>
                <svg
                  width="41"
                  height="48"
                  viewBox="0 0 41 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Profile@3x</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="24.2073194%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-3"
                    >
                      <stop stop-color="#0F7A36" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-964.000000, -1898.000000)"
                      fill="url(#linearGradient-3)"
                      fill-rule="nonzero"
                    >
                      <path
                        fill="inherit"
                        d="M1003.78418,1903.14753 C1003.13564,1902.38488 1002.18986,1901.94765 1001.18936,1901.94765 L997.905514,1901.94765 L997.905514,1900.92044 C997.905514,1899.64933 996.871238,1898.61515 995.600219,1898.61515 L973.331035,1898.61515 C972.059833,1898.61515 971.025833,1899.64933 971.025833,1900.92035 L971.025833,1901.94756 L967.741617,1901.94756 C966.741123,1901.94756 965.795248,1902.38488 965.146795,1903.14743 C964.504951,1903.9021 964.227541,1904.89332 964.385891,1905.86682 C965.248781,1911.17268 968.587892,1915.86011 973.326905,1918.43124 C973.75991,1919.47231 974.250289,1920.45839 974.796389,1921.3771 C976.540713,1924.3123 978.70923,1926.34083 981.096132,1927.32186 C981.338017,1929.7677 979.71055,1932.08474 977.259574,1932.6369 C977.254341,1932.63809 977.25067,1932.63993 977.245529,1932.64112 C976.767176,1932.75541 976.411095,1933.18465 976.411095,1933.69798 L976.411095,1938.68833 L974.39285,1938.68833 C972.593448,1938.68833 971.129563,1940.15222 971.129563,1941.95162 L971.129563,1944.52726 C971.129563,1945.12807 971.616546,1945.61505 972.217356,1945.61505 L996.817721,1945.61505 C997.418531,1945.61505 997.905514,1945.12807 997.905514,1944.52726 L997.905514,1941.95162 C997.905514,1940.15222 996.441629,1938.68833 994.642227,1938.68833 L992.623798,1938.68833 L992.623798,1933.69807 C992.623798,1933.18373 992.266433,1932.75385 991.786794,1932.64057 C991.782296,1932.63947 991.777981,1932.638 991.773483,1932.6369 C989.303964,1932.08107 987.673469,1929.74071 987.940781,1927.27651 C990.286007,1926.2796 992.41652,1924.26916 994.135141,1921.37728 C994.681241,1920.45849 995.171528,1919.47231 995.604625,1918.43106 C1000.34336,1915.85983 1003.68229,1911.1725 1004.54518,1905.86682 C1004.70353,1904.89332 1004.42612,1903.90219 1003.78418,1903.14753 Z M966.533203,1905.51754 C966.476656,1905.1699 966.572767,1904.82869 966.803912,1904.55679 C967.038453,1904.28103 967.380121,1904.12296 967.741525,1904.12296 L971.025741,1904.12296 L971.025741,1906.12431 C971.025741,1909.26248 971.426251,1912.30224 972.185319,1915.08213 C969.202288,1912.72488 967.148425,1909.30058 966.533203,1905.51754 Z M994.642227,1940.86401 C995.242028,1940.86401 995.73002,1941.352 995.73002,1941.9518 L995.73002,1943.43965 L973.305057,1943.43965 L973.305057,1941.9518 C973.305057,1941.352 973.793049,1940.86401 974.39285,1940.86401 L994.642227,1940.86401 L994.642227,1940.86401 Z M990.448212,1934.78586 L990.448212,1938.68842 L978.586865,1938.68842 L978.586865,1934.78586 L990.448212,1934.78586 Z M981.439636,1932.61037 C981.708509,1932.31442 981.954341,1931.99359 982.174194,1931.65018 C982.899114,1930.51749 983.279612,1929.23069 983.296686,1927.91643 C983.683059,1927.96903 984.073012,1927.99721 984.46627,1927.99721 C984.894135,1927.99721 985.318053,1927.96435 985.73784,1927.90211 C985.762625,1929.66819 986.45,1931.3399 987.605814,1932.61028 L981.439636,1932.61028 L981.439636,1932.61037 Z M995.729836,1906.12441 C995.729836,1911.48342 994.499208,1916.50562 992.26478,1920.26562 C990.135827,1923.84845 987.366133,1925.82163 984.466086,1925.82163 C981.565581,1925.82163 978.795702,1923.84854 976.666474,1920.2658 C974.431955,1916.50571 973.201327,1911.48351 973.201327,1906.12459 L973.201327,1900.92035 C973.201327,1900.84875 973.259526,1900.79064 973.330944,1900.79064 L995.600036,1900.79064 C995.671637,1900.79064 995.729836,1900.84884 995.729836,1900.92035 L995.729836,1906.12441 L995.729836,1906.12441 Z M1002.39787,1905.51754 C1001.78265,1909.3003 999.728966,1912.72451 996.746027,1915.08194 C997.505004,1912.30206 997.905514,1909.26248 997.905514,1906.12441 L997.905514,1904.12305 L1001.18936,1904.12305 C1001.55086,1904.12305 1001.89253,1904.28122 1002.12698,1904.55688 C1002.35812,1904.82869 1002.45432,1905.1699 1002.39787,1905.51754 Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br />
              <span style={{ color: "white", fontSize: "2rem" }}>
                TOURNAMENTS
              </span>
              <br />
              <br />
              <span style={{ color: "#d5d5d5", fontSize: "1.7rem" }}>
                Experience epic Esports tournaments at Bravo, run by the biggest
                organizers in the gaming world.
              </span>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Box
              style={{
                backgroundColor: "#1D1E20",
                padding: "2rem",
                borderRadius: "1rem",
                margin: "2rem",
                textAlign: "center",
              }}
            >
              <span>
                <svg
                  width="52"
                  height="38"
                  viewBox="0 0 52 38"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Profile@3x</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="24.2073194%"
                      y1="33.0686978%"
                      x2="50%"
                      y2="100%"
                      id="linearGradient-4"
                    >
                      <stop stop-color="#0F7A36" offset="0%"></stop>
                      <stop stop-color="#05581D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-1250.000000, -1900.000000)"
                      fill="url(#linearGradient-4)"
                      fill-rule="nonzero"
                    >
                      <path
                        fill="inherit"
                        d="M1268.03052,1914.08764 C1268.03052,1914.65821 1267.56807,1915.12065 1266.9975,1915.12065 L1264.52377,1915.12065 L1264.52377,1917.59438 C1264.52377,1918.16495 1264.06133,1918.6274 1263.49076,1918.6274 C1262.92019,1918.6274 1262.45774,1918.16495 1262.45774,1917.59438 L1262.45774,1915.12065 L1259.98402,1915.12065 C1259.41345,1915.12065 1258.951,1914.65821 1258.951,1914.08764 C1258.951,1913.51707 1259.41345,1913.05462 1259.98402,1913.05462 L1262.45774,1913.05462 L1262.45774,1910.58089 C1262.45774,1910.01033 1262.92019,1909.54788 1263.49076,1909.54788 C1264.06133,1909.54788 1264.52377,1910.01033 1264.52377,1910.58089 L1264.52377,1913.05462 L1266.9975,1913.05462 C1267.56807,1913.05462 1268.03052,1913.51718 1268.03052,1914.08764 Z M1274.30115,1913.05485 L1273.89828,1913.05485 C1273.32771,1913.05485 1272.86526,1913.5173 1272.86526,1914.08787 C1272.86526,1914.65844 1273.32771,1915.12088 1273.89828,1915.12088 L1274.30115,1915.12088 C1274.87172,1915.12088 1275.33417,1914.65844 1275.33417,1914.08787 C1275.33417,1913.5173 1274.87172,1913.05485 1274.30115,1913.05485 Z M1291.88102,1924.63358 C1291.72595,1924.08459 1291.15572,1923.76482 1290.60616,1923.92023 C1290.05717,1924.07529 1289.73785,1924.64598 1289.8928,1925.19508 C1290.37603,1926.90622 1291.83591,1929.35641 1293.04109,1931.0788 C1293.24207,1931.36609 1293.56265,1931.51978 1293.88839,1931.51978 C1294.09282,1931.51978 1294.29942,1931.45918 1294.47962,1931.33303 C1294.94712,1931.00591 1295.06087,1930.36188 1294.73386,1929.8945 C1293.3627,1927.93476 1292.21617,1925.82063 1291.88102,1924.63358 Z M1261.90416,1923.92023 C1261.35483,1923.76459 1260.78426,1924.08471 1260.62931,1924.6337 C1260.29449,1925.81994 1259.14808,1927.93418 1257.77669,1929.89462 C1257.44968,1930.362 1257.56354,1931.00614 1258.03104,1931.33315 C1258.21136,1931.45929 1258.41773,1931.51978 1258.62227,1931.51978 C1258.94802,1931.51978 1259.26871,1931.36597 1259.46969,1931.07868 C1260.67487,1929.35573 1262.13475,1926.9053 1262.61763,1925.19497 C1262.7727,1924.64609 1262.45327,1924.07529 1261.90416,1923.92023 Z M1278.61239,1913.05485 L1278.20928,1913.05485 C1277.63871,1913.05485 1277.17627,1913.5173 1277.17627,1914.08787 C1277.17627,1914.65844 1277.63871,1915.12088 1278.20928,1915.12088 L1278.61239,1915.12088 C1279.18296,1915.12088 1279.6454,1914.65844 1279.6454,1914.08787 C1279.6454,1913.5173 1279.18296,1913.05485 1278.61239,1913.05485 Z M1289.0804,1918.5668 C1286.61057,1918.5668 1284.60135,1916.55746 1284.60135,1914.08775 C1284.60135,1911.61804 1286.61068,1909.60883 1289.0804,1909.60883 C1291.55011,1909.60883 1293.55932,1911.61816 1293.55932,1914.08775 C1293.55932,1916.55746 1291.55011,1918.5668 1289.0804,1918.5668 Z M1291.49329,1914.08764 C1291.49329,1912.75711 1290.4108,1911.67474 1289.0804,1911.67474 C1287.74976,1911.67474 1286.66739,1912.75723 1286.66739,1914.08764 C1286.66739,1915.41828 1287.74987,1916.50065 1289.0804,1916.50065 C1290.4108,1916.50076 1291.49329,1915.41828 1291.49329,1914.08764 Z M1274.31171,1926.22936 C1268.75593,1926.25209 1268.66123,1926.40497 1266.23422,1930.31999 C1263.51062,1934.71363 1261.56602,1937.40648 1256.14016,1937.40648 C1254.50364,1937.40648 1253.02631,1936.74936 1251.98009,1935.55623 C1250.88361,1934.30559 1250.38902,1932.56967 1250.62329,1930.79391 L1252.85334,1913.88505 C1254.13577,1904.16105 1258.88615,1902.11912 1264.10931,1901.84537 C1264.09691,1901.78144 1264.09048,1901.71555 1264.09048,1901.64806 C1264.09048,1901.07749 1264.55293,1900.61505 1265.1235,1900.61505 L1268.13141,1900.61505 C1268.70198,1900.61505 1269.16443,1901.07749 1269.16443,1901.64806 C1269.16443,1901.70316 1269.16006,1901.75733 1269.1518,1901.81013 L1283.35875,1901.81013 C1283.35037,1901.75733 1283.34612,1901.70316 1283.34612,1901.64806 C1283.34612,1901.07749 1283.80857,1900.61505 1284.37914,1900.61505 L1287.38694,1900.61505 C1287.95751,1900.61505 1288.41995,1901.07749 1288.41995,1901.64806 C1288.41995,1901.71555 1288.41341,1901.78144 1288.40113,1901.84537 C1293.6244,1902.11912 1298.37478,1904.16105 1299.65698,1913.88494 L1301.88704,1930.7938 C1302.12119,1932.56978 1301.6266,1934.30559 1300.53011,1935.55612 C1299.48401,1936.74936 1298.00668,1937.40648 1296.37016,1937.40648 C1290.9443,1937.40648 1288.99959,1934.71352 1286.2761,1930.31987 C1283.85081,1926.40761 1283.75623,1926.25496 1278.27344,1926.22948 L1274.31171,1926.22936 Z M1278.28297,1924.16356 C1284.54064,1924.1926 1285.26225,1924.7634 1288.032,1929.23131 C1290.65792,1933.46747 1292.00291,1935.34045 1296.37016,1935.34045 C1297.40283,1935.34045 1298.32864,1934.93332 1298.97669,1934.19426 C1299.6913,1933.37909 1299.99753,1932.26745 1299.83879,1931.0641 L1297.60874,1914.15524 C1297.04564,1909.88476 1295.76401,1907.06095 1293.69051,1905.52256 C1291.73548,1904.07198 1289.19139,1903.87639 1286.96053,1903.87639 L1265.54979,1903.87639 C1263.31905,1903.87639 1260.77496,1904.07198 1258.81992,1905.52256 C1256.74666,1907.06095 1255.46503,1909.88476 1254.90181,1914.15524 L1252.67164,1931.06399 C1252.5129,1932.26734 1252.81902,1933.37909 1253.53364,1934.19414 C1254.18168,1934.93332 1255.10738,1935.34045 1256.14016,1935.34045 C1260.50729,1935.34045 1261.85228,1933.46759 1264.47821,1929.23131 C1267.2499,1924.7603 1267.97588,1924.18927 1274.30322,1924.16333 L1278.28297,1924.16356 Z"
                        id="Player"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <br />
              <br />
              <span style={{ color: "white", fontSize: "2rem" }}>PLAYERS</span>
              <br />
              <br />
              <span style={{ color: "#d5d5d5", fontSize: "1.7rem" }}>
                Players of all skill levels are welcome to challenge, compete
                and win in our tournaments.
              </span>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* ................................................................................................................ */}
    </>
  );
}
