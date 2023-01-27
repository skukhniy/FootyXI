import React, { useState } from 'react';
import '../styles/modals.css';
import AddPlayer from '../components/SquadBuilder/AddPlayer';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import OptionsBar from '../components/SquadBuilder/OptionsBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('442');
  const [showAddPlayer, setAddPlayerModal] = useState(false);

  return (
    <div className="h-[calc(100%_-_56px)] flex flex-row">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      {/* Conditional for the Add Player Modal */}
      {showAddPlayer ? (
        <AddPlayer
          showAddPlayer={showAddPlayer}
          setAddPlayerModal={setAddPlayerModal}
        />
      ) : null}
      <OptionsBar formation={formation} setFormation={setFormation} />
      <FormationUi
        formation={formation}
        setAddPlayerModal={setAddPlayerModal}
      />
      <BenchBar />
    </div>
  );
}
