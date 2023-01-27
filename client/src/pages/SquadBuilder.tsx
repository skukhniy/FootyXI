import React, { useState } from 'react';
import BenchBar from '../components/SquadBuilder/BenchBar';
import FormationUi from '../components/SquadBuilder/FormationUi';
import SBsideBar from '../components/SquadBuilder/SBsideBar';
import SelectDbModal from '../components/SquadBuilder/SelectDbModal';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('442');

  return (
    <div className="h-[calc(100%_-_56px)] flex flex-row">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      <SBsideBar formation={formation} setFormation={setFormation} />
      <FormationUi formation={formation} />
      <BenchBar />
    </div>
  );
}
