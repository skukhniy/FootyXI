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
      <div className="grid grid-cols-4">
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <hr className="col-span-full"></hr>
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <div className="flex flex-col justify-center items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 mr-4 icon-add rounded-full bg-gray-300"
          >
            <path
              className="secondary"
              fill-rule="evenodd"
              d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
            ></path>
          </svg>
        </div>
      </div>
      <hr className="w-full bg-gray-400 h-[2px] mt-5"></hr>
      <h1 className="mt-5">Reserves</h1>
      <div className="grid grid-cols-4">
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <hr className="col-span-full"></hr>
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <hr className="col-span-full"></hr>
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <hr className="col-span-full"></hr>
        <BenchPlayerCard />
        <BenchPlayerCard />
        <BenchPlayerCard />
        <div className="flex flex-col justify-center items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 mr-4 icon-add rounded-full bg-gray-300"
          >
            <path
              className="secondary"
              fill-rule="evenodd"
              d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
