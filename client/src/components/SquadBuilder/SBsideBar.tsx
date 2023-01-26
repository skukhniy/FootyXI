import React from 'react';

interface formationProps {
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
}

export default function SBsideBar(props: formationProps) {
  const formationOptions = null;

  return (
    <div className="w-[200px] h-full bg-gray-200 p-2">
      <h1>Options</h1>
      <h3 className="pt-5">Formation:</h3>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
      >
        <option selected>Choose a formation</option>
        {formationOptions}
        {/* <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option> */}
      </select>
    </div>
  );
}
