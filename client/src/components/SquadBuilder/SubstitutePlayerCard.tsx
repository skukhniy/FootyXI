import React, { useState } from 'react';
import { playerObject, rosterObject } from '../../assets/interfaces';

interface benchPlayerProps {
  subPlayer: playerObject;
  subNum: string;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  draggingPlayer: { position: string; type: string };
  setDraggingPlayer: React.Dispatch<
    React.SetStateAction<{ position: string; type: string }>
  >;
}

export default function BenchPlayerCard({
  subPlayer,
  subNum,
  setCurrentPosition,
  setAddPlayerModal,
  roster,
  setRoster,
  draggingPlayer,
  setDraggingPlayer,
}: benchPlayerProps) {
  const removeSub = () => {
    setRoster((roster) => ({
      ...roster,
      substitutes: {
        ...roster.substitutes,
        [subNum]: {
          name: '',
          position: '',
          ovr: 0,
          player_id: undefined,
          player_photo: undefined,
        },
      },
    }));
    console.log(roster);
  };

  const reservePlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.reserves[Number(draggingPlayer.position)];
    tempRoster.reserves[Number(draggingPlayer.position)] =
      tempRoster.substitutes[subNum];
    tempRoster.substitutes[subNum] = tempPlayer;
    setRoster(tempRoster);
  };
  const subPlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.substitutes[draggingPlayer.position];
    tempRoster.substitutes[draggingPlayer.position] =
      tempRoster.substitutes[subNum];
    tempRoster.substitutes[subNum] = tempPlayer;
    setRoster(tempRoster);
  };
  const firstTeamPlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.firstTeam[draggingPlayer.position];
    tempRoster.firstTeam[draggingPlayer.position] =
      tempRoster.substitutes[subNum];
    tempRoster.substitutes[subNum] = tempPlayer;
    setRoster(tempRoster);
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGING PLAYER');
    console.log(roster.substitutes[subNum].name);
    setDraggingPlayer({ position: subNum, type: 'Substitute' });
  };
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGED PLAYER ENTERING:');
    console.log(`${subNum} - ${roster.substitutes[subNum].name}`);
  };
  const dropFunc = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`Dragged Over Component = ${subNum}`);
    console.log(draggingPlayer);

    if (draggingPlayer.type === 'Substitute') subPlayerSwap();
    if (draggingPlayer.type === 'Reserve') reservePlayerSwap();
    if (draggingPlayer.type === 'First Team') firstTeamPlayerSwap();
  };

  let playerHTML = (
    <div
      onDragStart={(e) => dragStart(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDrop={(e) => dropFunc(e)}
      className="flex flex-col border-r pr-7 pl-4 pb-1 pt-1"
    >
      <button
        onClick={() => removeSub()}
        className="relative self-end text-gray-400 font-light hover:cursor-pointer"
      >
        x
      </button>
      <div className="flex items-end justify-center mt-[-13px]">
        <div className="flex justify-cxenter items-center">
          <div className="rounded-full bg-blue-300 h-3 w-3 mr-1"></div>
          <p id="POS" className="">
            {subPlayer.position}
          </p>
        </div>
        <img
          src={subPlayer.player_photo}
          className="hover:cursor-grab active:cursor-grabbing"
        ></img>
        <h1 className="font" id="OVR">
          {subPlayer.ovr}
        </h1>
      </div>
      <p id="name" className="text-center ml-4">
        {subPlayer.name}
      </p>
    </div>
  );

  const addPlayerFunc = () => {
    setCurrentPosition(subNum);
    setAddPlayerModal(true);
  };

  let noPlayerSelectedHTML = (
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

  return (
    <>
      {roster['substitutes'][subNum]['name'] !== ''
        ? playerHTML
        : noPlayerSelectedHTML}
    </>
  );
}
