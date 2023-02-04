import React from 'react';
import { firstTeamObject } from '../../../assets/interfaces';

interface playerInfoProp {
  playerInfo: playerObjectInfo;
  currentPosition: string;
  firstTeam: firstTeamObject;
  setFirstTeam: React.Dispatch<React.SetStateAction<firstTeamObject>>;
}
interface playerObjectInfo {
  best_position: string;
  club_name: string;
  full_name: string;
  id: number;
  image_link: string;
  known_as: string;
  national_team_image_link: string;
  overall: number;
  potential: number;
}

export default function SearchResultPlayerCard({
  playerInfo,
  firstTeam,
  setFirstTeam,
  currentPosition,
}: playerInfoProp) {
  console.log(`playerInfo`);
  console.log(playerInfo);

  const addToTeam = () => {
    let firstTeamCopy = firstTeam;
    firstTeamCopy[currentPosition] = {
      name: playerInfo.known_as,
      position: playerInfo.best_position,
      ovr: playerInfo.overall,
    };
    setFirstTeam(firstTeamCopy);
    console.log(firstTeamCopy);
  };

  return (
    <div className="grid grid-cols-7 pb-8 items-center justify-items-center">
      <img
        id="playerPic"
        src={playerInfo.image_link ? playerInfo.image_link : ''}
      ></img>
      <h3 id="fullName">{playerInfo.known_as}</h3>
      <h3 id="position">{playerInfo.best_position}</h3>
      <h3 id="overall">{playerInfo.overall}</h3>
      <h3 id="potential">{playerInfo.potential}</h3>
      <img
        id="nationFlag"
        src={
          playerInfo.national_team_image_link
            ? playerInfo.national_team_image_link
            : ''
        }
        className="w-[30px] h-[20px] text-center mt-1"
      ></img>
      <button
        onClick={addToTeam}
        className="rounded-full bg-green-400 inline-block h-8 w-8 text-white font-extrabold text-xl text-center"
      >
        <p className="mb-1">+</p>
      </button>
    </div>
  );
}
