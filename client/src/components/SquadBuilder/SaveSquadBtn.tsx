import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { rosterObject } from '../../assets/interfaces';

interface SaveSquadBtnProps {
  roster: rosterObject;
  formation: String;
  squadName: String;
  squadID: Number;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export default function SaveSquadBtn({
  roster,
  formation,
  squadName,
  squadID,
}: SaveSquadBtnProps) {
  const { user } = useAuth0();
  const saveNewSquad = async () => {
    try {
      const body = [
        { userID: user?.sub, squadName: squadName, formation: formation },
        roster,
      ];
      const response = await fetch('http://localhost:4007/squads/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(JSON.stringify(roster));
      console.log(response);
      alert(`Squad "${squadName}" has been saved!`);
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };

  const updateSquad = async () => {
    try {
      const body = [{ squadName: squadName, formation: formation }, roster];
      const response = await fetch(
        `http://localhost:4007/squads/update/${squadID}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      alert(`Squad "${squadName}" has been saved!`);
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };

  return (
    <button
      onClick={squadID == 0 ? saveNewSquad : updateSquad}
      className="bg-gray-500 rounded-lg text-white px-2 py-1 w-36 mb-4"
    >
      Save Squad
    </button>
  );
}
