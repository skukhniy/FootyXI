import React from 'react';
import kitIcon from '../../assets/kit-icon.png';
import { firstTeamObject, rosterObject } from '../../assets/interfaces';
import PickPlayerDropdown from './PickPlayerDropdown';

interface positionProps {
  position: string;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  draggingPlayer: { position: string; type: string };
  setDraggingPlayer: React.Dispatch<
    React.SetStateAction<{ position: string; type: string }>
  >;
}

export default function PlayerIcon({
  position,
  roster,
  setRoster,
  setAddPlayerModal,
  setCurrentPosition,
  draggingPlayer,
  setDraggingPlayer,
}: positionProps) {
  const positionTitle = position.toUpperCase();

  const firstTeamPlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.firstTeam[draggingPlayer.position];
    tempRoster.firstTeam[draggingPlayer.position] =
      tempRoster.firstTeam[position];
    tempRoster.firstTeam[position] = tempPlayer;
    setRoster(tempRoster);
  };
  const reservePlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.reserves[Number(draggingPlayer.position)];
    tempRoster.reserves[Number(draggingPlayer.position)] =
      tempRoster.firstTeam[position];
    tempRoster.firstTeam[position] = tempPlayer;
    setRoster(tempRoster);
  };
  const subPlayerSwap = () => {
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.substitutes[draggingPlayer.position];
    tempRoster.substitutes[draggingPlayer.position] =
      tempRoster.firstTeam[position];
    tempRoster.firstTeam[position] = tempPlayer;
    setRoster(tempRoster);
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGING PLAYER');
    console.log(roster.firstTeam[position].name);
    setDraggingPlayer({ position: position, type: 'First Team' });
  };
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGED PLAYER ENTERING:');
    console.log(`${position} - ${roster.firstTeam[position].name}`);
  };
  const dropFunc = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`Dragged Over Component = ${position}`);
    if (draggingPlayer.type === 'First Team') firstTeamPlayerSwap();
    if (draggingPlayer.type === 'Substitute') subPlayerSwap();
    if (draggingPlayer.type === 'Reserve') reservePlayerSwap();
  };

  return (
    <div
      onClick={() => setCurrentPosition(position)}
      onDragStart={(e) => dragStart(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDrop={(e) => dropFunc(e)}
      className={`text-white playerBlock ${position} flex select-none flex-col justify-center items-center`}
    >
      <div
        className="hover:cursor-pointer"
        onClick={() => setAddPlayerModal(true)}
      >
        <p
          id="position"
          className="relative top-11 mt-[-2.75rem] text-xs text-black select-none"
        >
          {positionTitle}
        </p>
        <img className=" " src={kitIcon}></img>
      </div>

      <PickPlayerDropdown
        roster={roster}
        setRoster={setRoster}
        position={position}
      />

      {roster['firstTeam'][position]['ovr'] > 0 ? (
        <p className="relative bottom-12 left-9 font-bold mb-[-24px]">
          {roster['firstTeam'][position]['ovr']}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
