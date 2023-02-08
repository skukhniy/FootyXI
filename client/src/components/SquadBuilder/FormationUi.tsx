import React from 'react';
import '../../styles/formations.css';
import { formationPositions } from '../../assets/formationsData';
import PlayerIcon from './PlayerIcon';
import { rosterObject } from '../../assets/interfaces';

interface formationProps {
  formation: string;
  setAddPlayerModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPosition: React.Dispatch<React.SetStateAction<string>>;
  roster: rosterObject;
}

export default function FormationUi(props: formationProps) {
  const formationKey = `f_${props.formation}`;

  // grab array of positions for the current formation
  const positionArray =
    formationPositions[formationKey as keyof typeof formationPositions];
  // create each div for each player position in the fomration
  const playerDivs = positionArray.map((position) => (
    <PlayerIcon
      position={position}
      setAddPlayerModal={props.setAddPlayerModal}
      setCurrentPosition={props.setCurrentPosition}
      roster={props.roster}
    />
  ));

  return (
    <div id="formationContainer">
      <div className={`f_${props.formation} formationGrid`}>{playerDivs}</div>
    </div>
  );
}
