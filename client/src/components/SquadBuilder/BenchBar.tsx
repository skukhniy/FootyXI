import React from 'react';
import { firstTeamObject } from '../../assets/interfaces';

interface benchProps {
  allPositions: string[];
  firstTeam: firstTeamObject;
}

export default function BenchBar({ allPositions, firstTeam }: benchProps) {
  const firstTeamRows = allPositions.map((position) => (
    <div className="grid grid-cols-5 text-center">
      <span>{position.toUpperCase()}</span>
      <span>{firstTeam[position]['position']}</span>
      {firstTeam[position]['ovr'] === 0 ? (
        <span>-</span>
      ) : (
        <span>{firstTeam[position]['ovr']}</span>
      )}
      <span>{firstTeam[position]['name']}</span>
      <span>x</span>
    </div>
  ));
  return (
    <div className=" bg-gray-200 p-2">
      <h1>Bench / Reserves</h1>
      <div>
        <div className="grid grid-cols-5 text-center">
          <span>Position</span>
          <span>Best</span>
          <span>OVR</span>
          <span>Name</span>
          <span>Remove</span>
        </div>
        <hr className="w-full bg-gray-400 h-[2px]"></hr>
        {firstTeamRows}
      </div>
    </div>
  );
}
