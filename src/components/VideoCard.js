import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    title: {
        color: 'white',
        textDecoration:'none'
    }
  }));

let content = null;


const VideoCard = ({video}) => {
    const classes = useStyles();
    if(video.episode){
        content = 
            <div>
                <Link to = {`/tv/${video.id}`}>
                    <img width="250" height="350" src = {video.small_poster} alt='poster'/>
                </Link>
                <Link className = {classes.title} to = {`/tv/${video.id}`}>
                    <Typography variant = 'h6' align = 'center' >{video.title}</Typography>
                </Link>
            </div>
    }
    else{
        content = 
            <div>
                <Link to = {`/movie/${video.id}`}>
                    <img width="250" height="350" src = {video.small_poster} alt='poster'/>
                </Link>
                <Link className = {classes.title} to = {`/movie/${video.id}`}>
                    <Typography variant = 'h6' align = 'center' >{video.title}</Typography>
                </Link>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default VideoCard

