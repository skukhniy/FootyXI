import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SquadCard from '../components/UserHome/SquadCard';

export default function UserHome() {
  const { user } = useAuth0();
  console.log(user?.sub);
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h1>Welcome back: {user?.nickname}</h1>
      </div>

      <div className="bg-gray-100 flex flex-col items-center h-[80vh]">
        <h1 className="text-center mb-5 mt-5">Squads</h1>
        <div className="flex flex-wrap justify-around w-full">
          <SquadCard />
          <SquadCard />
          <SquadCard />
          <SquadCard />
          <SquadCard />
        </div>
      </div>
    </div>
  );
}
