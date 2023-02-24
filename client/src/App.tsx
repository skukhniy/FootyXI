import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css';
import Welcome from './pages/Welcome';
import NavBar from './components/NavBar';
import SquadBuilder from './pages/SquadBuilder';
import UserHome from './pages/UserHome';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [selectedSquad, setSelectedSquad] = useState({});
  return (
    <div className="root">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <UserHome /> : <Welcome />}
          />
          <Route path="/squad-builder" element={<SquadBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
