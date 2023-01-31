import React from 'react';
import SearchPlayer from './SearchPlayer';

interface AddPlayerProps {
  showAddPlayer: boolean;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddPlayer(props: AddPlayerProps) {
  const toggleModal = () => {
    props.setAddPlayerModal(false);
  };
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
              <SearchPlayer />
            </div>
          </div>
        </div>
      </div>
      {/* Opacity for the background */}
      <div className="modalBackground" onClick={toggleModal}></div>
    </>
  );
}
