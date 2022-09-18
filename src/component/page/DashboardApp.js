
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
import logo from "../img/logo.png";
import Image22 from "../img/image4.png";
// sections


// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <>
   
      <Grid maxWidth="xl" style={{backgroundColor:"black",width:"90%" ,margin:"0.5rem auto"}}>
   
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: '2rem auto', }}>
            <Typography variant="h3" className="text1">
              {' '}
              FEATURED TOURNAMENTS
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={11} lg={11} sx={{ margin: '0 auto', }}>
            <Grid container>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{  backgroundColor: 'black', borderRadius: '10px',border:"0.4rem solid purple" }}
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
                    <Typography variant="span" sx={{ color: 'white',fontSize:"2rem",justifyContent:"space-between",marginTop:"4rem" }}>
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
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ border:"0.4rem solid purple" }}>
                a
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ border:"0.4rem solid purple" }}>
                a
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


{/* // .key...................................................................................... */}


<Grid maxWidth="xl" style={{backgroundColor:"black",width:"90%" ,margin:"0.5rem auto"}}>
   
<Grid container>
  <Grid item xs={12} md={11} lg={11} sx={{ margin: '2rem auto', }}>
    <Typography variant="h3" className="text1">
      {' '}
      COMMUNITY TOURNAMENTS
    </Typography>
  </Grid>
</Grid>
<Grid container >
  <Grid item xs={12} md={11} lg={11} sx={{ margin: '0 auto', }}>
    <Grid container >
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{  backgroundColor: 'black', borderRadius: '10px' }}
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
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ }}>
        a
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12} sx={{ }}>
        a
      </Grid>
    </Grid>
  </Grid>
</Grid>
</Grid>

{/* ................................................................................ */}

<Grid maxWidth="xl" className='fourth-section' style={{backgroundColor:""}} >
<Grid container style={{width:"90%" ,margin:"2rem auto",padding:"2rem auto"}}>
<Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
    <Box style={{padding:"2rem",marginLeft:"2rem"}}>
      <Grid container>
      <Grid item xl={2} lg={2} md={2} sm={3} xs={12} >
    <Typography variant='span'>
      <img src={logo} alt='/' style={{width:"10rem"}}/> 
    </Typography></Grid><Grid item xl={8} lg={8} md={8} sm={6} xs={12} >
    
    <Typography variant='span' style={{fontSize:"3rem",color:"white",margin:"1rem"}}>FOLLOW BRAVO GAMES FOR UPDATES ON EXCLUSIVE TOURNAMENTS AND PRIZES</Typography>
 </Grid><Grid item xl={2} lg={2} md={2} sm={3} xs={12} >
    <Typography variant='button' style={{backgroundColor:"white",color:"purple",fontSize:"2rem",padding:"1rem 2rem",borderRadius:"1rem",verticalAlign:"middle",margin:"1rem"}}>BRAVO GAMES</Typography>
    </Grid>
    </Grid>
    </Box>
  </Grid>
</Grid>
</Grid>

{/* .................................................................................................... */}

<Grid maxWidth="xl" className='fifth-section' style={{backgroundColor:""}} >
<Grid container style={{width:"90%" ,margin:"2rem auto",padding:"2rem auto"}}>
<Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
    <Box style={{padding:"2rem",marginLeft:"2rem"}}>
     <Typography style={{fontSize:"4rem",color:"purple"}} >#Game For Good</Typography>
     <Typography style={{color:"white",fontSize:"1.5rem"}}>Win in our tournaments or be part of play as you go to earn money. </Typography>
    </Box>
    
  </Grid>
  <Grid container style={{width:"90%" ,margin:"2rem auto",padding:"2rem auto"}}>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >  
  <Box style={{    boxShadow: "0 -1.5px 0px 1px #e7724b70",padding:"3rem",borderRadius:"4.1rem",margin:"1rem"}}>
    <Typography>
  
