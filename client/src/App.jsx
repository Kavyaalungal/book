import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navigation />
    {/* <Main/> */}
      <Routes>
       
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
