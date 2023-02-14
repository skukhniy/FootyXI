import React from 'react';
import { rosterObject } from '../../../assets/interfaces';

interface playerInfoProp {
  playerInfo: playerObjectInfo;
  currentPosition: string;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  roster,
  setRoster,
  currentPosition,
  setAddPlayerModal,
}: playerInfoProp) {
  const addPlayerInfo = (playerType: string) => {
    let rosterCopy: rosterObject = roster;
    let playerObj = {
      name: playerInfo.known_as,
      position: playerInfo.best_position,
      ovr: playerInfo.overall,
      player_id: playerInfo.id,
      player_photo: playerInfo.image_link,
    };
    if (playerType === 'substitutes' || playerType === 'firstTeam') {
      const rosterCopyKey = playerType as 'firstTeam' | 'substitutes';
      rosterCopy[rosterCopyKey][currentPosition] = playerObj;
    } else {
      rosterCopy['reserves'].push(playerObj);
    }

    setRoster((rosterCopy) => ({ ...rosterCopy }));
  };

  const addToTeam = () => {
    if (currentPosition.startsWith('s')) {
      addPlayerInfo('substitutes');
      console.log(roster['substitutes']);
    } else if (currentPosition === 'reserve') {
      addPlayerInfo('reserves');
      console.log(roster['reserves']);
    } else {
      addPlayerInfo('firstTeam');
    }
    setAddPlayerModal(false);
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
