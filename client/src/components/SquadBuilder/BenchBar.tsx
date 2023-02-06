import React from 'react';
import { firstTeamObject, substituteObject } from '../../assets/interfaces';
import BenchPlayerCard from './BenchPlayerCard';

interface benchProps {
  allPositions: string[];
  firstTeam: firstTeamObject;
  substitutes: substituteObject;
  setSubstitutes: React.Dispatch<React.SetStateAction<substituteObject>>;
  currentPosition: string;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
}

export default function BenchBar({
  allPositions,
  firstTeam,
  substitutes,
  setSubstitutes,
  currentPosition,
  setCurrentPosition,
}: benchProps) {
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

  const substituteOrder = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
  const substituteCards = substituteOrder.map((subNum) => (
    <BenchPlayerCard
      subPlayer={substitutes[subNum]}
      subNum={subNum}
      setCurrentPosition={setCurrentPosition}
    />
  ));
  return (
    <div className=" bg-gray-600 text-white p-2">
      <h1>Substitutes</h1>
      <div className="grid grid-cols-4">
        {substituteCards}
        {/* <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <hr className="col-span-full"></hr>
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard /> */}
      </div>
      <hr className="w-full bg-gray-400 h-[2px] mt-5"></hr>
      <h1 className="mt-5">Reserves</h1>
      <div className="grid grid-cols-4">{/* <BenchPlayerCard /> */}</div>
    </div>
  );
}
