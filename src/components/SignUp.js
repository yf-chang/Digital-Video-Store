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
import { Movie } from '@material-ui/icons';

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: 'linear-gradient(#e66465, #9198e5)',
  },
}));


const SignUp = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    username:"",
    password:"",
    role:"user"
  })

  const submitForm = (e) =>{
    e.preventDefault()

    fetch("https://digital-video-store-backend.herokuapp.com/users",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      alert(`${data.message}`)
      setUser({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        role:""
      })
    })
    .catch(err=>console.log(`Error: ${err}`))
  }

  return (
      <div className = {classes.root}>
            <Container component="main" maxWidth="sm" >
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className = {classes.title} component="h1" variant="h5">
                Sign Up to iFun
                </Typography>
                <form action="/" method="POST" onSubmit={submitForm} className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoComplete="fname"
                        value={user.firstName}
                        onChange={(event)=>{
                          setUser({
                            ...user,
                            firstName:event.target.value
                          })
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={user.lastName}
                        onChange={(event)=>{
                          setUser({
                            ...user,
                            lastName:event.target.value
                          })
                        }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={(event)=>{
                          setUser({
                            ...user,
                            email:event.target.value
                          })
                        }}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={user.username}
                        onChange={(event)=>{
                          setUser({
                            ...user,
                            username:event.target.value
                          })
                        }}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
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
                    </Grid>
                    
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        </div>
  );
}

export default SignUp
