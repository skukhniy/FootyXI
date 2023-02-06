import React, { useState } from 'react';
import '../styles/modals.css';
import AddPlayer from '../components/SquadBuilder/AddPlayerModal/AddPlayer';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import OptionsBar from '../components/SquadBuilder/OptionsBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';
import { formationPositions } from '../assets/formationsData';
import { firstTeamObject } from '../assets/interfaces';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('442');
  const [showAddPlayer, setAddPlayerModal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState('');

  const formationKey = `f_${formation}`;
  const formationArray =
    formationPositions[formationKey as keyof typeof formationPositions];
  const [allPositions, setAllPositions] = useState(formationArray);

  let firstTeamTemplate = {} as firstTeamObject;
  formationArray.forEach((position) => {
    firstTeamTemplate[position] = { name: '', position: '', ovr: 0 };
  });
  const [firstTeam, setFirstTeam] = useState(firstTeamTemplate);

  console.log(firstTeam);

  return (
    <div className="flex flex-col">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      {/* Conditional for the Add Player Modal */}
      {showAddPlayer ? (
        <AddPlayer
          showAddPlayer={showAddPlayer}
          setAddPlayerModal={setAddPlayerModal}
          currentPosition={currentPosition}
          firstTeam={firstTeam}
          setFirstTeam={setFirstTeam}
        />
      ) : null}
      {/* <OptionsBar formation={formation} setFormation={setFormation} /> */}
      <FormationUi
        formation={formation}
        setAddPlayerModal={setAddPlayerModal}
        setCurrentPosition={setCurrentPosition}
        firstTeam={firstTeam}
      />
      <BenchBar allPositions={allPositions} firstTeam={firstTeam} />
    </div>
  );
}

// testTeam:

// {
//   "ls": "H. Kane",
//   "rs": "H. Son",
//   "lm": "M. Mudryk",
//   "lcm": "R. Bentancur",
//   "rcm": "Casemiro",
//   "rm": "G. Bale",
//   "lb": "T. Herníçndez",
//   "lcb": "V. van Dijk",
//   "rcb": "C. Romero",
//   "rb": "A. Hakimi",
//   "gk": "Diogo Costa"
// }
