import React from 'react';
import SearchResultPlayerCard from './SearchResultPlayerCard';
import { firstTeamObject } from '../../../assets/interfaces';

interface resultProps {
  searchResults: Array<playerObjectInfo>;
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

export default function SearchResults({
  searchResults,
  currentPosition,
  firstTeam,
  setFirstTeam,
}: resultProps) {
  const playerCards = searchResults.map((playerInfo) => (
    <div>
      <SearchResultPlayerCard
        playerInfo={playerInfo}
        currentPosition={currentPosition}
        firstTeam={firstTeam}
        setFirstTeam={setFirstTeam}
      />
      <hr className="w-full mb-8" />
    </div>
  ));
  return (
    <div id="searchResults">
      <div className="grid grid-cols-7 text-center pb-1">
        <span></span>
        <span className="">Name</span>
        <span>Position</span>
        <span>Overall</span>
        <span>Potential</span>
        <span>Nation</span>
        <span>Add</span>
      </div>
      <hr className="w-full"></hr>
      <div className=" h-[500px] overflow-y-scroll pt-5">{playerCards}</div>
    </div>
  );
}
