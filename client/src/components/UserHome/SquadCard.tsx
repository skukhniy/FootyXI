import React from 'react';
import { squadObj } from '../../assets/interfaces';
import { Link } from 'react-router-dom';

interface squadCardProps {
  squad: squadObj;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export default function ({ squad }: squadCardProps) {
  const deleteSquad = async () => {
    try {
      const response = await fetch(
        `http://localhost:4007/squads/delete/${squad.squadInfo.squad_id}`,
        {
          method: 'DELETE',
        }
      );
      alert(`Squad "${squad.squadInfo.squad_name}" has been deleted.`);
      window.location.href = '/';
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };

  return (
    <div className="h-52 w-52 bg-green-200 flex flex-col">
      <Link to={`/squad-builder/${squad.squadInfo.squad_id}`}>
        <div className="h-52 w-52 bg-green-200"></div>
      </Link>
      <h3 className="text-center">{squad.squadInfo.squad_name}</h3>
      <h5 className="text-center">{squad.squadInfo.formation}</h5>
      <button
        onClick={() => deleteSquad()}
        className="bg-red-500 text-white px-3 py-2 rounded-full w-20 mt-2 self-center"
      >
        Delete
      </button>
    </div>
  );
}
