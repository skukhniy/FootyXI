import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css';
import Welcome from './pages/Welcome';
import NavBar from './components/NavBar';
import SquadBuilder from './pages/SquadBuilder';
import UserHome from './pages/UserHome';
import { useAuth0 } from '@auth0/auth0-react';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function App() {
  const { isAuthenticated } = useAuth0();
  const [squadIDArray, setSquadIDArray] = useState([]);

  const getSquadIDs = async () => {
    try {
      const response = await fetch(`http://localhost:4007/squads/squad-ids`, {
        method: 'GET',
      });
      const squads = await response.json();
      setSquadIDArray(squads);
      return squads;
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };
  useEffect(() => {
    getSquadIDs();
  }, []);
  console.log(squadIDArray);
  const squadBuilderRoutes = squadIDArray.map((squadID) => (
    <Route
      path={`/squad-builder/${squadID}`}
      element={<SquadBuilder squadID={squadID} />}
    />
  ));

  return (
    <div className="root">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <UserHome /> : <Welcome />}
          />
          <Route path="/squad-builder" element={<SquadBuilder squadID={0} />} />
          {squadBuilderRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
