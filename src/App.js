import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ClientList from './components/ClientList';
import ClientHome from './components/ClientHome';


//import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="app ui segment">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clients" element={<ClientList />} />
        <Route exact path="/client/:pk" element={<ClientHome />} />
      </Routes>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