<svg width="49px" height="49px" viewBox="0 0 49 49" version="1.1">
    <title>B204529C-82C8-416D-BAA0-183580F0ED59@3x</title>
    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="gameforgood_Home" transform="translate(-317.000000, -680.000000)" fill="#BD5E3D" fill-rule="nonzero">
            <path d="M364.564453,683.536557 L358.276459,683.536557 C358.299263,682.840087 358.311974,682.139505 358.311974,681.435558 C358.311974,680.642636 357.668968,680 356.876427,680 L326.123947,680 C325.331032,680 324.6884,680.642636 324.6884,681.435558 C324.6884,682.139505 324.700737,682.840087 324.723541,683.536557 L318.435547,683.536557 C317.642632,683.536557 317,684.179193 317,684.972114 C317,691.40446 318.68116,697.473057 321.733566,702.060486 C324.750832,706.595578 328.769989,709.196779 333.111397,709.449871 C334.095718,710.520931 335.13649,711.394229 336.220253,712.060418 L336.220253,718.440799 L333.811974,718.440799 C330.900505,718.440799 328.532227,720.80947 328.532227,723.720587 L328.532227,726.128884 L328.430168,726.128884 C327.637253,726.128884 326.994621,726.771895 326.994621,727.564442 C326.994621,728.357364 327.637253,729 328.430168,729 L354.569832,729 C355.362747,729 356.005379,728.357364 356.005379,727.564442 C356.005379,726.771895 355.362747,726.128884 354.569832,726.128884 L354.467773,726.128884 L354.467773,723.720587 C354.467773,720.80947 352.099121,718.440799 349.188026,718.440799 L346.779747,718.440799 L346.779747,712.060418 C347.86351,711.394229 348.903908,710.520931 349.888229,709.449871 C354.230011,709.196779 358.248795,706.595578 361.266434,702.060486 C364.31884,697.473057 366,691.40446 366,684.972114 C366,684.179193 365.356995,683.536557 364.564453,683.536557 Z M324.123901,700.470157 C321.606087,696.686117 320.126801,691.737554 319.901375,686.407672 L324.883919,686.407672 C325.401688,692.959648 326.939667,699.015534 329.34346,703.823157 C329.726273,704.588788 330.126656,705.3118 330.541992,705.993317 C328.154274,705.091607 325.944504,703.206689 324.123901,700.470157 Z M358.876099,700.470157 C357.055496,703.206689 354.845726,705.091607 352.458008,705.993317 C352.873718,705.3118 353.273727,704.588788 353.65654,703.823157 C356.060333,699.015534 357.597939,692.959648 358.116081,686.407672 L363.098625,686.407672 C362.873199,691.737554 361.393913,696.686117 358.876099,700.470157 Z" id="Tournament"></path>
        </g>
    </g>
</svg>
    </Typography>
    <Typography style={{fontSize:"2.6rem",color:"#e7724b" ,marginTop:"2rem"}}>Tournaments</Typography>
    <Typography style={{fontSize:"1.6rem",marginTop:"1rem",color:"rgb(149 149 149)",marginBottom:"3rem"}}>Compete in any of our weekly tournaments. If you win, you can donate a portion of your prize to a charity of your choice .</Typography>
    <Typography variant='button' className='button123' style={{fontSize:"1.6rem",marginTop:"2rem",color:"white",padding:"1rem 2rem",borderRadius:"1rem",marginTop:"2rem"}}>Get Started</Typography>
  </Box>
  
  </Grid>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >  
  <Box style={{    boxShadow: "0 -1.5px 0px 1px #1cd0dd",padding:"3rem",borderRadius:"4.1rem",margin:"1rem"}}>
    <Typography>
  
  
