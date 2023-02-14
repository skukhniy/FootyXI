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
  const [noResultCheck, setNoResultCheck] = useState(false);
  const toggleModal = () => {
    props.setAddPlayerModal(false);
  };

  const hasResults = () => {
    if (Object.keys(searchResults).length > 0 || noResultCheck) {
      return true;
    } else {
      return false;
    }
  };
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
                setNoResultCheck={setNoResultCheck}
                setSearchResults={setSearchResults}
                keywords={keywords}
                setKeywords={setKeywords}
              />
              {/* conditional render for the search results section */}
              {hasResults() ? (
                <SearchResults
                  searchResults={searchResults}
                  currentPosition={props.currentPosition}
                  roster={props.roster}
                  setRoster={props.setRoster}
                  setAddPlayerModal={props.setAddPlayerModal}
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
