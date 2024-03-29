import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddDcMovies from './AddDcMovies';
import App from '../App';
import Dc from './Dc';
import Marvel from './Marvel';
import AddMarvelMovies from './AddMarvelMovies';

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
   
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Router
