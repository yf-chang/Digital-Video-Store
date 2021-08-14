import { useState, useEffect } from "react";
import Customer from "../components/Customer";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#9198e5',
      padding: theme.spacing(2),
      height: '400px',
      color: 'white',
      fontSize: '30px',
      padding: theme.spacing(2),
    }
  }));

const AccountPage = () => {

    const [auth, setAuth] = useState(false);
    const [data, setData] = useState('');
    const classes=useStyles();

    useEffect(() => {
        const abortCont = new AbortController();
        setData(sessionStorage.getItem("Auth"));

        if (data != null) {
            setAuth(true);
            abortCont.abort();
        } else {
            setAuth(false);
            abortCont.abort();
        }
    },[]);

    return (
        <div className = {classes.root}>
            {!auth && <p>You have to login first!</p>}
            {auth && <Customer data={data} />}
        </div>
    );
}

export default AccountPage;