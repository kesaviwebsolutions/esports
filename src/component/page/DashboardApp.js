
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
// components

import * as React from 'react';

import freefire from '../img/Free-Fire.jpg';
import calender from '../img/calender.jpg';

import Card from '@mui/material/Button';
import '../page/DashboardApp.css';
import "../../App.css";


// sections


// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
   
      <Grid maxWidth="xl" style={{backgroundColor:"black"}}>
   
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: '2rem auto', border: '0.1rem solid white' }}>
            <Typography variant="h3" className="text1">
              {' '}
              FEATURED TOURNAMENTS
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: '0 auto', border: '0.1rem solid white' }}>
            <Grid container>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{ border: '0.1rem solid white', backgroundColor: 'black', borderRadius: '10px' }}
              >
                <Grid container>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <img src={freefire} alt=" " style={{width:"100%"}} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ padding: '1rem ' }}>
                    <Typography
                      variant="button"
                      sx={{
                        borderRadius: '5px',
                        border: '0.1rem solid white',
                        padding: '0.3rem',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize:'1rem',
                        
                      }}
                    >
                      Free-Fire
                    </Typography>
                    <Typography
                      variant="span"
                      sx={{
                        color: 'black',
                        backgroundColor: '#F9B45F',
                        float: 'right',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '5px',
                        fontSize:"1.5rem",
                        marginTop:"1rem 0rem"
                      }}
                    >
                      Featured
                    </Typography>
                    <Typography variant="h5" sx={{ marginTop:'2rem', color: 'white',marginBottom:"1rem",fontStyle:"italic",fontSize:"1.4rem"}}>
                      Free-Fire Seasons Daily Tournament2
                    </Typography>
                    <Typography variant="span" sx={{ display: 'flex' ,marginBottom:"1rem"}}>
                      <img src={calender} alt="" style={{ marginRight: '0.2rem' }} />
                      <Typography variant="span" sx={{ color: 'white', display: 'flex',fontSize:"2rem" }}>
                        Registration Starts 16th Sep 2022
                      </Typography>
                    </Typography>
                    <Typography variant="span" sx={{ color: 'white',fontSize:"2rem" }}>
                      Tournament By
                    </Typography>
                    <Typography variant="span" sx={{ color: 'white',fontSize:"2rem" }}>
                      Hala Yalla
                    </Typography>
                    <Box sx={{marginTop:"1rem"}}>
                      <Typography
                        variant="button"
                        sx={{
                          color: 'black',
                          backgroundColor: '#F9B45F',
                          padding: '0.2rem 0.5rem',
                          border: 'none',
                          borderRadius: '5px',
                          float: 'right',
                          cursor: 'pointer',fontSize:"2rem"
                        }}
                      >
                        Registration Open
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ border: '0.1rem solid black' }}>
                a
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ border: '0.1rem solid black' }}>
                a
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
 
  );
}
