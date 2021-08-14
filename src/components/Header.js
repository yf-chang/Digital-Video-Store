import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import { IconButton, Button, Typography, AppBar, Toolbar } from '@material-ui/core';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import '../css/App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import VideoStoreContext from '../context/VideoStoreContext';


const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundImage: 'linear-gradient(to bottom, #e66465, #9198e5)',
        },
        title1: {
            marginLeft: theme.spacing(9)
        },
        title2: {
            flexGrow: 1,      
            marginLeft: theme.spacing(5)   
        }
}));

const searchStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
);



const Header = () => {
    const classes = useStyles();
    const searchClasses = searchStyles();
    
    const {searchItem, setSearchItem} = useContext(VideoStoreContext);

    return (
        <div >
           <AppBar className = {classes.root} position="static">
                <Toolbar>
                    <Typography variant="h3"><Link  to="/" className = "Logo-font Header-link">iFun</Link></Typography>
                    <Typography variant="h6" className={classes.title1}><Link to="/movie-list" className = "Header-link">Movies</Link></Typography>
                    <Typography variant="h6" className={classes.title2}><Link to="/tv-list" className = "Header-link">TV</Link></Typography>

                    <div className={searchClasses.search}>
                      <IconButton href = "/search" color="inherit"><SearchIcon /></IconButton>
                        <div className={searchClasses.searchIcon}>
                        </div>
                        
                            <InputBase
                            placeholder="Search..."
                            classes={{
                                root: searchClasses.inputRoot,
                                input: searchClasses.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search ' }}
                            onChange = {event => {
                                setSearchItem(event.target.value)
                            }}
                            />
                        
                        
                    </div>

                    <Button href = "/sign-up" color="inherit">Sign Up</Button>
                    <Button href = "/login" color="inherit">Login</Button>
                    <IconButton href = "#" color="inherit"><ShoppingCartIcon/></IconButton>
                </Toolbar>
                
            </AppBar> 
        </div>
        
            
    )
}

export default Header
