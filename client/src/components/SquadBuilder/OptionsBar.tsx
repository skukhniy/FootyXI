import React, { useState } from 'react';
import { formations } from '../../assets/formationsData';
import {
  firstTeamObject,
  rosterObject,
  playerObject,
  substituteObject,
} from '../../assets/interfaces';
import { formationPositions } from '../../assets/formationsData';

interface formationProps {
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  roster: rosterObject;
  createFirstTeamTemplate: (formationArray: any) => firstTeamObject;
  rosterTemplate: rosterObject;
}

export default function SBsideBar({
  formation,
  setFormation,
  setRoster,
  roster,
  rosterTemplate,
  createFirstTeamTemplate,
}: formationProps) {
  const [menuOpen, setMenuOpen] = useState(true);

  const formationOptions = formations.map((formation) => (
    <option value={formation}>{formation}</option>
  ));

  // updates FirstTeam template object as well
  const updateFormation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormation(e.target.value);
    const formationArray =
      formationPositions[
        `f_${e.target.value}` as keyof typeof formationPositions
      ];
    let tempRoster = { ...roster } as rosterObject;
    let newFirstTeam = {} as firstTeamObject;
    let noEqualPositions: Array<string> = Object.keys(roster.firstTeam).filter(
      (position) => {
        return formationArray.includes(position) !== true;
      }
    );

    formationArray.forEach((position: string) => {
      if (tempRoster.firstTeam.hasOwnProperty(position)) {
        newFirstTeam[position] = tempRoster.firstTeam[position];
      } else {
        newFirstTeam[position] =
          roster.firstTeam[noEqualPositions.pop() as string];
        // newFirstTeam[position] = {
        //   name: '',
        //   position: '',
        //   ovr: 0,
        //   player_id: undefined,
        //   player_photo: undefined,
        // };
      }
    });
    tempRoster['firstTeam'] = newFirstTeam;
    setRoster(tempRoster);
  };

  const slideMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const clearStartingXI = () => {
    if (window.confirm('Are you sure you want to remove your starting 11?')) {
      const tempRoster = { ...roster };
      const formationArray =
        formationPositions[`f_${formation}` as keyof typeof formationPositions];
      tempRoster.firstTeam = createFirstTeamTemplate(formationArray);
      setRoster(tempRoster);
    }
  };

  const clearSquad = () => {
    if (window.confirm('Are you sure you want to delete your squad?')) {
      setRoster(rosterTemplate);
    }
  };

  return (
    <div
      className={`w-[200px] bg-gray-200 py-3 flex h-[500px] absolute transition-all duration-500 z-20 ${
        menuOpen ? 'left-[-180px]' : 'left-0'
      }`}
    >
      <div className="p-2 flex flex-col h-full items-center">
        <h1 className="text-center">Options</h1>
        <div>
          <h3 className="pt-5">Formation:</h3>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
            onChange={(e) => updateFormation(e)}
          >
            {formationOptions}
          </select>
        </div>
        <div className="mt-auto text-center">
          <button className="bg-gray-500 rounded-lg text-white px-2 py-1 w-36 mb-4">
            Save Squad
          </button>
          <button
            onClick={clearStartingXI}
            className="bg-gray-300 px-2 py-1 rounded-lg w-36 mb-4"
          >
            Clear Starting 11
          </button>
          <button
            onClick={clearSquad}
            className="bg-red-300 text-white px-2 py-1 rounded-lg w-36"
          >
            Clear Squad
          </button>
        </div>
      </div>
      <div
        className="self-center pr-1 hover:cursor-pointer"
        onClick={slideMenu}
      >
        <div
          className={`h-0 w-0 border-y-8 ${
            menuOpen
              ? 'border-y-transparent border-l-8 border-l-gray-600'
              : 'border-y-transparent border-r-8 border-r-gray-600'
          }`}
        ></div>
      </div>
    </div>
  );
}
