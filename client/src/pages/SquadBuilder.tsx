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

  return (
    <div className="h-[calc(100%_-_56px)] flex flex-row">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      <AddPlayer />
      <OptionsBar formation={formation} setFormation={setFormation} />
      <FormationUi formation={formation} />
      <BenchBar />
    </div>
  );
}
