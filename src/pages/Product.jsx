import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../component/header';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { catname } = useParams(); // Destructure catname from useParams
  console.log(catname, "product"); 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${catname}`)
      .then((res) => {
        console.log(res.data.products, 111);
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err, 222);
      });
  }, [catname]); // Add catname as a dependency to re-fetch if it changes

  return (
    <div>
      <Header />
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        
        
        {product.map((item) => (
         
         
         <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
           
           
           
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.images[0]}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>



          </Grid>
        ))}
      </Grid>
    </div>
  );
}