<svg width="51px" height="57px" viewBox="0 0 51 57" version="1.1">
    <title>F359BA74-CF33-40BB-B22F-0F591B9641FE@3x</title>
    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="gameforgood_Home" transform="translate(-694.000000, -673.000000)" fill="#179AA4">
            <g id="PAYG" transform="translate(694.000000, 673.000000)">
                <g id="Group-4" transform="translate(-0.000000, 6.168292)">
                    <path d="M25.3791077,48.3272381 C12.7255886,48.3272381 2.43107329,38.0327228 2.43107329,25.3791077 C2.43107329,12.7255886 12.7255886,2.43116926 25.3791077,2.43116926 C38.0326269,2.43116926 48.3271422,12.7255886 48.3271422,25.3791077 C48.3271422,38.0327228 38.0326269,48.3272381 25.3791077,48.3272381 Z M25.3791077,3.33955086e-13 C11.384962,3.33955086e-13 4.47641924e-13,11.384962 4.47641924e-13,25.3791077 C4.47641924e-13,39.3733494 11.384962,50.7583114 25.3791077,50.7583114 C39.3732535,50.7583114 50.7582155,39.3733494 50.7582155,25.3791077 C50.7582155,11.384962 39.3732535,3.33955086e-13 25.3791077,3.33955086e-13 L25.3791077,3.33955086e-13 Z" id="Fill-1"></path>
                    <path d="M35.0478373,15.9644926 L28.5246381,24.4995914 C28.742094,25.7530821 28.3415375,27.0445748 27.4295851,27.9566231 C26.6623475,28.7239567 25.6542385,29.1076235 24.6462254,29.1076235 C23.6382124,29.1076235 22.6301034,28.7239567 21.8627698,27.9566231 C20.3278148,26.42186 20.3278148,23.9244751 21.8627698,22.3897119 C22.7428619,21.5095238 23.9966405,21.1037852 25.2188467,21.2817997 L33.8595067,14.7681969 C34.1993176,14.512355 34.6757823,14.5465184 34.975384,14.8480395 C35.2749857,15.1497524 35.3059823,15.626505 35.0478373,15.9644926 Z M25.3791077,6.54277606 C14.9150228,6.54277606 6.40180394,15.055899 6.40180394,25.5198879 C6.40180394,35.9838769 14.9150228,44.4969998 25.3791077,44.4969998 C35.8430967,44.4969998 44.3563155,35.9838769 44.3563155,25.5198879 C44.3563155,15.055899 35.8430967,6.54277606 25.3791077,6.54277606 L25.3791077,6.54277606 Z" id="Fill-2"></path>
                </g>
                <rect id="Rectangle" x="17.2276386" y="4.97379915e-14" width="14.6434928" height="8.61381931" rx="2"></rect>
            </g>
        </g>
    </g>
</svg>
    </Typography>
    <Typography style={{fontSize:"2.6rem",color:"#1cd0dd" ,marginTop:"2rem"}}>Play As You Go</Typography>
    <Typography style={{fontSize:"1.6rem",marginTop:"1rem",color:"rgb(149 149 149)",marginBottom:"3rem"}}>Compete anywhere anytime against random players. If you lose the match, you can pledge to donate to a charity of your choice .</Typography>
    <Typography variant='button' className='button123' style={{fontSize:"1.6rem",marginTop:"2rem",color:"white",padding:"1rem 2rem",borderRadius:"1rem",marginTop:"2rem"}}>Get Started</Typography>
  </Box>
  
  </Grid>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >  
  
  <Box style={{    boxShadow: "0 -1.5px 0px 1px #f9d151",padding:"3rem",borderRadius:"4.1rem",margin:"1rem"}}>
    <Typography>
  
   
