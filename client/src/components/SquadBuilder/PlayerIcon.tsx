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
  draggedOverPos: string;
  setDragOver: React.Dispatch<React.SetStateAction<string>>;
}

export default function PlayerIcon({
  position,
  roster,
  setRoster,
  setAddPlayerModal,
  setCurrentPosition,
  setDragOver,
  draggedOverPos,
}: positionProps) {
  const positionTitle = position.toUpperCase();
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGING PLAYER');
    console.log(roster.firstTeam[position].name);
    setDragOver(position);
  };
  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAGGED PLAYER ENTERING:');
    console.log(`${position} - ${roster.firstTeam[position].name}`);
  };
  const dropFunc = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`Dragged Over Component = ${position}`);
    console.log(
      `Dropped player === ${draggedOverPos} - ${roster.firstTeam[draggedOverPos].name}`
    );
    const tempRoster = { ...roster };
    let tempPlayer = tempRoster.firstTeam[draggedOverPos];
    tempRoster.firstTeam[draggedOverPos] = tempRoster.firstTeam[position];
    tempRoster.firstTeam[position] = tempPlayer;
    setRoster(tempRoster);
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
