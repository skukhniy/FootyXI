import React, { useState, useEffect } from 'react';
import '../styles/modals.css';
import AddPlayer from '../components/SquadBuilder/AddPlayerModal/AddPlayer';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import OptionsBar from '../components/SquadBuilder/OptionsBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';
import { formationPositions } from '../assets/formationsData';
import {
  firstTeamObject,
  playerObject,
  substituteObject,
} from '../assets/interfaces';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('442');
  const [showAddPlayer, setAddPlayerModal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState('');

  const templatePlayerObj = {
    name: '',
    position: '',
    ovr: 0,
    player_id: undefined,
    player_photo: undefined,
  };

  const substituteTemplate = {
    s1: templatePlayerObj,
    s2: templatePlayerObj,
    s3: templatePlayerObj,
    s4: templatePlayerObj,
    s5: templatePlayerObj,
    s6: templatePlayerObj,
    s7: templatePlayerObj,
  } as substituteObject;

  const createFirstTeamTemplate = (formationArray: any) => {
    let firstTeamTemplate = {} as firstTeamObject;
    formationArray.forEach((position: string) => {
      firstTeamTemplate[position] = {
        name: '',
        position: '',
        ovr: 0,
        player_id: undefined,
        player_photo: undefined,
      };
    });
    return firstTeamTemplate;
  };
  const formationKey = `f_${formation}`;
  const formationArray =
    formationPositions[formationKey as keyof typeof formationPositions];
  const [allPositions, setAllPositions] = useState(formationArray);

  const [roster, setRoster] = useState({
    firstTeam: createFirstTeamTemplate(formationArray),
    substitutes: substituteTemplate,
    reserves: [] as Array<playerObject>,
  });

  return (
    <div className="flex flex-col">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      {/* Conditional for the Add Player Modal */}
      {showAddPlayer ? (
        <AddPlayer
          showAddPlayer={showAddPlayer}
          setAddPlayerModal={setAddPlayerModal}
          currentPosition={currentPosition}
          roster={roster}
          setRoster={setRoster}
        />
      ) : null}
      <div className="flex">
        <OptionsBar
          formation={formation}
          setFormation={setFormation}
          setRoster={setRoster}
          roster={roster}
          createFirstTeamTemplate={createFirstTeamTemplate}
        />
        <FormationUi
          formation={formation}
          setAddPlayerModal={setAddPlayerModal}
          setCurrentPosition={setCurrentPosition}
          roster={roster}
          setRoster={setRoster}
        />
      </div>
      <BenchBar
        allPositions={allPositions}
        roster={roster}
        setRoster={setRoster}
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        setAddPlayerModal={setAddPlayerModal}
      />
    </div>
  );
}
