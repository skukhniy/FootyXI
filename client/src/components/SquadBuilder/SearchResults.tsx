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
  console.log(searchResults[0]);
  return (
    <div id="searchResults">
      <SearchResultPlayerCard playerInfo={searchResults[0]} />
    </div>
  );
}
