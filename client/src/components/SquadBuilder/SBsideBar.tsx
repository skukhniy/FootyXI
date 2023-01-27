import React from 'react';
import { formations } from '../../assets/formationsData';

interface formationProps {
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
}

export default function SBsideBar(props: formationProps) {
  const formationOptions = formations.map((formation) => (
    <option value={formation}>{formation}</option>
  ));

  return (
    <div className="w-[200px] bg-gray-200 p-2">
      <h1>Options</h1>
      <h3 className="pt-5">Formation:</h3>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
        onChange={(e) => props.setFormation(e.target.value)}
      >
        <option selected>Choose a formation</option>
        {formationOptions}
      </select>
    </div>
  );
}
