import React from 'react';
import { playerObject } from '../../assets/interfaces';

interface benchPlayerProps {
  subPlayer: playerObject;
  subNum: string;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BenchPlayerCard({
  subPlayer,
  subNum,
  setCurrentPosition,
  setAddPlayerModal,
}: benchPlayerProps) {
  const playerHTML = (
    <div className="flex flex-col border-r pr-7 pl-4 pb-1 pt-1">
      <div className="relative self-end text-gray-400 font-light hover:cursor-pointer">
        x
      </div>
      <div className="flex items-end justify-center mt-[-13px]">
        <div className="flex justify-cxenter items-center">
          <div className="rounded-full bg-blue-300 h-3 w-3 mr-1"></div>
          <p id="POS" className="">
            RW
          </p>
        </div>
        <img src="https://cdn.sofifa.net/players/204/485/23_60.png"></img>
        <h1 className="font" id="OVR">
          87
        </h1>
      </div>
      <p id="name" className="text-center ml-4">
        Mahrez
      </p>
    </div>
  );

  const noPlayerSelectedHTML = (
    <div
      onClick={() => setAddPlayerModal(true)}
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

  return <>{subPlayer.name !== '' ? playerHTML : noPlayerSelectedHTML}</>;
}
