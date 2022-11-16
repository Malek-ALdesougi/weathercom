import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import Forecaste from './Components/Forecaste';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='forecast/:name' element={<Forecaste />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
