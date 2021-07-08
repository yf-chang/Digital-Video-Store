import React from 'react';
import { 
  Button, 
  CssBaseline, 
  TextField, 
  Link, 
  Grid, 
  Typography, 
  makeStyles, 
  Container } from '@material-ui/core';


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

const  LoginPage = () => {
  const classes = useStyles();

  return (
    <div className = {classes.root}>
      <Container component="main" maxWidth="sm">
        
        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography className = {classes.title} component="h1" variant="h5">
            Login to iFun 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
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

export default LoginPage