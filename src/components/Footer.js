import React from 'react';
import '../css/App.css';
import { Typography, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:'#a8ade3',
    color: 'white',
  },
  link:{
      color: 'white',
      cursor: 'pointer',
      textDecoration:'none'
  },
  col:{
    display: 'inline-flex',
    fontWeight: 'bold'
  },
  icon:{
      paddingLeft: '10px',
      color:'white'
  }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <div className="Footer-col">
                    <Typography variant="h6">My Account</Typography>
                    <Typography variant="body1"><Link to="/sign-up" className={classes.link}>Sign up</Link></Typography>
                    <Typography variant="body1"><Link to="/login" className={classes.link}>Log in</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Setting</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Manage my account</Link></Typography>
                </div>
                <div className="Footer-col">
                    <Typography variant="h6">Feature</Typography>
                    <Typography variant="body1"><Link className={classes.link}>Movies</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>TV</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Popular</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Free</Link></Typography>
                </div>
                <div className="Footer-col">
                    <Typography variant="h6">Help</Typography>
                    <Typography variant="body1"><Link className={classes.link}>About us</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Contact us</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Location</Link></Typography>
                    <Typography variant="body1"><Link className={classes.link}>Support</Link></Typography>
                </div>
                <div className="Footer-icons">
                    <a target = '_blank' href="https://www.facebook.com/" className={classes.icon}><FacebookIcon fontSize = 'large' /></a>
                    <a target = '_blank' href="https://www.twitter.com/" className={classes.icon}><TwitterIcon fontSize = 'large' /></a>
                    <a target = '_blank' href="https://www.youtube.com/" className={classes.icon}><YouTubeIcon fontSize = 'large' /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
