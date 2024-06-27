import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, Water, Reportoffice, Road, Plant, Threedcity, Volunteers} from './pages';




const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>  
            <Routes>
                <Route path = '/' element={<Home/>} />    
                <Route path = '/Water' element={<Water/>} />
                <Route path = '/Reportoffice' element={<Reportoffice/>} />
                <Route path = '/Road' element={<Road/>} />
                <Route path = '/Plant' element={<Plant/>} />
                <Route path = '/Threedcity' element={<Threedcity/>} />
                <Route path = '/Volunteers' element={<Volunteers/>} />
                
                
            </Routes>

        </Router>

    </main>
  )
}

export default App