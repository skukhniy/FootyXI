import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import NavBar from './components/NavBar';
import SquadBuilder from './pages/SquadBuilder';

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/squad-builder" element={<SquadBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
