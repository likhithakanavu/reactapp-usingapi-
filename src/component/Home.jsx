import React,{useEffect} from 'react'
import Image from './im3.jpg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Header from './header.jsx';
import Card2 from './Card2.jsx'
import Footer from './footer.jsx';

import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Home() {


  let navigate = useNavigate()



  const isAuthenticated = localStorage.getItem('token') !== null;
 
  useEffect (()=>{
  if(!isAuthenticated){
   navigate('/login')
  }
  }) 
  


  
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

  return (
    <>

<Header/>

    <div style={{ 
        backgroundImage: `url(${Image})`, 
        height: '50vh', // set height to cover the viewport
        width: '100%', // set width to cover the viewport
        backgroundSize: 'cover', // cover the entire div
        backgroundPosition: 'center', // center the image
        backgroundRepeat: 'no-repeat', // prevent the image from repeating
        overflow: 'hidden', // ensure no overflow
        padding: '20px',
      }}>





      <img src={Image} style={{ 
          maxHeight: '100%', // ensure the image fits within the div
          maxWidth: '100%', // ensure the image fits within the div
      }} alt="background" />

 


    </div>

<div style={{display:'flex'}}>
    <Card2/>
    <Card2/><Card2/>
    </div>

  
<Footer/>
    </>
  )
}
