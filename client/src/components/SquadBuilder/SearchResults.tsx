import React from 'react';
import SearchResultPlayerCard from './SearchResultPlayerCard';

interface resultProps {
  searchResults: Array<playerObjectInfo>;
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

export default function SearchResults({ searchResults }: resultProps) {
  const playerCards = searchResults.map((playerInfo) => (
    <div>
      <SearchResultPlayerCard playerInfo={playerInfo} />
      <hr className="w-full mb-8" />
    </div>
  ));
  return (
    <div id="searchResults" className=" h-[500px] overflow-y-scroll">
      {/* <div className="grid">
        <p>Player Name</p>
        <p>Position</p>
        <p>Overall</p>
        <p>Potential</p>
        <p>Nation</p>
        <p>Add</p>
      </div> */}
      {playerCards}
    </div>
  );
}
