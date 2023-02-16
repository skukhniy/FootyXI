import React from 'react';
import { playerObject, rosterObject } from '../../assets/interfaces';

interface benchPlayerProps {
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  reservePlayer: playerObject;
  draggingPlayer: string;
  setDraggingPlayer: React.Dispatch<React.SetStateAction<string>>;
  playerIndex: string;
}

export default function ReservePlayerCard({
  setAddPlayerModal,
  roster,
  setRoster,
  reservePlayer,
  draggingPlayer,
  setDraggingPlayer,
  playerIndex,
}: benchPlayerProps) {
  const removeSub = () => {
    console.log('removeSub');
    setRoster((roster) => ({
      ...roster,
      reserves: roster.reserves.filter(
        (player) => player.name !== reservePlayer.name
      ),
    }));
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGING PLAYER');
    console.log(roster.reserves[Number(playerIndex)].name);
    setDraggingPlayer(playerIndex);
  };
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGED PLAYER ENTERING:');
    console.log(
      `${Number(playerIndex)} - ${roster.reserves[Number(playerIndex)].name}`
    );
  };
  const dropFunc = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`Dragged Over Component = ${Number(playerIndex)}`);
    console.log(draggingPlayer);
    console.log(
      `Dropped player === ${draggingPlayer} - ${
        roster.reserves[Number(draggingPlayer)].name
      }`
    );
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.reserves[Number(draggingPlayer)];
    tempRoster.reserves[Number(draggingPlayer)] =
      tempRoster.reserves[Number(playerIndex)];
    tempRoster.reserves[Number(playerIndex)] = tempPlayer;
    setRoster(tempRoster);
  };

  return (
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
            {' '}
            {reservePlayer.position}
          </p>
        </div>
        <img src={reservePlayer.player_photo}></img>
        <h1 className="font" id="OVR">
          {reservePlayer.ovr}
        </h1>
      </div>
      <p id="name" className="text-center ml-4">
        {reservePlayer.name}
      </p>
    </div>
  );
}
