import React, {useContext} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5',
      padding: theme.spacing(2)
    },
    title: {
        color: 'white',
        fontSize: '30px',
        padding: theme.spacing(2),
        marginTop:theme.spacing(1),
        marginLeft:theme.spacing(1)
    }
  }));

const FeaturedMovies = () => {
    const {tvs} = useContext(VideoStoreContext);
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Typography className = {classes.title}>Featured TV Shows</Typography>
            <Grid className = {classes.container} container justify="center" spacing={3}>
                {tvs.slice(0,6).map((tv) => (
                    <Grid  key={tv} item>
                        <Link to = {`/tv/${tv.id}`}>
                            <img width="180" height="280" src = {tv.small_poster} alt='poster' className = 'small-poster'/>
                        </Link>
                        
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default FeaturedMovies
