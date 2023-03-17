import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SquadCard from '../components/UserHome/SquadCard';
import '../styles/formationIcons.css';
import AddSquad from '../components/UserHome/AddSquad';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export default function UserHome({}) {
  const { user } = useAuth0();
  const [squadsArray, setSquadsArray] = useState([]);
  const getSquads = async () => {
    try {
      const response = await fetch(
        `http://localhost:4007/squads/all/${user?.sub}`,
        {
          method: 'GET',
        }
      );
      const squads = await response.json();
      setSquadsArray(squads);
      return squads;
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };
  useEffect(() => {
    getSquads();
  }, []);
  console.log(squadsArray);
  const squadCards = squadsArray.map((squad) => <SquadCard squad={squad} />);

  console.log(user?.sub);
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h1>Welcome back: {user?.nickname}</h1>
      </div>

      <div className="flex flex-col items-center overflow-auto">
        <h1 className="text-center mb-5 mt-5">Squads</h1>
        <div className="flex flex-wrap justify-around w-[75%]">
          {squadCards}
          <AddSquad />
        </div>
      </div>
    </div>
  );
}
