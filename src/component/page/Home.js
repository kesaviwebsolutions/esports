import React, { Component } from 'react'
import "../page/Home.css";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
function Home() {
  return (
<>
<Component>
<Grid container spacing={2}>
  <Grid item xs={8} md={12} >
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4} md={12}>
    <Item>xs=4</Item>
  </Grid>
</Grid>
</Component>
</>
  )
}

export default Home
