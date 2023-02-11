import React from 'react';
import SearchResultPlayerCard from './SearchResultPlayerCard';
import { rosterObject } from '../../../assets/interfaces';

interface resultProps {
  searchResults: Array<playerObjectInfo>;
  currentPosition: string;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
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
  roster,
  setRoster,
}: resultProps) {
  const areThereResults = () => {
    if (searchResults.length === 0) {
      console.log('there are no results');
      return false;
    } else {
      return true;
    }
  };
  console.log(searchResults);

  const errorDiv = (
    <div>
      <p className="text-red-500">No Results</p>
    </div>
  );

  const playerCards = searchResults.map((playerInfo) => (
    <div>
      <SearchResultPlayerCard
        playerInfo={playerInfo}
        currentPosition={currentPosition}
        roster={roster}
        setRoster={setRoster}
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
      {areThereResults() ? (
        <div className=" h-[500px] overflow-y-scroll pt-5">{playerCards}</div>
      ) : (
        errorDiv
      )}
    </div>
  );
}
