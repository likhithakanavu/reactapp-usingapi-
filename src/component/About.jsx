import React from 'react'
import Header from './header'
import Image from '../img.jfif';
import { Typography } from '@mui/material';
import { AlignHorizontalCenterRounded } from '@mui/icons-material';
import Box from '@mui/material';
import Footer from './footer';

export default function About() {

    const style = {
        backgroundImage: `url(${Image})`,
        width:"100%",
        height:"200px",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const about ={
        display :'flex',
        padding:'20px',
    }
    
    const child1={
        flex:"1",
        padding:"20px",
    }

    const child2 = {
        flex:"2",
        padding:'80px',
        
        
    }

  return (
    <div>
      <Header/> 
      <div style={style}>

      <Typography sx={{ fontSize: 64,color:'white' }} color="text.Warnning" gutterBottom>
          About
        </Typography>

</div>

<div style={about}>
    <div style={child1}>

<img src={Image} width="350px" height="250px" ></img>

    </div>

{/* 2nd child */}
    <div style={child2}>
    <Typography sx={{ fontSize: 14  }} color="text.Warnning" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facere natus? Consectetur, ipsam tempora quisquam unde et earum, cumque quod libero error itaque nesciunt? Officiis ratione cumque quo placeat incidunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facere natus? Consectetur, ipsam tempora quisquam unde et earum, cumque quod libero error itaque nesciunt? Officiis ratione cumque quo placeat incidunt.
        </Typography>
    </div>
</div>


<div style={
    { width:'100%', height:'300px' , backgroundColor:'pink', padding:'20px', }
}>



</div>


<Footer/>

    </div>
  )
}
