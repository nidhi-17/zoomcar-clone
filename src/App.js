import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cars from './components/Cars'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
const App = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div>
                <BrowserRouter >
                    <div>
                        <Navigation />
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />}  />
                        <Route path='/cars' element={< Cars />} exact />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
