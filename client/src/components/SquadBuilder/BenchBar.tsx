import React from 'react';
import { firstTeamObject } from '../../assets/interfaces';
import BenchPlayerCard from './BenchPlayerCard';

interface benchProps {
  allPositions: string[];
  firstTeam: firstTeamObject;
}

export default function BenchBar({ allPositions, firstTeam }: benchProps) {
  // const firstTeamRows = allPositions.map((position) => (
  //   <div className="grid grid-cols-5 text-center">
  //     <span>{position.toUpperCase()}</span>
  //     <span>{firstTeam[position]['position']}</span>
  //     {firstTeam[position]['ovr'] === 0 ? (
  //       <span>-</span>
  //     ) : (
  //       <span>{firstTeam[position]['ovr']}</span>
  //     )}
  //     <span>{firstTeam[position]['name']}</span>
  //     <span>x</span>
  //   </div>
  // ));
  return (
    <div className=" bg-gray-600 text-white p-2">
      <h1>Substitutes</h1>
      <div className="flex">
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
      </div>
      <hr className="w-full bg-gray-400 h-[2px]"></hr>
    </div>
  );
}
