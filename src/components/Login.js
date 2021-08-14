import React, {useState} from 'react';
import { 
  Button, 
  CssBaseline, 
  TextField, 
  Link, 
  Grid, 
  Typography, 
  makeStyles, 
  Container } from '@material-ui/core';
  import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#9198e5',
    width: '100%',
    height: '500px'
  },
  paper: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white'
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
    borderColor: 'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: 'linear-gradient(#e66465, #9198e5)',
  },
}));

const  Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username:"",
    password:""
  });
  const history = useHistory();


  // const submitForm = (e) =>{
  //   e.preventDefault()

  //   fetch("http://localhost:5000/auth",{
  //     method:"POST",
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     alert(`${data.message}`)
  //     setUser({
  //       username:"",
  //       password:""
  //     })
      
      
  //   })
  //   .catch(err=>console.log(`Error: ${err}`))
  // }

  const submitForm = (e) =>{
    e.preventDefault();

    fetch("http://localhost:5000/auth",{
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    .then((res)=>{
        if(res.ok){
            history.push("/account");
            sessionStorage.setItem("Auth", user.username);
        } else {
            alert("Email or password not valid! Please try again!");
        }
    })
    .catch(err=>console.log(`Error: ${err}`))
}


  return (
    <div className = {classes.root}>
      <Container component="main" maxWidth="sm">
        
        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography className = {classes.title} component="h1" variant="h5">
            Login to iFun 
          </Typography>
          <form action="/" method="POST" onSubmit={submitForm} className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={user.username}
              onChange={(event)=>{
                setUser({
                  ...user,
                  username:event.target.value
                })
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(event)=>{
                setUser({
                  ...user,
                  password:event.target.value
                })
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login