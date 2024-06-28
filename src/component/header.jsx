import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
const pages = ['About', 'Contact Us', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  

  return (
    <div>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
         <Typography
            variant="h5"
            noWrap
            component="a"
          
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Link to="/" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Home
              </Button> </Link>
           
             <Link to="/about" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
              about
              </Button> </Link>
              <Link to="/Es6" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          Es6
              </Button> </Link>

              <Link to="/props" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          props
              </Button> </Link>

              <Link to="/effect" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          UseEffect
              </Button> </Link>

              <Link to="/state" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          State
              </Button> </Link>


              <Link to="/cat" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          Category
              </Button> </Link>

              <Link to="/allproduct" > <Button
                   sx={{ my: 2, color: 'white', display: 'block' }}
              >
          Product
              </Button> </Link>
          
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
          
                <MenuItem  >
                <Link to="/reg" >  <Typography textAlign="center"> Register </Typography></Link>
                </MenuItem>
                
                <MenuItem  >
                <Link to="/login" >  <Typography textAlign="center"> Login </Typography></Link>
                </MenuItem>

                <MenuItem  >
                <Link to="/logout" >  <Typography textAlign="center"> Logout </Typography></Link>

                </MenuItem>
           
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}
