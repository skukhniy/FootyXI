import React from 'react';
import {
  firstTeamObject,
  rosterObject,
  substituteObject,
} from '../../assets/interfaces';
import ReservePlayerCard from './ReservePlayerCard';
import SubstitutePlayerCard from './SubstitutePlayerCard';

interface benchProps {
  allPositions: string[];
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  currentPosition: string;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BenchBar({
  allPositions,
  roster,
  setRoster,
  currentPosition,
  setCurrentPosition,
  setAddPlayerModal,
}: benchProps) {
  //-- Substitute Player Funcs --//

  const substituteOrder = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
  const substituteCards = substituteOrder.map((subNum) => (
    <SubstitutePlayerCard
      subPlayer={roster['substitutes'][subNum]}
      subNum={subNum}
      setCurrentPosition={setCurrentPosition}
      setAddPlayerModal={setAddPlayerModal}
      setRoster={setRoster}
      roster={roster}
    />
  ));

  //--Reserve Player Funcs--//

  const addPlayerFunc = () => {
    setCurrentPosition('reserve');
    setAddPlayerModal(true);
  };

  const noPlayerSelectedHTML = (
    <div
      onClick={() => addPlayerFunc()}
      className="flex flex-col border-r pr-7 pl-4 pb-1 pt-1"
    >
      <div className="flex flex-col justify-center items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 mb-2 icon-add rounded-full bg-gray-300"
        >
          <path
            className="secondary"
            fill-rule="evenodd"
            d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
          ></path>
        </svg>
        <p id="name" className="text-center mb-2">
          Add Player
        </p>
      </div>
    </div>
  );

  const reserveCards = roster.reserves.map((player) => (
    <ReservePlayerCard
      setAddPlayerModal={setAddPlayerModal}
      roster={roster}
      setRoster={setRoster}
      reservePlayer={player}
    />
  ));

  return (
    <div className=" bg-gray-600 text-white p-2">
      <h1>Substitutes</h1>
      <div className="grid grid-cols-4">{substituteCards}</div>
      <hr className="w-full bg-gray-400 h-[2px] mt-5"></hr>
      <h1 className="mt-5">Reserves</h1>
      <div className="grid grid-cols-4">
        {reserveCards}
        {noPlayerSelectedHTML}
      </div>
    </div>
  );
}
