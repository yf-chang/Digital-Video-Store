import React from 'react'
import {Link} from "react-router-dom";
import { IconButton, Button, Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../css/App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

const Header = () => {
    const classes = useStyles();
    return (
        <div >
           <AppBar className = {classes.root} position="static">
                <Toolbar>
                    <Typography variant="h3"><Link  to="/" className = "Logo-font Header-link">iFun</Link></Typography>
                    <Typography variant="h6" className={classes.title1}><Link to="/movie-list" className = "Header-link">Movies</Link></Typography>
                    <Typography variant="h6" className={classes.title2}><Link to="/tv-list" className = "Header-link">TV</Link></Typography>

                    <Button href = "/sign-up" color="inherit">Sign Up</Button>
                    <Button href = "/login" color="inherit">Login</Button>
                    <IconButton href = "#" color="inherit"><ShoppingCartIcon/></IconButton>
                </Toolbar>
                
            </AppBar> 
        </div>
        
            
    )
}

export default Header
