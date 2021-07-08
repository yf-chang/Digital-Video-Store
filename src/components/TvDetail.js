import React, {useContext} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import DetailContainer from './DetailContainer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5'
    }
  }));

const VideoDetail = () => {
    const { id } = useParams()
    const {tvs} = useContext(VideoStoreContext)
    const classes = useStyles()
    return (
        
        <div className = {classes.root}>
            {tvs.filter(tv => tv.id == id).map(filteredTv => (
                <div>
                    <DetailContainer video = {filteredTv}/>
                </div>
            ))}
        </div>
    )
}

export default VideoDetail
