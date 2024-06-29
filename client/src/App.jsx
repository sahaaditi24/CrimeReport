import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, Volunteers, RealEstate, Reportcrime, Map} from './pages';
import Admin from './pages/Admin';





const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>  
            <Routes>
                <Route path = '/' element={<Home/>} />    
                
                <Route path='/admin' element={<Admin />} />
                
                <Route path = '/Volunteers' element={<Volunteers/>} />
                <Route path = '/RealEstate' element={<RealEstate/>} />
                <Route path = '/Reportcrime' element={<Reportcrime/>} />
                <Route path = '/Map' element={<Map/>} />
                
                
            </Routes>

        </Router>

    </main>
  )
}

export default App