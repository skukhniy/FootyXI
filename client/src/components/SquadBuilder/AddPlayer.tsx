import React, { useState } from 'react';
import SearchPlayer from './SearchPlayer';
import SearchResults from './SearchResults';

interface AddPlayerProps {
  showAddPlayer: boolean;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddPlayer(props: AddPlayerProps) {
  const [searchResults, setSearchResults] = useState([]);
  const toggleModal = () => {
    props.setAddPlayerModal(false);
  };

  const hasResults = Object.keys(searchResults).length > 0;

  return (
    <>
      {/* overlaying modal container, goes over the entire screen */}
      <div className="modal" id="addPlayer">
        {/*content parent container*/}
        <div className="contentParent">
          {/* content child container ( what gives the box shape) */}
          <div className="contentChild">
            {/* content goes in this div */}
            <div>
              <SearchPlayer setSearchResults={setSearchResults} />
              {/* conditional render for the search results section */}
              {hasResults ? (
                <SearchResults searchResults={searchResults} />
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