<svg width="82px" height="65px" viewBox="0 0 82 65" version="1.1">
    <title>AD2F2C13-86A9-419B-B49B-73C47A62486B@3x</title>
    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="gameforgood_Home" transform="translate(-1073.000000, -667.000000)" fill="#CCA93A">
            <g id="Challenge" transform="translate(1073.000000, 667.000000)">
                <path d="M34.6048609,27.8571429 L29.0525296,27.8571429 L29.0525296,28.763673 C29.0525296,30.7843371 27.2552715,32.4282698 25.0461451,32.4282698 C24.73548,32.4282698 24.4333786,32.3946709 24.1428571,32.3331878 C24.4346174,32.440389 24.7526613,32.5 25.0857861,32.5 L34.6048609,32.5 C36.0043082,32.5 37.1428571,31.4585816 37.1428571,30.1785714 C37.1428571,28.898512 36.0043082,27.8571429 34.6048609,27.8571429" id="Fill-3"></path>
                <path d="M34.559278,40.8571429 L24.8692386,40.8571429 C23.444657,40.8571429 22.2857143,41.8986327 22.2857143,43.1785714 C22.2857143,44.4585102 23.444657,45.5 24.8692386,45.5 L34.559278,45.5 C35.9838596,45.5 37.1428571,44.4585102 37.1428571,43.1785714 C37.1428571,41.8986327 35.9838596,40.8571429 34.559278,40.8571429" id="Fill-4"></path>
                <path d="M34.559278,34.3571429 L24.8692386,34.3571429 C23.444657,34.3571429 22.2857143,35.3986327 22.2857143,36.6785714 C22.2857143,37.9585102 23.444657,39 24.8692386,39 L34.559278,39 C35.9838596,39 37.1428571,37.9585102 37.1428571,36.6785714 C37.1428571,35.3986327 35.9838596,34.3571429 34.559278,34.3571429" id="Fill-5"></path>
                <path d="M22.9797941,39.5977129 C21.9377125,38.8539288 21.2566184,37.6373727 21.2566184,36.2648619 C21.2566184,34.8918059 21.9377671,33.6752498 22.9798488,32.932011 C21.9377671,32.1881178 21.2566184,30.9717799 21.2566184,29.5988874 C21.2566184,29.3343642 21.2824695,29.0707134 21.3328056,28.8126247 C21.2832893,28.5600979 21.2566184,28.2996099 21.2566184,28.0327964 L21.2566184,27.9018708 C21.1751844,28.0619698 21.0898153,28.2227231 21.000074,28.3837491 C19.092934,31.8059741 16.1895667,33.614722 12.6039029,33.614722 C12.1813207,33.614722 11.8387515,33.2733665 11.8387515,32.8513071 C11.8387515,32.4297931 12.1813207,32.0880559 12.6039029,32.0880559 C15.6303503,32.0880559 17.9983301,30.6044683 19.6420941,27.6785174 C20.9166725,25.4097031 21.2608813,23.0896855 21.2642152,23.0665104 C21.3211643,22.669971 21.6755934,22.3844538 22.0760956,22.4129183 C22.4765431,22.4413827 22.7869213,22.7734137 22.7869213,23.1739883 L22.7869213,28.0327964 C22.7869213,29.4274462 23.924155,30.5621533 25.3220321,30.5621533 C26.7199092,30.5621533 27.8571429,29.4274462 27.8571429,28.0327964 L27.8571429,18.3150712 C27.8571429,16.9204213 26.7199092,15.7857143 25.3220321,15.7857143 L17.2320856,15.7857143 C15.1831192,15.7857143 13.1965674,16.5168476 11.6383911,17.8443169 C10.0802148,19.1718952 9.04534742,21.0149422 8.72442103,23.0340108 L8.61046811,23.7508027 C8.5514968,24.1216042 8.23106229,24.3946341 7.85477173,24.3946341 L-3.26849658e-13,24.3946341 L-3.26849658e-13,39.958699 L7.93522194,39.958699 C8.29517105,39.958699 8.60647839,40.20899 8.68293889,40.5596156 C8.98681333,41.9544835 9.76748644,43.2157538 10.8812191,44.1111303 C11.9949517,45.0070521 13.3960533,45.5 14.826504,45.5 L22.1680231,45.5 C21.5985864,44.7965678 21.2566184,43.9028272 21.2566184,42.9305639 C21.2566184,41.5575078 21.9377125,40.341497 22.9797941,39.5977129" id="Fill-6"></path>
                <path d="M73.8595672,24.3946341 C73.4830085,24.3946341 73.1627424,24.1216042 73.1037172,23.7508027 L72.9900392,23.0339562 C72.6686799,21.0149422 71.6341001,19.1718952 70.0759451,17.8443169 C68.5177902,16.5168476 66.5311564,15.7857143 64.4822182,15.7857143 L56.3924921,15.7857143 C54.9944702,15.7857143 53.8571429,16.9204213 53.8571429,18.3150712 L53.8571429,28.0327964 C53.8571429,29.4274462 54.9944702,30.5621533 56.3924921,30.5621533 C57.7905139,30.5621533 58.9272948,29.4274462 58.9272948,28.0327964 L58.9272948,23.1739883 C58.9272948,22.7730865 59.2382699,22.4404557 59.6388759,22.4124275 C60.0400284,22.3848355 60.3941793,22.6703527 60.4504718,23.0673284 C60.4532045,23.0896855 60.7975179,25.4097031 62.0720241,27.6785174 C63.7159842,30.6044683 66.0840954,32.0880559 69.1102279,32.0880559 C69.5326951,32.0880559 69.8753689,32.4297931 69.8753689,32.8513071 C69.8753689,33.2733665 69.5326951,33.614722 69.1102279,33.614722 C65.5244495,33.614722 62.6212861,31.8059741 60.7144455,28.3837491 C60.6242681,28.2227231 60.5390096,28.0619698 60.4575767,27.9018708 L60.4575767,28.0327964 C60.4575767,28.2995554 60.4313433,28.5600979 60.3816092,28.8126247 C60.4318898,29.0706589 60.4575767,29.3342551 60.4575767,29.5988874 C60.4575767,30.9717799 59.7766013,32.1881178 58.73437,32.932011 C59.7766013,33.6752498 60.4575767,34.8918059 60.4575767,36.2648619 C60.4575767,37.6373727 59.7766013,38.8539288 58.73437,39.5977129 C59.7766013,40.341497 60.4575767,41.5575078 60.4575767,42.9305639 C60.4575767,43.9028272 60.1159959,44.7965678 59.5465124,45.5 L66.88804,45.5 C68.318307,45.5 69.7190615,45.0070521 70.8328882,44.1111303 C71.9467148,43.2157538 72.7271586,41.9544835 73.0310288,40.5601609 C73.1075429,40.20899 73.4190646,39.958699 73.7786809,39.958699 L81.7142857,39.958699 L81.7142857,24.3946341 L73.8595672,24.3946341" id="Fill-7"></path>
                <path d="M56.8451019,40.8571429 L47.1548981,40.8571429 C45.7304809,40.8571429 44.5714286,41.8986327 44.5714286,43.1785714 C44.5714286,44.4585102 45.7304809,45.5 47.1548981,45.5 L56.8451019,45.5 C58.2695191,45.5 59.4285714,44.4585102 59.4285714,43.1785714 C59.4285714,41.8986327 58.2695191,40.8571429 56.8451019,40.8571429" id="Fill-8"></path>
                <path d="M47.1930155,25.0714286 L52.9285714,25.0714286 L52.9285714,20.4285714 L47.1930155,20.4285714 C45.747582,20.4285714 44.5714286,21.4699296 44.5714286,22.7499754 C44.5714286,24.0300212 45.747582,25.0714286 47.1930155,25.0714286" id="Fill-9"></path>
                <path d="M47.109275,32.5 L56.6283536,32.5 C56.9617422,32.5 57.2795116,32.440389 57.5714286,32.3331878 C57.2805888,32.3946709 56.9789771,32.4282698 56.6682094,32.4282698 C54.4589042,32.4282698 52.6616221,30.7843371 52.6616221,28.763673 L52.6616221,27.8571429 L47.109275,27.8571429 C45.7100125,27.8571429 44.5714286,28.898512 44.5714286,30.1785714 C44.5714286,31.4585816 45.7100125,32.5 47.109275,32.5" id="Fill-10"></path>
                <path d="M47.1548981,39 L56.8451019,39 C58.2695191,39 59.4285714,37.9585102 59.4285714,36.6785714 C59.4285714,35.3986327 58.2695191,34.3571429 56.8451019,34.3571429 L47.1548981,34.3571429 C45.7304809,34.3571429 44.5714286,35.3986327 44.5714286,36.6785714 C44.5714286,37.9585102 45.7304809,39 47.1548981,39" id="Fill-11"></path>
                <path d="M34.5211589,20.4285714 L28.7857143,20.4285714 L28.7857143,25.0714286 L34.5211589,25.0714286 C35.9667594,25.0714286 37.1428571,24.0300212 37.1428571,22.7499754 C37.1428571,21.4699296 35.9667594,20.4285714 34.5211589,20.4285714" id="Fill-12"></path>
                <path d="M40.8571429,8.8817842e-16 C40.3443061,8.8817842e-16 39.9285714,0.344656355 39.9285714,0.769813172 L39.9285714,12.2301868 C39.9285714,12.6553436 40.3443061,13 40.8571429,13 C41.3698469,13 41.7857143,12.6553436 41.7857143,12.2301868 L41.7857143,0.769813172 C41.7857143,0.344656355 41.3698469,8.8817842e-16 40.8571429,8.8817842e-16" id="Fill-13"></path>
                <path d="M34.8480673,14.5035456 C34.9895753,14.7322537 35.2289526,14.8571429 35.4734669,14.8571429 C35.6101556,14.8571429 35.748433,14.8181218 35.8721466,14.736413 C36.2171252,14.5084711 36.3180132,14.0346913 36.0974366,13.6781388 L30.1519302,4.06791209 C29.9314066,3.71141427 29.4728826,3.60704808 29.1279039,3.83504469 C28.7828723,4.06298657 28.6819843,4.53676637 28.902561,4.89331892 L34.8480673,14.5035456" id="Fill-14"></path>
                <path d="M40.8571429,52 C40.3443061,52 39.9285714,52.3447678 39.9285714,52.7698164 L39.9285714,64.2301836 C39.9285714,64.6557821 40.3443061,65 40.8571429,65 C41.3698469,65 41.7857143,64.6557821 41.7857143,64.2301836 L41.7857143,52.7698164 C41.7857143,52.3447678 41.3698469,52 40.8571429,52" id="Fill-15"></path>
                <path d="M35.8721466,50.2634721 C35.5271679,50.0358031 35.068644,50.1397866 34.8480673,50.4966139 L28.902561,60.1068707 C28.6819843,60.4631507 28.7828723,60.9370962 29.1279039,61.1653124 C29.2516175,61.2468573 29.389842,61.2857143 29.5265836,61.2857143 C29.7710979,61.2857143 30.0104752,61.1609342 30.1519302,60.9321707 L36.0974366,51.3219138 C36.3180132,50.9656338 36.2171252,50.4916883 35.8721466,50.2634721" id="Fill-16"></path>
                <path d="M45.8420446,14.7364124 C45.9659665,14.8181216 46.1041871,14.8571429 46.240819,14.8571429 C46.4854853,14.8571429 46.7248558,14.732253 46.8662539,14.5035437 L52.8118574,4.89326605 C53.0321631,4.53671161 52.9315427,4.0629293 52.586256,3.83498621 C52.2414989,3.60715257 51.782882,3.7113004 51.5625764,4.06785484 L45.6169728,13.6781325 C45.3961376,14.034687 45.4972875,14.5084693 45.8420446,14.7364124" id="Fill-17"></path>
                <path d="M46.8662539,50.4966139 C46.6459483,50.1397866 46.1873313,50.0358031 45.8420446,50.2634721 C45.4972875,50.4916883 45.3961376,50.9656338 45.6169728,51.3219138 L51.5625764,60.9321707 C51.7039744,61.1609342 51.9433449,61.2857143 52.1874817,61.2857143 C52.3241135,61.2857143 52.4628637,61.2468573 52.586256,61.1653124 C52.9315427,60.9370962 53.0321631,60.4631507 52.8118574,60.1068707 L46.8662539,50.4966139" id="Fill-18"></path>
            </g>
        </g>
    </g>
</svg>
<img src={Image22} alt="/" style={{float:"right",width:"8rem"}}/>
    </Typography>
    <Typography style={{fontSize:"2.6rem",color:"#f9d151" ,marginTop:"2rem"}}>Challenge</Typography>
    <Typography style={{fontSize:"1.6rem",marginTop:"1rem",color:"rgb(149 149 149)",marginBottom:"6.5rem"}}>Click "Challenge" on any player's profile. If you lose the match, you can pledge to donate to a charity of your choice</Typography>
     </Box>
  </Grid>
  </Grid>

</Grid>
</Grid>

</>
 
  );
}
