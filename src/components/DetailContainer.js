import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';


const useStyle = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        padding: theme.spacing(2),
        height: '300px',
    },
    paper: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        color: 'white'
      },
    margin:{
        marginTop:theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1, 0, 2),
        color: 'white',
        borderColor: 'white',
        width: '50%'
      },
    
}))

const Episode = ((episode)=>{
    if(episode!=null){
        return(
           <Typography  variant = 'h6'>
                 Episode: {episode}
            </Typography>    
        )
    } 
})

const TvDetailContainer = ({video}) => {
    const classes = useStyle()

    return (
        <div className = {classes.root} style={{ 
            background: `linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0)), url(${video.large_poster})`,
            height:'80vh',
            backgroundPosition:'right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
              <Grid container component="main" className={classes.root}>
              
                <img width="200" height="300" calssName = {classes.poster} src = {video.small_poster} alt='small_poster'/>
                <Grid item xs={10} sm={8} md={5}  elevation={6} square>
                        <div className={classes.paper}>
                            <Typography variant = 'h4'>
                                {video.title}
                            </Typography>

                            <Typography className = {classes.margin} variant = 'body1'>
                                {video.synopsis}
                            </Typography>

                            {Episode(video.episode)}
                          
                            <Button variant="outlined" className={classes.button}>
                                Rent ${video.rent_price}
                            </Button>
                            
                            <Button variant="outlined" className={classes.button}>
                                Buy ${video.purchase_price}
                            </Button>

                        </div>
               
                </Grid>
                
                
              </Grid>
        </div>
    )
}

export default TvDetailContainer
