import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Albums from './pages/Albums';
import Posts from './pages/Posts';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/albums' element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
