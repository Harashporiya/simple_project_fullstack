import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddDcMovies from './AddDcMovies';
import App from '../App';
import Dc from './Dc';
import Marvel from './Marvel';
import AddMarvelMovies from './AddMarvelMovies';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/addDcMovies" element={<AddDcMovies/>}/>
        <Route path='/dc' element={<Dc/>}/>
        <Route path='/marvel' element={<Marvel/>}/>
        <Route path='/addmarvelmovies' element={<AddMarvelMovies/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Router
