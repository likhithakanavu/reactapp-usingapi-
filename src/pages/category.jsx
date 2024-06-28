import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Header from "../component/header";
 
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Category() {
  const [category, setCategory] = useState([]);




  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        console.log(res, "data");
        console.log(res.data, 'aaa');
        setCategory(res.data); 
        // Set the entire array from the response
      })
      .catch((err) => {
        console.log(err, 22);
      });
  }, []);

  return (
    <div style={{ marginTop: 10 }}>

<Header/>

      <h1 style={{ alignItems: "center", textAlign: "center" }}>Category</h1>

      <Grid container spacing={2} style={{ marginTop: 10 }}>


        {category.map((item, index) => {
          // console.log(item, "map")
          return (


            <Grid item key={index}>


              <Card sx={{ minWidth: 275, backgroundColor: "lightPink", width: '100px', height: '100px', marginLeft: '10px' }}>
                <CardContent>
                  <Link to={`/product/${item.slug}`}>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>

            </Grid>


          );
        })}


      </Grid>


    </div>
  );
}
