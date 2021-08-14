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
    const {movies,tvs, searchItem} = useContext(VideoStoreContext);
    const classes = useStyles();
  


    return (
        <div className = {classes.root}>
           <Typography className = {classes.title} variant = 'h3'>Search</Typography>
            <Grid className = {classes.container} container justify="center" spacing={6}>
                {movies.filter(movie => {
                    if(searchItem == ""){
                        return (
                            <Typography variant = 'h6' >No Results Found</Typography>
                        )
                    }
                    else if(movie.title.toLowerCase().includes(searchItem.toLowerCase())){
                        return movie
                    }
                    
                }).map((filteredMovie,index) => {
                    return (
                        <Grid  key={index} item>
                            <VideoCard video = {filteredMovie} />
                        </Grid>
                    )
                })}
                {tvs.filter(tv => {
                    if(searchItem == ""){
                        return (
                            <Typography variant = 'h6' >No Results Found</Typography>
                        )
                    }
                    else if(tv.title.toLowerCase().includes(searchItem.toLowerCase())){
                        return tv
                    }
                }).map((filteredTV,index) => {
                    return (
                        <Grid  key={index} item>
                            <VideoCard video = {filteredTV} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default MovieListPage
