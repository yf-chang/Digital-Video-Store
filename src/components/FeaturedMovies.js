import React, {useContext} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';
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
    const {movies} = useContext(VideoStoreContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Typography className = {classes.title}>Featured Movies</Typography>
            <Grid className = {classes.container} container justify="center" spacing={3}>
                {movies.slice(0,6).map((movie) => (
                    <Grid  key={movie} item>
                        <Link to = {`/movie/${movie.id}`}>
                            <img width="180" height="280" src = {movie.small_poster} alt='poster'/>
                        </Link>
                        
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default FeaturedMovies
