import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Childcom(props) {


    const [state, setState] = useState();


    console.log(props.book.id,"bb")
  return (
    <div style={{display:"flex"}}>
        <Grid container spacing={2}>
            
        <Grid item xs={12} sm={6} md={4} >
            
        <Card sx={{ maxWidth: 345 }}>
       
          <CardMedia
            sx={{ height: 140 }}
            image={props.book.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.book.bname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
         
        </Card>
        </Grid>
        </Grid>
    </div>
  )
}
