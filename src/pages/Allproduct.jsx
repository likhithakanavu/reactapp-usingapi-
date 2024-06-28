import React,{useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../component/header';
import axios from 'axios';      
import { Grid,Box, TextField } from '@mui/material';


export default function Allproduct() {
  const [products, setProducts] = useState([])

  const [search, setSearch]= useState([])

  useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{

          console.log(res.data.products,111)
          setProducts(res.data.products)

        })
        .catch((res)=>{
          console.log(res,22)

        })
  },[])

  const handleChange=(e)=>{
      console.log(e.target.value,"search")
      setSearch((e.target.value).toLowerCase())
      
  } 

  return (
    <div style={{ padding: 10 }}>

      <Header/>

      <Box
        sx={{
          p: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20",
        }}
      >
        <TextField
      onChange={handleChange}
      label="Search products here"
      InputProps={{ style: { fontSize: 40 } }} // Increase the font size
    />
      </Box>

  <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        
        }}
      >

{products .filter((value)=>value.title.toLowerCase().includes(search)).map((item)=>{
console.log(item)
if(item == null || item==""){
  return (
    <h1>Hello</h1>
  )
}else{
  return(

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.images[0]}
        title="green iguana"
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
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

)}})}
    </Grid>
    </div>
  )
}
