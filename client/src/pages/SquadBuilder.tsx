import React, { useState } from 'react';
import '../styles/modals.css';
import AddPlayer from '../components/SquadBuilder/AddPlayerModal/AddPlayer';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import OptionsBar from '../components/SquadBuilder/OptionsBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';
import { formationPositions } from '../assets/formationsData';
import { firstTeamObject, substituteObject } from '../assets/interfaces';

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

  const [substitutes, setSubstitutes] = useState(substituteTemplate);

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

  const [firstTeam, setFirstTeam] = useState(
    createFirstTeamTemplate(formationArray)
  );

  console.log(substitutes.s1);
  // console.log(formation);
  // console.log(formationArray);
  // console.log(createFirstTeamTemplate(formationArray));
  // console.log(firstTeam);

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
      <div className="flex">
        <OptionsBar
          formation={formation}
          setFormation={setFormation}
          setFirstTeam={setFirstTeam}
          firstTeam={firstTeam}
          createFirstTeamTemplate={createFirstTeamTemplate}
        />
        <FormationUi
          formation={formation}
          setAddPlayerModal={setAddPlayerModal}
          setCurrentPosition={setCurrentPosition}
          firstTeam={firstTeam}
        />
      </div>
      <BenchBar
        allPositions={allPositions}
        firstTeam={firstTeam}
        substitutes={substitutes}
        setSubstitutes={setSubstitutes}
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
      />
    </div>
  );
}
