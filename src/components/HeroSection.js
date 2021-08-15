import React, {useContext, useState} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5',
      paddingTop: theme.spacing(3),
      textAlign: 'center'

    }
}));

const HeroSection = () => {
    const {banners} = useContext(VideoStoreContext);
    const [current, setCurrent] = useState(0);
    const length = banners.length;
    const nextBanner =() => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevBanner = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <FaArrowAltCircleLeft className = 'left-arrow' onClick = {prevBanner}/>
            <FaArrowAltCircleRight className = 'right-arrow' onClick = {nextBanner}/>
            {banners.map((banner,index) => {
                return (
                    <div className = {index === current ? 'banner active' : 'banner'} key = {index}>
                        {index === current && (<img width = '1110' height = '400' src={banner.image} alt='banner' className = {classes.image}/>)}
                    </div>
                )
            })}
        </div>
    )
}

export default HeroSection
