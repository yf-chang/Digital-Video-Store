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
import SearchPage from '../pages/SearchPage';

const App=()=> {
  const [banners, setBanners] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvs, setTVs] = useState([]);
  const [searchItem, setSearchItem] = useState('');


  //fake API
  useEffect(()=>{
    fetch("https://fake-server-for-movies-app.herokuapp.com/banners")
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

  // useEffect(()=>{
  //   fetch("https://fake-server-for-movies-app.herokuapp.com/movies")
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then(json=>{    
  //         setMovies(json);
  //   })
  //   .catch((err)=>{
  //       console.log(`Error ${err}`);
  //   })
  // },[])


  // useEffect(()=>{
  //   fetch("https://fake-server-for-movies-app.herokuapp.com/TVs")
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then(json=>{    
  //         setTVs(json);
  //   })
  //   .catch((err)=>{
  //       console.log(`Error ${err}`);
  //   })
  // },[])

  //springboot API
  useEffect(()=>{
    fetch("http://localhost:5000/movies")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
          setMovies(json.body);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  useEffect(()=>{
    fetch("http://localhost:5000/tvs")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
          setTVs(json.body);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  return (
    <>
      <CssBaseline/>
      
      <Router>
        <VideoStoreContext.Provider value={{banners, setBanners, movies, setMovies, tvs, setTVs, searchItem, setSearchItem}} >
          <Header/>
          <Switch>
            

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

            <Route path= "/search">
              <SearchPage/>
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

            
          </Switch>
        <Footer/>
        </VideoStoreContext.Provider>
      </Router>
      
    </>
  )
}

export default App
