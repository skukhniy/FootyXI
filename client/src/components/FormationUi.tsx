import React from 'react';
import '../styles/formations.css';
import { formations } from '../assets/formationsData';
import PlayerIcon from './PlayerIcon';

interface formationProps {
  formation: string;
}

export default function FormationUi(props: formationProps) {
  const playerDivs = formations.f_442.map((position) => (
    <PlayerIcon position={position} />
  ));

  return (
    <div id="formationContainer">
      <div className={`f_${props.formation} formationGrid`}>
        {playerDivs}
        {/* <div className="playerBlock ls">Player</div>
        <div className="playerBlock rs">Player</div>
        <div className="playerBlock cam">Player</div>
        <div className="playerBlock lcm">Player</div>
        <div className="playerBlock rcm">Player</div>
        <div className="playerBlock cdm">Player</div>
        <div className="playerBlock lb">Player</div>
        <div className="playerBlock lcb">Player</div>
        <div className="playerBlock rcb">Player</div>
        <div className="playerBlock rb">Player</div>
        <div className="playerBlock gk">Player</div> */}
      </div>
    </div>
  );
}
