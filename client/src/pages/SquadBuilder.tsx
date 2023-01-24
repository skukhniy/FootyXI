import React, { useState } from 'react';
import BenchBar from '../components/BenchBar';
import FormationUi from '../components/FormationUi';
import SBsideBar from '../components/SBsideBar';
import SelectDbModal from '../components/SelectDbModal';

export default function SquadBuilder() {
  const [dbType, setDbType] = useState(null);
  const [formation, setFormation] = useState('4-4-2');

  return (
    <div className="h-full flex flex-row">
      <SelectDbModal dbType={dbType} setDbType={setDbType} />
      <SBsideBar />
      <FormationUi formation={formation} />
      <BenchBar />
    </div>
  );
}
