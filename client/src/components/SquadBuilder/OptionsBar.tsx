import React from 'react';
import { formations } from '../../assets/formationsData';
import { firstTeamObject } from '../../assets/interfaces';
import { formationPositions } from '../../assets/formationsData';

interface formationProps {
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
  setFirstTeam: React.Dispatch<React.SetStateAction<firstTeamObject>>;
  firstTeam: firstTeamObject;
  createFirstTeamTemplate: (formationArray: any) => firstTeamObject;
}

export default function SBsideBar({
  formation,
  setFormation,
  setFirstTeam,
  firstTeam,
  createFirstTeamTemplate,
}: formationProps) {
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
    setFirstTeam(createFirstTeamTemplate(formationArray));
  };

  return (
    <div className="w-[200px] bg-gray-200 p-2">
      <h1>Options</h1>
      <h3 className="pt-5">Formation:</h3>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
        onChange={(e) => updateFormation(e)}
      >
        {formationOptions}
      </select>
    </div>
  );
}
