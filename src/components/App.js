import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import MovieListPage from '../pages/MovieListPage';
import TvListPage from '../pages/TvListPage';
import {CssBaseline} from '@material-ui/core';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import TvDetailPage from '../pages/TvDetailPage';
import {useState,useEffect} from 'react';
import VideoStoreContext from '../context/VideoStoreContext';
import Header from './Header';
import Footer from './Footer';

const App=()=> {
  const [banners, setBanners] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvs, setTVs] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/banners")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
          setBanners(json);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
          setMovies(json);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  useEffect(()=>{
    fetch("http://localhost:5000/TVs")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
          setTVs(json);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  return (
    <>
      <CssBaseline/>
      
      <Router>
        <Header/>
        <Switch>
          <VideoStoreContext.Provider value={{banners, setBanners, movies, setMovies, tvs, setTVs}} >

          <Route exact path="/movie-list">
            <MovieListPage />
          </Route>

          <Route exact path="/tv-list">
            <TvListPage/>
          </Route>

          <Route path= "/movie/:id">
            <MovieDetailPage/>
          </Route>

          <Route path= "/tv/:id">
            <TvDetailPage/>
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          </VideoStoreContext.Provider>
        </Switch>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
