import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/postagens/:id' element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
