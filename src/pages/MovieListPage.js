import React, {useContext} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid } from '@material-ui/core';
import VideoCard from '../components/VideoCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5',
      padding: theme.spacing(2)
    },
    title: {
        color: 'white',
        padding: theme.spacing(2),
        marginTop:theme.spacing(1),
        marginLeft:theme.spacing(1)
    },
    
    link: {
        textDecoration: 'none'
    }
  }));

const MovieListPage = () => {
    const {movies} = useContext(VideoStoreContext);
    const classes = useStyles();
  


    return (
        <div className = {classes.root}>
           <Typography className = {classes.title} variant = 'h3'>All Movies</Typography>
            <Grid className = {classes.container} container justify="center" spacing={6}>
                {movies.map((movie,index) => {
                    return (
                        <Grid  key={index} item>
                            <VideoCard video = {movie} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default MovieListPage
