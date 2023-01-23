import React from 'react';
import '../styles/formations.css';

interface formationProps {
  formation: string;
}

export default function FormationUi(props: formationProps) {
  return (
    <div id="formationContainer">
      <div className={`f_${props.formation} formationGrid`}>
        <div className="playerBlock ls">Player</div>
        <div className="playerBlock rs">Player</div>
        <div className="playerBlock lm">Player</div>
        <div className="playerBlock lcm">Player</div>
        <div className="playerBlock rcm">Player</div>
        <div className="playerBlock rm">Player</div>
        <div className="playerBlock lb">Player</div>
        <div className="playerBlock lcb">Player</div>
        <div className="playerBlock rcb">Player</div>
        <div className="playerBlock rb">Player</div>
        <div className="playerBlock gk">Player</div>
      </div>
    </div>
  );
}
