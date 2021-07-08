import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5',
      padding: theme.spacing(2),
      height: '400px'
    },
    title: {
        color: 'white',
        fontSize: '30px',
        padding: theme.spacing(2),
        marginTop:theme.spacing(1),
        marginLeft:theme.spacing(1)
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '97%'
    }
}));

const ContentSection = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Typography className = {classes.title}>Hot Deal</Typography>
            <img src = 'https://images2.vudu.com/assets/page/banner/191722-1305' className = {classes.image}/>
        </div>
    )
}

export default ContentSection
