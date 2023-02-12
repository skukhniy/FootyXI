import React, { useState } from 'react';
import SearchPlayer from './SearchPlayer';
import SearchResults from './SearchResults';
import { rosterObject } from '../../../assets/interfaces';

interface AddPlayerProps {
  showAddPlayer: boolean;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentPosition: string;
  roster: rosterObject;
  setRoster: React.Dispatch<React.SetStateAction<rosterObject>>;
}

export default function AddPlayer(props: AddPlayerProps) {
  const [searchResults, setSearchResults] = useState([]);
  const [keywords, setKeywords] = useState('');
  const toggleModal = () => {
    props.setAddPlayerModal(false);
  };

  const hasResults = Object.keys(searchResults).length > 0;

  return (
    <>
      {/* overlaying modal container, goes over the entire screen */}
      <div className="modalAddPlayer" id="addPlayer">
        {/*content parent container*/}
        <div className="contentParent">
          {/* content child container ( what gives the box shape) */}
          <div className="contentChild">
            {/* content goes in this div */}
            <div>
              <SearchPlayer
                setSearchResults={setSearchResults}
                keywords={keywords}
                setKeywords={setKeywords}
              />
              {/* conditional render for the search results section */}
              {hasResults || searchResults[0] === 'no results' ? (
                <SearchResults
                  searchResults={searchResults}
                  currentPosition={props.currentPosition}
                  roster={props.roster}
                  setRoster={props.setRoster}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Opacity for the background */}
      <div className="modalBackground" onClick={toggleModal}></div>
    </>
  );
}
