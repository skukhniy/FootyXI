import React from 'react';
import kitIcon from '../../assets/kit-icon.png';
import { firstTeamObject, rosterObject } from '../../assets/interfaces';

interface positionProps {
  position: string;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  roster: rosterObject;
}

export default function PlayerIcon({
  position,
  roster,
  setAddPlayerModal,
  setCurrentPosition,
}: positionProps) {
  const positionTitle = position.toUpperCase();

  return (
    <div
      onClick={() => setCurrentPosition(position)}
      className={`text-white playerBlock ${position} flex flex-col justify-center items-center`}
    >
      <div
        className="hover:cursor-pointer"
        onClick={() => setAddPlayerModal(true)}
      >
        <p
          id="position"
          className="relative top-11 mt-[-2.75rem] text-xs text-black"
        >
          {positionTitle}
        </p>
        <img className=" " src={kitIcon}></img>
      </div>

      {roster['firstTeam'][position]['name'] ? (
        <p>{roster['firstTeam'][position]['name']}</p>
      ) : (
        <p>Pick Player</p>
      )}
      {roster['firstTeam'][position]['ovr'] > 0 ? (
        <p className="relative bottom-12 left-9 font-bold ">
          {roster['firstTeam'][position]['ovr']}
        </p>
      ) : (
        ''
      )}

      {/* <select>
        <option selected></option>
        <option>Kane</option>
        <option>Son</option>
        <option>Deki</option>
        <option>Romero</option>
        <option>Porro</option>
      </select> */}
    </div>
  );
}
